
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Calendar, Download, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";

const audienceData = [
  { age: '18-24', male: 120, female: 180 },
  { age: '25-34', male: 350, female: 320 },
  { age: '35-44', male: 280, female: 290 },
  { age: '45-54', male: 200, female: 210 },
  { age: '55+', male: 150, female: 170 },
];

const deviceData = [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 40, color: '#10B981' },
  { name: 'Tablet', value: 15, color: '#F59E0B' },
];

const campaignData = [
  { campaign: 'Summer Sale', clicks: 12400, impressions: 89000, ctr: 13.9, cost: 2400 },
  { campaign: 'Brand Awareness', clicks: 8900, impressions: 125000, ctr: 7.1, cost: 3200 },
  { campaign: 'Product Launch', clicks: 15600, impressions: 98000, ctr: 15.9, cost: 1800 },
  { campaign: 'Holiday Special', clicks: 9800, impressions: 76000, ctr: 12.9, cost: 2100 },
];

const geoData = [
  { country: 'United States', sessions: 45000, revenue: 125000 },
  { country: 'United Kingdom', sessions: 12000, revenue: 35000 },
  { country: 'Canada', sessions: 8500, revenue: 28000 },
  { country: 'Germany', sessions: 7200, revenue: 22000 },
  { country: 'France', sessions: 6800, revenue: 19000 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Analytics</h1>
            <p className="text-gray-600 mt-2">Deep dive into your marketing data and audience insights</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="audience" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="geographic">Geographic</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
          </TabsList>

          <TabsContent value="audience" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Age and gender distribution of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={audienceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="male" fill="#3B82F6" name="Male" />
                      <Bar dataKey="female" fill="#EC4899" name="Female" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Interests</CardTitle>
                  <CardDescription>Top interests and behaviors of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Technology', 'Fashion', 'Sports', 'Travel', 'Food'].map((interest, index) => (
                      <div key={interest} className="flex items-center justify-between">
                        <span className="font-medium">{interest}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${85 - index * 15}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{85 - index * 15}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance Analysis</CardTitle>
                <CardDescription>Detailed metrics for all your marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart data={campaignData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="clicks" name="Clicks" />
                    <YAxis dataKey="ctr" name="CTR %" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="ctr" fill="#3B82F6" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="geographic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Performance</CardTitle>
                <CardDescription>Sessions and revenue by country</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={geoData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sessions" fill="#3B82F6" name="Sessions" />
                    <Bar dataKey="revenue" fill="#10B981" name="Revenue ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Device Distribution</CardTitle>
                  <CardDescription>How users access your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Performance Metrics</CardTitle>
                  <CardDescription>Key metrics by device type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {deviceData.map((device) => (
                      <div key={device.name} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{device.name}</h4>
                          <span className="text-sm text-gray-600">{device.value}%</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Bounce Rate:</span>
                            <span className="ml-2 font-medium">{Math.floor(Math.random() * 20 + 30)}%</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Avg. Session:</span>
                            <span className="ml-2 font-medium">{Math.floor(Math.random() * 3 + 2)}m {Math.floor(Math.random() * 60)}s</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
