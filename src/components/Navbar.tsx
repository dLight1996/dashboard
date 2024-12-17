'use client';

import { useTheme } from 'next-themes';
import {
  BellIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
  Cog6ToothIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { 
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  Tooltip,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="bg-background/60 backdrop-blur-lg border-b z-40 top-0"
    >
      <NavbarContent className="basis-1/5" justify="start">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 hover:bg-default-400/30 dark:hover:bg-default-500/30 transition-colors",
          }}
          placeholder="搜索..."
          size="sm"
          startContent={<MagnifyingGlassIcon className="w-5 h-5 text-default-400" />}
          type="search"
          radius="lg"
        />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <Tooltip content={theme === 'dark' ? '切换亮色模式' : '切换暗色模式'}>
            <Button
              isIconOnly
              variant="light"
              onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="group"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5 group-hover:text-warning" />
                ) : (
                  <MoonIcon className="w-5 h-5 group-hover:text-primary" />
                )}
              </motion.div>
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="light"
                isIconOnly
                radius="full"
                className="group"
              >
                <Badge content="5" size="sm" color="danger" shape="circle" placement="top-right">
                  <BellIcon className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-primary" />
                </Badge>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Notifications" className="w-80">
              <DropdownItem key="title" className="h-14 gap-2">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-base font-medium">通知</h3>
                  <Badge content="5" size="sm" color="danger" variant="flat">新消息</Badge>
                </div>
              </DropdownItem>
              <DropdownItem key="system" className="h-20 gap-3" description="2小时前">
                <div className="flex gap-3">
                  <Avatar
                    icon={<BellIcon className="w-4 h-4" />}
                    classNames={{
                      base: "bg-primary/10 text-primary",
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium">系统更新通知</p>
                    <p className="text-xs text-default-500">系统将在今晚进行例行维护更新</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="message" className="h-20 gap-3" description="5小时前">
                <div className="flex gap-3">
                  <Avatar
                    icon={<BellIcon className="w-4 h-4" />}
                    classNames={{
                      base: "bg-secondary/10 text-secondary",
                    }}
                  />
                  <div>
                    <p className="text-sm font-medium">新消息提醒</p>
                    <p className="text-xs text-default-500">您有3条未读消息需要处理</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="view-all" className="h-14">
                <Button 
                  color="primary" 
                  variant="flat" 
                  className="w-full"
                  endContent={<motion.span whileHover={{ x: 5 }} className="text-lg">→</motion.span>}
                >
                  查看所有通知
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="light"
                isIconOnly
                radius="full"
                className="group"
              >
                <Cog6ToothIcon className="w-5 h-5 transition-all group-hover:rotate-45 group-hover:text-primary" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Settings"
              className="w-60"
              itemClasses={{
                base: "gap-3",
              }}
            >
              <DropdownItem
                key="settings"
                description="系统基本配置"
                startContent={<Cog6ToothIcon className="w-5 h-5" />}
              >
                系统设置
              </DropdownItem>
              <DropdownItem
                key="personalization"
                description="个性化您的界面"
                startContent={<SunIcon className="w-5 h-5" />}
              >
                个性化
              </DropdownItem>
              <DropdownItem
                key="notifications"
                description="通知提醒设置"
                startContent={<BellIcon className="w-5 h-5" />}
              >
                通知设置
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                as="button"
                className="transition-transform"
                size="sm"
                src="https://i.pravatar.cc/150?img=3"
                isBordered
                color="primary"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" className="w-60">
              <DropdownItem key="profile" className="h-14 gap-2">
                <div>
                  <p className="font-semibold">当前登录</p>
                  <p className="text-sm text-default-500 font-normal">admin@example.com</p>
                </div>
              </DropdownItem>
              <DropdownItem 
                key="settings"
                description="管理您的个人信息"
                startContent={<UserIcon className="w-5 h-5" />}
              >
                个人信息
                <Badge content="新" color="primary" variant="flat" className="ml-2" />
              </DropdownItem>
              <DropdownItem 
                key="system"
                description="账户安全设置"
                startContent={<Cog6ToothIcon className="w-5 h-5" />}
              >
                账户设置
              </DropdownItem>
              <DropdownItem 
                key="logout" 
                color="danger"
                description="退出登录系统"
                startContent={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
              >
                退出登录
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
