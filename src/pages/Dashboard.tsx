
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const dashboardData = [
  { month: 'Jan', revenue: 45000, visitors: 12400, conversions: 2400, leads: 1200 },
  { month: 'Feb', revenue: 52000, visitors: 13900, conversions: 2800, leads: 1400 },
  { month: 'Mar', revenue: 48000, visitors: 15200, conversions: 3200, leads: 1600 },
  { month: 'Apr', revenue: 61000, visitors: 16800, conversions: 3600, leads: 1800 },
  { month: 'May', revenue: 58000, visitors: 18500, conversions: 4200, leads: 2100 },
  { month: 'Jun', revenue: 67000, visitors: 19200, conversions: 4800, leads: 2400 },
];

const channelData = [
  { channel: 'Social Media', cost: 12000, revenue: 35000, roi: 191 },
  { channel: 'Google Ads', cost: 18000, revenue: 42000, roi: 133 },
  { channel: 'Email Marketing', cost: 3000, revenue: 15000, roi: 400 },
  { channel: 'Content Marketing', cost: 8000, revenue: 22000, roi: 175 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Marketing Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your marketing performance and insights</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link to="/analytics">View Analytics</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$331,000</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Website Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96,100</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">21,000</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                +15.8% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">21.8%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                -2.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Visitors Trend</CardTitle>
              <CardDescription>Monthly performance over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={dashboardData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="visitors" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Channel ROI</CardTitle>
              <CardDescription>Return on investment by channel</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={channelData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="channel" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="roi" fill="#8B5CF6" name="ROI %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Conversion Funnel Analysis</CardTitle>
            <CardDescription>Track user journey from visitor to customer</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={3} name="Visitors" />
                <Line type="monotone" dataKey="leads" stroke="#10B981" strokeWidth={3} name="Leads" />
                <Line type="monotone" dataKey="conversions" stroke="#F59E0B" strokeWidth={3} name="Conversions" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
