import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="user avatar" />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;