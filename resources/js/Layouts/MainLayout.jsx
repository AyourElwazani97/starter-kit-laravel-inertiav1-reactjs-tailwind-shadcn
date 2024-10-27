import {
    CircleUserRound,
    GalleryVerticalEnd,
    LogOut,
    MoreHorizontal,
    Settings,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Head, useForm, usePage } from "@inertiajs/react";
import { ModeToggle } from "../Components/mode-toggle";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Tableau de bord",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                },
                {
                    title: "Project Structure",
                    url: "#",
                },
            ],
        },
        {
            title: "Marketplace",
            url: "#",
            items: [
                {
                    title: "Routing",
                    url: "#",
                },
                {
                    title: "Data Fetching",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Rendering",
                    url: "#",
                },
                {
                    title: "Caching",
                    url: "#",
                },
                {
                    title: "Styling",
                    url: "#",
                },
                {
                    title: "Optimizing",
                    url: "#",
                },
                {
                    title: "Configuring",
                    url: "#",
                },
                {
                    title: "Testing",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Deploying",
                    url: "#",
                },
                {
                    title: "Upgrading",
                    url: "#",
                },
                {
                    title: "Examples",
                    url: "#",
                },
            ],
        },
        {
            title: "API Reference",
            url: "#",
            items: [
                {
                    title: "Components",
                    url: "#",
                },
                {
                    title: "File Conventions",
                    url: "#",
                },
                {
                    title: "Functions",
                    url: "#",
                },
                {
                    title: "next.config.js Options",
                    url: "#",
                },
                {
                    title: "CLI",
                    url: "#",
                },
                {
                    title: "Edge Runtime",
                    url: "#",
                },
            ],
        },
        {
            title: "Architecture",
            url: "#",
            items: [
                {
                    title: "Accessibility",
                    url: "#",
                },
                {
                    title: "Fast Refresh",
                    url: "#",
                },
                {
                    title: "Next.js Compiler",
                    url: "#",
                },
                {
                    title: "Supported Browsers",
                    url: "#",
                },
                {
                    title: "Turbopack",
                    url: "#",
                },
            ],
        },
    ],
};

export default function MainLayout({ children }) {
    const { post } = useForm();
    const user = usePage().props.auth.user;
    const onLogout = (e) => {
        e.preventDefault();
        post("logout");
    };

    return (
        <>
        <Head title="Dashboard"/>
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" asChild>
                                    <a href="#">
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                            <GalleryVerticalEnd className="size-4" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 leading-none">
                                            <span className="font-semibold">
                                                Commercial
                                            </span>
                                            <span className="">v1.0.0</span>
                                        </div>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarMenu>
                                {data.navMain.map((item) => (
                                    <DropdownMenu key={item.title}>
                                        <SidebarMenuItem>
                                            <DropdownMenuTrigger asChild>
                                                <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                                    {item.title}{" "}
                                                    <MoreHorizontal className="ml-auto" />
                                                </SidebarMenuButton>
                                            </DropdownMenuTrigger>
                                            {item.items?.length ? (
                                                <DropdownMenuContent
                                                    side="bottom"
                                                    align="end"
                                                    className="min-w-56 rounded-lg"
                                                >
                                                    {item.items.map((item) => (
                                                        <DropdownMenuItem
                                                            asChild
                                                            key={item.title}
                                                        >
                                                            <a href={item.url}>
                                                                {item.title}
                                                            </a>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            ) : null}
                                        </SidebarMenuItem>
                                    </DropdownMenu>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <div className="p-1">
                            <Card className="shadow-none">
                                <CardContent className="grid gap-2.5 p-4">
                                    <form onSubmit={onLogout}>
                                        <Button
                                            className="w-full text-sidebar-primary-foreground shadow-none"
                                            size="sm"
                                        >
                                            Log out
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </SidebarFooter>
                    <SidebarRail />
                </Sidebar>
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                        <div className="flex items-center">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="ml-2 h-5 bg-black"
                            />
                        </div>
                        <div className="cursor-pointer">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon">
                                        <CircleUserRound
                                            size={30}
                                            className="h-6 w-6"
                                        />
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        {user.name}
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="cursor-pointer">
                                        <User className="mr-2 h-4 w-4" />
                                        <a href={route("profile.edit")}>
                                            Profile
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="cursor-pointer">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <form
                                            onSubmit={onLogout}
                                            className="m-0 p-0"
                                        >
                                            <button>Log out</button>
                                        </form>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <span className="ml-3">
                                <ModeToggle />
                            </span>
                        </div>
                    </header>
                    <main className="grid ">{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
