// import { useState } from "react";
// import { CalendarIcon } from "@heroicons/react/outline";

// export default function Dashboard() {
//   const [selectedTimeframe, setSelectedTimeframe] = useState("Today");

//   const timeframes = ["Today", "This Week", "This Month", "All Time"];

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold">Dashboard</h1>

//       <div className="flex items-center gap-4 mt-4 md:mt-0">
//         <select
//           className="p-2 border rounded-md outline-none"
//           defaultValue="Overview"
//         >
//           <option value="Overview">Overview</option>
//           <option value="Analytics">Analytics</option>
//           <option value="Reports">Reports</option>
//         </select>

//         <div className="flex gap-2 border rounded-md overflow-hidden">
//           {timeframes.map((timeframe) => (
//             <button
//               key={timeframe}
//               className={`px-4 py-2 text-sm ${
//                 selectedTimeframe === timeframe
//                   ? "bg-gray-300"
//                   : "bg-white hover:bg-gray-100"
//               }`}
//               onClick={() => setSelectedTimeframe(timeframe)}
//             >
//               {timeframe}
//             </button>
//           ))}
//         </div>

//         <button className="p-2 rounded-md hover:bg-gray-100">
//           <CalendarIcon className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// }