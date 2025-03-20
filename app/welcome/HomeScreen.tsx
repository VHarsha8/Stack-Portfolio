import React from "react";

interface HomeScreenProps {
    
    profileImage?: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
    
    profileImage = "/profile.jpeg"
}) => {
    return (
        <div className="flex flex-row-reverse   justify-end">
            
            {/* Profile Image */}
            <div className="w-1/2 md:w-[200px]">
                <img src={profileImage} className="rounded-xl" alt="harsha profile" />
            </div>
        </div>
    );
};

export default HomeScreen;
