"use client"

import { useState } from "react"
import {
  ArrowDownToLine,
  BarChart3,
  Calendar,
  ChevronDown,
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
} from "lucide-react"

export default function FinancialReportsPage() {
  const [activeTab, setActiveTab] = useState("transactions")
  const [dateRange, setDateRange] = useState("this-month")
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [userType, setUserType] = useState("farmer") // farmer or government

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
        { name: "Red Delicious Apples", quantity: 100, price: 120.0, total: 12000.0 },
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
      items: [{ name: "Organic Potatoes", quantity: 150, price: 90.0, total: 13500.0 }],
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

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Financial Reports</h1>
        <div className="flex items-center gap-2">
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="farmer">Farmer View</option>
            <option value="government">Government Buyer View</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab("transactions")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "transactions"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Transaction History
          </button>
          <button
            onClick={() => setActiveTab("earnings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "earnings"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {userType === "farmer" ? "Earnings Report" : "Budget & Spending"}
          </button>
          <button
            onClick={() => setActiveTab("invoices")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "invoices"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Invoices & Receipts
          </button>
          <button
            onClick={() => setActiveTab("payment-methods")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "payment-methods"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Payment Methods
          </button>
        </nav>
      </div>

      {/* Transaction History */}
      {activeTab === "transactions" && (
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
                placeholder="Search transactions..."
              />
            </div>

            <div className="flex space-x-2">
              <div className="relative">
                <button
                  onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>
                    {dateRange === "this-month"
                      ? "This Month"
                      : dateRange === "last-month"
                        ? "Last Month"
                        : dateRange === "last-3-months"
                          ? "Last 3 Months"
                          : dateRange === "this-year"
                            ? "This Year"
                            : "Custom Range"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                {isDateRangeOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setDateRange("this-month")
                          setIsDateRangeOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          dateRange === "this-month" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        This Month
                      </button>
                      <button
                        onClick={() => {
                          setDateRange("last-month")
                          setIsDateRangeOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          dateRange === "last-month" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Last Month
                      </button>
                      <button
                        onClick={() => {
                          setDateRange("last-3-months")
                          setIsDateRangeOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          dateRange === "last-3-months"
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Last 3 Months
                      </button>
                      <button
                        onClick={() => {
                          setDateRange("this-year")
                          setIsDateRangeOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          dateRange === "this-year" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        This Year
                      </button>
                      <div className="border-t border-gray-100 my-1"></div>
                      <button
                        onClick={() => {
                          setDateRange("custom")
                          setIsDateRangeOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          dateRange === "custom" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Custom Range
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span>All Types</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Payment Method
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {transaction.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.description}</td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          transaction.type === "income" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}₱{transaction.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            transaction.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.paymentMethod}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-green-600 hover:text-green-900">
                          <FileText className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transaction Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Transaction Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Income</span>
                  <span className="font-medium text-green-600">
                    +₱
                    {transactions
                      .filter((t) => t.type === "income")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Expenses</span>
                  <span className="font-medium text-red-600">
                    -₱
                    {transactions
                      .filter((t) => t.type === "expense")
                      .reduce((sum, t) => sum + t.amount, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Net Balance</span>
                    <span className="font-bold text-green-600">
                      ₱
                      {(
                        transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0) -
                        transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
              <div className="space-y-4">
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

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">{userType === "farmer" ? "Top Buyers" : "Top Suppliers"}</h3>
              <div className="space-y-4">
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
                              .toFixed(2)}
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
                              .toFixed(2)}
                          </span>
                        </div>
                      ))}
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
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 mr-4">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                      <p className="text-2xl font-bold">₱{earningsData.totalEarnings.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100 mr-4">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                      <p className="text-2xl font-bold">₱{earningsData.pendingPayments.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 mr-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completed Payments</p>
                      <p className="text-2xl font-bold">₱{earningsData.completedPayments.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Chart */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Monthly Earnings</h3>
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
                            height: `${(month.amount / Math.max(...earningsData.monthlyEarnings.map((m) => m.amount))) * 100}%`,
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
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium mb-4">Top Products by Revenue</h3>
                  <div className="space-y-4">
                    {earningsData.topProducts.map((product, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{product.name}</span>
                            <span className="text-sm font-medium">₱{product.amount.toFixed(2)}</span>
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

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium mb-4">Top Buyers</h3>
                  <div className="space-y-4">
                    {earningsData.topBuyers.map((buyer, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{buyer.name}</span>
                            <span className="text-sm font-medium">₱{buyer.amount.toFixed(2)}</span>
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
                <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  <Download className="h-4 w-4" />
                  Export Earnings Report
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Government Budget Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 mr-4">
                      <Wallet className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Budget</p>
                      <p className="text-2xl font-bold">₱{budgetData.totalBudget.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 mr-4">
                      <ArrowDownToLine className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Spent</p>
                      <p className="text-2xl font-bold">₱{budgetData.spent.toFixed(2)}</p>
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
                      <p className="text-2xl font-bold">₱{budgetData.remaining.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budget Progress */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Budget Allocation & Spending</h3>
                <div className="space-y-6">
                  {budgetData.categories.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-sm text-gray-500">
                          ₱{category.spent.toFixed(2)} / ₱{category.budget.toFixed(2)}
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
                        <span>₱{category.remaining.toFixed(2)} remaining</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Spending and Top Suppliers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Monthly Spending</h3>
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

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium mb-4">Top Suppliers</h3>
                  <div className="space-y-4">
                    {budgetData.topSuppliers.map((supplier, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-full">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{supplier.name}</span>
                            <span className="text-sm font-medium">₱{supplier.amount.toFixed(2)}</span>
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
                <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
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
                placeholder="Search invoices..."
              />
            </div>

            <div className="flex space-x-2">
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Date Range</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span>Status</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Invoices Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Invoice ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Due Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {userType === "farmer" ? "Buyer" : "Supplier"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.orderId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.dueDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.buyer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₱{invoice.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            invoice.status === "paid"
                              ? "bg-green-100 text-green-800"
                              : invoice.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setSelectedInvoice(invoice)}
                            className="text-blue-600 hover:text-blue-900"
                            title="View"
                          >
                            <FileText className="h-5 w-5" />
                          </button>
                          <button className="text-green-600 hover:text-green-900" title="Download">
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

          {/* Invoice Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Invoice Summary</h3>
              <div className="space-y-4">
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
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-bold text-green-600">
                      ₱{invoices.reduce((sum, i) => sum + i.amount, 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Invoice #{invoices[0].id} was generated</p>
                    <p className="text-xs text-gray-500">Today at 10:30 AM</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">₱{invoices[0].amount.toFixed(2)}</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-full mr-3">
                    <Download className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Invoice #{invoices[1].id} was downloaded</p>
                    <p className="text-xs text-gray-500">Yesterday at 3:45 PM</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">₱{invoices[1].amount.toFixed(2)}</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Payment received for Invoice #{invoices[2].id}</p>
                    <p className="text-xs text-gray-500">Oct 12, 2023 at 2:15 PM</p>
                  </div>
                  <span className="text-sm font-medium text-green-600">₱{invoices[2].amount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Methods */}
      {activeTab === "payment-methods" && (
        <div className="space-y-6">
          {/* Payment Methods List */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Your Payment Methods</h3>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
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
                          <CreditCard className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-gray-500">{method.details}</p>
                        {method.isDefault && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
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
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-medium">Bank Transfers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Connect your bank account to receive payments directly. Bank transfers typically take 1-3 business days
                to process.
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

            <div className="bg-white rounded-lg shadow p-6">
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

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-lg font-medium">Government Vouchers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Register to accept government procurement vouchers. Ideal for farmers working with government agencies.
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
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Invoice: {selectedInvoice.id}</h3>
              <button onClick={() => setSelectedInvoice(null)} className="text-gray-400 hover:text-gray-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
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
                              ? "text-green-600"
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
                        <p className="text-sm font-bold">₱{selectedInvoice.amount.toFixed(2)}</p>
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
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">₱{item.price.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{item.total.toFixed(2)}
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
                        ₱{selectedInvoice.subtotal.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                        Tax
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                        ₱{selectedInvoice.tax.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                        Total
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                        ₱{selectedInvoice.total.toFixed(2)}
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
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
