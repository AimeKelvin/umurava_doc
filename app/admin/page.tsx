import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { docContents } from "@/lib/docs-data"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your documentation content from here.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{docContents.length}</div>
            <p className="text-xs text-muted-foreground">Documentation pages in the system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Documents updated in the last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Users with admin access</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="font-medium">Installation guide updated</p>
              <p className="text-sm text-muted-foreground">Updated by Admin</p>
            </div>
            <div className="text-sm text-muted-foreground">2 hours ago</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="font-medium">New API endpoint documentation added</p>
              <p className="text-sm text-muted-foreground">Created by Admin</p>
            </div>
            <div className="text-sm text-muted-foreground">Yesterday</div>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div>
              <p className="font-medium">Course creation guide updated</p>
              <p className="text-sm text-muted-foreground">Updated by Admin</p>
            </div>
            <div className="text-sm text-muted-foreground">3 days ago</div>
          </div>
        </div>
      </div>
    </div>
  )
}

