import React, { useRef } from "react";
import { FaPrint } from "react-icons/fa"; // Add this import
import ProjectHeader from "./components/ProjectHeader";
import TimeDataClaims from "./components/TimeDataClaims";
import ComData from "./components/ComData";
import Baseline from "./components/Baseline";
import CashGraph from "./components/CashGraph";
import ProgressSCurve from "./components/ProgressCurve";
import ProjectProgressTable from "./components/ProjectProgress";
import EngineeringQualityKPIs from "./components/QualityKPI";
import TopIssuesTable from "./components/TopIssues";
import ManpowerHistogram from "./components/ManPower";
import RisksTable from "./components/Risks";
import WeeklyProgressTasks from "./components/WeeklyProgress";
import OverallProgress from "./components/OverallProgress";
import Photos from "./components/Photos";

function App() {
  const dashboardRef = useRef();

  // NEW PRINT TO PDF FUNCTION - Most Reliable Method
  const printToPDF = () => {
    // Hide the header with buttons during print
    const header = document.querySelector(".print-hide");
    if (header) {
      header.style.display = "none";
    }

    // Add print-specific styles
    const printStyles = document.createElement("style");
    printStyles.innerHTML = `
      @media print {
        body { margin: 0; padding: 0; }
        .print-hide { display: none !important; }
        .print-content { 
          width: 100%; 
          max-width: none; 
          padding: 0; 
          margin: 0;
          page-break-inside: avoid;
        }
        .space-y-4 > * {
          page-break-inside: avoid;
          margin-bottom: 20px;
        }
        table {
          page-break-inside: auto;
        }
        tr {
          page-break-inside: avoid;
          page-break-after: auto;
        }
      }
    `;
    document.head.appendChild(printStyles);

    // Trigger print
    setTimeout(() => {
      window.print();

      // Cleanup: restore header and remove styles
      if (header) {
        header.style.display = "";
      }
      document.head.removeChild(printStyles);
    }, 100);
  };

  return (
    <div className="p-4">
      {/* Header with download button */}
      <div className="flex justify-between items-center bg-amber-50 rounded-md py-2 px-4 mb-4 print-hide">
        <h1 className="text-center font-extrabold">DASHBOARD</h1>
        <div className="flex gap-2">
          <button
            onClick={printToPDF}
            className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700"
            title="Print to PDF"
          >
            <FaPrint size={20} />
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div ref={dashboardRef} className="print-content">
        <div className="mb-4">
          <ProjectHeader
            employer="AL GHURAIR PROPERTIES LLC"
            contractor="SALEH CONSTRUCTIONS L.L.C."
            consultant="ARIF & BINTOAK CONSULTING ARCHITECTS & ENGINEERS"
            project="PROPOSED RESIDENTIAL BUILDING B+G+4+GYM ROOF "
            plotNo="124-0133"
            location="Al Muraqqabat, Dubai U.A.E."
            reportNo={42}
            monthNo={10}
            weekNo={42}
            totalDays={639}
          />
        </div>

        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg shadow-md">
            <TimeDataClaims />
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <ComData />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg shadow-md">
            <Baseline />
          </div>
          <div className="p-4 rounded-2x2">
            <CashGraph />
          </div>
          <ProgressSCurve
            data={[
              { month: "Apr 23", planned: 5, actual: 3 },
              { month: "May 23", planned: 10, actual: 7 },
              { month: "Jun 23", planned: 15, actual: 12 },
              { month: "Jul 23", planned: 20, actual: 18 },
              { month: "Aug 23", planned: 30, actual: 25 },
              { month: "Sep 23", planned: 40, actual: 35 },
              { month: "Oct 23", planned: 50, actual: 42 },
              { month: "Nov 23", planned: 60, actual: 50 },
              { month: "Dec 23", planned: 70, actual: 60 },
              { month: "Jan 24", planned: 80, actual: 72 },
              { month: "Feb 24", planned: 85, actual: 78 },
              { month: "Mar 24", planned: 90, actual: 82 },
              { month: "Apr 24", planned: 92, actual: 85 },
              { month: "May 24", planned: 94, actual: 87 },
              { month: "Jun 24", planned: 96, actual: 90 },
              { month: "Jul 24", planned: 98, actual: 93 },
              { month: "Aug 24", planned: 99, actual: 95 },
              { month: "Sep 24", planned: 99.5, actual: 97 },
              { month: "Oct 24", planned: 100, actual: 98 },
              { month: "Nov 24", planned: 100, actual: 99 },
              { month: "Dec 24", planned: 100, actual: 99.5 },
              { month: "Jan 25", planned: 100, actual: 100 },
              { month: "Feb 25", planned: 100, actual: 100 },
              { month: "Mar 25", planned: 100, actual: 100 },
            ]}
          />
          <ProjectProgressTable />
          <EngineeringQualityKPIs />
          <div>
            <OverallProgress
              programId="12345"
              currentPeriodData={[
                { month: "Oct 23", planned: 50, actual: 42 },
                { month: "Nov 23", planned: 60, actual: 50 },
              ]}
            />
          </div>
          <TopIssuesTable
            issues={[
              {
                issue: "Delay in material delivery",
                originator: "Site Manager",
                category: "High",
                recommendedAction: "Expedite delivery with supplier",
                actionBy: "Procurement Team",
              },
              {
                issue: "Safety compliance issues",
                originator: "Safety Officer",
                category: "Critical",
                recommendedAction: "Conduct safety training",
                actionBy: "Safety Team",
              },
              {
                issue: "Design changes required",
                originator: "Architect",
                category: "Medium",
                recommendedAction: "Review design with client",
                actionBy: "Design Team",
              },
            ]}
            emptyRows={5}
          />
          <div>
            <ManpowerHistogram />
          </div>
          <div>
            <RisksTable
              risks={[
                {
                  id: 1,
                  description: "Risk of delay due to weather conditions",
                  category: "High",
                  impact: "Medium",
                  mitigation: "Implement contingency plans",
                },
                {
                  id: 2,
                  description: "Potential cost overruns",
                  category: "Critical",
                  impact: "High",
                  mitigation: "Regular budget reviews",
                },
                {
                  id: 3,
                  description: "Supply chain disruptions",
                  category: "Medium",
                  impact: "Low",
                  mitigation: "Diversify suppliers",
                },
              ]}
            />
            <Photos />
            <div>
              <WeeklyProgressTasks
                weeks={[
                  {
                    title: "Week 1",
                    completedActivities: ["Activity A", "Activity B"],
                    inProgressActivities: ["Activity C"],
                  },
                  {
                    title: "Week 2",
                    completedActivities: ["Activity D"],
                    inProgressActivities: ["Activity E", "Activity F"],
                  },
                ]}
                emptyRowsPerSection={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
