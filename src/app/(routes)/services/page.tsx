import AvatarServices from "@/app/components/AvatarServices";
import SliderServices from "@/app/components/SliderServices";
import TransitionPage from "@/app/components/TransitionPage";

const ServicesPage = () => {
    return (  
        <>
        <TransitionPage/>
        <AvatarServices/>
        <div className="grid items-center justify-center h-screen max-w-5xl
        gap-6 mx-auto md:grid-cols-2 md:px-20">
            <div className="max-w-[450px] mt-20 md:mt-0">
                <h1 className="text-2xl leading-tight text-center md:text-left
                md-text-4xl md:mb-5">Mis
                <span className="font-bold text-blue-300">  servicios.</span>
                </h1>
                <p className="mb-3 text-xl text-gray-300">
                Soy un desarrollador frontend con conocimientos en HTML, CSS, JavaScript y React, 
                enfocado en crear interfaces atractivas, intuitivas y responsivas. Me apasiona el 
                diseño web y la optimización de la experiencia del usuario, aplicando buenas prácticas de accesibilidad y rendimiento. Siempre en constante aprendizaje, busco oportunidades para crecer profesionalmente y aportar soluciones innovadoras en el desarrollo web.
                </p>
                
            </div>
            <div>
                <SliderServices/>
            </div>

        </div>
        </>
    );
}
 
export default ServicesPage;