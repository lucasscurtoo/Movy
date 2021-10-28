import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    console.log(user)
    return (
      isAuthenticated && (
        <div className="w-25 h-full flex  items-center">
          <img className="w-8 rounded-2xl" src={user.picture} alt={user.name} />
          <h2 className="mx-2">Profile</h2>
        
        </div>
      )
    );
  };
  
  export default Profile;
