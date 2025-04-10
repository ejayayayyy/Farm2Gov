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
  CircleUserRound
} from "lucide-react";

export default function Navbar() {
  const [role, setRole] = useState("farmer");
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
    { name: "Financial Reports", icon: Wallet, href: `${prefix}/financial-reports` },
  ];

  const otherItems = [
    { name: "Profile Settings", icon: CircleUserRound, href: `${prefix}/profile-settings` },
    { name: "News & Announcements", icon: Newspaper, href: `${prefix}/news-and-announcements` },
    { name: "Help & Support", icon: CircleHelp, href: `${prefix}/help-and-support` },

  ]

  const handleLogout = () => {
    localStorage.removeItem("role");
    router.push("/");
  };

  return (
    <aside className="w-80 bg-white shadow h-screen sticky top-0 left-0 p-8 flex flex-col gap-8">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
        src="/images/farm2gov.png"
        alt="Farm2Gov Logo"
        height={120}
        width={120}
        />

        <h1 className="text-2xl font-medium">Farm2Gov</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-2">
      {navItems.map(({ name, icon: Icon, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`px-4 py-2 rounded-lg flex items-center gap-3 transition-colors duration-150 ${
                isActive
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          );
        })}

        <hr className="text-gray-300 my-2" />

        {otherItems.map(({name, icon: Icon, href}) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`px-4 py-2 rounded-lg flex items-center gap-3 transition-colors duration-150 ${
                isActive
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "hover:bg-gray-100 text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          );
        })}


        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg flex items-center gap-3 transition-colors duration-150 hover:bg-red-100 text-red-500 cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          Sign out
        </button>
      </nav>
    </aside>
  );
}
