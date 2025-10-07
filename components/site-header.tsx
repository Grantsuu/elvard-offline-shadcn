"use client"
import { DynamicBreadcrumbs } from "@/components/dynamic-breadcrumbs";
import { SidebarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
    const { toggleSidebar } = useSidebar()

    return (
        <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
            <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
                <Button
                    className="h-8 w-8"
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                >
                    <SidebarIcon />
                </Button>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <div className="flex flex-row items-center gap-2 font-bold text-lg p-1 px-3 outline-hidden rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src='/dragon.png' alt='Elvard logo' />
                    </Avatar>
                    Elvard
                </div>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <DynamicBreadcrumbs />
                <div className="w-full sm:ml-auto sm:w-auto">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
