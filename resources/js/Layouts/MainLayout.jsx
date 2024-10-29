import {
    ChevronRight,
    CircleUserRound,
    GalleryVerticalEnd,
    LogOut,
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
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
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
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Tableau de bord",
            url: "dashboard",
            items: [],
        },
        {
            title: "Building Your Application",
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
        {
            title: "Community",
            url: "#",
            items: [
                {
                    title: "Contribution Guide",
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
            <Head title="Dashboard" />
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" asChild>
                                    <a href="#">
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-full">
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
                    <SidebarContent className="gap-0">
                        {/* We create a collapsible SidebarGroup for each parent. */}
                        {data.navMain.map((item) => (
                            <Collapsible
                                key={item.title}
                                title={item.title}
                                defaultOpen
                                className="group/collapsible"
                            >
                                <SidebarGroup>
                                    <SidebarGroupLabel
                                        asChild
                                        className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                    >
                                        <CollapsibleTrigger>
                                            {item.title}{" "}
                                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                        </CollapsibleTrigger>
                                    </SidebarGroupLabel>
                                    <CollapsibleContent>
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {item.items.map((item) => (
                                                    <SidebarMenuItem
                                                        key={item.title}
                                                    >
                                                        <SidebarMenuButton
                                                            asChild
                                                            isActive={
                                                                item.isActive
                                                            }
                                                        >
                                                            <a href={item.url}>
                                                                {item.title}
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </CollapsibleContent>
                                </SidebarGroup>
                            </Collapsible>
                        ))}
                    </SidebarContent>
                    <SidebarFooter>
                        <div className="p-1">
                            <Card className="shadow-none">
                                <CardContent className="grid gap-2.5 p-4">
                                    <form onSubmit={onLogout}>
                                        <Button className="w-full" size="sm">
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
                                className="mx-2 h-5 bg-black"
                            />
                            <strong>{user.name}</strong>
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
