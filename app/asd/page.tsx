"use client";

import React, { useState, useEffect } from "react";

// --- Reusable Icon Components ---
const MoneyReceiveIcon = ({
  className = "w-6 h-6",
  color = "currentColor",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.37 15.14C9.37 15.14 4.8 15.14 4.8 15.14M4.8 15.14L6.68 17.02M4.8 15.14L6.68 13.26"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.63 8.86C14.63 8.86 19.2 8.86 19.2 8.86M19.2 8.86L17.32 6.98M19.2 8.86L17.32 10.74"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.96 15.54L16.42 15.23C14.19 13.96 10.05 11.23 7.52 9.8C6.9 9.42 6.88 8.49 7.49 8.1L7.96 7.79C9.72 6.81 12.08 6.8 13.85 7.76L14.33 8.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.18 16.2L9.64 15.89C7.41 14.62 3.27 11.89 0.74 10.46C0.12 10.08 0.1 9.15 0.71 8.76L1.18 8.45C2.94 7.47 5.3 7.46 7.07 8.42L7.55 8.67"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0"
    />
    <path
      d="M2 22C3.12 20.89 5.11 18.89 6 18C7.12 18.89 9.11 20.89 10 22"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2C15.12 3.11 17.11 5.11 18 6C19.12 5.11 21.11 3.11 22 2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MoneySendIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.63 15.14H19.2M19.2 15.14L17.32 17.02M19.2 15.14L17.32 13.26"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.37 8.86H4.8M4.8 8.86L6.68 6.98M4.8 8.86L6.68 10.74"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.04 15.54L7.58 15.23C9.81 13.96 13.95 11.23 16.48 9.8C17.1 9.42 17.12 8.49 16.51 8.1L16.04 7.79C14.28 6.81 11.92 6.8 10.15 7.76L9.67 8.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.82 16.2L14.36 15.89C16.59 14.62 20.73 11.89 23.26 10.46C23.88 10.08 23.9 9.15 23.29 8.76L22.82 8.45C21.06 7.47 18.7 7.46 16.93 8.42L16.45 8.67"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0"
    />
    <path
      d="M2 2C3.12 3.11 5.11 5.11 6 6C7.12 5.11 9.11 3.11 10 2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 22C15.12 20.89 17.11 18.89 18 18C19.12 18.89 21.11 20.89 22 22"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PlusCircleIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronDownIcon = ({ className = "w-5 h-5", color = "#A0A3AA" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CheckCircleIcon = ({ className = "w-5 h-5", color = "#22C55E" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={color}
      fillOpacity="0.2"
    />
    <path
      d="M9.00004 12L10.5 13.5L15 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const InfoCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z"
      fill="#FFE4CC"
    />
    <path
      d="M10.5 14.875V10.5"
      stroke="#FF8A00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 6.125H10.5088"
      stroke="#FF8A00"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CloseCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z"
      fill="#FFCCCC"
    />
    <path
      d="M13.125 7.875L7.875 13.125"
      stroke="#FF0000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.125 13.125L7.875 7.875"
      stroke="#FF0000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const MoreVertIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
  </svg>
);
const EditIcon = () => (
  <svg
    className="w-5 h-5 text-[#006DB8]"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.608 2.34998L12.5 3.24198C13.53 4.27198 13.53 5.92998 12.5 6.95998L6.233 13.227C5.972 13.488 5.613 13.628 5.242 13.628H3.75C3.336 13.628 3 13.292 3 12.878V11.386C3 11.015 3.14 10.656 3.401 10.395L9.668 4.12798C10.698 3.09798 12.356 3.09798 13.386 4.12798L14.278 5.01998M11.608 2.34998L13.386 4.12798M11.608 2.34998C11.217 2.74098 11.217 3.37698 11.608 3.76798L12.942 5.10198C13.333 5.49298 13.969 5.49298 14.36 5.10198M9.501 11.127L12.251 8.37598"
      stroke="#006DB8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 12.875V15.25C17 16.2165 16.2165 17 15.25 17H4.75C3.7835 17 3 16.2165 3 15.25V4.75C3 3.7835 3.7835 3 4.75 3H7.125"
      stroke="#006DB8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const KeyboardArrowLeftIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const KeyboardArrowRightIcon = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Data (To be replaced by API calls) ---
const MOCK_FEES_DATA = [
  {
    id: 1,
    network: "GDCP",
    channelName: "Manual Trans...",
    bank: "BCA",
    partnerFee: "QRIS Service Fee",
    feeAmount: "0",
    feeSide: "Debitor",
    createdOn: "23/02/24 13:45",
    status: "Active",
  },
  {
    id: 2,
    network: "GDCP",
    channelName: "Manual Trans...",
    bank: "BRI",
    partnerFee: "QRIS Service Fee",
    feeAmount: "0",
    feeSide: "Debitor",
    createdOn: "23/02/24 13:45",
    status: "Active",
    hasInfo: true,
  },
];

const MOCK_LIMITATIONS_DATA = [
  {
    id: 1,
    network: "CIMB",
    channelName: "Intra Bank",
    banks: "CIMB",
    transactionAmount: { min: "Rp50.000.000", max: "Rp5.000.000.000" },
    limitation: { used: "Rp50.000.000.000", type: "U" },
    progress: 5,
    status: "Active",
  },
  {
    id: 2,
    network: "CIMB",
    channelName: "Interbank",
    banks: "ALL",
    transactionAmount: { min: "Rp50.000.000", max: "Rp5.000.000.000" },
    limitation: { used: "Rp50.000.000.000", type: "M" },
    progress: 65,
    status: "Active",
    hasInfo: true,
  },
  {
    id: 3,
    network: "CIMB",
    channelName: "BI-Fast",
    banks: "ALL",
    transactionAmount: { min: "Rp50.000.000", max: "Rp5.000.000.000" },
    limitation: { used: "Rp50.000.000.000", type: "D" },
    progress: 100,
    status: "Active",
    hasClose: true,
  },
];

// --- UI Components ---

const PageHeader = () => (
  <header className="mb-5">
    <h1 className="text-lg font-medium text-[#12192C]">Partner’s Services</h1>
    <p className="text-sm text-gray-500">All partner service configuration.</p>
  </header>
);

const StepperItem = ({ children, active }) => (
  <div className="relative flex items-center w-full px-6 py-3 cursor-pointer">
    {active && (
      <div className="absolute left-0 w-1 bg-[#006DB8] rounded-r-full h-1/2 top-1/4"></div>
    )}
    <span
      className={`text-sm font-medium ${
        active ? "text-[#006DB8]" : "text-gray-500"
      }`}
    >
      {children}
    </span>
  </div>
);

const Stepper = () => {
  const steps = [
    "Partner Account",
    "Domestic Transfer",
    "Receive Payment",
    "O2C Link",
    "Linkage",
    "Web Check Out",
  ];
  const [activeStep, setActiveStep] = useState("Receive Payment"); // This can be managed by a router or parent state

  return (
    <aside className="flex-shrink-0 w-full lg:w-48">
      <div className="border border-gray-200 rounded-xl">
        {steps.map((step) => (
          <StepperItem key={step} active={step === activeStep}>
            {step}
          </StepperItem>
        ))}
      </div>
    </aside>
  );
};

const Dropdown = ({ label, className }) => (
  <div className={`relative ${className}`}>
    <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      <span className="text-gray-400">{label}</span>
      <ChevronDownIcon />
    </button>
  </div>
);

const Pagination = ({ onPageChange }) => (
  <div className="flex flex-col items-center justify-between px-4 py-2 space-y-4 md:flex-row md:space-y-0">
    <span className="text-xs text-gray-400">Showing 1-10 of 30 items</span>
    <div className="flex items-center space-x-1">
      <button
        onClick={() => onPageChange("prev")}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        onClick={() => onPageChange(1)}
        className="px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md bg-white"
      >
        1
      </button>
      <button
        onClick={() => onPageChange(2)}
        className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-100"
      >
        2
      </button>
      <button
        onClick={() => onPageChange(3)}
        className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-100"
      >
        3
      </button>
      <button
        onClick={() => onPageChange("next")}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <KeyboardArrowRightIcon />
      </button>
    </div>
  </div>
);

const ContentTabs = ({ activeTab, onTabClick }) => (
  <div className="p-1.5 bg-[#CCE1F0] rounded-full flex mb-5">
    <button
      onClick={() => onTabClick("moneyIn")}
      className={`w-1/2 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-full transition-colors duration-300 ${
        activeTab === "moneyIn" ? "bg-[#006DB8] text-white" : "text-[#006DB8]"
      }`}
    >
      <MoneyReceiveIcon color={activeTab === "moneyIn" ? "white" : "#006DB8"} />
      Money In
    </button>
    <button
      onClick={() => onTabClick("moneyOut")}
      className={`w-1/2 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-full transition-colors duration-300 ${
        activeTab === "moneyOut" ? "bg-[#006DB8] text-white" : "text-[#006DB8]"
      }`}
    >
      <MoneySendIcon color={activeTab === "moneyOut" ? "white" : "#006DB8"} />
      Money Out
    </button>
  </div>
);

const MoneyInFees = ({ fees, isLoading, error }) => {
  // API call for pagination would be handled here
  const handlePageChange = (page) => console.log("Fetch fees page:", page);
  const handleAddNewFee = () => console.log("Opening Add New Fee Modal...");

  return (
    <div className="p-5 mb-5 border border-gray-200 rounded-2xl">
      <div className="flex flex-col items-start justify-between mb-5 md:flex-row md:items-center">
        <div>
          <h2 className="text-lg font-medium text-gray-800">Money In Fees</h2>
          <p className="text-sm text-gray-500">
            Channel fee for money in deposit account
          </p>
        </div>
        <button
          onClick={handleAddNewFee}
          className="flex items-center justify-center gap-2 px-5 py-3 mt-4 text-sm font-medium text-white bg-[#006DB8] rounded-full md:mt-0"
        >
          <PlusCircleIcon color="white" />
          Add New Fee
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Dropdown label="Channel Name: All" />
        <Dropdown label="Bank: All" />
        <Dropdown label="Fee Type: All" />
        <Dropdown label="Fee Side: All" />
        <Dropdown label="Status: All" />
      </div>
      <div className="overflow-x-auto">
        {isLoading && <div className="py-8 text-center">Loading fees...</div>}
        {error && (
          <div className="py-8 text-center text-red-500">Error: {error}</div>
        )}
        {!isLoading && !error && (
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-100 rounded-lg">
              <tr>
                {[
                  "Network",
                  "Channel Name",
                  "Bank",
                  "Partner Fee Name",
                  "Fee Amount",
                  "Fee Side",
                  "Created On",
                  "Status",
                  "Action",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.map((row) => (
                <tr key={row.id} className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon />
                      {row.network}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {row.channelName}
                      {row.hasInfo ? <InfoCircleIcon /> : <CheckCircleIcon />}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {row.bank}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {row.partnerFee}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {row.feeAmount}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {row.feeSide}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    {row.createdOn}
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

const MoneyInLimitations = ({ limitations, isLoading, error }) => {
  const handlePageChange = (page) =>
    console.log("Fetch limitations page:", page);
  const handleAddNewLimitation = () =>
    console.log("Opening Add New Limitation Modal...");

  const getProgressBarColor = (progress) => {
    if (progress < 50) return "bg-green-500";
    if (progress < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-5 border border-gray-200 rounded-2xl">
      <div className="flex flex-col items-start justify-between mb-5 md:flex-row md:items-center">
        <div>
          <h2 className="text-lg font-medium text-gray-800">
            Money In Limitation
          </h2>
          <p className="text-sm text-gray-500">
            Channel limitation for money in deposit account.
          </p>
        </div>
        <button
          onClick={handleAddNewLimitation}
          className="flex items-center justify-center gap-2 px-5 py-3 mt-4 text-sm font-medium text-white bg-[#006DB8] rounded-full md:mt-0"
        >
          <PlusCircleIcon color="white" />
          Add New Limitation
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 mb-5 sm:grid-cols-2 lg:grid-cols-4">
        <Dropdown label="Channel Name: All" className="sm:col-span-1" />
        <Dropdown label="Channel Name: All" className="sm:col-span-1" />
        <Dropdown label="Fee Side: All" className="sm:col-span-1" />
        <Dropdown label="Status: All" className="sm:col-span-1" />
      </div>
      <div className="overflow-x-auto">
        {isLoading && (
          <div className="py-8 text-center">Loading limitations...</div>
        )}
        {error && (
          <div className="py-8 text-center text-red-500">Error: {error}</div>
        )}
        {!isLoading && !error && (
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-100 rounded-lg">
              <tr>
                {[
                  "Network",
                  "Channel Name",
                  "Banks Beneficiary",
                  "Amount per Transaction",
                  "Limitation Period",
                  "Status",
                  "Action",
                ].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 font-medium text-gray-500 whitespace-nowrap"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {limitations.map((row) => (
                <tr key={row.id} className="border-b border-gray-200">
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon />
                      {row.network}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {row.channelName}
                      {row.hasInfo && <InfoCircleIcon />}
                      {row.hasClose && <CloseCircleIcon />}
                      {!row.hasInfo && !row.hasClose && <CheckCircleIcon />}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap text-center">
                    {row.banks}
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div>min.:{row.transactionAmount.min}</div>
                    <div>max.:{row.transactionAmount.max}</div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                    <div className="font-bold">
                      {row.limitation.type}: {row.limitation.used}
                    </div>
                    <div className="w-full h-1 mt-1 bg-gray-200 rounded-full">
                      <div
                        className={`h-1 rounded-full ${getProgressBarColor(
                          row.progress
                        )}`}
                        style={{ width: `${row.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination onPageChange={handlePageChange} />
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState("moneyIn");

  // State for Fees Data
  const [fees, setFees] = useState([]);
  const [feesLoading, setFeesLoading] = useState(true);
  const [feesError, setFeesError] = useState(null);

  // State for Limitations Data
  const [limitations, setLimitations] = useState([]);
  const [limitationsLoading, setLimitationsLoading] = useState(true);
  const [limitationsError, setLimitationsError] = useState(null);

  // --- API Integration Section ---
  // This useEffect hook simulates fetching data when the component mounts.
  // Replace the content of these promises with your actual API calls.
  useEffect(() => {
    // Fetch Fees Data
    setFeesLoading(true);
    const fetchFees = new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_FEES_DATA), 1000)
    ); // Simulate 1s delay

    fetchFees
      .then((data) => setFees(data))
      .catch((err) => setFeesError("Failed to fetch fees."))
      .finally(() => setFeesLoading(false));

    // Fetch Limitations Data
    setLimitationsLoading(true);
    const fetchLimitations = new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_LIMITATIONS_DATA), 1500)
    ); // Simulate 1.5s delay

    fetchLimitations
      .then((data) => setLimitations(data))
      .catch((err) => setLimitationsError("Failed to fetch limitations."))
      .finally(() => setLimitationsLoading(false));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex justify-center min-h-screen p-4 bg-gray-50 font-jakarta">
      <div className="w-full max-w-6xl p-5 bg-white border border-gray-200 rounded-2xl">
        <PageHeader />

        <main className="flex flex-col lg:flex-row gap-5">
          <Stepper />

          <section className="flex-1">
            <ContentTabs activeTab={activeTab} onTabClick={setActiveTab} />

            {/* Conditional Rendering based on active tab */}
            {activeTab === "moneyIn" ? (
              <>
                <MoneyInFees
                  fees={fees}
                  isLoading={feesLoading}
                  error={feesError}
                />
                <MoneyInLimitations
                  limitations={limitations}
                  isLoading={limitationsLoading}
                  error={limitationsError}
                />
              </>
            ) : (
              <div className="p-5 text-center border border-gray-200 rounded-2xl">
                <h2 className="text-lg font-medium text-gray-800">Money Out</h2>
                <p className="text-sm text-gray-500">
                  Money Out content goes here.
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
