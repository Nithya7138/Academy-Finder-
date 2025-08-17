import { Academic, ArtProgram, SportsProgram } from "./type";

type AcademicCardProps = Academic & {
  art_programs?: ArtProgram[];
  sports_programs?: SportsProgram[];
  onClose: () => void;
};

export default function AcademicCard({
  name,
  address,
  phone,
  type,
  average_rating,
  trainers = [],
  achievements = [],
  art_programs = [],
  sports_programs = [],
  onClose
}: AcademicCardProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start overflow-auto p-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative animate-fade-in">

        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Academy Name & Type */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-purple-700">{name}</h2>
          {type && (
            <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-semibold shadow-sm">
              {type}
            </span>
          )}
        </div>


        <p className="text-gray-600 mb-1">📍 {address.line1}, {address.city}, {address.state}, {address.zip}</p>
        <p className="text-gray-700 mb-2">📞 {phone}</p>


        <div className="flex items-center text-yellow-400 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="text-lg">{i < Math.round(average_rating || 0) ? "★" : "☆"}</span>
          ))}
          <span className="ml-2 text-sm text-gray-600">{average_rating?.toFixed(1)}</span>
        </div>

        {trainers.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-purple-600 mb-1">👩‍🏫 Trainers</h3>
            <ul className="list-disc list-inside text-gray-600">
              {trainers.map((t, i) => (
                <li key={i}>{t.name} ({t.experience_years} yrs) - {t.specializations.join(", ")}</li>
              ))}
            </ul>
          </div>
        )}


        {achievements.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-green-600 mb-1">🏆 Achievements</h3>
            <ul className="list-disc list-inside text-gray-600">
              {achievements.map((a, i) => (
                <li key={i}>{a.award} - {a.recognition}</li>
              ))}
            </ul>
          </div>
        )}


        {art_programs.length > 0 && (
          <div className="mb-4">
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
          <div className="mb-4">
            <h3 className="font-semibold text-green-600 mb-1">⚽ Sports Programs</h3>
            <ul className="list-disc list-inside text-gray-600">
              {sports_programs.map((p, i) => (
                <li key={i}>{p.sname} {p.level ? `(${p.level})` : ""}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
