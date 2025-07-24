import { Injectable, BadRequestException } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { Role } from '@prisma/client';


interface ParsedUser {
  email?: string;
  role?: Role;
  enrollmentNumber?: string;
  branchId?: string | number;
  employeeNumber?: string;
  [key: string]: any;
}


@Injectable()
export class ExcelValidatorService {
  validateFile(file: Express.Multer.File): void {
    if (!file) throw new BadRequestException('No file uploaded');


    const validExtensions = ['.xlsx', '.xls'];
    const fileExt = file.originalname.slice(file.originalname.lastIndexOf('.'));
    if (!validExtensions.includes(fileExt.toLowerCase())) {
      throw new BadRequestException('Invalid file type. Only Excel files are accepted');
    }


    if (file.size > 5 * 1024 * 1024) {
      throw new BadRequestException('File size exceeds 5MB limit');
    }
  }


  validateSheetStructure(sheet: XLSX.WorkSheet, requiredHeaders: string[]): void {
    const headers: string[] = [];
    const range = XLSX.utils.decode_range(sheet['!ref'] || '');


    for (let C = range.s.c; C <= range.e.c; ++C) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: C });
      const cell = sheet[cellAddress];
      headers.push(cell?.v?.toString().trim() || '');
    }


    const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
    if (missingHeaders.length > 0) {
      throw new BadRequestException(
        `Missing required columns: ${missingHeaders.join(', ')}`
      );
    }
  }


  validateUserRow(user: ParsedUser, index: number): void {
    const errors: string[] = [];


    if (!user.email || !this.isValidEmail(user.email)) {
      errors.push(`Row ${index}: Invalid email format`);
    }


    if (!user.role || !Object.values(Role).includes(user.role)) {
      errors.push(`Row ${index}: Invalid role. Must be one of ${Object.values(Role).join(', ')}`);
    }


    if (user.role === 'STUDENT') {
      if (!user.enrollmentNumber) {
        errors.push(`Row ${index}: Enrollment number required for students`);
      }
      if (!user.branchId || isNaN(Number(user.branchId))) {
        errors.push(`Row ${index}: Valid branch ID required`);
      }
    }


    if (user.role === 'TEACHER' && !user.employeeNumber) {
      errors.push(`Row ${index}: Employee number required for teachers`);
    }


    if (errors.length > 0) {
      throw new BadRequestException(errors.join('\n'));
    }
  }


  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

