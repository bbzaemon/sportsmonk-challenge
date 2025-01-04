import { Bell, Calendar, ChevronRight, Download, Home, Inbox, LogOutIcon, MessageCircle, Moon, Search, Settings, Shield, Speaker, Sun, User, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

// Menu items.
const group1 = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Leader Board",
    url: "#",
    icon: Users,
  },
  {
    title: "Ground",
    url: "#",
    icon: Speaker,
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Notification",
    url: "#",
    icon: Bell,
  },
]

const group2 = [
{
    title: "  Followed Team",
    url: "#",
    icon: Shield,
},
{
    title: "Followed Players",
    url: "#",
    icon: User,
},
{
    title: "Followed Ground",
    url: "#",
    icon: Speaker,
},
]

const group3 = [
{
    title: "Settings",
    url: "#",
    icon: Settings,
},
{
    title: "Download The App",
    url: "#",
    icon: Download,
},
]

const user = {
  name: "Varun_kubal",
  email: "varun_kubal@gmail.com",
}

export function AppSidebar() {
  return (
    <Sidebar className="bg-card border-r-0">
     <SidebarContent>
        <div className="py-4">
         <div className="flex items-center my-4">
           <h1 className="text-xl font-thin italic m-auto">
             <span className="text-white">FOOTBALL</span>
             <span className="text-primary">SHURU</span>
           </h1>
         </div>
         <div className="relative mx-4">
           <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
           <input
             type="text"
             placeholder="Search"
             className="w-full placeholder:text-center rounded-lg py-2 pl-10 pr-6 bg-background focus:outline-none focus:ring-2 focus:ring-gray-700"
           />
         </div>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {group1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className={`text-xl ${item.isActive ? 'text-primary border-l-4 rounded-l-none border-primary' : ''}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {/* <SidebarMenuBadge>24</SidebarMenuBadge> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-4"/>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {group2.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>
                    <ChevronRight />
                  </SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator className="mx-4"/>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {group3.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-xl">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <div className="flex gap-2 p-1 my-4 items-center justify-inbetween rounded-xl bg-background">
             <Button className="flex flex-1 items-center gap-2 rounded-lg px-4 py-2 bg-transparent shadow-none">
               <Sun className="h-5 w-5" />
               <span>Light</span>
             </Button>
             <Button className="flex flex-1 items-center gap-2 rounded-lg px-4 py-2 bg-card">
               <Moon className="h-5 w-5" />
               <span>Dark</span>
             </Button>
           </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
         <div className="flex items-center justify-between rounded-lg gap-1">
           <div className="flex items-center gap-3 p-2 bg-background rounded-lg">
             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
               <User className="h-6 w-6 text-secondary" />
             </div>
             <div className="flex flex-col">
               <span className="text-sm font-medium text-primary">{user.name}</span>
               <span className="text-xs">{user.email}</span>
             </div>
           </div>
           <button className="rounded-lg p-2 bg-background">
             <LogOutIcon className="h-5 w-5 text-primary" />
           </button>
         </div>
      </SidebarFooter>
    </Sidebar>
  )
}
