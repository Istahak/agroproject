import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm.trim()); // Pass trimmed search term to parent for filtering
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        type="button" // Set type as "button" to prevent form submission
        className="w-200 h-10 btn-circle bg-sky-500 text-white"
        onClick={handleClick}
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
};

export default SearchInput;
