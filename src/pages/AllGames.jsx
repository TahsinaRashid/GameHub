// // src/pages/AllGames.jsx
// import React, { useState, useMemo } from 'react';
// import { ChevronLeft, Star, Filter, SortAsc, SortDesc } from 'lucide-react';
// // ত্রুটি সংশোধনের জন্য ফাইল এক্সটেনশন (.js) যোগ করা হলো
// import { allItemsData, allGenres, IMAGE_PLACEHOLDER } from '../data/data'; 

// const AllGamesPage = ({ setCurrentItem, setView }) => {
//     // Sorting State: key ('title' or 'rating'), order ('asc' or 'desc')
//     const [sort, setSort] = useState({ key: 'rating', order: 'desc' });
//     // Filtering State: array of selected genres
//     const [selectedGenres, setSelectedGenres] = useState([]);

//     // ফিল্টারিং এবং সর্টিং লজিক
//     const filteredAndSortedItems = useMemo(() => {
//         let items = [...allItemsData];

//         // 1. Filtering by Genre (জেনার অনুযায়ী ফিল্টারিং)
//         if (selectedGenres.length > 0) {
//             items = items.filter(item => selectedGenres.includes(item.genre));
//         }

//         // 2. Sorting (সর্টিং)
//         items.sort((a, b) => {
//             let valA = a[sort.key];
//             let valB = b[sort.key];

//             if (sort.key === 'title') {
//                 valA = valA.toLowerCase();
//                 valB = valB.toLowerCase();
//             }

//             if (valA < valB) return sort.order === 'asc' ? -1 : 1;
//             if (valA > valB) return sort.order === 'asc' ? 1 : -1;
//             return 0;
//         });

//         return items;
//     }, [sort, selectedGenres]);

//     const handleGenreToggle = (genre) => {
//         setSelectedGenres(prev => 
//             prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
//         );
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-4 lg:px-20 py-10 text-white">
//             <button
//                 onClick={() => setView('home')}
//                 className="mb-8 bg-gray-700 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-600 transition flex items-center"
//             >
//                 <ChevronLeft size={20} className="mr-2" /> Home
//             </button>

//             <h1 className="text-4xl font-extrabold text-yellow-500 mb-10 text-center border-b-4 border-yellow-600 pb-2">
//                 সমস্ত গেম লাইব্রেরি (All Games Library)
//             </h1>

//             {/* --- Sorting and Filtering Controls --- */}
//             <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-gray-800 p-4 rounded-xl mb-8 shadow-inner border border-gray-700">
                
//                 {/* Sorting */}
//                 <div className="flex items-center mb-4 md:mb-0 space-x-3">
//                     <span className="font-semibold text-yellow-500 flex items-center"><SortAsc size={20} className="mr-1" /> Sort By (সাজান):</span>
//                     <select
//                         value={sort.key}
//                         onChange={(e) => setSort({ ...sort, key: e.target.value })}
//                         className="bg-gray-700 text-white p-2 rounded-lg cursor-pointer text-sm"
//                     >
//                         <option value="title">Title (নাম)</option>
//                         <option value="rating">Rating (রেটিং)</option>
//                     </select>
//                     <button
//                         onClick={() => setSort({ ...sort, order: sort.order === 'asc' ? 'desc' : 'asc' })}
//                         className="p-2 bg-yellow-600 text-gray-900 rounded-lg hover:bg-yellow-500 transition"
//                         title={`Change to ${sort.order === 'asc' ? 'Descending' : 'Ascending'}`}
//                     >
//                         {sort.order === 'asc' ? <SortAsc size={20} /> : <SortDesc size={20} />}
//                     </button>
//                 </div>

//                 {/* Filtering */}
//                 <div className="w-full md:w-auto">
//                     <span className="font-semibold text-yellow-500 flex items-center mb-2"><Filter size={20} className="mr-1" /> Filter By Genre (জেনার অনুযায়ী):</span>
//                     <div className="flex flex-wrap gap-2">
//                         {allGenres.map(genre => (
//                             <button
//                                 key={genre}
//                                 onClick={() => handleGenreToggle(genre)}
//                                 className={`px-3 py-1 text-xs rounded-full font-medium transition duration-200 
//                                     ${selectedGenres.includes(genre)
//                                         ? 'bg-yellow-600 text-gray-900 shadow-md'
//                                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                                     }`
//                                 }
//                             >
//                                 {genre}
//                             </button>
//                         ))}
//                         {selectedGenres.length > 0 && (
//                             <button
//                                 onClick={() => setSelectedGenres([])}
//                                 className="px-3 py-1 text-xs rounded-full font-medium transition duration-200 bg-red-600 text-white hover:bg-red-500"
//                             >
//                                 Clear (মুছুন)
//                             </button>
//                         )}
//                     </div>
//                 </div>

//             </div>
//             {/* --- Item List (কার্ড ভিউ) --- */}
//             {filteredAndSortedItems.length === 0 ? (
//                 <div className="text-center text-lg text-gray-400 p-10 bg-gray-800 rounded-xl">
//                     No games match the current filters. (ফিল্টারের সাথে কোনো গেম মেলেনি।)
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {filteredAndSortedItems.map(item => (
//                         <div
//                             key={item.id}
//                             className="flex flex-col rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 hover:shadow-yellow-500/50 transition duration-300 transform hover:scale-[1.02] cursor-pointer"
//                             style={{ height: '400px' }} // Fixed Card Height
//                             onClick={() => setCurrentItem(item)}
//                         >
//                             <div className="h-1/2 overflow-hidden">
//                                 <img
//                                     src={item.imgSrc}
//                                     alt={item.title}
//                                     className="w-full h-full object-cover"
//                                     onError={(e) => e.target.src = `${IMAGE_PLACEHOLDER}ImageLoadError`}
//                                 />
//                             </div>
//                             <div className="p-4 text-white h-1/2 flex flex-col justify-between">
//                                 <div>
//                                     <h3 className="text-lg font-bold text-yellow-500 truncate">{item.title}</h3>
//                                     <p className="text-xs text-gray-400 mt-1 mb-2">{item.description}</p>
//                                 </div>
//                                 <div className="flex items-center justify-between pt-2 border-t border-gray-700">
//                                     <span className="text-sm font-semibold flex items-center">
//                                         {item.rating} <Star className="w-3 h-3 ml-1 fill-yellow-500 text-yellow-500" />
//                                     </span>
//                                     <button
//                                         onClick={(e) => { e.stopPropagation(); setCurrentItem(item); }}
//                                         className="bg-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold hover:bg-yellow-500 transition shadow-md"
//                                     >
//                                         Details
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AllGamesPage;

import React from 'react'

export default function AllGames() {
  return (
    <div>AllGames</div>
  )
}
