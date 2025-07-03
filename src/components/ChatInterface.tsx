
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      setIsTyping(true);
      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      setMessage('');
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">三</span>
          </div>
          <div>
            <h2 className="font-medium text-gray-900">三娃（文案助理）</h2>
            <p className="text-sm text-gray-500">了解，您希望创作一条AI对人类是好是坏的口播文案</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-blue-500 text-white rounded-2xl px-4 py-3 max-w-md">
            <p>基于我的要求，帮我创作一条AI对人类是好是坏的口播文案</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-medium">三</span>
          </div>
          <div className="flex-1">
            {/* Status Indicators */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">搜索信息</span>
              </div>
            </div>

            {/* Content Structure */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">搜索内容总结</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>主题：</strong>AI对人类是好是坏</p>
                  <p><strong>标题：</strong>AI是你的美丽助力还是潜在危险？揭示背后的真相！</p>
                  <p><strong>标签：</strong>#AI #人类未来 #科技影响 #美容抗衰 #塑形 #情感❤心理健康</p>
                  <p><strong>观点：</strong>AI对人类的影响有利有弊，好坏取决于如何使用，应该理性运用AI实现成长</p>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">创作文案</span>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">文案创作结果</h3>
                <p className="text-sm text-gray-600 mb-2"><strong>标题：</strong>AI是你的美丽助力还是潜在危险？揭示背后的真相！</p>
                
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                  <p className="mb-3">
                    <strong>口播文案：</strong>大家的未来是否真的掌握在AI手中？还是我们正在追一条本质的危险之路？你有没有想过，AI到底是我们的朋友，还是潜在的敌人？随着科技的发展，AI已经不再只是甚至，但也难免影响到人心存疑虑，有人说，AI能帮助我们解决生活中的各种，其实在美容抗衰领域给我们带来了很多方便和效率，而有人则认为，AI的影响...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isTyping && (
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-medium">三</span>
            </div>
            <div className="bg-gray-100 rounded-2xl px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="输入消息内容"
              className="min-h-[60px] pr-12 resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button
              size="sm"
              onClick={handleSend}
              disabled={!message.trim()}
              className="absolute right-2 bottom-2 w-8 h-8 p-0 bg-blue-500 hover:bg-blue-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
