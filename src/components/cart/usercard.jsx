import React from "react";

const UserCard = () => {
  const profilePhoto = "https://via.placeholder.com/150"; 
  const name = "John Joseph";
  const email = "johnJoseph@example.com";
  const phone = "9876543210";
  const address = "123,Thoothukudi, New York, USA";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-xl p-5">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="text-black-600 text-center">{email}</p>
      <p className="text-black-600 text-center">{phone}</p>
      <p className="text-black-600 text-center">{address}</p>
    </div>
  );
};

export default UserCard;
