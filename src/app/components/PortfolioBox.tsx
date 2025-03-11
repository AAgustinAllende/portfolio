import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo, urlGithub } = data;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl h-full flex flex-col"
        >
            <h3 className="mb-4 text-xl text-center">{title}</h3>
            <div className="relative w-full h-[250px] mb-4">
                <Image
                    src={image}
                    alt="Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div className="flex gap-5 mt-5 justify-center">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-blue-400 hover:bg-blue-400/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;
