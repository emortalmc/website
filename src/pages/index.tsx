import Head from "next/head";
import Image from "next/image";
import { EmortalCube } from "~/components/cube";
import { Naviation } from "~/components/navigation";
import { Card } from "~/components/ui/card";

export default function Home() {
    return (
        <>
            <Head>
                <title>EmortalMC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={"flex h-screen flex-col"}>
                <Naviation />
                <div className={"flex h-full w-full items-center"}>
                    <div className={"h-1/2 w-1/2"}>
                        <EmortalCube />
                    </div>
                    <div className={"flex w-1/2 items-center"}>
                        <div className={"w-full"}>
                            <div className={"flex flex-col gap-10"}>
                                <div className={"flex flex-col"}>
                                    <h1
                                        className={
                                            "max-w-fit bg-gradient-to-r from-[#ff7802] to-[#FF55FF] bg-clip-text text-8xl  font-extrabold text-transparent"
                                        }
                                    >
                                        EmortalMC
                                    </h1>
                                    <p className={"text-2xl"}>A Minecraft Server</p>
                                </div>
                                <div>
                                    <h2 className={"text-4xl"}>
                                        <span className={"font-bold"}>5,000+</span> Players
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex w-1/2 items-center"}>
                    <div className={"w-full"}>
                        <Image alt={"image"} src={""} />
                        <div>some text</div>
                    </div>
                </div>
            </div>
        </>
    );
}
