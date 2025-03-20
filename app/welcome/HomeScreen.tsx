import React from "react";

interface HomeScreenProps {
    name?: string;
    role?: string;
    profileImage?: string;
    available?: boolean; // Availability status
}

const HomeScreen: React.FC<HomeScreenProps> = ({
    name = "Harsha",
    role = "Developer / Designer",
    profileImage = "/profile.jpeg",
    available = true,
}) => {
    return (
        <div className="flex flex-row-reverse md:mt-6 gap-3 md:gap-5  justify-end">
            {/* User Details */}
            <div className="flex flex-col pb-4 gap-2">
                <h1 className="md:text-xl selection:text-[#FFFF00] selection:bg-[#111111] text-xl font-sans font-medium text-white/90">{name}</h1>
                <h1 className="md:text-lg selection:text-[#FFFF00] selection:bg-[#111111] text-md font-sans font-medium text-white/40">{role}</h1>

                {/* Availability Button */}
                <button className="relative flex items-center gap-2  mt-1 px-4 py-2  border border-white/30 rounded-lg  md:text-lg text-md text-white">
                    {/* Animated Dot */}
                    <span className="relative flex">
                        <span className={`absolute inline-flex md:h-2.5 md:w-2.5 w-3 h-3 rounded-full ${
                            available ? "bg-green-400 animate-ping" : "bg-red-400"
                        } opacity-75`}></span>
                        <span className={`relative inline-flex md:h-2.5 md:w-2.5 w-3 h-3 rounded-full ${
                            available ? "bg-green-400" : "bg-red-400"
                        }`}></span>
                    </span>

                    {/* Dynamic Button Text */}
                    {available ? "Available for work" : "Not available"}
                </button>
            </div>

            {/* Profile Image */}
            <div className="w-1/2 md:w-[200px]">
                <img src={profileImage} className="rounded-xl" alt={`${name}'s Profile`} />
            </div>
        </div>
    );
};

export default HomeScreen;
