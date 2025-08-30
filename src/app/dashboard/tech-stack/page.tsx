import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  BarChart3,
  Settings,
  Globe,
  Zap,
  CheckCircle
} from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      icon: Code,
      technologies: [
        { name: "Next.js 14", version: "14.0.0", status: "Active", usage: 95 },
        { name: "React", version: "18.2.0", status: "Active", usage: 95 },
        { name: "TypeScript", version: "5.2.0", status: "Active", usage: 90 },
        { name: "Tailwind CSS", version: "3.3.0", status: "Active", usage: 88 }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      technologies: [
        { name: "Node.js", version: "20.5.0", status: "Active", usage: 85 },
        { name: "Express.js", version: "4.18.0", status: "Active", usage: 80 },
        { name: "PostgreSQL", version: "15.0", status: "Active", usage: 90 },
        { name: "Redis", version: "7.0", status: "Pending", usage: 0 }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      technologies: [
        { name: "Vercel", version: "Latest", status: "Active", usage: 100 },
        { name: "AWS S3", version: "Latest", status: "Active", usage: 75 },
        { name: "Cloudinary", version: "Latest", status: "Integration", usage: 50 },
        { name: "Docker", version: "24.0", status: "Pending", usage: 0 }
      ]
    },
    {
      category: "Security & Analytics",
      icon: Shield,
      technologies: [
        { name: "NextAuth.js", version: "4.24.0", status: "Integration", usage: 60 },
        { name: "Google Analytics", version: "4", status: "Active", usage: 85 },
        { name: "Sentry", version: "Latest", status: "Pending", usage: 0 },
        { name: "SSL Certificates", version: "Latest", status: "Active", usage: 100 }
      ]
    }
  ];

  const integrationStatus = [
    { name: "Payment Gateway", status: "Completed", progress: 100 },
    { name: "Email Service", status: "In Progress", progress: 75 },
    { name: "SMS Notifications", status: "Pending", progress: 0 },
    { name: "Analytics Dashboard", status: "In Progress", progress: 60 },
    { name: "File Storage", status: "Completed", progress: 100 },
    { name: "Authentication", status: "In Progress", progress: 80 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Integration':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Technology Stack</h1>
            <p className="text-gray-600">Overview of your technology infrastructure and integrations</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            Add Technology
          </Button>
        </div>

        {/* Tech Stack Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {['Frontend', 'Backend', 'Database', 'Cloud Services'].map((tech, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Code className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-medium text-gray-900">{tech}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active</span>
                    <span className="font-medium text-green-600">
                      {index === 0 ? '4' : index === 1 ? '3' : index === 2 ? '2' : '3'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Integration</span>
                    <span className="font-medium text-blue-600">
                      {index === 0 ? '1' : index === 1 ? '1' : index === 2 ? '0' : '2'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Categories */}
        <div className="space-y-8">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-teal-600" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{tech.name}</h4>
                            <p className="text-sm text-gray-500">Version: {tech.version}</p>
                          </div>
                          <Badge className={getStatusColor(tech.status)}>
                            {tech.status}
                          </Badge>
                        </div>
                        {tech.usage > 0 && (
                          <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>Implementation</span>
                              <span>{tech.usage}%</span>
                            </div>
                            <Progress value={tech.usage} className="h-2" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Integration Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Integration Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationStatus.map((integration, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{integration.name}</span>
                    <div className="flex items-center space-x-2">
                      {integration.progress === 100 && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      <Badge className={
                        integration.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        integration.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }>
                        {integration.status}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{integration.progress}%</span>
                    </div>
                    <Progress value={integration.progress} className="h-2" />
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