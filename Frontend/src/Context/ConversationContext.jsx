import React, { createContext, useState } from 'react';

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <ConversationContext.Provider value={{ selectedConversation, setSelectedConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};
