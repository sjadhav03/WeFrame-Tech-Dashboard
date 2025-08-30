import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Star, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function PreferredVendors() {
  const vendors = [
    {
      id: 1,
      name: "TechFlow Solutions",
      category: "Technology Partners",
      rating: 4.8,
      location: "San Francisco, CA",
      phone: "+1 (555) 123-4567",
      email: "contact@techflow.com",
      status: "Active",
      services: ["Cloud Infrastructure", "Software Development", "IT Support"],
      description: "Leading provider of cloud-based solutions and enterprise software development."
    },
    {
      id: 2,
      name: "Global Supply Chain Co.",
      category: "Supply Chain",
      rating: 4.6,
      location: "Chicago, IL",
      phone: "+1 (555) 987-6543",
      email: "info@globalsupply.com",
      status: "Active",
      services: ["Logistics", "Warehousing", "Distribution"],
      description: "Comprehensive supply chain management with global reach and local expertise."
    },
    {
      id: 3,
      name: "Creative Marketing Hub",
      category: "Marketing Services",
      rating: 4.9,
      location: "New York, NY",
      phone: "+1 (555) 456-7890",
      email: "hello@creativehub.com",
      status: "Pending",
      services: ["Digital Marketing", "Brand Strategy", "Content Creation"],
      description: "Award-winning marketing agency specializing in digital transformation and brand building."
    },
    {
      id: 4,
      name: "SecureFinance Partners",
      category: "Financial Services",
      rating: 4.7,
      location: "Boston, MA",
      phone: "+1 (555) 321-0987",
      email: "support@securefinance.com",
      status: "Active",
      services: ["Payment Processing", "Financial Planning", "Investment Advisory"],
      description: "Trusted financial services provider with expertise in franchise business models."
    }
  ];

  const categories = [
    { name: "Technology Partners", count: 5, active: 4 },
    { name: "Supply Chain", count: 3, active: 3 },
    { name: "Marketing Services", count: 4, active: 2 },
    { name: "Financial Services", count: 6, active: 5 },
    { name: "Legal Services", count: 2, active: 2 },
    { name: "Training Providers", count: 3, active: 3 }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Preferred Vendors</h1>
            <p className="text-gray-600">Manage your trusted business partners and service providers</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            Add New Vendor
          </Button>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 w-6 text-teal-600" />
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Vendors</span>
                    <span className="font-medium">{category.count}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Partners</span>
                    <span className="font-medium text-green-600">{category.active}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vendor List */}
        <div className="space-y-4">
          {vendors.map((vendor) => (
            <Card key={vendor.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                      <Badge className={
                        vendor.status === 'Active' ? 'bg-green-100 text-green-700' :
                        vendor.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                      }>
                        {vendor.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{vendor.category}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{vendor.rating}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{vendor.location}</span>
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{vendor.description}</p>
                    
                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vendor.services.map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>{vendor.phone}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>{vendor.email}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}