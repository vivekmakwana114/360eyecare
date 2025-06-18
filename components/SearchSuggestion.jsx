"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const SearchSuggestion = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery.trim() === '') {
                setSuggestions([]);
                return;
            }
            
            const fetchSuggestions = async () => {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_BASE_URL}/posts?search=${encodeURIComponent(searchQuery)}`);
                    if (!res.ok) throw new Error('Failed to fetch');
                    const data = await res.json();
                    setSuggestions(Array.isArray(data) ? data : []);
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                    setSuggestions([]);
                }
            };
            
            fetchSuggestions();
        }, 300); // 300ms debounce

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

  

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
                setSearchQuery(searchQuery);
                setSuggestions(suggestions);
        }
        else if (e.key === 'Escape') {
            setSearchQuery('');
            setSuggestions([]);
        }
    };

    return (
        <div className="p-6 flex-col gap-4 bg-[#EFEFEF] hidden lg:flex">
            <p className="font-medium text-[18px] text-[#28305F]">
                Search
            </p>
            <div className="relative">
                <div className="flex flex-row items-center">
                    <input 
                        type="text"
                        placeholder="Search"
                        className="border border-[#E1E6EB] p-3 flex-1 focus:outline-none focus:border-[#41BBC8] transition-colors h-[42px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={(e) => setSearchQuery(e.target.value)} >
                        <Image src="/Icons/searchIcon.svg" alt="searchIcon" width={42} height={42} />
                    </button>
                </div>
                
                {/* Dropdown positioned relative to the search container */}
                {suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 z-10 bg-white rounded-lg shadow-lg mt-1 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        <ul className="py-2">
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion.id}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                                    onClick={() => {
                                        router.push(`/${suggestion.slug}`);
                                        setSearchQuery('');
                                        setSuggestions([]);
                                    }}
                                >
                                    {suggestion.title.rendered}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchSuggestion