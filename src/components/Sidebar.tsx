
import React, { useState } from 'react';
import { 
  User, 
  HelpCircle, 
  Zap, 
  Eye, 
  Users, 
  Settings,
  ChevronDown,
  ChevronRight,
  Plus,
  MessageSquare
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [isTasksExpanded, setIsTasksExpanded] = useState(true);

  const mainMenuItems = [
    { icon: User, label: '余俊', isUser: true },
    { icon: HelpCircle, label: '视频助理' },
    { icon: Zap, label: '精简模式' },
    { icon: Eye, label: '我的视频' },
    { icon: Users, label: '数字人' },
    { icon: Settings, label: '我的人设' }
  ];

  const taskItems = [
    { label: 'AI帮写：AI对人类是好是坏', isActive: true },
    { label: '搜索概括：加电的李域' },
    { label: 'AI帮写：福州旅游攻略' },
    { label: 'AI帮写：医美领域营' },
    { label: 'AI帮写：医美' }
  ];

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded text-white text-xs font-bold flex items-center justify-center">
              AI
            </div>
            <span className="font-medium text-gray-900">果冻分身</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">⚡ 10545.39</span>
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded text-white text-xs font-bold flex items-center justify-center">
              AI
            </div>
            <span>上海果冻</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          {/* New Task Button */}
          <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors mb-4 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>新任务</span>
          </button>

          {/* Main Menu */}
          <div className="space-y-1 mb-6">
            {mainMenuItems.map((item, index) => (
              <div key={index} className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors",
                item.isUser ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
              )}>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.isUser && <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">与</span>}
              </div>
            ))}
          </div>

          {/* Task Records */}
          <div className="space-y-2">
            <div 
              className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-gray-900"
              onClick={() => setIsTasksExpanded(!isTasksExpanded)}
            >
              {isTasksExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              <span className="font-medium">任务记录</span>
            </div>

            {isTasksExpanded && (
              <div className="ml-6 space-y-1">
                {taskItems.map((task, index) => (
                  <div key={index} className={cn(
                    "px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm",
                    task.isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                  )}>
                    {task.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
