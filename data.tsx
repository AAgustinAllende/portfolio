import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Code, Paintbrush, Palette, Lightbulb, BadgeCheck, Instagram, Facebook, Mail } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/agus.allende7/",
    },
    {
        id: 3,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/aguus.allende.7",
    },
    {
        id: 4,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "https://mail.google.com/mail/u/0/?pli=1#inbox",
    }
    
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Estudiante de Analista en Sistemas",
        subtitle: "Institución Cervantes",
        description: "Cursando la carrera de Analista en Sistemas, adquiriendo conocimientos en desarrollo de software, bases de datos y gestión de proyectos.",
        date: "2024 - Actualidad",
    },
    {
        id: 2,
        title: "Curso de Desarrollo Web",
        subtitle: "Coderhouse",
        description: "Formación en tecnologías web esenciales como HTML, CSS, SASS y Github, con enfoque en buenas prácticas y diseño responsivo.",
        date: "2023",
    },
    {
        id: 3,
        title: "Curso de JavaScript",
        subtitle: "Coderhouse",
        description: "Profundización en JavaScript moderno, manipulaciones del DOM, asincronía y buenas prácticas en desarrollo frontend.",
        date: "2023",
    },
    {
        id: 4,
        title: "Curso de ReactJS",
        subtitle: "Coderhouse",
        description: "Aprendizaje de la biblioteca React para la creación de interfaces dinámicas y componentes reutilizables en aplicaciones web modernas.",
        date: "2023",
    },
    {
        id: 5,
        title: "Curso de Diseño y Arquitectura Backend",
        subtitle: "Coderhouse",
        description: "Enfoque en patrones de diseño, arquitecturas escalables y buenas prácticas para la construcción de servidores robustos.",
        date: "2024",
    },
];


export const dataCounter = [
    {
        id: 0,
        text: "Cursos y certificaciones en desarrollo web y backend",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        text: "Experiencia en proyectos personales y académicos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        text: "Desarrollo de aplicaciones web con tecnologías modernas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        text: "Habilidades en JavaScript, React y Node.js",
        lineRight: false,
        lineRightMobile: false,
    },
];



export const serviceData = [
    {
        icon: <Code />,
        title: "Desarrollo Frontend",
        description: "Creación de interfaces web dinámicas y responsivas con HTML, CSS y JavaScript.",
    },
    {
        icon: <Paintbrush />,
        title: "Diseño con Bootstrap",
        description: "Uso de Bootstrap para construir sitios modernos, accesibles y adaptables a cualquier dispositivo.",
    },
    {
        icon: <Palette />,
        title: "Estilos con SASS",
        description: "Aplicación de SASS para optimizar y estructurar mejor los estilos de los proyectos.",
    },
    {
        icon: <BadgeCheck />,
        title: "Aplicaciones con React",
        description: "Desarrollo de aplicaciones web interactivas utilizando ReactJS y componentes reutilizables.",
    },
    {
        icon: <Lightbulb />,
        title: "Aprendizaje Continuo",
        description: "Siempre explorando nuevas tecnologías para mejorar mis habilidades en desarrollo web.",    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Music Player",
        image: "/music-player.png",
        urlGithub: "https://github.com/AAgustinAllende/musicPlayer",
        urlDemo: "https://music-audioplayer.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web",
        image: "/desarrollo-web.png",
        urlGithub: "https://github.com/AAgustinAllende/PF-Allende",
        urlDemo: "https://corsodiitaliano.netlify.app/",
    },
    {
        id: 3,
        title: "Online Banking",
        image: "/online-banking.png",
        urlGithub: "https://github.com/AAgustinAllende/online-banking",
        urlDemo: "https://tubanco-online.netlify.app/",
    },
    {
        id: 4,
        title: "Login Node.js",
        image: "/Login-Node.js.png",
        urlGithub: "https://github.com/AAgustinAllende/NodeLogin",
        urlDemo: "https://nodelogin-7j0g.onrender.com/",
    },
    {
        id: 5,
        title: "E-commerce web",
        image: "/AFA-store.png",
        urlGithub: "https://github.com/AAgustinAllende/e-commerce",
        urlDemo: "https://afashop-ecommerce.netlify.app/",
    }
];

