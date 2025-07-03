
import React from 'react';
import Sidebar from '@/components/Sidebar';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <ChatInterface />
    </div>
  );
};

export default Index;
