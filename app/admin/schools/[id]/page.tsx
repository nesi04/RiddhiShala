"use client";
import { schools } from "@/constants/schoolData";
import { notFound } from "next/navigation";
import { 
  MapPin, Phone, User, Users, Calendar, Home, School, CheckCircle2, Clock, 
  BookOpen, Laptop, FlaskConical, Calculator, Languages, Wrench, Utensils, 
  Droplet, Zap, Wifi, Flame, Award, ClipboardList, Activity, Shield, BarChart2,
  Bookmark, FileText, ClipboardCheck, Smartphone, Mail, Building2, GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';



export default function SchoolDetailsPage() {
  const params = useParams();
  const schoolId = params?.id as string;
  const school = schools.find((item) => item.id === params.id);
  const [activeTab, setActiveTab] = useState('basic');

  if (!school) return notFound();

  // Tab content components
  const TabContent = () => {
    switch(activeTab) {
      case 'basic':
        return <BasicProfile school={school} />;
      case 'head':
        return <HeadOfSchool school={school} />;
      case 'students':
        return <StudentEnrollment school={school} />;
      case 'teachers':
        return <TeachersSection school={school} />;
      case 'infra':
        return <InfrastructureSection school={school} />;
      case 'labs':
        return <LabFacilities school={school} />;
      case 'pm-shri':
        return <PMShriImplementation school={school} />;
      case 'innovations':
        return <InnovationsSection school={school} />;
      case 'challenges':
        return <ChallengesSection school={school} />;
      default:
        return <BasicProfile school={school} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Link href="/admin" className="hover:text-green-700 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Dashboard
            </Link>
            <span className="mx-1">/</span>
            <Link href="/admin/schools" className="hover:text-green-700 flex items-center">
              <School className="h-4 w-4 mr-1" />
              Schools
            </Link>
            <span className="mx-1">/</span>
            <span className="text-green-700">{school.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <School className="text-green-600 mr-2" size={24} />
              {school.name}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              school.status === 'Active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            } flex items-center`}>
              {school.status === 'Active' ? (
                <CheckCircle2 className="mr-1" size={14} />
              ) : (
                <Clock className="mr-1" size={14} />
              )}
              {school.status}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'basic', label: 'Basic Profile', icon: <School size={16} /> },
              { id: 'head', label: 'Head of School', icon: <User size={16} /> },
              { id: 'students', label: 'Students', icon: <Users size={16} /> },
              { id: 'teachers', label: 'Teachers', icon: <GraduationCap size={16} /> },
              { id: 'infra', label: 'Infrastructure', icon: <Building2 size={16} /> },
              { id: 'labs', label: 'Lab Facilities', icon: <FlaskConical size={16} /> },
              { id: 'pm-shri', label: 'PM SHRI', icon: <Award size={16} /> },
              { id: 'innovations', label: 'Innovations', icon: <Activity size={16} /> },
              { id: 'challenges', label: 'Challenges', icon: <Shield size={16} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <TabContent />
        </div>
      </div>
    </div>
  );
}

// Tab Components
const BasicProfile = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <MapPin className="text-green-600 mr-2" size={20} />
      Section A: Basic School Profile
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <DetailItem icon={<Calendar size={18} />} label="Year of Establishment" value={school.established} />
        <DetailItem icon={<School size={18} />} label="Upgraded to" value={school.upgradedYear} />
        <DetailItem icon={<BookOpen size={18} />} label="UDISE Code" value={school.udiseCode} />
        <DetailItem icon={<MapPin size={18} />} label="District" value={school.district} />
        <DetailItem icon={<MapPin size={18} />} label="Block" value={school.block} />
      </div>
      <div className="space-y-4">
        <DetailItem icon={<MapPin size={18} />} label="Cluster" value={school.cluster} />
        <DetailItem icon={<MapPin size={18} />} label="Village/Town" value={school.village} />
        <DetailItem icon={<User size={18} />} label="Management" value={school.management} />
        <DetailItem icon={<School size={18} />} label="School Type" value={school.type} />
        <DetailItem icon={<BookOpen size={18} />} label="Medium of Instruction" value={school.medium} />
      </div>
    </div>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <InfoCard 
        icon={<Users size={20} />}
        title="Inclusive School"
        value={school.inclusive ? "Yes" : "No"}
        description="Facilities for CWSN"
      />
      <InfoCard 
        icon={<Wrench size={20} />}
        title="Vocational Trades"
        value={school.vocationalTrades?.join(', ') || "None"}
        description="Available courses"
      />
      <InfoCard 
        icon={<Users size={20} />}
        title="Co-education"
        value={school.coed ? "Co-ed" : "Single Gender"}
        description="School type"
      />
      <InfoCard 
        icon={<MapPin size={20} />}
        title="Total Area"
        value={school.totalArea || "Not specified"}
        description="School campus size"
      />
    </div>
  </div>
);

const HeadOfSchool = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <User className="text-green-600 mr-2" size={20} />
      Section B: Head of School Details
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <DetailItem icon={<User size={18} />} label="Name of HoS" value={school.principal} />
        <DetailItem icon={<BookOpen size={18} />} label="Designation" value="Principal" />
        <DetailItem icon={<Calendar size={18} />} label="Holding charge since" value={school.principalSince} />
        <DetailItem icon={<BookOpen size={18} />} label="Academic Qualification" value={school.principalQualification} />
      </div>
      <div className="space-y-4">
        <DetailItem icon={<BookOpen size={18} />} label="Professional Qualification" value={school.principalProfessionalQualification || "B.Ed, D.El.Ed"} />
        <DetailItem icon={<Calendar size={18} />} label="Date of Joining" value={school.principalJoiningDate} />
        <DetailItem icon={<Calendar size={18} />} label="Teaching Experience" value={`${school.principalExperience} years`} />
        <DetailItem icon={<Phone size={18} />} label="Contact Number" value={school.principalContact} />
        <DetailItem icon={<Mail size={18} />} label="Email ID" value={school.principalEmail || "Not available"} />
      </div>
    </div>
  </div>
);

const StudentEnrollment = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Users className="text-green-600 mr-2" size={20} />
      Section C: Student Enrollment (Class-wise & Gender-wise)
    </h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Boys</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Girls</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CWSN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {school.enrollment?.map((item: any) => (
            <tr key={item.class}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.class}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.boys}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.girls}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.total}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cwsn || "-"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.remarks || "-"}</td>
            </tr>
          ))}
          {school.enrollment?.length === 0 && (
            <tr>
              <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                No enrollment data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

const TeachersSection = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <GraduationCap className="text-green-600 mr-2" size={20} />
      Section D: Teachers
    </h2>
    
    <div className="space-y-6">
      {['LP & Primary', 'Upper-Primary', 'Secondary/RMSA', 'Higher Secondary'].map((section) => (
        <div key={section}>
          <h3 className="font-medium text-gray-700 mb-2">{section}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Classes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IEC Training</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {school.teachers
                  ?.filter((t: any) => t.section === section)
                  ?.map((teacher: any) => (
                    <tr key={teacher.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.gender}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teacher.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.mobile}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.qualification}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.classes}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subjects}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.iecTraining || "-"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      <div className="mt-4">
        <DetailItem 
          icon={<ClipboardCheck size={18} />} 
          label="Teachers' photos displayed" 
          value={school.teacherPhotosDisplayed ? "Yes" : "No"} 
        />
      </div>
    </div>
  </div>
);

const InfrastructureSection = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Building2 className="text-green-600 mr-2" size={20} />
      Section E: Infrastructure & Facilities
    </h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status/Condition</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {school.infrastructure?.map((item: any) => (
            <tr key={item.facility}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.facility}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity || "-"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status || "-"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.remarks || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-6">
      <h3 className="font-medium text-gray-700 mb-2">Observations:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: <Utensils size={16} />, label: "Mid-Day Meal", value: school.midDayMeal || "Not specified" },
          { icon: <Droplet size={16} />, label: "Drinking Water", value: school.drinkingWater || "Not specified" },
          { icon: <Zap size={16} />, label: "Electricity", value: school.electricity || "Not specified" },
          { icon: <Wifi size={16} />, label: "Internet", value: school.internet || "Not specified" },
          { icon: <Flame size={16} />, label: "Fire Safety", value: school.fireSafety || "Not specified" },
        ].map((item) => (
          <DetailItem key={item.label} icon={item.icon} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  </div>
);

const LabFacilities = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <FlaskConical className="text-green-600 mr-2" size={20} />
      Section F: Lab Facilities
    </h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lab Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipment & Use</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {school.labs?.map((lab: any) => (
            <tr key={lab.type}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lab.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.available ? "Yes" : "No"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.equipment || "-"}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.remarks || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PMShriImplementation = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Award className="text-green-600 mr-2" size={20} />
      Section G: PM SHRI Implementation - Six Pillars
    </h2>
    
    <div className="space-y-8">
      {[
        { 
          title: "Pillar 1: Holistic Development and Learning Outcomes",
          icon: <Activity size={18} />,
          items: school.pillar1 || []
        },
        { 
          title: "Pillar 2: Infrastructure, Facilities, and Resources",
          icon: <Building2 size={18} />,
          items: school.pillar2 || []
        },
        { 
          title: "Pillar 3: Inclusivity, Equity, and Gender Sensitivity",
          icon: <Users size={18} />,
          items: school.pillar3 || []
        },
        { 
          title: "Pillar 4: Curriculum, Pedagogy, and Assessment Reforms",
          icon: <BookOpen size={18} />,
          items: school.pillar4 || []
        },
        { 
          title: "Pillar 5: Teacher Recruitment, Deployment, Professional Development",
          icon: <GraduationCap size={18} />,
          items: school.pillar5 || []
        },
        { 
          title: "Pillar 6: School Governance and Leadership",
          icon: <ClipboardList size={18} />,
          items: school.pillar6 || []
        },
      ].map((pillar) => (
        <div key={pillar.title} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center">
            <span className="text-green-600 mr-2">{pillar.icon}</span>
            <h3 className="font-medium">{pillar.title}</h3>
          </div>
          <div className="p-4">
            {pillar.items.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub-Aspect</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observations</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pillar.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{item.subAspect}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.observations}</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{item.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-sm text-gray-500">No data available for this pillar</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InnovationsSection = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Activity className="text-green-600 mr-2" size={20} />
      Section H: Innovations, Best Practices & Achievements
    </h2>
    
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-gray-700 mb-2">1) Teaching innovations:</h3>
        <p className="text-gray-900">{school.teachingInnovations || "Not specified"}</p>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-2">2) Use of community knowledge/local context:</h3>
        <p className="text-gray-900">{school.communityKnowledge || "Not specified"}</p>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-2">3) School Awards/Recognition:</h3>
        <p className="text-gray-900">{school.awards || "None reported"}</p>
      </div>
      
      <div className="mt-4">
        <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition flex items-center">
          <FileText className="mr-2" size={16} />
          View Supporting Media
        </button>
      </div>
    </div>
  </div>
);

const ChallengesSection = ({ school }: any) => (
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
      <Shield className="text-green-600 mr-2" size={20} />
      Section I: Challenges Identified & Support Required
    </h2>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Challenge</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Immediate Support Needed</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {school.challenges?.map((challenge: any) => (
            <tr key={challenge.area}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{challenge.area}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{challenge.challenge}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{challenge.supportNeeded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DetailItem 
          icon={<User size={16} />} 
          label="Learning Facilitator Name & Signature" 
          value={school.facilitatorName || "Not available"} 
        />
        <DetailItem 
          icon={<Calendar size={16} />} 
          label="Day & Date of Visit" 
          value={school.visitDate || "Not specified"} 
        />
      </div>
    </div>
  </div>
);

// Helper Components
const DetailItem = ({ icon, label, value }: any) => (
  <div className="flex items-start">
    <span className="text-green-600 mr-3 mt-0.5 flex-shrink-0">{icon}</span>
    <div>
      <h3 className="font-medium text-gray-700">{label}</h3>
      <p className="text-gray-900">{value || 'Not specified'}</p>
    </div>
  </div>
);

const InfoCard = ({ icon, title, value, description }: any) => (
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
    <div className="flex items-center mb-2">
      <span className="text-green-600 mr-2">{icon}</span>
      <h3 className="font-medium text-gray-800">{title}</h3>
    </div>
    <p className="text-lg font-bold text-gray-900 mb-1">{value}</p>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);