"use client"

import { useState } from "react"
import {
  BarChart3,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Download,
  FileText,
  Filter,
  Package,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [marketCategory, setMarketCategory] = useState("all")

  // Sample data for overview metrics
  const metrics = {
    totalBudget: 500000,
    spent: 325000,
    remaining: 175000,
    pendingOrders: 12,
    approvedSuppliers: 45,
    completedPurchases: 78,
  }

  // Sample data for pending orders
  const pendingOrders = [
    {
      id: "PO-2023-1001",
      date: "2023-10-15",
      supplier: "Green Farms",
      items: [
        { name: "Fresh Tomatoes", quantity: 200, price: 75.0 },
        { name: "Carrots", quantity: 150, price: 60.0 },
      ],
      total: 24000.0,
      status: "pending_approval",
      requestedBy: "Maria Santos",
      department: "Department of Education",
      priority: "high",
    },
    {
      id: "PO-2023-1002",
      date: "2023-10-14",
      supplier: "Sunshine Organics",
      items: [
        { name: "Red Delicious Apples", quantity: 300, price: 120.0 },
        { name: "Brown Rice (5kg)", quantity: 50, price: 250.0 },
      ],
      total: 48500.0,
      status: "pending_approval",
      requestedBy: "Juan Dela Cruz",
      department: "Department of Health",
      priority: "medium",
    },
    {
      id: "PO-2023-1003",
      date: "2023-10-12",
      supplier: "Valley Dairy Cooperative",
      items: [{ name: "Fresh Milk (1L)", quantity: 500, price: 85.0 }],
      total: 42500.0,
      status: "awaiting_payment",
      requestedBy: "Roberto Reyes",
      department: "Department of Social Welfare",
      priority: "high",
    },
    {
      id: "PO-2023-1004",
      date: "2023-10-10",
      supplier: "Mountain Fresh Produce",
      items: [{ name: "Organic Potatoes", quantity: 400, price: 90.0 }],
      total: 36000.0,
      status: "processing",
      requestedBy: "Antonio Garcia",
      department: "Department of Agriculture",
      priority: "low",
    },
  ]

  // Sample data for market listings
  const marketListings = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      supplier: "Green Farms",
      category: "Vegetables",
      price: 75.0,
      unit: "kg",
      available: 500,
      rating: 4.8,
      organic: true,
      image: "/images/ripe-red-tomatoes.png",
    },
    {
      id: 2,
      name: "Red Delicious Apples",
      supplier: "Sunshine Organics",
      category: "Fruits",
      price: 120.0,
      unit: "kg",
      available: 300,
      rating: 4.5,
      organic: true,
      image: "/images/red-apples-basket.png",
    },
    {
      id: 3,
      name: "Brown Rice",
      supplier: "Mountain Fresh Produce",
      category: "Grains",
      price: 50.0,
      unit: "kg",
      available: 1000,
      rating: 4.7,
      organic: true,
      image: "/images/bowl-of-steamed-rice.png",
    },
    {
      id: 4,
      name: "Fresh Milk",
      supplier: "Valley Dairy Cooperative",
      category: "Dairy",
      price: 85.0,
      unit: "L",
      available: 200,
      rating: 4.9,
      organic: true,
      image: "/images/spilled-milk-still-life.png",
    },
    {
      id: 5,
      name: "Fresh Carrots",
      supplier: "Green Farms",
      category: "Vegetables",
      price: 60.0,
      unit: "kg",
      available: 400,
      rating: 4.6,
      organic: true,
      image: "/images/bunch-of-carrots.png",
    },
    {
      id: 6,
      name: "Organic Potatoes",
      supplier: "Mountain Fresh Produce",
      category: "Vegetables",
      price: 90.0,
      unit: "kg",
      available: 350,
      rating: 4.4,
      organic: true,
      image: "/images/pile-of-potatoes.png",
    },
  ]

  // Sample data for supplier ratings
  const supplierRatings = [
    {
      id: 1,
      name: "Green Farms",
      location: "Laguna",
      rating: 4.8,
      totalOrders: 156,
      completedOnTime: 152,
      categories: ["Vegetables", "Fruits"],
      reviews: [
        {
          id: 101,
          reviewer: "Department of Education",
          rating: 5,
          comment: "Excellent quality produce and always delivered on time.",
          date: "2023-10-05",
        },
        {
          id: 102,
          reviewer: "Department of Health",
          rating: 4,
          comment: "Good quality products but occasional delays in delivery.",
          date: "2023-09-28",
        },
      ],
    },
    {
      id: 2,
      name: "Sunshine Organics",
      location: "Batangas",
      rating: 4.5,
      totalOrders: 98,
      completedOnTime: 92,
      categories: ["Fruits", "Vegetables"],
      reviews: [
        {
          id: 103,
          reviewer: "Department of Social Welfare",
          rating: 5,
          comment: "Very fresh organic produce. Highly recommended!",
          date: "2023-10-02",
        },
        {
          id: 104,
          reviewer: "Department of Agriculture",
          rating: 4,
          comment: "Consistent quality and good packaging.",
          date: "2023-09-20",
        },
      ],
    },
    {
      id: 3,
      name: "Valley Dairy Cooperative",
      location: "Bulacan",
      rating: 4.9,
      totalOrders: 112,
      completedOnTime: 110,
      categories: ["Dairy"],
      reviews: [
        {
          id: 105,
          reviewer: "Department of Education",
          rating: 5,
          comment: "Best dairy products we've procured. Always fresh and well-packaged.",
          date: "2023-10-08",
        },
        {
          id: 106,
          reviewer: "Department of Health",
          rating: 5,
          comment: "Excellent quality milk and dairy products. Highly recommended for school programs.",
          date: "2023-09-30",
        },
      ],
    },
  ]

  // Sample data for budget utilization
  const budgetData = {
    totalBudget: 500000,
    spent: 325000,
    remaining: 175000,
    categories: [
      { name: "Fruits", budget: 150000, spent: 98000, remaining: 52000 },
      { name: "Vegetables", budget: 120000, spent: 87000, remaining: 33000 },
      { name: "Dairy", budget: 100000, spent: 95000, remaining: 5000 },
      { name: "Grains", budget: 80000, spent: 45000, remaining: 35000 },
      { name: "Others", budget: 50000, spent: 0, remaining: 50000 },
    ],
    monthlySpending: [
      { month: "Jan", amount: 32000 },
      { month: "Feb", amount: 28000 },
      { month: "Mar", amount: 39000 },
      { month: "Apr", amount: 42000 },
      { month: "May", amount: 35000 },
      { month: "Jun", amount: 30000 },
      { month: "Jul", amount: 25000 },
      { month: "Aug", amount: 38000 },
      { month: "Sep", amount: 29000 },
      { month: "Oct", amount: 27000 },
      { month: "Nov", amount: 0 },
      { month: "Dec", amount: 0 },
    ],
    departments: [
      { name: "Department of Education", budget: 200000, spent: 150000, remaining: 50000 },
      { name: "Department of Health", budget: 150000, spent: 95000, remaining: 55000 },
      { name: "Department of Social Welfare", budget: 100000, spent: 80000, remaining: 20000 },
      { name: "Department of Agriculture", budget: 50000, spent: 0, remaining: 50000 },
    ],
  }

  // Filter market listings by category
  const filteredListings =
    marketCategory === "all" ? marketListings : marketListings.filter((item) => item.category === marketCategory)

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Government Procurement Dashboard</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <Download className="h-4 w-4" />
            Export Reports
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("pending-orders")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "pending-orders"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pending Orders & Requests
          </button>
          <button
            onClick={() => setActiveTab("market")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "market"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Market Listings
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "suppliers"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Supplier Ratings
          </button>
          <button
            onClick={() => setActiveTab("budget")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "budget"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Budget Reports
          </button>
        </nav>
      </div>

      {/* Overview */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Budget Utilization</p>
                  <p className="text-2xl font-bold">
                    ₱{metrics.spent.toLocaleString()} / ₱{metrics.totalBudget.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    {((metrics.spent / metrics.totalBudget) * 100).toFixed(1)}% utilized
                  </p>
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${(metrics.spent / metrics.totalBudget) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                  <p className="text-2xl font-bold">{metrics.pendingOrders}</p>
                  <p className="text-sm text-gray-500">Requires attention</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <span className="text-yellow-600 font-medium">8</span> awaiting approval
                </div>
                <div>
                  <span className="text-blue-600 font-medium">4</span> in processing
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 mr-4">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed Purchases</p>
                  <p className="text-2xl font-bold">{metrics.completedPurchases}</p>
                  <p className="text-sm text-gray-500">This fiscal year</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <span className="text-green-600 font-medium">92%</span> on-time delivery
                </div>
                <div>
                  <span className="text-green-600 font-medium">98%</span> quality rating
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity and Quick Access */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-medium">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <ShoppingCart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New purchase order created</p>
                      <p className="text-xs text-gray-500">PO-2023-1001 for Department of Education</p>
                      <p className="text-xs text-gray-500">30 minutes ago</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">₱24,000.00</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Payment approved</p>
                      <p className="text-xs text-gray-500">PO-2023-0998 for Valley Dairy Cooperative</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">₱42,500.00</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Order delivered</p>
                      <p className="text-xs text-gray-500">PO-2023-0985 from Green Farms</p>
                      <p className="text-xs text-gray-500">Yesterday at 2:30 PM</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">₱36,000.00</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New supplier rating</p>
                      <p className="text-xs text-gray-500">Sunshine Organics rated 4.5/5 stars</p>
                      <p className="text-xs text-gray-500">Yesterday at 10:15 AM</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-lg font-medium">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-sm font-medium">Create Purchase Order</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-green-600" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-sm font-medium">Review Pending Approvals</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-blue-600" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-purple-600 mr-3" />
                      <span className="text-sm font-medium">Generate Budget Report</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-purple-600" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-yellow-600 mr-3" />
                      <span className="text-sm font-medium">Manage Approved Suppliers</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-yellow-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Overview */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Budget Overview by Department</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {budgetData.departments.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-sm text-gray-500">
                        ₱{dept.spent.toLocaleString()} / ₱{dept.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${(dept.spent / dept.budget) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{((dept.spent / dept.budget) * 100).toFixed(1)}% utilized</span>
                      <span>₱{dept.remaining.toLocaleString()} remaining</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pending Orders & Purchase Requests */}
      {activeTab === "pending-orders" && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search orders..."
              />
            </div>

            <div className="flex space-x-2">
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span>Status</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Date Range</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="all">All Departments</option>
                <option value="education">Department of Education</option>
                <option value="health">Department of Health</option>
                <option value="social">Department of Social Welfare</option>
                <option value="agriculture">Department of Agriculture</option>
              </select>
            </div>
          </div>

          {/* Create New Order Button */}
          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <ShoppingBag className="h-4 w-4" />
              Create New Purchase Order
            </button>
          </div>

          {/* Pending Orders List */}
          <div className="space-y-4">
            {pendingOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <ShoppingCart className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{order.id}</h3>
                        <p className="text-sm text-gray-500">Created on {order.date}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-3">
                      <OrderStatusBadge status={order.status} />
                      <PriorityBadge priority={order.priority} />
                      <button className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Supplier</h4>
                      <p className="text-sm font-medium">{order.supplier}</p>
                      <p className="text-sm text-gray-500">{order.items.length} items</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Requested By</h4>
                      <p className="text-sm font-medium">{order.requestedBy}</p>
                      <p className="text-sm text-gray-500">{order.department}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Order Total</h4>
                      <p className="text-sm font-medium">₱{order.total.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">
                        {order.status === "pending_approval"
                          ? "Awaiting approval"
                          : order.status === "awaiting_payment"
                            ? "Awaiting payment"
                            : "In processing"}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Order Items</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-sm">
                              {item.quantity} x {item.name}
                            </span>
                            <span className="text-sm font-medium">
                              ₱{(item.quantity * item.price).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                        <span className="text-sm font-medium">Total</span>
                        <span className="text-sm font-bold">₱{order.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons based on status */}
                  <div className="mt-6 flex flex-wrap gap-3 justify-end">
                    {order.status === "pending_approval" && (
                      <>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                          Approve Order
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          Reject
                        </button>
                      </>
                    )}
                    {order.status === "awaiting_payment" && (
                      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Process Payment
                      </button>
                    )}
                    {order.status === "processing" && (
                      <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Track Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Pending Approval</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Awaiting Payment</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">In Processing</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Pending</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">By Priority</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">High Priority</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Medium Priority</span>
                  <span className="font-medium">4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Low Priority</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Value</span>
                    <span className="font-bold text-green-600">₱151,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Department Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Department of Education</span>
                      <span className="text-sm font-medium">5 orders</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Department of Health</span>
                      <span className="text-sm font-medium">3 orders</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Department of Social Welfare</span>
                      <span className="text-sm font-medium">3 orders</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Department of Agriculture</span>
                      <span className="text-sm font-medium">1 order</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Market Listings */}
      {activeTab === "market" && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search products..."
              />
            </div>

            <div className="flex space-x-2">
              <select
                value={marketCategory}
                onChange={(e) => setMarketCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">All Categories</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Dairy">Dairy</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="rating">Sort by Rating</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="available">Availability</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <Filter className="h-4 w-4 text-gray-500" />
                <span>More Filters</span>
              </button>
            </div>
          </div>

          {/* Market Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredListings.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.organic && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ORGANIC
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.supplier}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-end">
                    <div>
                      <p className="text-lg font-bold">
                        ₱{product.price.toFixed(2)}/{product.unit}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.available.toLocaleString()} {product.unit} available
                      </p>
                    </div>
                    <button className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{" "}
              <span className="font-medium">24</span> products
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>

          {/* Featured Suppliers */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Featured Suppliers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supplierRatings.map((supplier) => (
                <div key={supplier.id} className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-100 p-2 rounded-full mr-3">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{supplier.name}</h4>
                      <p className="text-xs text-gray-500">{supplier.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(supplier.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : star <= supplier.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{supplier.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <p>
                      {supplier.completedOnTime} of {supplier.totalOrders} orders delivered on time (
                      {Math.round((supplier.completedOnTime / supplier.totalOrders) * 100)}%)
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {supplier.categories.map((category, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <button className="w-full px-3 py-1 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-50">
                    View Products
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Supplier Ratings & Reviews */}
      {activeTab === "suppliers" && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search suppliers..."
              />
            </div>

            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="all">All Categories</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Dairy">Dairy</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="rating-desc">Highest Rated</option>
                <option value="rating-asc">Lowest Rated</option>
                <option value="orders-desc">Most Orders</option>
                <option value="reliability">Reliability</option>
              </select>
            </div>
          </div>

          {/* Supplier Cards */}
          <div className="space-y-6">
            {supplierRatings.map((supplier) => (
              <div key={supplier.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{supplier.name}</h3>
                        <p className="text-sm text-gray-500">{supplier.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center gap-3">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.floor(supplier.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : star <= supplier.rating
                                    ? "text-yellow-400 fill-yellow-400 opacity-50"
                                    : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-medium">{supplier.rating}</span>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Performance</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>On-time Delivery</span>
                              <span className="font-medium">
                                {Math.round((supplier.completedOnTime / supplier.totalOrders) * 100)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className="bg-green-500 h-1.5 rounded-full"
                                style={{
                                  width: `${Math.round((supplier.completedOnTime / supplier.totalOrders) * 100)}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Quality Rating</span>
                              <span className="font-medium">{supplier.rating}/5</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div
                                className="bg-green-500 h-1.5 rounded-full"
                                style={{ width: `${(supplier.rating / 5) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Response Time</span>
                              <span className="font-medium">95%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Categories</h4>
                      <div className="bg-gray-50 p-4 rounded-lg h-full">
                        <div className="flex flex-wrap gap-2">
                          {supplier.categories.map((category, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">{supplier.totalOrders}</span> orders completed with{" "}
                            <span className="font-medium">{supplier.completedOnTime}</span> on-time deliveries
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Actions</h4>
                      <div className="bg-gray-50 p-4 rounded-lg h-full">
                        <div className="space-y-2">
                          <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            Create Purchase Order
                          </button>
                          <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                            View Available Products
                          </button>
                          <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                            Contact Supplier
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <h4 className="text-sm font-medium text-gray-500 mb-3">Recent Reviews</h4>
                  <div className="space-y-4">
                    {supplier.reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{review.reviewer}</span>
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supplier Performance Summary */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Supplier Performance Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-2" />
                  <h4 className="font-medium">Average Rating</h4>
                </div>
                <p className="text-2xl font-bold">4.7/5</p>
                <p className="text-sm text-gray-500">Across all suppliers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-medium">On-time Delivery</h4>
                </div>
                <p className="text-2xl font-bold">94%</p>
                <p className="text-sm text-gray-500">Industry average: 85%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Package className="h-5 w-5 text-green-500 mr-2" />
                  <h4 className="font-medium">Order Accuracy</h4>
                </div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-gray-500">Industry average: 92%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-purple-500 mr-2" />
                  <h4 className="font-medium">Quality Consistency</h4>
                </div>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-sm text-gray-500">Industry average: 4.2/5</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Budget Utilization Reports */}
      {activeTab === "budget" && (
        <div className="space-y-6">
          {/* Budget Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <Wallet className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Budget</p>
                  <p className="text-2xl font-bold">₱{budgetData.totalBudget.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Spent</p>
                  <p className="text-2xl font-bold">₱{budgetData.spent.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">
                    {((budgetData.spent / budgetData.totalBudget) * 100).toFixed(1)}% of total budget
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 mr-4">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Remaining</p>
                  <p className="text-2xl font-bold">₱{budgetData.remaining.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">
                    {((budgetData.remaining / budgetData.totalBudget) * 100).toFixed(1)}% of total budget
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Progress */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Budget Allocation & Spending by Category</h3>
            <div className="space-y-6">
              {budgetData.categories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500">
                      ₱{category.spent.toLocaleString()} / ₱{category.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                    <div
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${(category.spent / category.budget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{((category.spent / category.budget) * 100).toFixed(1)}% used</span>
                    <span>₱{category.remaining.toLocaleString()} remaining</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Spending Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Monthly Spending</h3>
              <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="h-80">
              <div className="h-full flex items-end space-x-2">
                {budgetData.monthlySpending.map((month) => (
                  <div key={month.month} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-blue-100 hover:bg-blue-200 rounded-t"
                      style={{
                        height: `${(month.amount / Math.max(...budgetData.monthlySpending.map((m) => m.amount))) * 100}%`,
                        minHeight: month.amount > 0 ? "10px" : "0",
                      }}
                    ></div>
                    <div className="text-xs mt-2 text-gray-600">{month.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Department Budget Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Department Budget Breakdown</h3>
              <div className="space-y-6">
                {budgetData.departments.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{dept.name}</span>
                      <span className="text-sm text-gray-500">
                        ₱{dept.spent.toLocaleString()} / ₱{dept.budget.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{ width: `${(dept.spent / dept.budget) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{((dept.spent / dept.budget) * 100).toFixed(1)}% utilized</span>
                      <span>₱{dept.remaining.toLocaleString()} remaining</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Budget Utilization by Category</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-8 border-gray-100 relative">
                  {budgetData.categories.map((category, index) => {
                    const percentage = (category.spent / budgetData.spent) * 100
                    const colors = ["bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-gray-300"]
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 ${colors[index % colors.length]}`}
                        style={{
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((index * 72 * Math.PI) / 180)}% ${
                            50 - 50 * Math.sin((index * 72 * Math.PI) / 180)
                          }%)`,
                          transform: `rotate(${index * 72}deg)`,
                          opacity: 0.8,
                        }}
                      ></div>
                    )
                  })}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">₱{budgetData.spent.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Total Spent</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {budgetData.categories.map((category, index) => {
                  const colors = ["bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-gray-300"]
                  return (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]} mr-2`}></div>
                      <span className="text-sm">{category.name}</span>
                      <span className="text-sm ml-auto">{((category.spent / budgetData.spent) * 100).toFixed(1)}%</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Export Reports */}
          <div className="flex justify-end space-x-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              <Calendar className="h-4 w-4" />
              Custom Date Range
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <Download className="h-4 w-4" />
              Export Budget Report
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function OrderStatusBadge({ status }) {
  let bgColor = ""
  let textColor = ""
  let label = ""

  switch (status) {
    case "pending_approval":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      label = "Pending Approval"
      break
    case "awaiting_payment":
      bgColor = "bg-blue-100"
      textColor = "text-blue-800"
      label = "Awaiting Payment"
      break
    case "processing":
      bgColor = "bg-purple-100"
      textColor = "text-purple-800"
      label = "Processing"
      break
    case "shipped":
      bgColor = "bg-indigo-100"
      textColor = "text-indigo-800"
      label = "Shipped"
      break
    case "delivered":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      label = "Delivered"
      break
    case "cancelled":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      label = "Cancelled"
      break
    default:
      bgColor = "bg-gray-100"
      textColor = "text-gray-800"
      label = status
  }

  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>{label}</span>
}

function PriorityBadge({ priority }) {
  let bgColor = ""
  let textColor = ""

  switch (priority) {
    case "high":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      break
    case "medium":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      break
    case "low":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      break
    default:
      bgColor = "bg-gray-100"
      textColor = "text-gray-800"
  }

  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
    </span>
  )
}
