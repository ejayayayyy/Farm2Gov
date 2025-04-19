"use client";

import { useState } from "react";
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
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
  Wallet,
  X,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [marketCategory, setMarketCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("month");
  const [inventoryFilter, setInventoryFilter] = useState("all");

  // Sample data for overview metrics
  const metrics = {
    totalBudget: 500000,
    spent: 325000,
    remaining: 175000,
    pendingOrders: 12,
    approvedSuppliers: 45,
    completedPurchases: 78,
  };

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
  ];

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
  ];

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
          comment:
            "Best dairy products we've procured. Always fresh and well-packaged.",
          date: "2023-10-08",
        },
        {
          id: 106,
          reviewer: "Department of Health",
          rating: 5,
          comment:
            "Excellent quality milk and dairy products. Highly recommended for school programs.",
          date: "2023-09-30",
        },
      ],
    },
  ];

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
      {
        name: "Department of Education",
        budget: 200000,
        spent: 150000,
        remaining: 50000,
      },
      {
        name: "Department of Health",
        budget: 150000,
        spent: 95000,
        remaining: 55000,
      },
      {
        name: "Department of Social Welfare",
        budget: 100000,
        spent: 80000,
        remaining: 20000,
      },
      {
        name: "Department of Agriculture",
        budget: 50000,
        spent: 0,
        remaining: 50000,
      },
    ],
  };

  // Sample notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "order",
      message: "New purchase order #PO-2023-1001 received",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "payment",
      message: "Payment confirmed for order #PO-2023-0998",
      time: "30 minutes ago",
    },
    {
      id: 3,
      type: "order",
      message: "Order #PO-2023-1002 awaiting approval",
      time: "1 hour ago",
    },
    {
      id: 4,
      type: "payment",
      message: "Budget allocation updated for Department of Education",
      time: "2 hours ago",
    },
    {
      id: 5,
      type: "order",
      message: "New supplier rating from Department of Health",
      time: "3 hours ago",
    },
  ]);

  // Filter market listings by category
  const filteredListings =
    marketCategory === "all"
      ? marketListings
      : marketListings.filter((item) => item.category === marketCategory);

  const dismissNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Government Procurement Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Welcome back! Here's what's happening with your procurement
                activities today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                <Download size={16} />
                Export Reports
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                onClick={() => {}}
              >
                <Plus size={16} />
                Create Purchase Order
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
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                title="Budget Utilization"
                value={`₱${metrics.spent.toLocaleString()}`}
                change={`${(
                  (metrics.spent / metrics.totalBudget) *
                  100
                ).toFixed(1)}%`}
                icon={<Wallet className="w-6 h-6 text-white" />}
                color="green"
              />
              <StatCard
                title="Pending Orders"
                value={metrics.pendingOrders}
                change="+3 new"
                icon={<ShoppingCart className="w-6 h-6 text-white" />}
                color="blue"
              />
              <StatCard
                title="Approved Suppliers"
                value={metrics.approvedSuppliers}
                change="+5 this month"
                icon={<User className="w-6 h-6 text-white" />}
                color="purple"
              />
              <StatCard
                title="Completed Purchases"
                value={metrics.completedPurchases}
                change="+12 this month"
                icon={<Package className="w-6 h-6 text-white" />}
                color="amber"
              />
            </div>

            {/* Date Filter */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Filter by date
                </span>
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

            {/* Pending Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pending Orders
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Latest purchase orders awaiting approval
                  </p>
                </div>

                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left bg-green-500">
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Order ID
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Department
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Supplier
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Amount
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {order.department}
                        </td>
                        <td className="px-6 py-4 text-sm">{order.supplier}</td>
                        <td className="px-6 py-4 text-sm font-medium">
                          ₱{order.total.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <OrderStatusBadge status={order.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Budget Summary 7 Recent Activity */}
            <div className="flex gap-6 bg--500">
              {/* Budget Summary */}
              <div className="bg-white w-full rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Budget Summary
                  </h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Budget</p>
                      <p className="text-xl font-bold">
                        ₱{budgetData.totalBudget.toLocaleString()}
                      </p>
                    </div>
                    <div className="p-3 rounded-full bg-green-100">
                      <Wallet className="h-6 w-6 text-green-600" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Spent</span>
                        <span className="text-sm font-medium text-green-600">
                          ₱{budgetData.spent.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width: `${
                              (budgetData.spent / budgetData.totalBudget) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Remaining</span>
                        <span className="text-sm font-medium text-blue-600">
                          ₱{budgetData.remaining.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{
                            width: `${
                              (budgetData.remaining / budgetData.totalBudget) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-medium mb-3">Top Categories</h4>
                    <div className="space-y-2">
                      {budgetData.categories
                        .slice(0, 3)
                        .map((category, index) => (
                          <div key={index} className="flex items-center">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                index === 0
                                  ? "bg-green-500"
                                  : index === 1
                                  ? "bg-blue-500"
                                  : "bg-purple-500"
                              } mr-2`}
                            ></div>
                            <span className="text-sm">{category.name}</span>
                            <span className="text-sm ml-auto">
                              ₱{category.spent.toLocaleString()}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-gray-100 bg-white">
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    View Full Budget Report
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white w-full rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <ActivityItem
                      title="Order Approved"
                      description="Purchase order #PO-2023-1001 has been approved"
                      time="2 hours ago"
                    />
                    <ActivityItem
                      title="Payment Processed"
                      description="Payment of ₱42,500 for order #PO-2023-0998 processed"
                      time="5 hours ago"
                    />
                    <ActivityItem
                      title="Budget Updated"
                      description="Department of Education budget allocation updated"
                      time="1 day ago"
                    />
                    <ActivityItem
                      title="Supplier Added"
                      description="New supplier 'Mountain Fresh Produce' added to approved list"
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

            {/* Budget Utilization */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Budget Utilization
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Overview of department budget allocation and spending
                  </p>
                </div>

                <div className="flex">
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-l-lg transition-colors ${
                      inventoryFilter === "all"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setInventoryFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                      inventoryFilter === "high"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border-t border-b border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setInventoryFilter("high")}
                  >
                    High Usage
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-r-lg transition-colors ${
                      inventoryFilter === "low"
                        ? "bg-green-500 text-white"
                        : "text-gray-700 bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    onClick={() => setInventoryFilter("low")}
                  >
                    Low Usage
                  </button>
                </div>
              </div>

              <div className="p-5 space-y-5">
                {budgetData.departments.map((dept, index) => {
                  const usagePercentage = (dept.spent / dept.budget) * 100;
                  const isHighUsage = usagePercentage > 70;
                  const isLowUsage = usagePercentage < 30;

                  if (
                    (inventoryFilter === "high" && !isHighUsage) ||
                    (inventoryFilter === "low" && !isLowUsage)
                  ) {
                    return null;
                  }

                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{dept.name}</span>
                        <span className="text-sm text-gray-500">
                          ₱{dept.spent.toLocaleString()} / ₱
                          {dept.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                        <div
                          className={`h-2.5 rounded-full ${
                            usagePercentage > 80
                              ? "bg-red-500"
                              : usagePercentage > 60
                              ? "bg-amber-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${usagePercentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{usagePercentage.toFixed(1)}% utilized</span>
                        <span>
                          ₱{dept.remaining.toLocaleString()} remaining
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Market Listings */}
            {activeTab === "market" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Market Listings
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Available products from approved suppliers
                    </p>
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
                  </div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredListings.map((product) => (
                    <div
                      key={product.id}
                      className="flex bg-gray-50 rounded-lg border border-gray-100 overflow-hidden"
                    >
                      <div className="w-1/3 relative">
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
                      <div className="w-2/3 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-sm font-semibold">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {product.supplier}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-xs font-medium">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-bold">
                            ₱{product.price.toFixed(2)}/{product.unit}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.available.toLocaleString()} {product.unit}{" "}
                            available
                          </p>
                        </div>
                        <button className="mt-2 px-3 py-1 text-xs text-white bg-green-500 rounded-md hover:bg-green-600">
                          Add to Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Notifications
                  </h3>
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
                              notification.type === "order"
                                ? "bg-green-100"
                                : "bg-blue-100"
                            }`}
                          >
                            {notification.type === "order" ? (
                              <Package className="w-4 h-4 text-green-500" />
                            ) : (
                              <DollarSign className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-gray-900">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500">
                              {notification.time}
                            </p>
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
                      <h3 className="font-medium text-gray-900">
                        No new notifications
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        You're all caught up! New notifications will appear
                        here.
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
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h3>
              </div>
              <div className="p-5 space-y-3">
                <QuickActionButton
                  label="Create Purchase Order"
                  icon={<ShoppingBag className="w-4 h-4" />}
                  color="green"
                />
                <QuickActionButton
                  label="Review Pending Approvals"
                  icon={<ShoppingCart className="w-4 h-4" />}
                  color="blue"
                />
                <QuickActionButton
                  label="Generate Budget Report"
                  icon={<BarChart3 className="w-4 h-4" />}
                  color="purple"
                />
                <QuickActionButton
                  label="Manage Approved Suppliers"
                  icon={<User className="w-4 h-4" />}
                  color="amber"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon, color }) {
  const getGradientClass = (color) => {
    switch (color) {
      case "green":
        return "from-green-400 to-green-600";
      case "blue":
        return "from-blue-400 to-blue-600";
      case "purple":
        return "from-purple-400 to-purple-600";
      case "amber":
        return "from-amber-400 to-amber-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${getGradientClass(
        color
      )} rounded-xl shadow-sm p-4 transition-all hover:shadow-md`}
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
  );
}

function OrderStatusBadge({ status }) {
  let bgColor = "";
  let textColor = "";
  let label = "";

  switch (status) {
    case "pending_approval":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      label = "Pending Approval";
      break;
    case "awaiting_payment":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      label = "Awaiting Payment";
      break;
    case "processing":
      bgColor = "bg-purple-100";
      textColor = "text-purple-800";
      label = "Processing";
      break;
    case "shipped":
      bgColor = "bg-indigo-100";
      textColor = "text-indigo-800";
      label = "Shipped";
      break;
    case "delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      label = "Delivered";
      break;
    case "cancelled":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      label = "Cancelled";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
      label = status;
  }

  return (
    <span
      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}
    >
      {label}
    </span>
  );
}

function PriorityBadge({ priority }) {
  let bgColor = "";
  let textColor = "";

  switch (priority) {
    case "high":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      break;
    case "medium":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    case "low":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
  }

  return (
    <span
      className={`px-2.5 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}
    >
      {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
    </span>
  );
}

function QuickActionButton({ label, icon, color }) {
  const getColorClass = (color) => {
    switch (color) {
      case "green":
        return "text-green-500 border-green-200 hover:bg-green-50";
      case "blue":
        return "text-blue-600 border-blue-200 hover:bg-blue-50";
      case "purple":
        return "text-purple-600 border-purple-200 hover:bg-purple-50";
      case "amber":
        return "text-amber-600 border-amber-200 hover:bg-amber-50";
      default:
        return "text-gray-600 border-gray-200 hover:bg-gray-50";
    }
  };

  return (
    <button
      className={`flex items-center w-full p-3 rounded-lg border ${getColorClass(
        color
      )} transition-colors`}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function ActivityItem({ title, description, time }) {
  return (
    <div className="border-l-2 border-green-500 pl-3">
      <h4 className="text-sm font-medium text-gray-900">{title}</h4>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  );
}
