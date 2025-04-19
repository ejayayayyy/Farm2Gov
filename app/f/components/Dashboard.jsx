"use client"

import { useState } from "react"
import {
  BarChart3,
  Bell,
  Calendar,
  ChevronRight,
  DollarSign,
  Download,
  Filter,
  Package,
  Plus,
  ShoppingCart,
  Tag,
  X,
} from "lucide-react"

export default function DashboardPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      message: "New order #1234 received",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "payment",
      message: "Payment confirmed for order #1230",
      time: "30 minutes ago",
    },
    {
      id: 3,
      type: "order",
      message: "New order #1233 received",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "payment",
      message: "Payment pending for order #1229",
      time: "2 hours ago",
    },
    {
      id: 5,
      type: "order",
      message: "New order #1232 received",
      time: "3 hours ago",
    },
  ])

  const [activeTab, setActiveTab] = useState("all")
  const [dateFilter, setDateFilter] = useState("month")

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-1 text-sm text-gray-500">
                Welcome back! Here's what's happening with your farm products today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                <Download size={16} />
                Export
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                onClick={() => {}}
              >
                <Plus size={16} />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-l mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6 -red-500">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                title="Total Sales"
                value="₱45,231.89"
                change="+20.1%"
                icon={<DollarSign className="w-6 h-6 text-white" />}
                color="green"
              />
              <StatCard
                title="Total Orders"
                value="2,350"
                change="+12.2%"
                icon={<ShoppingCart className="w-6 h-6 text-white" />}
                color="blue"
              />
              <StatCard
                title="Average Order"
                value="₱19.25"
                change="+2.5%"
                icon={<Tag className="w-6 h-6 text-white" />}
                color="purple"
              />
              <StatCard
                title="Total Earnings"
                value="₱12,234.89"
                change="+18.4%"
                icon={<BarChart3 className="w-6 h-6 text-white" />}
                color="amber"
              />
            </div>

            {/* Date Filter */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by date</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    dateFilter === "today"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setDateFilter("today")}
                >
                  Today
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    dateFilter === "week"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setDateFilter("week")}
                >
                  Week
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    dateFilter === "month"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setDateFilter("month")}
                >
                  Month
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    dateFilter === "year"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                  onClick={() => setDateFilter("year")}
                >
                  Year
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <Filter size={14} />
                  Custom
                </button>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <p className="text-sm text-gray-500 mt-1">Latest customer orders and their status</p>
                </div>

                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="px-5 py-3 font-medium text-gray-600 text-sm">Order ID</th>
                      <th className="px-5 py-3 font-medium text-gray-600 text-sm">Customer</th>
                      <th className="px-5 py-3 font-medium text-gray-600 text-sm">Products</th>
                      <th className="px-5 py-3 font-medium text-gray-600 text-sm">Amount</th>
                      <th className="px-5 py-3 font-medium text-gray-600 text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">#1234</td>
                      <td className="px-5 py-4 text-sm">Department of Agriculture</td>
                      <td className="px-5 py-4 text-sm">Organic Rice (50kg)</td>
                      <td className="px-5 py-4 text-sm font-medium">₱15,000</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">#1233</td>
                      <td className="px-5 py-4 text-sm">Local School District</td>
                      <td className="px-5 py-4 text-sm">Fresh Vegetables (Assorted)</td>
                      <td className="px-5 py-4 text-sm font-medium">₱8,500</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
                          Processing
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">#1232</td>
                      <td className="px-5 py-4 text-sm">Provincial Hospital</td>
                      <td className="px-5 py-4 text-sm">Fresh Fruits (Assorted)</td>
                      <td className="px-5 py-4 text-sm font-medium">₱12,750</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                          Shipped
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-sm font-medium">#1231</td>
                      <td className="px-5 py-4 text-sm">Municipal Food Program</td>
                      <td className="px-5 py-4 text-sm">Rice, Eggs, Vegetables</td>
                      <td className="px-5 py-4 text-sm font-medium">₱22,400</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                          Cancelled
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inventory Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Inventory Status</h3>
                  <p className="text-sm text-gray-500 mt-1">Overview of your product inventory levels</p>
                </div>

                <div className="flex">
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-colors ${
                      activeTab === "all"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      activeTab === "available"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab("available")}
                  >
                    Available
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      activeTab === "low"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab("low")}
                  >
                    Low
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-colors ${
                      activeTab === "sold"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveTab("sold")}
                  >
                    Sold Out
                  </button>
                </div>
              </div>

              <div className="p-5 grid gap-5">
                {(activeTab === "all" || activeTab === "available") && (
                  <InventoryItem name="Organic Rice (50kg)" stock={120} total={150} status="available" />
                )}
                {(activeTab === "all" || activeTab === "low") && (
                  <InventoryItem name="Fresh Tomatoes (crate)" stock={45} total={200} status="low" />
                )}
                {(activeTab === "all" || activeTab === "available") && (
                  <InventoryItem name="Carrots (kg)" stock={78} total={100} status="available" />
                )}
                {(activeTab === "all" || activeTab === "sold") && (
                  <InventoryItem name="Potatoes (sack)" stock={0} total={75} status="sold" />
                )}
                {(activeTab === "all" || activeTab === "low") && (
                  <InventoryItem name="Fresh Eggs (tray)" stock={12} total={150} status="low" />
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                  <div className="px-2 py-0.5 text-xs font-semibold text-white bg-green-500 rounded-full">
                    {notifications.length}
                  </div>
                </div>
                <button className="text-sm font-medium text-green-500 hover:text-green-600 transition-colors">
                  Mark all as read
                </button>
              </div>
              <div className="p-5">
                <div className="h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {notifications.length > 0 ? (
                    <div className="space-y-3">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                        >
                          <div
                            className={`rounded-full p-2 ${
                              notification.type === "order" ? "bg-green-100" : "bg-blue-100"
                            }`}
                          >
                            {notification.type === "order" ? (
                              <Package className="w-4 h-4 text-green-500" />
                            ) : (
                              <DollarSign className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                          <button
                            className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-200 transition-colors"
                            onClick={() => dismissNotification(notification.id)}
                            aria-label="Dismiss notification"
                          >
                            <X className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                      <div className="p-3 bg-gray-100 rounded-full mb-3">
                        <Bell className="h-6 w-6 text-gray-500" />
                      </div>
                      <h3 className="font-medium text-gray-900">No new notifications</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        You're all caught up! New notifications will appear here.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="px-5 py-3 border-t border-gray-100 bg-white">
                <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All Notifications
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-5 space-y-3">
                <QuickActionButton label="Add New Product" icon={<Plus className="w-4 h-4" />} color="green" />
                <QuickActionButton label="View Orders" icon={<ShoppingCart className="w-4 h-4" />} color="blue" />
                <QuickActionButton label="Update Inventory" icon={<Package className="w-4 h-4" />} color="purple" />
                <QuickActionButton label="View Reports" icon={<BarChart3 className="w-4 h-4" />} color="amber" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <ActivityItem
                    title="Product Added"
                    description="You added 'Organic Carrots (5kg)' to your inventory"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    title="Order Shipped"
                    description="Order #1232 has been shipped to Provincial Hospital"
                    time="5 hours ago"
                  />
                  <ActivityItem
                    title="Payment Received"
                    description="Received ₱15,000 for Order #1234"
                    time="1 day ago"
                  />
                  <ActivityItem
                    title="Inventory Updated"
                    description="Updated stock levels for 5 products"
                    time="2 days ago"
                  />
                </div>
              </div>
              <div className="px-5 py-3 border-t border-gray-100 bg-white">
                <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, icon, color }) {
  const getGradientClass = (color) => {
    switch (color) {
      case "green":
        return "from-green-400 to-green-600"
      case "blue":
        return "from-blue-400 to-blue-600"
      case "purple":
        return "from-purple-400 to-purple-600"
      case "amber":
        return "from-amber-400 to-amber-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  return (
    <div
      className={`bg-gradient-to-r ${getGradientClass(color)} rounded-xl shadow-sm p-4 transition-all hover:shadow-md`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-medium text-white">{title}</h3>
        <div className="p-2 rounded-full bg-white/20">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-2">
        <span className="inline-flex items-center px-2 py-1 text-sm font-medium rounded-full bg-white/20 text-white">
          {change}
        </span>
        <span className="ml-2 text-sm text-white/80">from last month</span>
      </div>
    </div>
  )
}

function InventoryItem({ name, stock, total, status }) {
  const percentage = (stock / total) * 100

  return (
    <div className="flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {stock}/{total}
          </span>
          {status === "available" && (
            <span className="px-2 py-0.5 text-xs font-semibold text-green-600 bg-green-100 rounded-full">In Stock</span>
          )}
          {status === "low" && (
            <span className="px-2 py-0.5 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
              Low Stock
            </span>
          )}
          {status === "sold" && (
            <span className="px-2 py-0.5 text-xs font-semibold text-red-700 bg-red-100 rounded-full">Sold Out</span>
          )}
        </div>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            status === "available" ? "bg-green-500" : status === "low" ? "bg-amber-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

function QuickActionButton({ label, icon, color }) {
  const getColorClass = (color) => {
    switch (color) {
      case "green":
        return "text-green-500 border-green-200 hover:bg-green-50"
      case "blue":
        return "text-blue-600 border-blue-200 hover:bg-blue-50"
      case "purple":
        return "text-purple-600 border-purple-200 hover:bg-purple-50"
      case "amber":
        return "text-amber-600 border-amber-200 hover:bg-amber-50"
      default:
        return "text-gray-600 border-gray-200 hover:bg-gray-50"
    }
  }

  return (
    <button className={`flex items-center w-full p-3 rounded-lg border ${getColorClass(color)} transition-colors`}>
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  )
}

function ActivityItem({ title, description, time }) {
  return (
    <div className="border-l-2 border-green-500 pl-3">
      <h4 className="text-sm font-medium text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  )
}
