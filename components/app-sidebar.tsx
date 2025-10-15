"use client"

import type * as React from "react"
import {
  IconCamera,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconHelp,
  IconSearch,
  IconSettings,
  IconUsers,
  IconBuilding,
  IconLayoutGrid,
  IconSparkles,
  IconBolt,
  IconChecklist,
  IconAlertTriangle,
  IconCalendar,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Pulse",
      url: "#",
      icon: IconLayoutGrid, // dashboard/grid icon
    },
    {
      title: "Assistant",
      url: "#",
      icon: IconSparkles, // sparkles/AI icon
    },
    {
      title: "Research",
      url: "#",
      icon: IconSearch, // magnifying glass
    },
    {
      title: "Workflows",
      url: "#",
      icon: IconBolt, // lightning/zap
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers, // users icon
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Files",
      url: "#",
      icon: IconFolder,
      // children rendered as collapsible
      children: [
        { name: "Secured", url: "#", icon: IconFileDescription },
        { name: "Collaboration", url: "#", icon: IconFileAi },
        { name: "Archives", url: "#", icon: IconDatabase },
      ],
    },
    {
      name: "Obligations",
      url: "#",
      icon: IconChecklist,
    },
    {
      name: "Risks",
      url: "#",
      icon: IconAlertTriangle,
    },
    {
      name: "Critical Dates",
      url: "#",
      icon: IconCalendar,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconBuilding className="!size-5" />
                <span className="text-base font-semibold">Brick</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
