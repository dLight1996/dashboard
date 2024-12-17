'use client';

import { Bars3Icon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Avatar,
  Listbox,
  ListboxItem,
  Accordion,
  AccordionItem,
  Divider,
} from '@nextui-org/react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Sidebar({
  menuItems,
  isMenuOpen,
  setIsMenuOpen,
  session,
  handleLogout,
  pathname,
}) {
  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <AccordionItem
          key={item.name}
          aria-label={item.name}
          title={
            <div className="flex items-center gap-2 py-1.5">
              {item.icon && <item.icon className="w-5 h-5 text-default-500" />}
              <span className="font-medium">{item.name}</span>
            </div>
          }
          className="px-0 border-none"
          indicator={({ isOpen }) => (
            <div className={clsx(
              "transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0"
            )}>
              <svg className="w-4 h-4 text-default-500" viewBox="0 0 24 24">
                <path
                  d="M7 10L12 15L17 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        >
          <Listbox
            aria-label={`${item.name} submenu`}
            variant="flat"
            color="primary"
            itemClasses={{
              base: "px-2 py-1.5 gap-2 data-[hover=true]:bg-primary/5 rounded-lg transition-colors",
              title: "font-medium",
            }}
          >
            {item.children.map((child) => (
              <ListboxItem
                key={child.name}
                href={child.href}
                as={Link}
                startContent={child.icon && (
                  <div className="w-5 h-5 flex items-center justify-center">
                    <child.icon className="w-4 h-4 text-default-500" />
                  </div>
                )}
                className={clsx(
                  pathname === child.href && "bg-primary/10 [&_svg]:text-primary [&_span]:text-primary"
                )}
              >
                {child.name}
              </ListboxItem>
            ))}
          </Listbox>
        </AccordionItem>
      );
    }

    return (
      <ListboxItem
        key={item.name}
        href={item.href}
        as={Link}
        startContent={item.icon && (
          <div className="w-5 h-5 flex items-center justify-center">
            <item.icon className={clsx(
              "w-5 h-5 transition-colors",
              pathname === item.href ? "text-primary" : "text-default-500"
            )} />
          </div>
        )}
        className={clsx(
          "px-2 py-1.5 gap-2 data-[hover=true]:bg-primary/5 rounded-lg transition-colors",
          pathname === item.href && "bg-primary/10 [&_span]:text-primary"
        )}
      >
        <span className="font-medium">{item.name}</span>
      </ListboxItem>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <Button
          isIconOnly
          variant="light"
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="w-6 h-6" />
        </Button>
      </div>

      <aside
        className={clsx(
          'fixed lg:static top-16 left-0 z-30',
          'h-[calc(100vh-4rem)] w-72',
          'transition-all duration-300 ease-in-out',
          'bg-background/80 backdrop-blur-lg border-r',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b">
          <div className="relative">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dashboard Pro
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-50 rounded-full" />
          </div>
        </div>

        {/* Menu items */}
        <div className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
            {/* Regular menu items */}
            <Listbox
              aria-label="Regular menu items"
              variant="flat"
              color="primary"
              className="p-0 gap-1"
              itemClasses={{
                base: "px-0",
              }}
            >
              {menuItems.filter(item => !item.children).map(renderMenuItem)}
            </Listbox>

            <Divider className="my-4" />

            {/* Accordion menu items */}
            <Accordion
              className="px-0 gap-1"
              variant="light"
              itemClasses={{
                base: "py-0 w-full",
                title: "font-normal text-base",
                trigger: "py-0 data-[hover=true]:bg-default-100 rounded-lg px-2 h-auto",
                indicator: "text-base",
                content: "pb-1",
              }}
            >
              {menuItems.filter(item => item.children).map(renderMenuItem)}
            </Accordion>
          </div>

          {/* User info and logout */}
          <div className="border-t p-4 space-y-4 bg-background/80 backdrop-blur-lg">
            <div className="flex items-center gap-3">
              <Avatar
                name={session?.user?.name?.[0]?.toUpperCase() || 'U'}
                size="sm"
                className="transition-transform ring-2 ring-primary/10 ring-offset-2 ring-offset-background"
              />
              <div>
                <div className="font-medium">{session?.user?.name}</div>
                <div className="text-sm text-default-500">管理员</div>
              </div>
            </div>
            <Button
              color="danger"
              variant="flat"
              onPress={handleLogout}
              className="w-full justify-start group"
              startContent={
                <ArrowRightOnRectangleIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              }
            >
              退出登录
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
