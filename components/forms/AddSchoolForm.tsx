"use client";
import React, { useState, ChangeEvent } from "react";
import { X } from "lucide-react";

interface SchoolFormData {
  name: string;
  yearOfEstablishment?: number;
  upgradedTo?: string;
  udiseCode?: string;
  district?: string;
  block?: string;
  cluster?: string;
  villageTown?: string;
  management?: string;
  schoolType?: string;
  mediumOfInstruction?: string;
  inclusiveSchool: boolean;
  vocationalTrades?: string;
  coEducation?: boolean;
  totalArea?: string;
  campusType?: string;
  campusSize?: string;
}

export default function SchoolModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<SchoolFormData>({
    name: "",
    yearOfEstablishment: undefined,
    upgradedTo: "",
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
    coEducation: undefined,
    totalArea: "",
    campusType: "",
    campusSize: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | number | boolean | undefined = value;

    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    } else if (type === "number") {
      newValue = value === "" ? undefined : parseInt(value, 10);
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
        const errData = await res.json();
        throw new Error(errData.error || "Failed to create school");
      }

      setMessage("School created successfully!");
      if (onSubmit) onSubmit();

      setForm({
        name: "",
        yearOfEstablishment: undefined,
        upgradedTo: "",
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
        coEducation: undefined,
        totalArea: "",
        campusType: "",
        campusSize: "",
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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white rounded-2xl shadow-2xl shadow-green-500 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add New School</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <label className="block space-y-1">
                <span className="font-semibold">School Name <span className="text-red-600">*</span></span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  placeholder="School Name"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold flex items-center">
                  UDISE Code{" "}
                  <span className="ml-1 px-2 py-0.5 text-xs bg-yellow-300 rounded font-medium text-yellow-900">
                    Important & Unique
                  </span>
                </span>
                <input
                  name="udiseCode"
                  value={form.udiseCode || ""}
                  onChange={handleChange}
                  className="w-full border border-yellow-400 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="UDISE Code"
                  required
                />
              </label>

              <label className="block">
                <span className="font-semibold">District</span>
                <input
                  name="district"
                  value={form.district || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="District"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Block</span>
                <input
                  name="block"
                  value={form.block || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Block"
                />
              </label>

              <label className="block">
                <span className="font-semibold">Cluster</span>
                <input
                  name="cluster"
                  value={form.cluster || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Cluster"
                />
              </label>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <label className="block space-y-1">
                <span className="font-semibold">Village/Town</span>
                <input
                  name="villageTown"
                  value={form.villageTown || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Village or Town"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Management</span>
                <input
                  name="management"
                  value={form.management || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Management"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">School Type</span>
                <input
                  name="schoolType"
                  value={form.schoolType || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="School Type"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Medium of Instruction</span>
                <input
                  name="mediumOfInstruction"
                  value={form.mediumOfInstruction || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Medium of Instruction"
                />
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="inclusiveSchool"
                  checked={form.inclusiveSchool}
                  onChange={handleChange}
                />
                <span>Inclusive School</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="coEducation"
                  checked={form.coEducation || false}
                  onChange={handleChange}
                />
                <span>Co-education</span>
              </label>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <label className="block space-y-1">
                <span className="font-semibold">Vocational Trades</span>
                <input
                  name="vocationalTrades"
                  value={form.vocationalTrades || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Vocational Trades"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Total Area (sq.m)</span>
                <input
                  name="totalArea"
                  value={form.totalArea || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Total Area"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Campus Type</span>
                <input
                  name="campusType"
                  value={form.campusType || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Campus Type"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Campus Size (acres)</span>
                <input
                  name="campusSize"
                  value={form.campusSize || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Campus Size"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Year of Establishment</span>
                <input
                  type="number"
                  name="yearOfEstablishment"
                  value={form.yearOfEstablishment || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Year of Establishment"
                />
              </label>

              <label className="block space-y-1">
                <span className="font-semibold">Upgraded To</span>
                <input
                  name="upgradedTo"
                  value={form.upgradedTo || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Upgraded To"
                />
              </label>
            </>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between items-center pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                disabled={loading}
                className="ml-auto px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </form>

        {/* Message */}
        {message && <p className="mt-3 text-sm text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
}
