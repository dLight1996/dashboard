'use client';

import { useSession } from 'next-auth/react';
import { Card, CardBody } from '@nextui-org/react';

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">欢迎回来, {session?.user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardBody>
            <h2 className="text-lg font-semibold mb-2">总用户数</h2>
            <p className="text-3xl font-bold">1</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h2 className="text-lg font-semibold mb-2">今日活跃</h2>
            <p className="text-3xl font-bold">1</p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h2 className="text-lg font-semibold mb-2">系统状态</h2>
            <p className="text-3xl font-bold text-green-500">正常</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
