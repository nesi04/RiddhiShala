"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface LoginAttempt {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  timestamp: string;
  status: 'success' | 'failed';
  ipAddress?: string;
  attempts: number;
  device?: string;
}

const generateDummyLogs = (): LoginAttempt[] => {
  const users = [
    { username: 'admin_user', email: 'admin@example.com', phone: '9876543210' },
    { username: 'school_admin', email: 'school@example.com', phone: '8765432109' },
    { username: 'teacher1', email: 'teacher1@example.com', phone: '7654321098' },
    { username: 'parent_user', email: 'parent@example.com', phone: '6543210987' },
    { username: 'student1', email: 'student1@example.com', phone: '5432109876' },
  ];

  const statuses: ('success' | 'failed')[] = ['success', 'failed'];
  const devices = ['Windows Chrome', 'Mac Safari', 'Android Chrome', 'iPhone Safari', 'Linux Firefox'];
  
  const logs: LoginAttempt[] = [];
  const now = new Date();

  users.forEach((user, index) => {
    // Generate between 1-5 login attempts per user
    const attemptCount = Math.floor(Math.random() * 5) + 1;
    
    for (let i = 0; i < attemptCount; i++) {
      const hoursAgo = Math.floor(Math.random() * 24 * 7); // Up to 1 week ago
      const timestamp = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
      
      logs.push({
        id: `${index}-${i}-${timestamp.getTime()}`,
        username: user.username,
        email: Math.random() > 0.3 ? user.email : undefined, // 70% chance email
        phone: !user.email || Math.random() > 0.7 ? user.phone : undefined, // 30% chance phone
        timestamp: timestamp.toISOString(),
        status: i === attemptCount - 1 ? 'success' : statuses[Math.floor(Math.random() * statuses.length)],
        ipAddress: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        attempts: attemptCount,
        device: devices[Math.floor(Math.random() * devices.length)],
      });
    }
  });

  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

const Page = () => {
  const [logs, setLogs] = useState<LoginAttempt[]>([]);
  const [filter, setFilter] = useState<'all' | 'multiple-attempts'>('multiple-attempts');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      const dummyLogs = generateDummyLogs();
      setLogs(dummyLogs);
      setIsLoading(false);
      
      // Optionally save to localStorage for persistence
      localStorage.setItem('loginAttempts', JSON.stringify(dummyLogs));
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredLogs = logs.filter(log => 
    filter === 'multiple-attempts' ? log.attempts > 2 : true
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Login Activity Logs</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('multiple-attempts')}
            className={`px-4 py-2 rounded-md ${filter === 'multiple-attempts' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Multiple Attempts ({'>'}2)
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            All Logs
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attempts</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{log.username}</div>
                      <div className="text-sm text-gray-500">{log.email || log.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {log.email ? 'Email' : 'Phone'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(log.timestamp).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        log.status === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`font-bold ${
                        log.attempts > 2 ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {log.attempts}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {log.device}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;