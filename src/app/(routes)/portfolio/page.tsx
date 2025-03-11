import AvatarPortfolio from "@/app/components/AvatarPortfolio";
import ContainerPage from "@/app/components/Container";
import PortfolioBox from "@/app/components/PortfolioBox";
import TransitionPage from "@/app/components/TransitionPage";
import { dataPortfolio } from "../../../../data";

const PortfolioPage = () => {
    return ( 
        <ContainerPage>
            <TransitionPage/>
            <AvatarPortfolio/>

            <div className="flex flex-col justify-center h-full">
    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
        Mis trabajos <span className="text-blue-300 font-bold">realizados</span>
    </h1>
    <div className="relative z-10 grid gap-6 mx-auto mt-4 max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {dataPortfolio.map((data) => (
            <div key={data.id} className="w-full sm:w-[500px] h-auto mx-auto">
                <PortfolioBox data={data} />
            </div>
        ))}
    </div>
</div>





        </ContainerPage>
     );
}
 
export default PortfolioPage;