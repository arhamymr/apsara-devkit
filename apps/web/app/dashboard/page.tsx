"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  BarChart3,
  Users,
  FolderOpen,
  TrendingUp,
  ArrowUpRight,
  MoreHorizontal,
  Calendar,
} from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,234",
    change: "+12%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Projects",
    value: "1,234",
    change: "+8%",
    trend: "up",
    icon: FolderOpen,
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+23%",
    trend: "up",
    icon: BarChart3,
  },
  {
    title: "Growth",
    value: "24.5%",
    change: "+4%",
    trend: "up",
    icon: TrendingUp,
  },
]

const recentActivity = [
  {
    id: 1,
    user: "John Doe",
    action: "created a new project",
    target: "Dashboard Redesign",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "updated the",
    target: "Component Library",
    time: "4 hours ago",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "completed task",
    target: "Authentication Flow",
    time: "6 hours ago",
  },
  {
    id: 4,
    user: "Sarah Wilson",
    action: "commented on",
    target: "UI Kit Update",
    time: "8 hours ago",
  },
]

const upcomingTasks = [
  { id: 1, title: "Review pull requests", priority: "high", dueDate: "Today" },
  { id: 2, title: "Update documentation", priority: "medium", dueDate: "Tomorrow" },
  { id: 3, title: "Fix responsive issues", priority: "low", dueDate: "This week" },
  { id: 4, title: "Team meeting", priority: "medium", dueDate: "Friday" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl  tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your projects.</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Last 30 Days
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl ">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1 text-emerald-500" />
                <span className="text-emerald-500 font-medium">{stat.change}</span>
                <span className="ml-1">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Your project performance overview</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <BarChart3 className="h-16 w-16 opacity-20" />
              <span className="ml-4">Chart visualization coming soon</span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      <span className="font-semibold">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium text-primary">{activity.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your pending tasks for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{task.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        task.priority === "high"
                          ? "destructive"
                          : task.priority === "medium"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {task.priority}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{task.dueDate}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used actions</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-start">
              <FolderOpen className="mr-2 h-4 w-4" />
              New Project
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
            <Button variant="outline" className="justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Reports
            </Button>
            <Button variant="outline" className="justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
