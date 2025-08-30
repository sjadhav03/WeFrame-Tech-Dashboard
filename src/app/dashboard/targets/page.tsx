import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  TrendingUp, 
  DollarSign, 
  Users, 
  MapPin, 
  Star,
  Calendar,
  Award
} from 'lucide-react';

export default function Targets() {
  const businessTargets = [
    {
      category: "Revenue",
      icon: DollarSign,
      targets: [
        { 
          name: "Monthly Revenue", 
          current: 450000, 
          target: 500000, 
          unit: "$", 
          progress: 90,
          period: "This Month"
        },
        { 
          name: "Quarterly Revenue", 
          current: 1350000, 
          target: 1500000, 
          unit: "$", 
          progress: 90,
          period: "Q3 2024"
        },
        { 
          name: "Annual Revenue", 
          current: 4200000, 
          target: 6000000, 
          unit: "$", 
          progress: 70,
          period: "2024"
        }
      ]
    },
    {
      category: "Growth",
      icon: TrendingUp,
      targets: [
        { 
          name: "Customer Acquisition", 
          current: 1245, 
          target: 1500, 
          unit: "", 
          progress: 83,
          period: "This Quarter"
        },
        { 
          name: "Market Expansion", 
          current: 3, 
          target: 5, 
          unit: " regions", 
          progress: 60,
          period: "2024"
        },
        { 
          name: "Brand Recognition", 
          current: 65, 
          target: 80, 
          unit: "%", 
          progress: 81,
          period: "Annual"
        }
      ]
    },
    {
      category: "Quality",
      icon: Star,
      targets: [
        { 
          name: "Customer Satisfaction", 
          current: 4.8, 
          target: 4.9, 
          unit: "/5", 
          progress: 98,
          period: "Current"
        },
        { 
          name: "Service Quality Score", 
          current: 92, 
          target: 95, 
          unit: "%", 
          progress: 97,
          period: "Monthly Avg"
        },
        { 
          name: "Resolution Time", 
          current: 2.4, 
          target: 2.0, 
          unit: " hours", 
          progress: 83,
          period: "Average"
        }
      ]
    }
  ];

  const milestones = [
    {
      title: "First Quarter Success",
      description: "Exceeded revenue target by 15%",
      date: "March 2024",
      status: "Completed",
      achievement: "+15% above target"
    },
    {
      title: "Regional Expansion",
      description: "Successfully launched in 2 new regions",
      date: "June 2024",
      status: "Completed",
      achievement: "2 new markets"
    },
    {
      title: "Technology Upgrade",
      description: "Complete platform modernization",
      date: "August 2024",
      status: "In Progress",
      achievement: "75% complete"
    },
    {
      title: "Team Scaling",
      description: "Expand team to 50+ members",
      date: "December 2024",
      status: "Planned",
      achievement: "Currently 35 members"
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-green-500";
    if (progress >= 70) return "bg-blue-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Business Targets</h1>
          <p className="text-gray-600">Track your business goals and performance metrics across key areas</p>
        </div>

        {/* Overall Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Total Targets</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">On Track</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-gray-600">Behind Schedule</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">82%</p>
                  <p className="text-sm text-gray-600">Avg Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Target Categories */}
        <div className="space-y-8">
          {businessTargets.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-teal-600" />
                    {category.category} Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.targets.map((target, targetIndex) => (
                      <div key={targetIndex} className="p-4 bg-gray-50 rounded-lg">
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-1">{target.name}</h4>
                          <p className="text-xs text-gray-500">{target.period}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-xs text-gray-600">Current</p>
                              <p className="text-lg font-bold text-gray-900">
                                {target.unit === "$" ? target.unit : ""}
                                {target.unit === "$" ? formatNumber(target.current) : target.current}
                                {target.unit !== "$" ? target.unit : ""}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-600">Target</p>
                              <p className="text-lg font-bold text-gray-700">
                                {target.unit === "$" ? target.unit : ""}
                                {target.unit === "$" ? formatNumber(target.target) : target.target}
                                {target.unit !== "$" ? target.unit : ""}
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{target.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getProgressColor(target.progress)}`}
                                style={{ width: `${target.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Key Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full mt-1 ${
                      milestone.status === 'Completed' ? 'bg-green-500' :
                      milestone.status === 'In Progress' ? 'bg-blue-500' :
                      'bg-gray-300'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={
                          milestone.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-600'
                        }>
                          {milestone.status}
                        </Badge>
                        <span className="text-xs text-gray-500">{milestone.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{milestone.description}</p>
                    <p className="text-sm font-medium text-teal-600">{milestone.achievement}</p>
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