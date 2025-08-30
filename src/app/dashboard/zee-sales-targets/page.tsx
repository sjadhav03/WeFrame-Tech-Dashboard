import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Users, 
  DollarSign,
  Target,
  Calendar
} from 'lucide-react';

export default function ZeeSalesTargets() {
  const regionalData = [
    {
      region: "North Zone",
      manager: "Sarah Johnson",
      sales: 125000,
      target: 150000,
      progress: 83,
      growth: 12.5,
      franchisees: 8,
      topPerformer: "Metro City Franchise"
    },
    {
      region: "South Zone",
      manager: "Mike Chen",
      sales: 98000,
      target: 120000,
      progress: 82,
      growth: -3.2,
      franchisees: 6,
      topPerformer: "Coastal Business Hub"
    },
    {
      region: "East Zone",
      manager: "David Rodriguez",
      sales: 87000,
      target: 100000,
      progress: 87,
      growth: 8.7,
      franchisees: 5,
      topPerformer: "Urban Express"
    },
    {
      region: "West Zone",
      manager: "Lisa Wang",
      sales: 140000,
      target: 130000,
      progress: 108,
      growth: 18.3,
      franchisees: 9,
      topPerformer: "Pacific Ventures"
    }
  ];

  const monthlyPerformance = [
    { month: "January", target: 400000, actual: 385000, progress: 96 },
    { month: "February", target: 420000, actual: 398000, progress: 95 },
    { month: "March", target: 450000, actual: 465000, progress: 103 },
    { month: "April", target: 480000, actual: 472000, progress: 98 },
    { month: "May", target: 500000, actual: 515000, progress: 103 },
    { month: "June", target: 520000, actual: 508000, progress: 98 }
  ];

  const topPerformers = [
    { name: "Pacific Ventures", region: "West Zone", sales: 45000, growth: 25.3 },
    { name: "Metro City Franchise", region: "North Zone", sales: 42000, growth: 18.7 },
    { name: "Urban Express", region: "East Zone", sales: 38000, growth: 15.2 },
    { name: "Coastal Business Hub", region: "South Zone", sales: 35000, growth: 12.8 },
    { name: "Central Plaza", region: "North Zone", sales: 33000, growth: 10.5 }
  ];

  const formatCurrency = (amount: number) => {
    return `${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Zee Sales Targets</h1>
          <p className="text-gray-600">Regional sales performance tracking and target management</p>
        </div>

        {/* Overall Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(450000)}</p>
                  <p className="text-sm text-gray-600">Total Sales</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(500000)}</p>
                  <p className="text-sm text-gray-600">Monthly Target</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">28</p>
                  <p className="text-sm text-gray-600">Active Franchisees</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">+9.1%</p>
                  <p className="text-sm text-gray-600">Overall Growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Regional Performance Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {regionalData.map((region, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{region.region}</h4>
                      <p className="text-sm text-gray-600">Manager: {region.manager}</p>
                    </div>
                    <Badge className={
                      region.progress >= 100 ? 'bg-green-100 text-green-700' :
                      region.progress >= 80 ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }>
                      {region.progress >= 100 ? 'Target Exceeded' : 
                       region.progress >= 80 ? 'On Track' : 'Behind Target'}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600">Current Sales</p>
                      <p className="text-lg font-bold text-gray-900">{formatCurrency(region.sales)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Target</p>
                      <p className="text-lg font-bold text-gray-700">{formatCurrency(region.target)}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{region.progress}%</span>
                    </div>
                    <Progress value={Math.min(region.progress, 100)} className="h-2" />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2">
                      {region.growth >= 0 ? 
                        <TrendingUp className="h-4 w-4 text-green-500" /> : 
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      }
                      <span className={region.growth >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {region.growth > 0 ? '+' : ''}{region.growth}%
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {region.franchisees} franchisees
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">Top Performer:</p>
                    <p className="font-medium text-gray-900">{region.topPerformer}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Performance Trend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Monthly Performance Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyPerformance.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{month.month} 2024</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                          {formatCurrency(month.actual)} / {formatCurrency(month.target)}
                        </span>
                        <Badge className={
                          month.progress >= 100 ? 'bg-green-100 text-green-700' :
                          month.progress >= 95 ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }>
                          {month.progress}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={Math.min(month.progress, 100)} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Top Performing Franchisees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-teal-600">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{performer.name}</p>
                        <p className="text-sm text-gray-600">{performer.region}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">{formatCurrency(performer.sales)}</p>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3 text-green-500" />
                        <span className="text-sm text-green-600">+{performer.growth}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quarterly Targets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Quarterly Targets Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { quarter: "Q1 2024", target: 1200000, actual: 1230000, status: "Completed" },
                { quarter: "Q2 2024", target: 1350000, actual: 1325000, status: "Completed" },
                { quarter: "Q3 2024", target: 1500000, actual: 1150000, status: "In Progress" },
                { quarter: "Q4 2024", target: 1600000, actual: 0, status: "Planned" }
              ].map((quarter, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-gray-900">{quarter.quarter}</h4>
                    <Badge className={
                      quarter.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      quarter.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }>
                      {quarter.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Target</span>
                      <span className="font-medium">{formatCurrency(quarter.target)}</span>
                    </div>
                    {quarter.actual > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Actual</span>
                        <span className="font-medium">{formatCurrency(quarter.actual)}</span>
                      </div>
                    )}
                    {quarter.status === 'In Progress' && (
                      <div className="mt-3">
                        <Progress value={77} className="h-2" />
                        <p className="text-xs text-gray-600 mt-1">77% of quarter elapsed</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}