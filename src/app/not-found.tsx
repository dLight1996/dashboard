'use client';
import React from 'react';
import { Button, Card, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const NotFoundPage: React.FC = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-[600px] p-8 flex flex-col items-center gap-6 bg-content1/60 dark:bg-content1/50 backdrop-blur-lg">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-40 h-40">
                        <Image
                            src="/404.svg"
                            alt="404"
                            className="object-contain"
                            radius="none"
                        />
                    </div>
                    <div className="text-center space-y-2">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                            404
                        </h1>
                        <h2 className="text-2xl font-semibold text-foreground/90">
                            页面未找到
                        </h2>
                        <p className="text-foreground/60">
                            抱歉，您访问的页面不存在或已被移除。
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <Button 
                        color="primary" 
                        variant="shadow"
                        size="lg"
                        onClick={() => router.push('/')}
                        className="font-medium"
                    >
                        返回首页
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="bordered"
                        size="lg"
                        onClick={() => router.back()}
                        className="font-medium"
                    >
                        返回上页
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default NotFoundPage;