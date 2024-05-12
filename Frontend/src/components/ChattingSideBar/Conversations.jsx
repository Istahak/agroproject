import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";
import SearchInput from "./SearchInput"; // Assuming it's in the same directory
import axios from "axios";
const Conversations = () => {
  const [experts, setExperts] = useState([]);
  const [allExperts, setAllExperts] = useState([]);
  // Function to filter experts based on search term
  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      // If search term is empty, reset to all experts
      setExperts(allExperts);
    } else {
      // Filter experts based on search term
      const filteredExperts = allExperts.filter((expert) =>
        expert.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setExperts(filteredExperts);
    }
  };

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/experts");
        const expertsArray = response.data.map((expert) => ({
          id: expert.id,
          Name: expert.name,
        }));
        setExperts(expertsArray);
        setAllExperts(expertsArray);
      } catch (error) {
        console.error("Error fetching experts:", error);
      }
    };

    fetchExperts();
  }, []);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      <SearchInput onSearch={handleFilter} />
      <div className="divider px-3"></div>
      {experts.map((expert) => (
        <Conversation key={expert.id} id={expert.id} name={expert.Name} />
      ))}
    </div>
  );
};

// Function to get the list of experts
function getExperts() {
  let list = [];
  for (let i = 1; i <= 5; i++) {
    let expert = {
      id: i,
      Name: `Rifat ${i}`,
    };
    list.push(expert);
  }
  return list;
}

export default Conversations;
