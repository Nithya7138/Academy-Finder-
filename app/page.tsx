
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AcademicCard from "./academiccard";
import { Academic } from "./type";

export default function HomePage() {
  const [data, setData] = useState<Academic[]>([]);
  const [search, setSearch] = useState(""); 
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get<Academic[]>("/api/academic")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredData = data.filter((academy) => {
    const searchLower = search.toLowerCase();

       const matchesSearch =
      academy.name.toLowerCase().includes(searchLower) ||
      academy.type.toLowerCase().includes(searchLower) ||
      academy.address.city.toLowerCase().includes(searchLower) ||
      academy.phone?.toString().includes(searchLower);
    
    let matchesRating = true;
    if (ratingFilter !== null) {
      matchesRating = Math.floor(academy.average_rating ?? 0) === ratingFilter;
    }

    return matchesSearch && matchesRating;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Academys</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
      
        <input
          type="text"
          placeholder="Search by city, name, type, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={ratingFilter ?? ""}
          onChange={(e) =>
            setRatingFilter(e.target.value ? Number(e.target.value) : null)
          }
          className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Ratings</option>
          <option value="1">⭐ 1 & above</option>
          <option value="2">⭐ 2 & above</option>
          <option value="3">⭐ 3 & above</option>
          <option value="4">⭐ 4 & above</option>
          <option value="5">⭐ 5 only</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((academy, index) => (
            <AcademicCard key={index} {...academy} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No academies found.
          </p>
        )}
      </div>
    </div>
  );
}
