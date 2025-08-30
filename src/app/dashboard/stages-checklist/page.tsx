import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Circle, UserCheck, FileText } from 'lucide-react';

export default function StagesChecklist() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Stages & Checklist</h1>
          <p className="text-gray-600">Track your onboarding progress through each stage</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-green-500" />
                Stage 1: Initial Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { task: "Profile Creation", completed: true },
                  { task: "Basic Information", completed: true },
                  { task: "Contact Verification", completed: true },
                  { task: "Agreement Review", completed: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.completed ? 
                      <CheckCircle className="h-5 w-5 text-green-500" /> : 
                      <Circle className="h-5 w-5 text-gray-300" />
                    }
                    <span className={item.completed ? "text-gray-700" : "text-gray-400"}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Stage 2: Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { task: "Business License Upload", completed: true },
                  { task: "Financial Documents", completed: true },
                  { task: "Insurance Verification", completed: false },
                  { task: "Legal Compliance Check", completed: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.completed ? 
                      <CheckCircle className="h-5 w-5 text-green-500" /> : 
                      <Circle className="h-5 w-5 text-gray-300" />
                    }
                    <span className={item.completed ? "text-gray-700" : "text-gray-400"}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}