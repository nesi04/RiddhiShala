"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface SchoolFormData {
  name: string;
  udiseCode: string;
  district: string;
  block: string;
  cluster: string;
  villageTown: string;
  management: string;
  schoolType: string;
  mediumOfInstruction: string;
  inclusiveSchool: boolean;
  vocationalTrades: string;
  availableCourses: string;
  coEducation: string;
  totalArea: string;
  campusSize: string;
  yearOfEstablishment: number;
  upgradedTo: string;
}

export default function SchoolModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void; // ✅ Added optional callback
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<SchoolFormData>({
    name: "",
    udiseCode: "",
    district: "",
    block: "",
    cluster: "",
    villageTown: "",
    management: "",
    schoolType: "",
    mediumOfInstruction: "",
    inclusiveSchool: false,
    vocationalTrades: "",
    availableCourses: "",
    coEducation: "",
    totalArea: "",
    campusSize: "",
    yearOfEstablishment: 0,
    upgradedTo: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | number | boolean = value;

    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    } else if (type === "number") {
      newValue = value === "" ? 0 : parseInt(value, 10);
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to create school");
      }

      setMessage("School created successfully!");

      // ✅ Trigger parent refresh if provided
      if (onSubmit) {
        onSubmit();
      }

      // ✅ Reset form
      setForm({
        name: "",
        udiseCode: "",
        district: "",
        block: "",
        cluster: "",
        villageTown: "",
        management: "",
        schoolType: "",
        mediumOfInstruction: "",
        inclusiveSchool: false,
        vocationalTrades: "",
        availableCourses: "",
        coEducation: "",
        totalArea: "",
        campusSize: "",
        yearOfEstablishment: 0,
        upgradedTo: "",
      });

      setStep(1);
      onClose();
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-green-500 p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New School</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <label>
                School Name
                <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </label>
              <label>
                UDISE Code
                <input name="udiseCode" value={form.udiseCode} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </label>
              <label>
                District
                <input name="district" value={form.district} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </label>
              <label>
                Block
                <input name="block" value={form.block} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </label>
              <label>
                Cluster
                <input name="cluster" value={form.cluster} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </label>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <label>
                Village/Town
                <input name="villageTown" value={form.villageTown} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Management
                <input name="management" value={form.management} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                School Type
                <input name="schoolType" value={form.schoolType} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Medium of Instruction
                <input name="mediumOfInstruction" value={form.mediumOfInstruction} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="inclusiveSchool" checked={form.inclusiveSchool} onChange={handleChange} />
                <span>Inclusive School</span>
              </label>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <label>
                Vocational Trades
                <input name="vocationalTrades" value={form.vocationalTrades} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Available Courses
                <input name="availableCourses" value={form.availableCourses} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Co-education (Yes/No)
                <input name="coEducation" value={form.coEducation} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Total Area (sq.m)
                <input type="text" name="totalArea" value={form.totalArea} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Campus Size (acres)
                <input name="campusSize" value={form.campusSize} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Year of Establishment
                <input type="number" name="yearOfEstablishment" value={form.yearOfEstablishment} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
              <label>
                Upgraded To
                <input name="upgradedTo" value={form.upgradedTo} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </label>
            </>
          )}

          {/* BUTTONS */}
          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={handlePrev} className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
                Back
              </button>
            )}
            {step < 3 && (
              <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Next
              </button>
            )}
            {step === 3 && (
              <button type="submit" disabled={loading} className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>

        {message && <p className="mt-3 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
}
