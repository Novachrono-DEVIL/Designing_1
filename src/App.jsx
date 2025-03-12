import React from "react";
import "./App.css";
import UserCard from "./components/cart/usercard"; 

function App() {
  const cards = Array.from({ length: 10 });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((_, index) => (
          <UserCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
