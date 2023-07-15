import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class">
            {/* Leaving it here because im too lazy to readd it in the future, not needed right now */}
            {/* <SessionProvider session={session}> */}
            <Component {...pageProps} />
            {/* </SessionProvider> */}
        </ThemeProvider>
    );
};

export default api.withTRPC(MyApp);
