import React, { useState, useEffect } from "react";

const ProjectHeader = (props) => {
  const {
    employer,
    contractor,
    consultant,
    project,
    location,
    reportNo,
    monthNo,
    plotNo,
    weekNo,
    totalDays,
  } = props;

  const [currentDate, setCurrentDate] = useState("");
  const [elapsedDays, setElapsedDays] = useState(0);
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    // Set current date using window features
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setCurrentDate(formattedDate);

    // Example calculation (replace with logic)
    const elapsed = 290;
    setElapsedDays(elapsed);
    setRemainingDays(totalDays - elapsed);
  }, [totalDays]);

  return (
    <div className="  bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header Section with Company Details */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-600">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-300">
              Employer:
            </span>
            <span className="font-semibold text-lg">{employer}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-300">
              Contractor:
            </span>
            <span className="font-semibold text-lg">{contractor}</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2 flex-1 mr-4">
            <span className="text-sm font-medium text-slate-300">Project:</span>
            <span className="font-semibold">
              {project} On Plot No. {plotNo} At {location}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-slate-300">
              Consultant:
            </span>
            <span className="font-semibold">{consultant}</span>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="grid grid-cols-6 divide-x divide-gray-300">
          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Date
            </div>
            <div className="text-sm font-bold text-gray-800">{currentDate}</div>
          </div>

          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Report No.
            </div>
            <div className="text-sm font-bold text-gray-800">{reportNo}</div>
          </div>

          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Month No.
            </div>
            <div className="text-sm font-bold text-gray-800">{monthNo}</div>
          </div>

          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Week No.
            </div>
            <div className="text-sm font-bold text-gray-800">{weekNo}</div>
          </div>

          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Elapsed Days
            </div>
            <div className="text-sm font-bold text-green-600">
              {elapsedDays}
            </div>
          </div>

          <div className="text-center py-4 px-3 hover:bg-white transition-colors duration-200">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Remaining Days
            </div>
            <div className="text-sm font-bold text-blue-600">
              {remainingDays}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo with sample data
export default function App() {
  return (
    <div className=" bg-gray-100 p-8">
      <ProjectHeader
        employer="Punjab Central Business District Development Authority"
        contractor="Hasnat & Sons Contracting LLC"
        consultant="Nespak International (Pvt) Ltd"
        project="Construction of Celestia Tower "
        plotNo="124-0133"
        location="Lahore."
        reportNo={1}
        monthNo={1}
        weekNo={1}
        totalDays={639}
      />
    </div>
  );
}
