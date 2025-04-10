"use client"

import { useState } from "react"
import { BarChart3, Bell, DollarSign, Package, Plus, ShoppingCart, Tag, X } from "lucide-react"

export default function DashboardPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "order", message: "New order #1234 received", time: "5 minutes ago" },
    { id: 2, type: "payment", message: "Payment confirmed for order #1230", time: "30 minutes ago" },
    { id: 3, type: "order", message: "New order #1233 received", time: "1 hour ago" },
    { id: 4, type: "payment", message: "Payment pending for order #1229", time: "2 hours ago" },
    { id: 5, type: "order", message: "New order #1232 received", time: "3 hours ago" },
  ])

  const [activeTab, setActiveTab] = useState("all")

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <button
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={() => {}}
        >
          <Plus size={16} />
          Add Product
        </button>
      </div>

      {/* Overview Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Sales */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium text-gray-600">Total Sales</h3>
            <DollarSign className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-gray-500">+20.1% from last month</p>
        </div>

        {/* Total Orders */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium text-gray-600">Total Orders</h3>
            <ShoppingCart className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-gray-500">+12.2% from last month</p>
        </div>

        {/* Average Order Value */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium text-gray-600">Average Order Value</h3>
            <Tag className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$19.25</div>
          <p className="text-xs text-gray-500">+2.5% from last month</p>
        </div>

        {/* Total Earnings */}
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex flex-row items-center justify-between pb-2 space-y-0">
            <h3 className="text-sm font-medium text-gray-600">Total Earnings</h3>
            <BarChart3 className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold">$12,234.89</div>
          <p className="text-xs text-gray-500">+18.4% from last month</p>
        </div>
      </div>

      {/* Inventory Status and Notifications */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Inventory Status */}
        <div className="md:col-span-4 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium">Inventory Status</h3>
            <p className="text-sm text-gray-500">Overview of your product inventory levels</p>
          </div>
          <div className="p-6">
            {/* Tabs */}
            <div className="flex space-x-1 border-b mb-4">
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === "all" ? "border-b-2 border-green-500 text-green-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === "available" ? "border-b-2 border-green-500 text-green-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("available")}
              >
                Available
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === "low" ? "border-b-2 border-green-500 text-green-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("low")}
              >
                Low Stock
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${activeTab === "sold" ? "border-b-2 border-green-500 text-green-600" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("sold")}
              >
                Sold Out
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {(activeTab === "all" || activeTab === "available") && (
                <InventoryItem name="Premium Headphones" stock={120} total={150} status="available" />
              )}
              {(activeTab === "all" || activeTab === "low") && (
                <InventoryItem name="Wireless Earbuds" stock={45} total={200} status="low" />
              )}
              {(activeTab === "all" || activeTab === "available") && (
                <InventoryItem name="Smart Watch" stock={78} total={100} status="available" />
              )}
              {(activeTab === "all" || activeTab === "sold") && (
                <InventoryItem name="Bluetooth Speaker" stock={0} total={75} status="sold" />
              )}
              {(activeTab === "all" || activeTab === "low") && (
                <InventoryItem name="Phone Case" stock={12} total={150} status="low" />
              )}
            </div>
          </div>
          <div className="px-6 py-4 border-t">
            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              View All Products
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="md:col-span-3 bg-white rounded-lg shadow">
          <div className="flex items-center p-6 border-b">
            <div>
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-gray-500">Recent updates and alerts</p>
            </div>
            <div className="ml-auto px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
              {notifications.length}
            </div>
          </div>
          <div className="p-6">
            <div className="h-[350px] overflow-y-auto pr-2">
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50">
                      <div
                        className={`rounded-full p-2 ${notification.type === "order" ? "bg-green-100" : "bg-blue-100"}`}
                      >
                        {notification.type === "order" ? (
                          <Package className="w-4 h-4 text-green-600" />
                        ) : (
                          <DollarSign className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      <button
                        className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-gray-200"
                        onClick={() => dismissNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Dismiss</span>
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <Bell className="h-8 w-8 text-gray-400 mb-2" />
                  <h3 className="font-medium">No new notifications</h3>
                  <p className="text-sm text-gray-500">You're all caught up! New notifications will appear here.</p>
                </div>
              )}
            </div>
          </div>
          <div className="px-6 py-4 border-t">
            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              View All Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium">Recent Orders</h3>
          <p className="text-sm text-gray-500">Latest customer orders and their status</p>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Products</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">#1234</td>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">Premium Headphones</td>
                  <td className="p-4">$299.99</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                      Completed
                    </span>
                  </td>
                  <td className="p-4">Apr 10, 2023</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">#1233</td>
                  <td className="p-4">Jane Smith</td>
                  <td className="p-4">Wireless Earbuds</td>
                  <td className="p-4">$149.99</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
                      Processing
                    </span>
                  </td>
                  <td className="p-4">Apr 9, 2023</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">#1232</td>
                  <td className="p-4">Robert Johnson</td>
                  <td className="p-4">Smart Watch</td>
                  <td className="p-4">$249.99</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">Shipped</span>
                  </td>
                  <td className="p-4">Apr 8, 2023</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4">#1231</td>
                  <td className="p-4">Emily Davis</td>
                  <td className="p-4">Phone Case, Bluetooth Speaker</td>
                  <td className="p-4">$89.98</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                      Cancelled
                    </span>
                  </td>
                  <td className="p-4">Apr 7, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-6 py-4 border-t">
          <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  )
}

function InventoryItem({ name, stock, total, status }) {
  const percentage = (stock / total) * 100

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">
            {stock}/{total}
          </span>
          {status === "available" && (
            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 border border-green-200 rounded-full">
              In Stock
            </span>
          )}
          {status === "low" && (
            <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 border border-yellow-200 rounded-full">
              Low Stock
            </span>
          )}
          {status === "sold" && (
            <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 border border-red-200 rounded-full">
              Sold Out
            </span>
          )}
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            status === "available" ? "bg-green-500" : status === "low" ? "bg-yellow-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
