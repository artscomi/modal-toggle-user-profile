import React from "react";
import { User } from "types.d";
import { useUsers } from "context/UserContext";

export const UsersList: React.FC<{
  activeId: string;
  getUserProfiles: (userId: string) => void;
}> = ({ activeId, getUserProfiles }) => {
  const { users } = useUsers();

  return (
    <div className="userList marginBottomM">
      {users.map((user: User, index) => {
        return (
          <button
            key={index}
            className={`userItem ${activeId === user.id ? "active" : ""}`}
            onClick={() => getUserProfiles(user.id)}
          >
            <p>{user.first_name}</p>
          </button>
        );
      })}
    </div>
  );
};
