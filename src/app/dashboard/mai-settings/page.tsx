import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Settings, 
  Bot, 
  Mail, 
  MessageSquare, 
  BarChart3, 
  Target, 
  Users,
  Zap,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

export default function MAISettings() {
  const automationRules = [
    {
      id: 1,
      name: "Lead Follow-up Sequence",
      description: "Automatically follow up with new leads within 24 hours",
      category: "Lead Management",
      status: "Active",
      triggers: 245,
      success_rate: 78,
      last_triggered: "2 hours ago"
    },
    {
      id: 2,
      name: "Customer Onboarding Flow",
      description: "Guide new customers through the onboarding process",
      category: "Customer Success",
      status: "Active",
      triggers: 32,
      success_rate: 92,
      last_triggered: "1 day ago"
    },
    {
      id: 3,
      name: "Re-engagement Campaign",
      description: "Re-engage inactive customers with personalized content",
      category: "Retention",
      status: "Paused",
      triggers: 0,
      success_rate: 65,
      last_triggered: "1 week ago"
    },
    {
      id: 4,
      name: "Upselling Automation",
      description: "Identify and target customers for upselling opportunities",
      category: "Sales",
      status: "Active",
      triggers: 89,
      success_rate: 45,
      last_triggered: "3 hours ago"
    }
  ];

  const intelligenceMetrics = [
    {
      metric: "Conversion Rate",
      current: 12.5,
      previous: 11.2,
      unit: "%",
      trend: "up",
      description: "Overall lead to customer conversion rate"
    },
    {
      metric: "Customer Lifetime Value",
      current: 2400,
      previous: 2250,
      unit: "$",
      trend: "up",
      description: "Average revenue per customer over their lifetime"
    },
    {
      metric: "Acquisition Cost",
      current: 180,
      previous: 195,
      unit: "$",
      trend: "down",
      description: "Cost to acquire a new customer"
    },
    {
      metric: "Retention Rate",
      current: 89.5,
      previous: 87.3,
      unit: "%",
      trend: "up",
      description: "Percentage of customers retained over 12 months"
    }
  ];

  const campaignPerformance = [
    {
      name: "Email Marketing Campaign",
      type: "Email",
      sent: 5420,
      opened: 2384,
      clicked: 456,
      converted: 78,
      roi: 245
    },
    {
      name: "SMS Follow-up Series",
      type: "SMS",
      sent: 1250,
      opened: 1180,
      clicked: 289,
      converted: 45,
      roi: 180
    },
    {
      name: "Social Media Retargeting",
      type: "Social",
      sent: 8900,
      opened: 3200,
      clicked: 890,
      converted: 123,
      roi: 320
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Paused':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-green-100 text-green-700">Active</Badge>;
      case 'Paused':
        return <Badge className="bg-yellow-100 text-yellow-700">Paused</Badge>;
      default:
        return <Badge className="bg-red-100 text-red-700">Inactive</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">MAI Settings</h1>
            <p className="text-gray-600">Configure your Marketing Automation & Intelligence platform</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Settings className="h-4 w-4 mr-2" />
            Configure Settings
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600">Active Automations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">366</p>
                  <p className="text-sm text-gray-600">Triggers Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">73%</p>
                  <p className="text-sm text-gray-600">Avg Success Rate</p>
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
                  <p className="text-2xl font-bold text-gray-900">+23%</p>
                  <p className="text-sm text-gray-600">ROI Improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Automation Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Automation Rules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {automationRules.map((rule) => (
                <div key={rule.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getStatusIcon(rule.status)}
                        <h4 className="font-medium text-gray-900">{rule.name}</h4>
                        {getStatusBadge(rule.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{rule.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Category: {rule.category}</span>
                        <span>•</span>
                        <span>Last triggered: {rule.last_triggered}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">Configure</Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={rule.status === 'Active' ? 'text-yellow-600 hover:text-yellow-700' : 'text-green-600 hover:text-green-700'}
                      >
                        {rule.status === 'Active' ? 'Pause' : 'Activate'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Total Triggers</p>
                      <p className="text-lg font-bold text-gray-900">{rule.triggers}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Success Rate</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-lg font-bold text-gray-900">{rule.success_rate}%</p>
                        <div className="flex-1">
                          <Progress value={rule.success_rate} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Intelligence Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Intelligence Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {intelligenceMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                      <p className="text-xs text-gray-600">{metric.description}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {metric.trend === 'up' ? 
                        <TrendingUp className="h-4 w-4 text-green-500" /> : 
                        <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
                      }
                      <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.trend === 'up' ? '+' : '-'}
                        {Math.abs(((metric.current - metric.previous) / metric.previous * 100)).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {metric.unit === '$' ? '$' : ''}
                        {metric.current.toLocaleString()}
                        {metric.unit !== '$' ? metric.unit : ''}
                      </p>
                      <p className="text-xs text-gray-500">
                        Previous: {metric.unit === '$' ? '$' : ''}
                        {metric.previous.toLocaleString()}
                        {metric.unit !== '$' ? metric.unit : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campaign Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Campaign Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaignPerformance.map((campaign, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                      <Badge variant="outline" className="mt-1">
                        {campaign.type}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">+{campaign.roi}%</p>
                      <p className="text-xs text-gray-600">ROI</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-600">Sent</p>
                      <p className="font-bold text-gray-900">{campaign.sent.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Opened</p>
                      <p className="font-bold text-gray-900">{campaign.opened.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{((campaign.opened/campaign.sent)*100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Clicked</p>
                      <p className="font-bold text-gray-900">{campaign.clicked.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{((campaign.clicked/campaign.opened)*100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Converted</p>
                      <p className="font-bold text-gray-900">{campaign.converted}</p>
                      <p className="text-xs text-gray-500">{((campaign.converted/campaign.clicked)*100).toFixed(1)}%</p>
                    </div>
                    <div>
                      <Progress 
                        value={(campaign.converted/campaign.sent)*100} 
                        className="h-2 mt-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {((campaign.converted/campaign.sent)*100).toFixed(2)}% overall
                      </p>
                    </div>
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