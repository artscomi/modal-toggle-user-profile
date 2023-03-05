import React, { useState, useEffect } from "react";
import { UserProfile as UserProfileType } from "types.d";

export const UserProfile: React.FC<{
  userProfile: UserProfileType | undefined;
}> = ({ userProfile }) => {
  const [isLoaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(false);
  }, [userProfile]);

  if (!userProfile) {
    return null;
  }

  return (
    <div className="user-profiles-wrapper">
      <div className="user-profile">
        <div className={isLoaded ? "imageLoaded" : "imageSkeleton"} />
        <img
          className="user-profile_image"
          style={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          width={300}
          height={300}
          src={userProfile.avatar}
          alt=""
          onLoad={(e) => {
            setLoaded(true);
          }}
        />

        <div className="user-profile_info">
          <p className="user-profile_name">
            {`${userProfile.first_name} ${userProfile.last_name}`}
          </p>
        </div>
      </div>
    </div>
  );
};
