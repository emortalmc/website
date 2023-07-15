import Head from "next/head";
import { Naviation } from "~/components/navigation";

export default function Home() {
    return (
        <>
            <Head>
                <title>EmortalMC</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Naviation />
        </>
    );
}
