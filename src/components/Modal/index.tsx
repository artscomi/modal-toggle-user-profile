import React, { useState, useEffect, useCallback } from "react";
import { Close } from "components/Icons/Close";
import { UsersList } from "components/UsersList";
import { UserProfile } from "components/UserProfile";
import { User } from "types.d";
import { Form } from "components/Form";
import { useUsers } from "context/UserContext";

export const Modal: React.FC<{ onClose: VoidFunction }> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userProfiles, setUsersProfiles] = useState<User | undefined>(
    undefined
  );
  const [activeId, setActiveId] = useState<string>("");
  const { users } = useUsers();
  const [size, setSize] = useState<number>(0);
  const { setUsers } = useUsers();

  const getUserProfiles = (userId: string) => {
    setUsersProfiles(users.find((user) => user.id === userId));
    setActiveId(userId);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://random-data-api.com/api/users/random_user?size=${size}`
      );
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
      setUsersProfiles(undefined);
    } catch (error) {
      console.error(error);
    }
  }, [size]);

  useEffect(() => {
    if (size && size <= 20) {
      fetchData();
    }
  }, [size]);

  return (
    <div className="modal-overlay" onClick={onClose} tabIndex={0} role="button">
      <div
        className="modal-content"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <Close />
        </button>
        {isLoading ? (
          <div className="loader" />
        ) : (
          <>
            <Form setSize={setSize} />
            <UsersList getUserProfiles={getUserProfiles} activeId={activeId} />
            <UserProfile userProfile={userProfiles} />
            {size > 20 && (
              <div className="error">
                <p>You can select up to 20 users, please try again</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
