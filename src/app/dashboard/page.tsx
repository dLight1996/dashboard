'use client';

import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">欢迎回来, {session?.user?.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 数据卡片占位 */}
        {Array(3).fill(null).map((_, index) => (
          <Card key={index} className="w-full">
            <CardBody className="space-y-3">
              <Skeleton className="rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="rounded-lg">
                <div className="h-8 w-2/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* 图表占位 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardBody>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-200"></div>
            </Skeleton>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-200"></div>
            </Skeleton>
          </CardBody>
        </Card>
      </div>

      {/* 表格占位 */}
      <Card className="w-full">
        <CardBody className="space-y-4">
          <Skeleton className="rounded-lg">
            <div className="h-4 w-48 rounded-lg bg-default-200"></div>
          </Skeleton>
          {Array(5).fill(null).map((_, index) => (
            <Skeleton key={index} className="rounded-lg">
              <div className="h-12 rounded-lg bg-default-200"></div>
            </Skeleton>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
