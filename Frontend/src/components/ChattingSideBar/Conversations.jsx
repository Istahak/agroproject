import React, { useState } from 'react';
import Conversation from './Conversation';
import SearchInput from './SearchInput'; // Assuming it's in the same directory

const Conversations = () => {
  const [experts, setExperts] = useState(getExperts());

  // Function to filter experts based on search term
  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      // If search term is empty, reset to all experts
      setExperts(getExperts());
    } else {
      // Filter experts based on search term
      const filteredExperts = getExperts().filter((expert) =>
        expert.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setExperts(filteredExperts);
    }
  };

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
