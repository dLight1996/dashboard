'use client';

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("用户名或密码错误");
        return;
      }

      // 登录成功，跳转到 dashboard
      router.replace("/dashboard");
    } catch (error) {
      setError("登录时发生错误");
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070"
          alt="Login background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="flex min-h-screen relative">
        {/* Left Column - Animated Elements */}
        <div className="hidden lg:flex lg:flex-1 relative items-center justify-center">
          <div className="relative w-full max-w-[600px] h-[600px]">
            {/* Floating circles */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full backdrop-blur-sm"
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full backdrop-blur-sm"
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute bottom-32 left-32 w-40 h-40 bg-indigo-500/20 rounded-full backdrop-blur-sm"
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              transition={{ delay: 2 }}
            />
            
            {/* Welcome text */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
              <p className="text-xl text-white/80">We're glad to see you again</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="flex-1 lg:max-w-[600px] flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-[400px] bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10">
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center space-y-2">
                <motion.h2 
                  className="text-3xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Welcome back
                </motion.h2>
                <motion.p 
                  className="text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Please sign in to your account
                </motion.p>
              </div>

              {/* Form */}
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Input
                  type="text"
                  label="Username"
                  placeholder="Enter your username"
                  labelPlacement="outside"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  startContent={
                    <UserIcon className="w-4 h-4 text-default-400 flex-shrink-0" />
                  }
                  classNames={{
                    input: "pl-1",
                    label: "pb-1",
                  }}
                  className="pt-4"
                  size="lg"
                />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  labelPlacement="outside"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  startContent={
                    <LockClosedIcon className="w-4 h-4 text-default-400 flex-shrink-0" />
                  }
                  classNames={{
                    input: "pl-1",
                    label: "pb-1",
                    base: "[&[data-has-label=true]]:!mt-[48px]"
                  }}
                  size="lg"
                />

                {error && (
                  <div className="mt-4 text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}

                <div className="pt-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
                    />
                    <span className="text-sm text-gray-500">Remember me</span>
                  </label>
                </div>

                <Button 
                  type="submit"
                  color="primary" 
                  size="lg" 
                  className="w-full mt-8"
                  radius="full"
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}