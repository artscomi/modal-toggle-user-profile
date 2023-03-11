import React from "react";
import { User } from "types.d";
import { useUsers } from "context/UserContext";

export const UsersList: React.FC<{
  activeId: string;
  getUserProfiles: (userId: string) => void;
}> = ({ activeId, getUserProfiles }) => {
  const { users } = useUsers();

  const getUsersPerRow = (users: User[], limit = 5) => {
    const numRows = Math.ceil(users.length / limit);
    const itemsPerRow = Math.ceil(users.length / numRows);
    const outputArr = [];
    for (let i = 0; i < numRows; i += 1) {
      outputArr.push(users.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
    }
    return outputArr;
  };

  const usersPerRow = getUsersPerRow(users, 5);

  const getButtonsPerRow = (users: User[]) => {
    return (
      <div className="user-list_row">
        {users.map((user: User) => {
          return (
            <button
              data-cy="user-tab"
              key={user.id}
              className={`user-item ${activeId === user.id ? "active" : ""}`}
              onClick={() => getUserProfiles(user.id)}
            >
              {user.first_name}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="user-list">
      {usersPerRow[0] && getButtonsPerRow(usersPerRow[0])}
      {usersPerRow[1] && getButtonsPerRow(usersPerRow[1])}
      {usersPerRow[2] && getButtonsPerRow(usersPerRow[2])}
    </div>
  );
};
