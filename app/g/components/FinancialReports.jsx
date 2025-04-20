"use client"

import { useState, useEffect } from "react"
import {
  ArrowDownToLine,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  Plus,
  Search,
  TrendingUp,
  Wallet,
  CheckCircle,
  X,
} from "lucide-react"

export default function FinancialReportsPage() {
  const [activeTab, setActiveTab] = useState("transactions")
  const [dateRange, setDateRange] = useState("this-month")
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [userType, setUserType] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Effect to get user role from localStorage
  useEffect(() => {
    // Get the user role from localStorage
    const storedUserRole = localStorage.getItem("userRole")
    console.log("Detected user role from localStorage:", storedUserRole)

    // Set the user type based on the stored role
    if (storedUserRole === "farmer" || storedUserRole === "government") {
      setUserType(storedUserRole)
    } else {
      // Default to farmer if role is not properly set
      console.warn("User role not found or invalid in localStorage, defaulting to farmer")
      setUserType("farmer")
    }

    setIsLoading(false)
  }, [])

  // Sample data for transactions
  const transactions = [
    {
      id: "TRX-2023-1001",
      date: "2023-10-15",
      description: "Payment for Order #ORD-2023-1001",
      amount: 5550.0,
      type: "income",
      status: "completed",
      paymentMethod: "Bank Transfer",
      from: "Department of Education",
      to: "Green Farms",
      reference: "REF-123456",
    },
    {
      id: "TRX-2023-1002",
      date: "2023-10-14",
      description: "Payment for Order #ORD-2023-1002",
      amount: 17000.0,
      type: "income",
      status: "completed",
      paymentMethod: "Government Voucher",
      from: "Department of Health",
      to: "Green Farms",
      reference: "REF-789012",
    },
    {
      id: "TRX-2023-1003",
      date: "2023-10-12",
      description: "Payment for Order #ORD-2023-1003",
      amount: 17000.0,
      type: "income",
      status: "completed",
      paymentMethod: "Bank Transfer",
      from: "Department of Social Welfare",
      to: "Green Farms",
      reference: "REF-345678",
    },
    {
      id: "TRX-2023-1004",
      date: "2023-10-10",
      description: "Payment for Order #ORD-2023-1004",
      amount: 13500.0,
      type: "income",
      status: "completed",
      paymentMethod: "Government Voucher",
      from: "Department of Agriculture",
      to: "Green Farms",
      reference: "REF-901234",
    },
    {
      id: "TRX-2023-1005",
      date: "2023-10-05",
      description: "Logistics Fee for Delivery #DEL-2023-1001",
      amount: 1200.0,
      type: "expense",
      status: "completed",
      paymentMethod: "Digital Payment",
      from: "Green Farms",
      to: "FastTrack Logistics",
      reference: "REF-567890",
    },
  ]

  // Sample data for invoices
  const invoices = [
    {
      id: "INV-2023-1001",
      orderId: "ORD-2023-1001",
      date: "2023-10-15",
      dueDate: "2023-10-30",
      amount: 5550.0,
      status: "paid",
      buyer: "Department of Education",
      items: [
        { name: "Fresh Tomatoes", quantity: 50, price: 75.0, total: 3750.0 },
        { name: "Carrots", quantity: 30, price: 60.0, total: 1800.0 },
      ],
      subtotal: 5550.0,
      tax: 0,
      total: 5550.0,
    },
    {
      id: "INV-2023-1002",
      orderId: "ORD-2023-1002",
      date: "2023-10-14",
      dueDate: "2023-10-29",
      amount: 17000.0,
      status: "paid",
      buyer: "Department of Health",
      items: [
        {
          name: "Red Delicious Apples",
          quantity: 100,
          price: 120.0,
          total: 12000.0,
        },
        { name: "Brown Rice (5kg)", quantity: 20, price: 250.0, total: 5000.0 },
      ],
      subtotal: 17000.0,
      tax: 0,
      total: 17000.0,
    },
    {
      id: "INV-2023-1003",
      orderId: "ORD-2023-1003",
      date: "2023-10-12",
      dueDate: "2023-10-27",
      amount: 17000.0,
      status: "paid",
      buyer: "Department of Social Welfare",
      items: [{ name: "Fresh Milk (1L)", quantity: 200, price: 85.0, total: 17000.0 }],
      subtotal: 17000.0,
      tax: 0,
      total: 17000.0,
    },
    {
      id: "INV-2023-1004",
      orderId: "ORD-2023-1004",
      date: "2023-10-10",
      dueDate: "2023-10-25",
      amount: 13500.0,
      status: "paid",
      buyer: "Department of Agriculture",
      items: [
        {
          name: "Organic Potatoes",
          quantity: 150,
          price: 90.0,
          total: 13500.0,
        },
      ],
      subtotal: 13500.0,
      tax: 0,
      total: 13500.0,
    },
  ]

  // Sample data for earnings (farmer)
  const earningsData = {
    totalEarnings: 53050.0,
    pendingPayments: 0,
    completedPayments: 53050.0,
    monthlyEarnings: [
      { month: "Jan", amount: 32000 },
      { month: "Feb", amount: 48000 },
      { month: "Mar", amount: 39000 },
      { month: "Apr", amount: 42000 },
      { month: "May", amount: 35000 },
      { month: "Jun", amount: 50000 },
      { month: "Jul", amount: 45000 },
      { month: "Aug", amount: 58000 },
      { month: "Sep", amount: 49000 },
      { month: "Oct", amount: 53050 },
      { month: "Nov", amount: 0 },
      { month: "Dec", amount: 0 },
    ],
    topProducts: [
      { name: "Red Delicious Apples", amount: 12000 },
      { name: "Fresh Milk", amount: 17000 },
      { name: "Organic Potatoes", amount: 13500 },
      { name: "Fresh Tomatoes", amount: 3750 },
      { name: "Brown Rice", amount: 5000 },
    ],
    topBuyers: [
      { name: "Department of Social Welfare", amount: 17000 },
      { name: "Department of Health", amount: 17000 },
      { name: "Department of Agriculture", amount: 13500 },
      { name: "Department of Education", amount: 5550 },
    ],
  }

  // Sample data for budget (government)
  const budgetData = {
    totalBudget: 500000,
    spent: 53050,
    remaining: 446950,
    categories: [
      { name: "Fruits", budget: 150000, spent: 12000, remaining: 138000 },
      { name: "Vegetables", budget: 120000, spent: 19050, remaining: 100950 },
      { name: "Dairy", budget: 100000, spent: 17000, remaining: 83000 },
      { name: "Grains", budget: 80000, spent: 5000, remaining: 75000 },
      { name: "Others", budget: 50000, spent: 0, remaining: 50000 },
    ],
    monthlySpending: [
      { month: "Jan", amount: 32000 },
      { month: "Feb", amount: 48000 },
      { month: "Mar", amount: 39000 },
      { month: "Apr", amount: 42000 },
      { month: "May", amount: 35000 },
      { month: "Jun", amount: 50000 },
      { month: "Jul", amount: 45000 },
      { month: "Aug", amount: 58000 },
      { month: "Sep", amount: 49000 },
      { month: "Oct", amount: 53050 },
      { month: "Nov", amount: 0 },
      { month: "Dec", amount: 0 },
    ],
    topSuppliers: [
      { name: "Green Farms", amount: 53050 },
      { name: "Sunshine Organics", amount: 125000 },
      { name: "Mountain Fresh Produce", amount: 98000 },
      { name: "Valley Dairy Cooperative", amount: 75000 },
    ],
  }

  // Sample data for payment methods
  const paymentMethods = [
    {
      id: 1,
      type: "Bank Account",
      name: "BDO Savings Account",
      details: "Account #: **** 5678",
      isDefault: true,
    },
    {
      id: 2,
      type: "Digital Wallet",
      name: "GCash",
      details: "Account #: **** 1234",
      isDefault: false,
    },
    {
      id: 3,
      type: "Government Voucher",
      name: "DA Procurement System",
      details: "Vendor ID: FARM-12345",
      isDefault: false,
    },
  ]

  // Show loading state while determining user type
  if (isLoading) {
    return (
      <div className="flex-1 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading financial reports...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Financial Reports</h1>
              <p className="mt-1 text-sm text-gray-500">
                Track transactions, manage invoices, and analyze financial performance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                <Download size={16} />
                Export Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-l mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("transactions")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "transactions"
                  ? "border-green-500 text-green-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Transaction History
            </button>
            <button
              onClick={() => setActiveTab("earnings")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "earnings"
                  ? "border-green-500 text-green-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {userType === "farmer" ? "Earnings Report" : "Budget & Spending"}
            </button>
            <button
              onClick={() => setActiveTab("invoices")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "invoices"
                  ? "border-green-500 text-green-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Invoices & Receipts
            </button>
            <button
              onClick={() => setActiveTab("payment-methods")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "payment-methods"
                  ? "border-green-500 text-green-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Payment Methods
            </button>
          </div>
        </div>

        {/* Transaction History */}
        {activeTab === "transactions" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Transactions List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <StatCard
                  title="Total Income"
                  value={`₱${transactions
                    .filter((t) => t.type === "income")
                    .reduce((sum, t) => sum + t.amount, 0)
                    .toLocaleString()}`}
                  change="+12.2%"
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  color="green"
                />
                <StatCard
                  title="Total Expenses"
                  value={`₱${transactions
                    .filter((t) => t.type === "expense")
                    .reduce((sum, t) => sum + t.amount, 0)
                    .toLocaleString()}`}
                  change="+5.1%"
                  icon={<ArrowDownToLine className="w-6 h-6 text-white" />}
                  color="red"
                />
                <StatCard
                  title="Net Balance"
                  value={`₱${(
                    transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0) -
                      transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
                  ).toLocaleString()}`}
                  change="+18.4%"
                  icon={<Wallet className="w-6 h-6 text-white" />}
                  color="blue"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search transactions..."
                  />
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                      <Filter className="h-4 w-4 text-gray-500" />
                      <span>All Types</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>

                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Amount</option>
                    <option value="lowest">Lowest Amount</option>
                  </select>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                    <p className="text-sm text-gray-500 mt-1">View and manage your financial transactions</p>
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
                        <th className="px-6 py-4 font-medium text-white text-sm">Transaction ID</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Date</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Description</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Amount</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Status</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr
                          key={transaction.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium">{transaction.id}</td>
                          <td className="px-6 py-4 text-sm">{transaction.date}</td>
                          <td className="px-6 py-4 text-sm">{transaction.description}</td>
                          <td
                            className={`px-6 py-4 text-sm font-medium ${
                              transaction.type === "income" ? "text-green-500" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "income" ? "+" : "-"}₱{transaction.amount.toLocaleString()}
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                transaction.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : transaction.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <button className="text-green-500 hover:text-green-900">
                              <FileText className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Transaction Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Transaction Summary</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Income</span>
                    <span className="font-medium text-green-500">
                      +₱
                      {transactions
                        .filter((t) => t.type === "income")
                        .reduce((sum, t) => sum + t.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Expenses</span>
                    <span className="font-medium text-red-600">
                      -₱
                      {transactions
                        .filter((t) => t.type === "expense")
                        .reduce((sum, t) => sum + t.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between">
                      <span className="font-medium">Net Balance</span>
                      <span className="font-bold text-green-500">
                        ₱
                        {(
                          transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0) -
                          transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
                </div>
                <div className="p-5 space-y-4">
                  {Array.from(new Set(transactions.map((t) => t.paymentMethod))).map((method) => (
                    <div key={method} className="flex justify-between">
                      <span className="text-gray-500">{method}</span>
                      <span className="font-medium">
                        {transactions.filter((t) => t.paymentMethod === method).length} transactions
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Buyers/Suppliers */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {userType === "farmer" ? "Top Buyers" : "Top Suppliers"}
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  {userType === "farmer"
                    ? Array.from(new Set(transactions.filter((t) => t.type === "income").map((t) => t.from)))
                        .slice(0, 4)
                        .map((buyer) => (
                          <div key={buyer} className="flex justify-between">
                            <span className="text-gray-500">{buyer}</span>
                            <span className="font-medium">
                              ₱
                              {transactions
                                .filter((t) => t.from === buyer && t.type === "income")
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </span>
                          </div>
                        ))
                    : Array.from(new Set(transactions.filter((t) => t.type === "expense").map((t) => t.to)))
                        .slice(0, 4)
                        .map((supplier) => (
                          <div key={supplier} className="flex justify-between">
                            <span className="text-gray-500">{supplier}</span>
                            <span className="font-medium">
                              ₱
                              {transactions
                                .filter((t) => t.to === supplier && t.type === "expense")
                                .reduce((sum, t) => sum + t.amount, 0)
                                .toLocaleString()}
                            </span>
                          </div>
                        ))}
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Report (Farmer) or Budget & Spending (Government) */}
        {activeTab === "earnings" && (
          <div className="space-y-6">
            {userType === "farmer" ? (
              <>
                {/* Farmer Earnings Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    title="Total Earnings"
                    value={`₱${earningsData.totalEarnings.toLocaleString()}`}
                    change="+12.2%"
                    icon={<DollarSign className="w-6 h-6 text-white" />}
                    color="green"
                  />
                  <StatCard
                    title="Pending Payments"
                    value={`₱${earningsData.pendingPayments.toLocaleString()}`}
                    change="0%"
                    icon={<Clock className="w-6 h-6 text-white" />}
                    color="amber"
                  />
                  <StatCard
                    title="Completed Payments"
                    value={`₱${earningsData.completedPayments.toLocaleString()}`}
                    change="+18.4%"
                    icon={<CheckCircle className="w-6 h-6 text-white" />}
                    color="blue"
                  />
                </div>

                {/* Earnings Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Monthly Earnings</h3>
                    <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                  <div className="h-80">
                    <div className="h-full flex items-end space-x-2">
                      {earningsData.monthlyEarnings.map((month) => (
                        <div key={month.month} className="flex-1 flex flex-col items-center">
                          <div
                            className="w-full bg-green-100 hover:bg-green-200 rounded-t"
                            style={{
                              height: `${
                                (month.amount / Math.max(...earningsData.monthlyEarnings.map((m) => m.amount))) * 100
                              }%`,
                              minHeight: month.amount > 0 ? "10px" : "0",
                            }}
                          ></div>
                          <div className="text-xs mt-2 text-gray-600">{month.month}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Products and Buyers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold mb-4">Top Products by Revenue</h3>
                    <div className="space-y-4">
                      {earningsData.topProducts.map((product, index) => (
                        <div key={index} className="flex items-center overflow-hidden">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{product.name}</span>
                              <span className="text-sm font-medium">₱{product.amount.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{
                                  width: `${(product.amount / earningsData.topProducts[0].amount) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold mb-4">Top Buyers</h3>
                    <div className="space-y-4">
                      {earningsData.topBuyers.map((buyer, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{buyer.name}</span>
                              <span className="text-sm font-medium">₱{buyer.amount.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{
                                  width: `${(buyer.amount / earningsData.topBuyers[0].amount) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Export Report */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <Download className="h-4 w-4" />
                    Export Earnings Report
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Government Budget Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <StatCard
                    title="Total Budget"
                    value={`₱${budgetData.totalBudget.toLocaleString()}`}
                    change="+5.0%"
                    icon={<Wallet className="w-6 h-6 text-white" />}
                    color="green"
                  />
                  <StatCard
                    title="Spent"
                    value={`₱${budgetData.spent.toLocaleString()}`}
                    change="+12.2%"
                    icon={<ArrowDownToLine className="w-6 h-6 text-white" />}
                    color="blue"
                  />
                  <StatCard
                    title="Remaining"
                    value={`₱${budgetData.remaining.toLocaleString()}`}
                    change="-2.4%"
                    icon={<TrendingUp className="w-6 h-6 text-white" />}
                    color="amber"
                  />
                </div>

                {/* Budget Progress */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-lg font-semibold mb-4">Budget Allocation & Spending</h3>
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
                            style={{
                              width: `${(category.spent / category.budget) * 100}%`,
                            }}
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

                {/* Monthly Spending and Top Suppliers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold">Monthly Spending</h3>
                      <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                      </select>
                    </div>
                    <div className="h-64">
                      <div className="h-full flex items-end space-x-2">
                        {budgetData.monthlySpending.map((month) => (
                          <div key={month.month} className="flex-1 flex flex-col items-center">
                            <div
                              className="w-full bg-blue-100 hover:bg-blue-200 rounded-t"
                              style={{
                                height: `${
                                  (month.amount / Math.max(...budgetData.monthlySpending.map((m) => m.amount))) * 100
                                }%`,
                                minHeight: month.amount > 0 ? "10px" : "0",
                              }}
                            ></div>
                            <div className="text-xs mt-2 text-gray-600">{month.month}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold mb-4">Top Suppliers</h3>
                    <div className="space-y-4">
                      {budgetData.topSuppliers.map((supplier, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{supplier.name}</span>
                              <span className="text-sm font-medium">₱{supplier.amount.toLocaleString()}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{
                                  width: `${(supplier.amount / budgetData.topSuppliers[0].amount) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Export Report */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <Download className="h-4 w-4" />
                    Export Budget Report
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Invoices & Receipts */}
        {activeTab === "invoices" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Invoices List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search invoices..."
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

                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Amount</option>
                    <option value="lowest">Lowest Amount</option>
                  </select>
                </div>
              </div>

              {/* Invoices Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Invoices & Receipts</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage your invoices and payment receipts</p>
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
                        <th className="px-6 py-4 font-medium text-white text-sm">Invoice ID</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Order ID</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Date</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Due Date</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          {userType === "farmer" ? "Buyer" : "Supplier"}
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Amount</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Status</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4 text-sm font-medium">{invoice.id}</td>
                          <td className="px-5 py-4 text-sm">{invoice.orderId}</td>
                          <td className="px-5 py-4 text-sm">{invoice.date}</td>
                          <td className="px-5 py-4 text-sm">{invoice.dueDate}</td>
                          <td className="px-5 py-4 text-sm">{invoice.buyer}</td>
                          <td className="px-5 py-4 text-sm font-medium">₱{invoice.amount.toLocaleString()}</td>
                          <td className="px-5 py-4">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                invoice.status === "paid"
                                  ? "bg-green-100 text-green-600"
                                  : invoice.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedInvoice(invoice)}
                                className="text-blue-600 hover:text-blue-900"
                                title="View"
                              >
                                <FileText className="h-5 w-5" />
                              </button>
                              <button className="text-green-500 hover:text-green-900" title="Download">
                                <Download className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Invoice Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Invoice Summary</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Invoices</span>
                    <span className="font-medium">{invoices.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Paid Invoices</span>
                    <span className="font-medium">{invoices.filter((i) => i.status === "paid").length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pending Invoices</span>
                    <span className="font-medium">{invoices.filter((i) => i.status === "pending").length}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Amount</span>
                      <span className="font-bold text-green-500">
                        ₱{invoices.reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <FileText className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Invoice #{invoices[0].id} was generated</p>
                      <p className="text-xs text-gray-500">Today at 10:30 AM</p>
                    </div>
                    <span className="text-sm font-medium text-green-500">₱{invoices[0].amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <Download className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Invoice #{invoices[1].id} was downloaded</p>
                      <p className="text-xs text-gray-500">Yesterday at 3:45 PM</p>
                    </div>
                    <span className="text-sm font-medium text-green-500">₱{invoices[1].amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <DollarSign className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Payment received for Invoice #{invoices[2].id}</p>
                      <p className="text-xs text-gray-500">Oct 12, 2023 at 2:15 PM</p>
                    </div>
                    <span className="text-sm font-medium text-green-500">₱{invoices[2].amount.toLocaleString()}</span>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    View All Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        {activeTab === "payment-methods" && (
          <div className="space-y-6">
            {/* Payment Methods List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Your Payment Methods</h3>
                <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  <Plus className="h-4 w-4" />
                  Add Payment Method
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg ${method.isDefault ? "border-green-500" : "border-gray-200"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`p-3 rounded-full ${
                            method.type === "Bank Account"
                              ? "bg-blue-100"
                              : method.type === "Digital Wallet"
                                ? "bg-purple-100"
                                : "bg-green-100"
                          } mr-4`}
                        >
                          {method.type === "Bank Account" ? (
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                          ) : method.type === "Digital Wallet" ? (
                            <Wallet className="h-5 w-5 text-purple-600" />
                          ) : (
                            <CreditCard className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-gray-500">{method.details}</p>
                          {method.isDefault && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600 mt-1">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-gray-600 hover:text-gray-900">Edit</button>
                        {!method.isDefault && (
                          <>
                            <span className="text-gray-300">|</span>
                            <button className="text-sm text-gray-600 hover:text-gray-900">Set as Default</button>
                            <span className="text-gray-300">|</span>
                            <button className="text-sm text-red-600 hover:text-red-900">Remove</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-medium">Bank Transfers</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Connect your bank account to receive payments directly. Bank transfers typically take 1-3 business
                  days to process.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    No transaction fees for farmers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Secure and reliable transfers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automatic payment reconciliation
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <Wallet className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-medium">Digital Payments</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Connect your digital wallet for instant payments. Receive funds immediately and transfer to your bank
                  account anytime.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instant payment processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Low transaction fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile app integration
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-6 w-6 text-green-500 mr-2" />
                  <h3 className="text-lg font-medium">Government Vouchers</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Register to accept government procurement vouchers. Ideal for farmers working with government
                  agencies.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guaranteed payment from government
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simplified documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority processing for farmers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Invoice Details Modal */}
        {selectedInvoice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Invoice: {selectedInvoice.id}</h3>
                <button onClick={() => setSelectedInvoice(null)} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">From</h4>
                    <p className="font-medium">Green Farms</p>
                    <p className="text-sm text-gray-500">123 Farm Road, Laguna</p>
                    <p className="text-sm text-gray-500">Philippines</p>
                    <p className="text-sm text-gray-500">contact@greenfarms.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">To</h4>
                    <p className="font-medium">{selectedInvoice.buyer}</p>
                    <p className="text-sm text-gray-500">456 Government Ave, Manila</p>
                    <p className="text-sm text-gray-500">Philippines</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Invoice Details</h4>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-gray-500">Invoice Number</p>
                          <p className="text-sm font-medium">{selectedInvoice.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Order ID</p>
                          <p className="text-sm font-medium">{selectedInvoice.orderId}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Invoice Date</p>
                          <p className="text-sm font-medium">{selectedInvoice.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Due Date</p>
                          <p className="text-sm font-medium">{selectedInvoice.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Payment Status</h4>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500">Status</p>
                          <p
                            className={`text-sm font-medium ${
                              selectedInvoice.status === "paid"
                                ? "text-green-500"
                                : selectedInvoice.status === "pending"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          >
                            {selectedInvoice.status.charAt(0).toUpperCase() + selectedInvoice.status.slice(1)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Amount</p>
                          <p className="text-sm font-bold">₱{selectedInvoice.amount.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-500 mb-2">Invoice Items</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedInvoice.items.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.quantity}</td>
                          <td className="px-4 py-3 text-sm text-gray-500 text-right">₱{item.price.toLocaleString()}</td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                            ₱{item.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          Subtotal
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{selectedInvoice.subtotal.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          Tax
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{selectedInvoice.tax.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="3" className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                          Total
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                          ₱{selectedInvoice.total.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedInvoice(null)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Close
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value, change, icon, color }) {
  const getGradientClass = (color) => {
    switch (color) {
      case "green":
        return "from-green-400 to-green-500"
      case "blue":
        return "from-blue-400 to-blue-600"
      case "purple":
        return "from-purple-400 to-purple-600"
      case "amber":
        return "from-amber-400 to-amber-600"
      case "red":
        return "from-red-400 to-red-600"
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
