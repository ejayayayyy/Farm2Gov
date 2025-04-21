"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Store,
  Truck,
  Wallet,
  LogOut,
  Newspaper,
  CircleHelp,
  CircleUserRound,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [role, setRole] = useState("farmer");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
  }, []);

  const prefix = role === "government" ? "/g" : "/f";

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: `${prefix}/dashboard` },
    { name: "Marketplace", icon: Store, href: `${prefix}/marketplace` },
    {
      name: "Order Management",
      icon: ShoppingCart,
      href: `${prefix}/order-management`,
    },
    {
      name: "Logistics & Delivery",
      icon: Truck,
      href: `${prefix}/logistics-and-delivery`,
    },
    {
      name: "Financial Reports",
      icon: Wallet,
      href: `${prefix}/financial-reports`,
    },
  ];

  const otherItems = [
    {
      name: "Profile Settings",
      icon: CircleUserRound,
      href: `${prefix}/profile-settings`,
    },
    {
      name: "News & Announcements",
      icon: Newspaper,
      href: `${prefix}/news-and-announcements`,
    },
    {
      name: "Help & Support",
      icon: CircleHelp,
      href: `${prefix}/help-and-support`,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/");
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <div className="xl:hidden fixed top-0 left-0 right-0 bg-gray-800 z-30 shadow-md">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/farm2gov.png"
              alt="Farm2Gov Logo"
              height={40}
              width={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-medium text-white">Farm2Gov</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white rounded-lg hover:bg-green-700 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-gray-800 shadow-xl z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo Section */}
            <div className="p-5 flex flex-col items-center justify-center">
              <div className="flex items-center flex-col gap-3">
                <Image
                  src="/images/farm2gov.png"
                  alt="Farm2Gov Logo"
                  height={100}
                  width={100}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-medium text-white">Farm2Gov</h1>
                </div>
              </div>
            </div>

            <nav className="p-4">
              {/* main */}
              <div className="mb-6">
                <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">
                  Main Menu
                </h2>
                <div className="space-y-1">
                  {navItems.map(({ name, icon: Icon, href }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={name}
                        href={href}
                        className={`flex items-center justify-between px-3 py-3 rounded-lg text-base ${
                          isActive
                          ? "bg-green-500 text-white font-medium"
                          : "text-gray-400 hover:text-green-500"
                      }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`w-5 h-5 ${
                              isActive ? "text-white" : "text-green-500"
                            }`}
                          />
                          <span>{name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* other  */}
              <div className="mb-6">
                <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">
                  Other
                </h2>
                <div className="space-y-1">
                  {otherItems.map(({ name, icon: Icon, href }) => {
                    const isActive = pathname === href;
                    return (
                      <Link
                        key={name}
                        href={href}
                        className={`flex items-center justify-between px-3 py-3 rounded-lg text-base ${
                          isActive
                          ? "bg-green-500 text-white font-medium"
                          : "text-gray-400 hover:text-green-500"
                      }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className={`w-5 h-5 ${
                              isActive ? "text-white" : "text-green-500"
                        }`}
                          />
                          <span>{name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`}/>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 ">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-3 text-base text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span>Sign out</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden xl:block w-64 lg:w-72 bg-gray-800 shadow-md h-screen sticky top-0 left-0 ">
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-5 flex flex-col items-center justify-center">
            <div className="flex items-center flex-col gap-3">
              <Image
                src="/images/farm2gov.png"
                alt="Farm2Gov Logo"
                height={100}
                width={100}
                className="rounded-full"
              />
              <div>
                <h1 className="text-2xl font-medium text-white">Farm2Gov</h1>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">
                Main Menu
              </h2>
              <nav className="space-y-1">
                {navItems.map(({ name, icon: Icon, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={name}
                      href={href}
                      className={`flex items-center px-3 py-3 rounded-lg text-base ${
                        isActive
                          ? "bg-green-500 text-white font-medium"
                          : "text-gray-400 hover:text-green-500"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mr-3 ${
                          isActive ? "text-white" : "text-green-500"
                        }`}
                      />
                      {name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 px-2">
                Other
              </h2>
              <nav className="space-y-1">
                {otherItems.map(({ name, icon: Icon, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={name}
                      href={href}
                      className={`flex items-center px-3 py-3 rounded-lg text-base ${
                        isActive
                          ? "bg-green-500 text-white font-medium"
                          : "text-gray-400 hover:text-green-500"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mr-3 ${
                          isActive ? "text-white" : "text-green-500"
                        }`}
                      />
                      {name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Logout Button */}
          <div className="p-4 border- border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-base text-red-600 rounded-lg hover:bg-red-600 hover:text-white cursor-pointer"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
