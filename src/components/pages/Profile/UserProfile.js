import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    
    if(!isAuthenticated) {
        return (
            <div style={{color: 'red'}}>Please Log In to View Profile Information</div>
        );
    } else {
        if (isLoading) {
            return (
                <div>Loading ...</div>
            );
        };
        const { picture, nickname, name, email } = user;
        return (
            isAuthenticated && (
                <div style={{ marginTop: '20px', marginLeft: '40px' }}>
                    <h1>User Profile</h1>
                    <div>
                        <img src={picture} alt={name} />
                        <h4>Name: {name}</h4>
                        <h4>Email: {email}</h4>
                    </div>
                </div>
            )
        );
    }
    
};
export default UserProfile;