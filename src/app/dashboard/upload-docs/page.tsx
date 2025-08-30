import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

export default function UploadDocs() {
  const files = [
    {
      id: 1,
      name: "Business_License.pdf",
      size: "2.4 MB",
      status: "completed",
      category: "Legal Documents"
    },
    {
      id: 2,
      name: "Financial_Statement_2024.xlsx",
      size: "1.8 MB",
      status: "completed",
      category: "Financial Documents"
    },
    {
      id: 3,
      name: "Training_Certificate.pdf",
      size: "956 KB",
      status: "pending",
      category: "Training Materials"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload Documents</h1>
          <p className="text-gray-600">Upload and manage your required documents</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Document Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size} • {file.category}</p>
                    </div>
                  </div>
                  <Badge className={
                    file.status === 'completed' ? 'bg-green-100 text-green-700' : 
                    file.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-blue-100 text-blue-700'
                  }>
                    {file.status === 'completed' ? 'Completed' : 
                     file.status === 'pending' ? 'Pending' : 'Processing'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}