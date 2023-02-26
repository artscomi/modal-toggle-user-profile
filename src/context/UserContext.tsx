import React, { createContext, useContext, useState } from "react";
import { User } from "types.d";

type UserContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UserContext = createContext<UserContextType>({} as any);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UserContext);
};
