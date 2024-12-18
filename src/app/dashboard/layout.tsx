'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import {
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Listbox,
  ListboxItem,
  Avatar,
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import clsx from 'clsx';
import { menuItems } from '@/config/routes';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        isIconOnly
        variant="light"
        radius="full"
        className="text-default-500"
      >
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-default-500 hover:text-default-900 dark:hover:text-default-200"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </Button>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleLogout = () => {
    signOut({
      callbackUrl: '/',
      redirect: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-16 px-6 flex items-center justify-between bg-background/70 backdrop-blur-md border-b border-divider">
          {/* Left Side - Brand */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-20" />
              <p className="relative font-bold text-xl z-10">D</p>
            </div>
            <div>
              <p className="font-bold text-inherit text-lg">
                Dashboard <span className="text-primary">Pro</span>
              </p>
              <p className="text-tiny text-default-500">Professional Admin Template</p>
            </div>
          </div>

          {/* Right Side - User Info */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />

            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <div className="flex items-center gap-3 cursor-pointer">
                  <Avatar
                    className="transition-transform"
                    color="primary"
                    name={session?.user?.name?.[0]?.toUpperCase() || 'U'}
                    size="sm"
                    isBordered
                  />
                  <div className="hidden sm:flex flex-col items-end">
                    <p className="text-sm font-medium line-clamp-1">{session?.user?.name}</p>
                    <p className="text-tiny text-default-500">管理员</p>
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Profile Actions" 
                className="w-60"
                classNames={{
                  base: [
                    "bg-white dark:bg-zinc-900",
                    "border border-default-200 dark:border-default-100",
                    "shadow-xl dark:shadow-2xl",
                    "backdrop-blur-lg",
                    "rounded-xl",
                    "p-1",
                  ].join(" "),
                }}
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <div>
                    <p className="font-semibold">{session?.user?.name}</p>
                    <p className="text-sm text-default-500 font-normal">
                      {session?.user?.email}
                    </p>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key="settings"
                  startContent={<Cog6ToothIcon className="w-4 h-4 flex-shrink-0" />}
                >
                  系统设置
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  startContent={<ArrowRightOnRectangleIcon className="w-4 h-4 flex-shrink-0" />}
                  onPress={handleLogout}
                  className="text-danger"
                  description="退出登录并返回登录页面"
                >
                  退出登录
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col pt-16 bg-background">
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside 
            className={clsx(
              "h-[calc(100vh-4rem)] sticky top-16 flex flex-col bg-background border-r border-divider transition-all duration-200",
              isMenuOpen ? "w-64" : "w-20"
            )}
          >
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col">
                {menuItems.map((item) => {
                  if (!item.children) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          "flex items-center gap-3 w-full px-4 py-2.5 transition-colors text-sm min-h-[40px]",
                          pathname === item.href 
                            ? "text-primary bg-primary/10" 
                            : "text-foreground hover:text-primary hover:bg-default-100",
                          !isMenuOpen && "justify-center"
                        )}
                      >
                        <div className="w-4 flex items-center">
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                        </div>
                        {isMenuOpen && <span>{item.name}</span>}
                      </Link>
                    );
                  }

                  return null;
                })}
              </div>

              <Accordion 
                showDivider={false}
                hideIndicator
                className="gap-0"
                itemClasses={{
                  base: "py-0",
                  title: "font-normal text-sm",
                  trigger: "flex items-center pl-2 pr-4 py-2.5 data-[hover=true]:bg-default-100 h-auto text-sm min-h-[40px]",
                  indicator: "ml-auto",
                  content: "pt-0",
                }}
                selectionMode="multiple"
              >
                {menuItems.map((item) => {
                  if (item.children) {
                    const isActive = item.children.some(child => child.href === pathname);
                    return (
                      <AccordionItem
                        key={item.name}
                        aria-label={item.name}
                        hideIndicator={false}
                        title={
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-4 flex items-center">
                              <item.icon className={clsx(
                                "w-4 h-4 flex-shrink-0",
                                isActive ? "text-primary" : "text-foreground"
                              )} />
                            </div>
                            {isMenuOpen && (
                              <span className={clsx(
                                isActive ? "text-primary" : "text-foreground"
                              )}>
                                {item.name}
                              </span>
                            )}
                          </div>
                        }
                        className="px-0"
                      >
                        <Listbox
                          aria-label={item.name}
                          variant="flat"
                          itemClasses={{
                            base: "px-4 py-2.5 data-[hover=true]:bg-default-100 gap-3 text-sm min-h-[40px]",
                          }}
                        >
                          {item.children.map((child) => (
                            <ListboxItem
                              key={child.href}
                              href={child.href}
                              as={Link}
                              className={clsx(
                                "text-foreground pl-7",
                                pathname === child.href && "text-primary bg-primary/10"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-4 flex items-center">
                                  <child.icon className="w-4 h-4 flex-shrink-0" />
                                </div>
                                {isMenuOpen && <span>{child.name}</span>}
                              </div>
                            </ListboxItem>
                          ))}
                        </Listbox>
                      </AccordionItem>
                    );
                  }

                  return null;
                })}
              </Accordion>
            </div>

            {/* Collapse Button */}
            <div className="p-2 border-t border-divider">
              <Button
                variant="light"
                onPress={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full justify-start gap-2 text-foreground"
              >
                <ChevronRightIcon 
                  className={clsx(
                    "w-4 h-4 transition-transform duration-200",
                    !isMenuOpen && "rotate-180"
                  )} 
                />
                {isMenuOpen && <span>收起菜单</span>}
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
