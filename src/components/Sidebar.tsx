'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { 
  Home,
  CheckSquare,
  Upload,
  Users,
  Code,
  Target,
  BarChart3,
  Settings,
  HelpCircle
} from 'lucide-react';

const navigationItems = [
  { 
    name: 'Home', 
    href: '/dashboard',
    icon: Home,
    badge: null
  },
  { 
    name: 'Stages & Checklist', 
    href: '/dashboard/stages-checklist',
    icon: CheckSquare,
    badge: null
  },
  { 
    name: 'Upload Docs', 
    href: '/dashboard/upload-docs',
    icon: Upload,
    badge: null
  },
  { 
    name: 'Preferred Vendors', 
    href: '/dashboard/preferred-vendors',
    icon: Users,
    badge: null
  },
  { 
    name: 'Tech Stack', 
    href: '/dashboard/tech-stack',
    icon: Code,
    badge: null
  },
  { 
    name: 'Targets', 
    href: '/dashboard/targets',
    icon: Target,
    badge: null
  },
  { 
    name: 'Zee Sales Targets', 
    href: '/dashboard/zee-sales-targets',
    icon: BarChart3,
    badge: null
  },
  { 
    name: 'MAI Settings', 
    href: '/dashboard/mai-settings',
    icon: Settings,
    badge: null
  },
  { 
    name: 'Pending Questions', 
    href: '/dashboard/pending-questions',
    icon: HelpCircle,
    badge: 3
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-teal-700 text-white p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold">WeframeTech</h1>
      </div>
      
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-teal-600 text-white' 
                  : 'text-teal-200 hover:text-white hover:bg-teal-600'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.badge && (
                <Badge variant="secondary" className="bg-white text-teal-700 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}