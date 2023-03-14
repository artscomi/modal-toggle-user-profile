import React, { createContext, useContext, useMemo, useState } from "react";
import { User } from "types.d";

type UserContextType = {
  users: User[];
  setUsers: (users: User[]) => void;
};

export const UserContext = createContext<UserContextType>({} as any);

export const UserProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const contextValue = useMemo(() => {
    return { users, setUsers };
  }, [users, setUsers]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UserContext);
};
