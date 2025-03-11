"use client"
import Image from "next/image";
import MotionTransition from "./TransitionComponent";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 left-0 hidden 
        md:inline-block md:absolute">
            <Image src="https://cdn3d.iconscout.com/3d/premium/thumb/programador-trabajando-en-el-proyecto-12499963-10193073.png?f=webp" width={300} height={300} className="w-full h-full" alt="avatarPortfolio"/>

        </MotionTransition>
     );
}
 
export default AvatarPortfolio;