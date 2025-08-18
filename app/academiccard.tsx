import { Academic, ArtProgram, SportsProgram } from "./type";


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
  // This function is not currently used but may be needed later
  // Commenting it out to avoid the unused variable warning
  /*
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
  */


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


    <p className="text-sm text-gray-600 mb-1">📍 {address.line1}, {address.city}, {address.state}, {address.zip_code}</p>


    <p className="text-sm text-gray-700 mb-2">📞 {phone}</p>


    <div className="flex items-center text-yellow-400 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-lg">{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>
      ))}
      <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
    </div>


    <div className="space-y-3">
      {art_programs.length > 0 && (
        <div>
          <h3 className="font-semibold text-purple-600 mb-1">🎨  Art Programs</h3>
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
