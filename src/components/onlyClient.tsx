import { useIsClient } from "~/hooks/useIsClient";

// Only render children on second client side render
// basically after hydration, used to avoid SSR issues
// and hydration errors
export const OnlyClient = <T,>({ children }: { children: T }) => {
    const isClient = useIsClient();
    return isClient ? children : null;
};
