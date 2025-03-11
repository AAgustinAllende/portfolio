"use client";
import Image from "next/image";
import MotionTransition from "./TransitionComponent";

const Avatar = () => {
  return (
    <div className="relative w-full h-full"> 
      <MotionTransition position="bottom" className="absolute bottom-[-750px] right-0 hidden md:inline-block">
        <Image 
          src="https://cdn3d.iconscout.com/3d/premium/thumb/desarrollador-masculino-8184995-6547028.png" 
          width={300} 
          height={300} 
          className="w-auto h-auto" 
          alt="Avatar"
        />
      </MotionTransition>
    </div>
  );
};

export default Avatar;
