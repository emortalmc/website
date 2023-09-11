import Link from "next/link";
import { type HTMLAttributes, type ReactNode } from "react";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/utils/ui";
import { siteConfig } from "~/config/site";
import { type VariantProps } from "class-variance-authority";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MoonIcon, Settings, SunIcon, User } from "lucide-react";
import { useTheme } from "next-themes";

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
    const { setTheme } = useTheme();

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
                <NavLink href={siteConfig.links.github} newTab>
                    <Icons.github className="h-4 w-4" />
                </NavLink>
                <NavLink href={siteConfig.links.discord} newTab>
                    <Icons.discord className="h-4 w-4" />
                </NavLink>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <User
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                    size: "icon",
                                })
                                // "h-4 w-4"
                            )}
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>{"{USERNAME}"}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <SunIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

                                        <span className={"ml-6"}>Theme</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                                <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
                                                <span>Light</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                <MoonIcon className="mr-2 h-[1.2rem] w-[1.2rem]" />
                                                <span>Dark</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                                {/* <PlusCircle className="mr-2 h-4 w-4" /> */}
                                                <span>System</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>

                                {/* <ThemeToggle /> */}
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
