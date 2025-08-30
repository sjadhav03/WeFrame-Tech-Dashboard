import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  BookOpen, 
  Video,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function PendingQuestions() {
  const supportTickets = [
    {
      id: "TKT-001",
      title: "Payment Processing Issue",
      category: "Billing",
      status: "Open",
      priority: "High",
      created: "2 hours ago",
      assigned: "Sarah Johnson"
    },
    {
      id: "TKT-002",
      title: "Dashboard Loading Slow",
      category: "Technical",
      status: "In Progress",
      priority: "Medium",
      created: "1 day ago",
      assigned: "Mike Chen"
    },
    {
      id: "TKT-003",
      title: "Training Material Request",
      category: "General",
      status: "Resolved",
      priority: "Low",
      created: "3 days ago",
      assigned: "David Rodriguez"
    },
    {
      id: "TKT-004",
      title: "API Integration Question",
      category: "Technical",
      status: "Open",
      priority: "High",
      created: "4 hours ago",
      assigned: "Lisa Wang"
    }
  ];

  const knowledgeBase = [
    {
      category: "Getting Started",
      articles: [
        { title: "Platform Overview", views: 245, updated: "2 days ago" },
        { title: "Account Setup Guide", views: 189, updated: "1 week ago" },
        { title: "First Steps Checklist", views: 156, updated: "3 days ago" }
      ]
    },
    {
      category: "Billing & Payments",
      articles: [
        { title: "Payment Methods", views: 98, updated: "5 days ago" },
        { title: "Invoice Management", views: 76, updated: "2 weeks ago" },
        { title: "Refund Policy", views: 112, updated: "1 month ago" }
      ]
    },
    {
      category: "Technical Support",
      articles: [
        { title: "API Documentation", views: 324, updated: "3 days ago" },
        { title: "Troubleshooting Guide", views: 201, updated: "1 week ago" },
        { title: "System Requirements", views: 145, updated: "2 weeks ago" }
      ]
    }
  ];

  const supportContacts = [
    {
      type: "Phone Support",
      description: "24/7 dedicated support line",
      contact: "+1 (555) 123-HELP",
      availability: "24/7",
      icon: Phone
    },
    {
      type: "Email Support",
      description: "General inquiries and support",
      contact: "support@weframetech.com",
      availability: "24/7",
      icon: Mail
    },
    {
      type: "Live Chat",
      description: "Instant messaging support",
      contact: "Start Chat",
      availability: "Mon-Fri, 9AM-6PM EST",
      icon: MessageSquare
    },
    {
      type: "Emergency",
      description: "Critical system outages",
      contact: "+1 (555) 911-TECH",
      availability: "24/7",
      icon: AlertCircle
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return <Badge className="bg-yellow-100 text-yellow-700">Open</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>;
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-700">Resolved</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-600">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge className="bg-red-100 text-red-700">High</Badge>;
      case 'Medium':
        return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>;
      case 'Low':
        return <Badge className="bg-green-100 text-green-700">Low</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-600">{priority}</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Help & Support</h1>
            <p className="text-gray-600">Get assistance, browse documentation, and manage support tickets</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <HelpCircle className="h-4 w-4 mr-2" />
            New Support Ticket
          </Button>
        </div>

        {/* Support Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <h3 className="font-medium text-gray-900">{contact.type}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{contact.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{contact.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{contact.availability}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support Tickets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Recent Support Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                      {getStatusBadge(ticket.status)}
                      {getPriorityBadge(ticket.priority)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>ID: {ticket.id}</span>
                      <span>•</span>
                      <span>Category: {ticket.category}</span>
                      <span>•</span>
                      <span>Created: {ticket.created}</span>
                      <span>•</span>
                      <span>Assigned: {ticket.assigned}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Base */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Knowledge Base
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {knowledgeBase.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-gray-900">{category.category}</h3>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900">{article.title}</h4>
                          <span className="text-xs text-gray-500">{article.views} views</span>
                        </div>
                        <p className="text-xs text-gray-500">Updated {article.updated}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Training Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Video className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Video Tutorials</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Step-by-step video guides covering all platform features and best practices.
                </p>
                <Button variant="outline" className="w-full">
                  Browse Videos
                </Button>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Webinars & Workshops</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Live and recorded training sessions with product experts and industry specialists.
                </p>
                <Button variant="outline" className="w-full">
                  View Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}