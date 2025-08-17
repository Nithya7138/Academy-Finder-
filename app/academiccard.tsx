// // import { Academic,ArtProgram,SportsProgram } from "./type";

import { Academic, ArtProgram, SportsProgram } from "./type";

// // export default function AcademicCard({ name, address, phone, type, trainers, average_rating }: Academic
// //  , { art_program, sports_program }: { art_program?: ArtProgram; sports_program?: SportsProgram }) {
// //   return (
// //     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-6 flex flex-col justify-between">
      

// //       <div>
// //         <h2 className="text-lg font-bold text-gray-800 mb-1">{name}</h2>
// //         {type && <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{type}</span>}
// //       </div>


// //       <div className="mt-3 text-sm text-gray-600">
// //         <p className="font-medium">📍 {address.city}, {address.state}</p>
// //         <p>{address.line1}</p>
// //         <p>{address.zip_code}</p>
// //       </div>


// //       <p className="mt-2 text-sm text-gray-700">📞 {phone}</p>

// //     <div className="flex items-center text-yellow-400">
// //   {Array.from({ length: 5 }, (_, i) => (
// //     <span key={i}>{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>
// //   ))}
// //   <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
// // </div>

// //      <div>
// //       <h3 className="font-semibold">🏆 Art Programs: {art_program?.aname}</h3>
// //     </div>

// //       <div className="mt-4">
// //         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
// //           View Details
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



// // File: app/academiccard.tsx
// import { Academic, ArtProgram, SportsProgram } from "./type";

// type AcademicCardProps = Academic & {
//   art_programs?: ArtProgram[];
//   sports_programs?: SportsProgram[];
// };

// export default function AcademicCard({
//   name,
//   address,
//   phone,
//   type,
//   average_rating,
//   art_programs = [],
//   sports_programs = []
// }: AcademicCardProps) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-6 flex flex-col justify-between mb-6">
      
//       {/* Academy Name and Type */}
//       <div>
//         <h2 className="text-lg font-bold text-gray-800 mb-1">{name}</h2>
//         {type && (
//           <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
//             {type}
//           </span>
//         )}
//       </div>

//       {/* Address */}
//       <div className="mt-3 text-sm text-gray-600">
//         <p className="font-medium">📍 {address.line1}, {address.city}, {address.state}, {address.zip_code}</p>
//       </div>

//       {/* Phone */}
//       <p className="mt-2 text-sm text-gray-700">📞 {phone}</p>

//       {/* Average Rating */}
//       <div className="mt-2 flex items-center text-yellow-400">
//         {Array.from({ length: 5 }, (_, i) => (
//           <span key={i}>{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>
//         ))}
//         <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
//       </div>

//       {/* Art Programs */}
//       <div className="mt-4">
//         <h3 className="font-semibold">🏆 Art Programs:</h3>
//         {art_programs.length > 0 ? (
//           <ul className="list-disc list-inside">
//             {art_programs.map((p, i) => (
//               <li key={i}>
//                 {p.aname} 
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>N/A</p>
//         )}
//       </div>

//       {/* Sports Programs */}
//       <div className="mt-2">
//         <h3 className="font-semibold">⚽ Sports Programs:</h3>
//         {sports_programs.length > 0 ? (
//           <ul className="list-disc list-inside">
//             {sports_programs.map((p, i) => (
//               <li key={i}>
//                 {p.sname} 
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>N/A</p>
//         )}
//       </div>

//       {/* View Details Button */}
//       <div className="mt-4">
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }



type AcademicCardProps = Academic & {
  art_programs?: ArtProgram[];
  sports_programs?: SportsProgram[];
};

export default function AcademicCard({
  name,
  address,
  phone,
  type,
  average_rating,
  art_programs = [],
  sports_programs = []
}: AcademicCardProps) {
  const renderPrograms = (title: string, programs: { aname?: string; sname?: string; }[], keyName: 'aname' | 'sname') =>
    programs.length > 0 && (
      <div className="mt-2">
        <h3 className="font-semibold">{title}:</h3>
        <ul className="list-disc list-inside">
          {programs.map((p, i) => (
            <li key={i}>{p[keyName]} </li>
          ))}
        </ul>
      </div>
    );

  // return (
    
  //   <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 mb-6">
  //     <h2 className="text-lg font-bold">{name}</h2>
  //     {type && <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{type}</span>}

  //     <p className="mt-2 text-sm text-gray-600">📍 {address.line1}, {address.city}, {address.state}, {address.zip_code}</p>
  //     <p className="text-sm text-gray-700">📞 {phone}</p>

  //     <div className="mt-2 flex items-center text-yellow-400">
  //       {Array.from({ length: 5 }, (_, i) => <span key={i}>{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>)}
  //       <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
  //     </div>

  //     <div className="ml-2 text-sm text-gray-600" >
  //       {renderPrograms("🏆 Art Programs", art_programs, "aname")}
  //     {renderPrograms("⚽ Sports Programs", sports_programs, "sname")}

  //     </div>
  //     <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition">
  //       View Details
  //     </button>
  //   </div>
  // );

  return (
  <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 p-6 mb-6 hover:scale-[1.03]">
    
    {/* Academy Name & Type */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold text-purple-700">{name}</h2>
      {type && (
        <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold shadow-sm">
          {type}
        </span>
      )}
    </div>

    {/* Address */}
    <p className="text-sm text-gray-600 mb-1">📍 {address.line1}, {address.city}, {address.state}, {address.zip_code}</p>

    {/* Phone */}
    <p className="text-sm text-gray-700 mb-2">📞 {phone}</p>

    {/* Rating */}
    <div className="flex items-center text-yellow-400 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-lg">{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
    </div>

    {/* Programs */}
    <div className="space-y-3">
      {art_programs.length > 0 && (
        <div>
          <h3 className="font-semibold text-purple-600 mb-1">🏆 Art Programs</h3>
          <div className="flex flex-wrap gap-2">
            {art_programs.map((p, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-pink-200 text-pink-800 rounded-full font-medium hover:bg-pink-300 transition-colors duration-200">
                {p.aname} {p.level ? `(${p.level})` : ""}
              </span>
            ))}
          </div>
        </div>
      )}

      {sports_programs.length > 0 && (
        <div>
          <h3 className="font-semibold text-green-600 mb-1">⚽ Sports Programs</h3>
          <div className="flex flex-wrap gap-2">
            {sports_programs.map((p, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full font-medium hover:bg-green-300 transition-colors duration-200">
                {p.sname} {p.level ? `(${p.level})` : ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>


     <button
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
        onClick={() => window.location.href = '../academy-details.tsx'}
      >
        View Details
      </button>
  </div>
);

}
