import Link from "next/link";
import { type HTMLAttributes, type ReactNode } from "react";
import { Icons } from "~/components/icons";
import { ThemeToggle } from "~/components/themeToggle";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/ui";
import { siteConfig } from "~/config/site";
import { type VariantProps } from "class-variance-authority";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

type NavLinkProps = {
    children: ReactNode;
    href: string;
    newTab?: boolean;
    size?: VariantProps<typeof buttonVariants>["size"];
} & HTMLAttributes<HTMLDivElement>;
const NavLink = ({ children, href, newTab, className, size, ...props }: NavLinkProps) => {
    return (
        <Link href={href} target={newTab ? "_blank" : ""}>
            <div
                className={cn(
                    buttonVariants({
                        variant: "ghost",
                        size: size ?? "icon",
                    }),
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </Link>
    );
};

export const Naviation = () => {
    return (
        <div
            className={
                "flex h-14 w-full items-center justify-between border-b bg-slate-50 px-4 align-middle  dark:bg-neutral-950"
            }
        >
            <p>{siteConfig.name}</p>
            <div className={"flex items-center"}>
                <NavLink href={siteConfig.links.docs} className={"flex gap-1"} size={"sm"}>
                    <Icons.book className="h-4 w-4" />
                    Docs
                </NavLink>
                <NavLink href={siteConfig.links.github}>
                    <Icons.github className="h-4 w-4" />
                </NavLink>
                <NavLink href={siteConfig.links.discord}>
                    <Icons.discord className="h-4 w-4" />
                </NavLink>
                <ThemeToggle />
            </div>
        </div>
    );
};
