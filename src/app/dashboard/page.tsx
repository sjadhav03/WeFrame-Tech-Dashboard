import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Circle, Award, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const franchiseeAvatars = [
    { id: 1, src: "/api/placeholder/32/32", alt: "User 1", fallback: "U1" },
    { id: 2, src: "/api/placeholder/32/32", alt: "User 2", fallback: "U2" },
    { id: 3, src: "/api/placeholder/32/32", alt: "User 3", fallback: "U3" },
    { id: 4, src: "/api/placeholder/32/32", alt: "User 4", fallback: "U4" },
    { id: 5, src: "/api/placeholder/32/32", alt: "User 5", fallback: "U5" }
  ];

  const prospectLeads = [
    { id: 1, name: "Wade Warren", stage: "Initial Inquiry", fallback: "WW" },
    { id: 2, name: "Ava Wright", stage: "Initial Inquiry", fallback: "AW" },
    { id: 3, name: "Cody Fisher", stage: "Initial Inquiry", fallback: "CF" }
  ];

  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true }
  ];

  const remainingSteps = [
    { name: "Financial Integration", completed: false },
    { name: "Final Review", completed: false }
  ];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Account Progress */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Account Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Circular Progress */}
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0891b2"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${85 * 2.51} 251.2`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">85%</span>
                </div>
              </div>
            </div>

            {/* Steps Completed */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Steps Completed</h4>
              <div className="space-y-2">
                {completedSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600 text-sm">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps Remaining */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Steps Remaining</h4>
              <div className="space-y-2">
                {remainingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Circle className="h-5 w-5 text-gray-300" />
                    <span className="text-gray-400 text-sm">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Middle Column */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 space-y-8">
            {/* Total Franchisees Onboard */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Total Franchisees Onboard</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-800">14</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 px-2 py-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  7.4%
                </Badge>
              </div>
              
              {/* Avatar Group */}
              <div className="flex items-center space-x-2 mb-6">
                {franchiseeAvatars.map((user) => (
                  <Avatar key={user.id} className="h-8 w-8 border-2 border-white">
                    <AvatarImage src={user.src} alt={user.alt} />
                    <AvatarFallback className="text-xs bg-gray-200">{user.fallback}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="text-sm text-gray-500 ml-2">+7</div>
              </div>

              {/* Progress Stages */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stage 1 (Initial Inquiry)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">02</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stage 2 (Document Submission)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">07</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                    <span className="text-sm text-gray-600">Stage 3 (Training)</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">05</span>
                </div>
              </div>
            </div>

            {/* Financial Wellbeing */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Wellbeing</h3>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-800">20</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 px-2 py-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  2.1%
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">Total Franchisees</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Target</p>
                  <p className="text-xl font-bold text-gray-800">$500,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current</p>
                  <p className="text-xl font-bold text-gray-800">$450,000</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6 space-y-8">
            {/* Key Insights & Feedback */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Insights & Feedback</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-800">10%</span>
                <Badge variant="outline" className="border-blue-200 text-blue-600 px-3 py-1">
                  <Award className="h-3 w-3 mr-1" />
                  Top Performer
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-6">Sales Growth</p>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Feedback</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Franchisees are requesting more detailed training materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Prospect Leads */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Prospect Leads</h3>
              <div className="space-y-4">
                {prospectLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/api/placeholder/40/40`} alt={lead.name} />
                        <AvatarFallback className="bg-gray-200 text-gray-600">{lead.fallback}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-gray-800">{lead.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">Stage: {lead.stage}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}