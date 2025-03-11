import Image from "next/image";
import CoverParticles from "./components/CoverParticles";
import TransitionPage from "./components/TransitionPage";
import Introduction from "./components/Introduction";


export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
<CoverParticles/>
        <Introduction/>
      </div>
    </main>
  );
}
