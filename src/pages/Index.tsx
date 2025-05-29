
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Target, BarChart as BarChartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const salesData = [
  { month: 'Jan', revenue: 4000, leads: 2400 },
  { month: 'Feb', revenue: 3000, leads: 1398 },
  { month: 'Mar', revenue: 2000, leads: 9800 },
  { month: 'Apr', revenue: 2780, leads: 3908 },
  { month: 'May', revenue: 1890, leads: 4800 },
  { month: 'Jun', revenue: 2390, leads: 3800 },
];

const pieData = [
  { name: 'Social Media', value: 35, color: '#3B82F6' },
  { name: 'Email', value: 25, color: '#10B981' },
  { name: 'Direct', value: 20, color: '#F59E0B' },
  { name: 'Referral', value: 20, color: '#EF4444' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Marketing Analytics
            <br />
            Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your marketing data into actionable insights with our comprehensive analytics platform. 
            Track performance, optimize campaigns, and drive growth with powerful visualizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Real-time Analytics</CardTitle>
              <CardDescription>
                Monitor your marketing performance with live data updates and instant insights.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Audience Insights</CardTitle>
              <CardDescription>
                Understand your customers better with detailed demographic and behavioral analysis.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Campaign Optimization</CardTitle>
              <CardDescription>
                Optimize your marketing campaigns with AI-powered recommendations and insights.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Sample Charts Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Powerful Analytics at Your Fingertips
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChartIcon className="h-5 w-5" />
                  Revenue & Leads Overview
                </CardTitle>
                <CardDescription>Monthly performance tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#3B82F6" name="Revenue ($)" />
                    <Bar dataKey="leads" fill="#10B981" name="Leads" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Channel performance breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
              <CardDescription>Track your marketing performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} />
                  <Line type="monotone" dataKey="leads" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Marketing?</h3>
          <p className="text-gray-600 mb-8">Join thousands of marketers who trust our platform for their analytics needs.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
            <Link to="/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
