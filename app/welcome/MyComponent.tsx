// MyComponent.tsx
import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className='flex flex-col  w-full border-red-600  m-auto  pb-6  h-auto justify-start items-start'>
     <h1 className='text-white/70 text-5xl selection:text-[#FFFF00] selection:bg-[#1111] font-semibold font-sans'> Developer <span className='text-red-500'>\</span> Design </h1> <br/>
     <h2 className='text-white text-sm selection:text-[#FFFF00] w-full md:w-4/6 selection:bg-[#1111] '>I blend creativity with technology to craft intuitive and engaging digital experiences. With expertise in UI/UX design and front-end development, I turn ideas into seamless, functional products. Passionate about innovation, I love exploring new tools, solving design challenges, and pushing boundaries in technology.</h2>
    </div>
  );
};

export default MyComponent;
