import Image from "next/image";
import MotionTransition from "./TransitionComponent";

const AvatarServices = () => {
    return ( 
        <MotionTransition position="right"
        className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="https://static.vecteezy.com/system/resources/thumbnails/035/490/094/small/ai-generated-3d-cute-cartoon-call-center-character-png.png" width={300} height={300}
            className="w-[350px] h-full" alt="Avatar"/>

        </MotionTransition>
     );
}
 
export default AvatarServices;