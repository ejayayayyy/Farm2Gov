"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  ChevronDown,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Filter,
  Plus,
  Search,
  Wallet,
  CheckCircle,
  X,
  HelpCircle,
  Calendar,
  ArrowUpCircle,
  ArrowDownCircle,
  Eye,
  Printer,
  Info,
} from "lucide-react";

export default function FarmerFinancialReports() {
  const [activeTab, setActiveTab] = useState("transactions");
  const [dateRange, setDateRange] = useState("this-month");
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showHelp, setShowHelp] = useState(false);
  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false);

  // Effect to get user role from localStorage
  useEffect(() => {
    // Get the user role from localStorage
    const storedUserRole = localStorage.getItem("role");
    console.log("Detected user role from localStorage:", storedUserRole);

    // Set the user type based on the stored role
    if (storedUserRole === "farmer" || storedUserRole === "government") {
      setUserType(storedUserRole);
    } else {
      // Default to farmer if role is not properly set
      console.warn(
        "User role not found or invalid in localStorage, defaulting to farmer"
      );
      setUserType("farmer");
    }

    setIsLoading(false);
  }, []);

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
  ];

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
      items: [
        { name: "Fresh Milk (1L)", quantity: 200, price: 85.0, total: 17000.0 },
      ],
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
  ];

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
  };

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
  ];

  
  

  return (
    <div className="flex-1 bg-gray-50 pb-16">
      {/* Mobile Spacing for Fixed Header */}
      <div className="xl:hidden h-16"></div>

      {/* Main Content */}
      <div className="-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6">
        {/* Welcome Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Financial Reports
              </h1>
              <p className="mt-2 text-base text-gray-600">
                See your earnings, payments, and receipts
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm">
              <Printer size={18} />
              <span className="">Print Report</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-x-auto">
          <div className="flex shrink-0 w-full">
            <TabButton
              active={activeTab === "transactions"}
              onClick={() => setActiveTab("transactions")}
              icon={<Wallet size={20} />}
              label="Money"
            />
            <TabButton
              active={activeTab === "earnings"}
              onClick={() => setActiveTab("earnings")}
              icon={<DollarSign size={20} />}
              label="Earnings"
            />
            <TabButton
              active={activeTab === "invoices"}
              onClick={() => setActiveTab("invoices")}
              icon={<FileText size={20} />}
              label="Receipts"
            />
            <TabButton
              active={activeTab === "payment-methods"}
              onClick={() => setActiveTab("payment-methods")}
              icon={<CreditCard size={20} />}
              label="Payment"
            />
          </div>
        </div>

        {/* Transaction History */}
        {activeTab === "transactions" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Transactions List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MoneyCard
                  title="Money Received"
                  value={`₱${transactions
                    .filter((t) => t.type === "income")
                    .reduce((sum, t) => sum + t.amount, 0)
                    .toLocaleString()}`}
                  icon={<ArrowUpCircle className="w-8 h-8 text-white" />}
                  color="green"
                />
                <MoneyCard
                  title="Money Spent"
                  value={`₱${transactions
                    .filter((t) => t.type === "expense")
                    .reduce((sum, t) => sum + t.amount, 0)
                    .toLocaleString()}`}
                  icon={<ArrowDownCircle className="w-8 h-8 text-white" />}
                  color="red"
                />
                <MoneyCard
                  title="Your Balance"
                  value={`₱${(
                    transactions
                      .filter((t) => t.type === "income")
                      .reduce((sum, t) => sum + t.amount, 0) -
                    transactions
                      .filter((t) => t.type === "expense")
                      .reduce((sum, t) => sum + t.amount, 0)
                  ).toLocaleString()}`}
                  icon={<Wallet className="w-8 h-8 text-white" />}
                  color="blue"
                />
              </div>

              {/* Mobile Filters Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm text-gray-700 font-medium"
                >
                  <Filter size={18} />
                  {mobileFiltersVisible ? "Hide Filters" : "Show Filters"}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileFiltersVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Filters */}
              <div
                className={`flex flex-col gap-4 bg-white p-4 shadow-sm rounded-xl ${
                  mobileFiltersVisible ? "block" : "hidden md:block"
                }`}
              >
                <div className="text-lg font-medium text-gray-800 mb-2">
                  Find Transactions
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-3 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search by buyer or product..."
                  />
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <FilterButton label="All" active={true} />
                  <FilterButton label="Money In" active={false} />
                  <FilterButton label="Money Out" active={false} />
                  <FilterButton
                    label="This Month"
                    active={false}
                    icon={<Calendar size={16} />}
                  />
                </div>
              </div>

              {/* Transactions List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Recent Transactions
                    </h3>
                    <p className="text-base text-gray-500 mt-1">
                      Your recent money movements
                    </p>
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden xl:block overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left bg-green-500">
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Description
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Amount
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Status
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          View
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr
                          key={transaction.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-base">
                            <div className="font-medium">
                              {transaction.date}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-base">
                            {transaction.description}
                          </td>
                          <td
                            className={`px-6 py-4 text-base font-medium ${
                              transaction.type === "income"
                                ? "text-green-500"
                                : "text-red-600"
                            }`}
                          >
                            {transaction.type === "income" ? "+" : "-"}₱
                            {transaction.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                                transaction.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : transaction.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {transaction.status === "completed"
                                ? "Completed"
                                : "Pending"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-100"
                              aria-label="View details"
                            >
                              <Eye size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="
                xl:hidden">
                  <div className="divide-y divide-gray-100">
                    {transactions.map((transaction) => (
                      <div key={transaction.id} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium text-base">
                              {transaction.date}
                            </div>
                            <div className="text-gray-600 text-sm mt-1">
                              {transaction.description}
                            </div>
                          </div>
                          <div
                            className={`text-lg font-bold ${
                              transaction.type === "income"
                                ? "text-green-500"
                                : "text-red-600"
                            }`}
                          >
                            {transaction.type === "income" ? "+" : "-"}₱
                            {transaction.amount.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span
                            className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                              transaction.status === "completed"
                                ? "bg-green-100 text-green-600"
                                : transaction.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {transaction.status === "completed"
                              ? "Completed"
                              : "Pending"}
                          </span>
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg">
                            <Eye size={16} /> View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="space-y-6">
              {/* Transaction Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Money Summary
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-base text-gray-700">Money In</span>
                    </div>
                    <span className="font-medium text-base text-green-500">
                      +₱
                      {transactions
                        .filter((t) => t.type === "income")
                        .reduce((sum, t) => sum + t.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-base text-gray-700">Money Out</span>
                    </div>
                    <span className="font-medium text-base text-red-600">
                      -₱
                      {transactions
                        .filter((t) => t.type === "expense")
                        .reduce((sum, t) => sum + t.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Your Balance</span>
                      <span className="text-xl font-bold text-green-500">
                        ₱
                        {(
                          transactions
                            .filter((t) => t.type === "income")
                            .reduce((sum, t) => sum + t.amount, 0) -
                          transactions
                            .filter((t) => t.type === "expense")
                            .reduce((sum, t) => sum + t.amount, 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">
                    How You Got Paid
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  {Array.from(
                    new Set(transactions.map((t) => t.paymentMethod))
                  ).map((method) => (
                    <div
                      key={method}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        {method === "Bank Transfer" ? (
                          <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
                        ) : method === "Digital Payment" ? (
                          <Wallet className="h-6 w-6 text-purple-500 mr-2" />
                        ) : (
                          <CreditCard className="h-6 w-6 text-green-500 mr-2" />
                        )}
                        <span className="text-base text-gray-700">
                          {method}
                        </span>
                      </div>
                      <span className="font-medium text-base">
                        {
                          transactions.filter((t) => t.paymentMethod === method)
                            .length
                        }{" "}
                        payments
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Buyers */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Top Buyers
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  {Array.from(
                    new Set(
                      transactions
                        .filter((t) => t.type === "income")
                        .map((t) => t.from)
                    )
                  )
                    .slice(0, 4)
                    .map((buyer) => (
                      <div
                        key={buyer}
                        className="flex justify-between items-center"
                      >
                        <span className="text-base text-gray-700">{buyer}</span>
                        <span className="font-medium text-base text-green-500">
                          ₱
                          {transactions
                            .filter(
                              (t) => t.from === buyer && t.type === "income"
                            )
                            .reduce((sum, t) => sum + t.amount, 0)
                            .toLocaleString()}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="px-5 py-4 border-t border-gray-100">
                  <button className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    See All Buyers
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Report */}
        {activeTab === "earnings" && (
          <div className="space-y-6">
            {/* Farmer Earnings Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <MoneyCard
                title="Total Earnings"
                value={`₱${earningsData.totalEarnings.toLocaleString()}`}
                icon={<DollarSign className="w-8 h-8 text-white" />}
                color="green"
              />
              <MoneyCard
                title="Pending Payments"
                value={`₱${earningsData.pendingPayments.toLocaleString()}`}
                icon={<Clock className="w-8 h-8 text-white" />}
                color="amber"
              />
              <MoneyCard
                title="Completed Payments"
                value={`₱${earningsData.completedPayments.toLocaleString()}`}
                icon={<CheckCircle className="w-8 h-8 text-white" />}
                color="blue"
              />
            </div>

            {/* Earnings Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Monthly Earnings</h3>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-base">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div className="h-80">
                <div className="h-full flex items-end space-x-2 overflow-hidden">
                  {earningsData.monthlyEarnings.map((month) => (
                    <div
                      key={month.month}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-green-100 hover:bg-green-200 rounded-t"
                        style={{
                          height: `${
                            (month.amount /
                              Math.max(
                                ...earningsData.monthlyEarnings.map(
                                  (m) => m.amount
                                )
                              )) *
                            100
                          }%`,
                          minHeight: month.amount > 0 ? "10px" : "0",
                        }}
                      ></div>
                      <div className="text-base mt-2 text-gray-600">
                        {month.month}
                      </div>
                      <div className="text-sm font-medium">
                        ₱{(month.amount / 1000).toFixed(0)}K
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Products and Buyers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Best Selling Products
                </h3>
                <div className="space-y-6">
                  {earningsData.topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center overflow-hidden"
                    >
                      <div className="w-full">
                        <div className="flex justify-between mb-2">
                          <span className="text-base font-medium">
                            {product.name}
                          </span>
                          <span className="text-base font-medium text-green-500">
                            ₱{product.amount.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-green-500 h-3 rounded-full"
                            style={{
                              width: `${
                                (product.amount /
                                  earningsData.topProducts[0].amount) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4">Top Buyers</h3>
                <div className="space-y-6">
                  {earningsData.topBuyers.map((buyer, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full">
                        <div className="flex justify-between mb-2">
                          <span className="text-base font-medium">
                            {buyer.name}
                          </span>
                          <span className="text-base font-medium text-green-500">
                            ₱{buyer.amount.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-blue-500 h-3 rounded-full"
                            style={{
                              width: `${
                                (buyer.amount /
                                  earningsData.topBuyers[0].amount) *
                                100
                              }%`,
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
            <div className="flex justify-center md:justify-end">
              <button className="flex items-center gap-2 px-5 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm">
                <Download className="h-5 w-5" />
                Print Earnings Report
              </button>
            </div>
          </div>
        )}

        {/* Invoices & Receipts */}
        {activeTab === "invoices" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Invoices List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Filters */}
              <div className="flex flex-col gap-4 bg-white p-4 shadow-sm rounded-xl">
                <div className="text-lg font-medium text-gray-800 mb-2">
                  Find Receipts
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-6 w-6 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-3 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search receipts..."
                  />
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <FilterButton label="All Receipts" active={true} />
                  <FilterButton label="Paid" active={false} />
                  <FilterButton label="Pending" active={false} />
                  <FilterButton
                    label="This Month"
                    active={false}
                    icon={<Calendar size={16} />}
                  />
                </div>
              </div>

              {/* Invoices List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Your Receipts
                    </h3>
                    <p className="text-base text-gray-500 mt-1">
                      Proof of your sales
                    </p>
                  </div>
                </div>

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left bg-green-500">
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Buyer
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Amount
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Status
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr
                          key={invoice.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-base">
                            {invoice.date}
                          </td>
                          <td className="px-6 py-4 text-base">
                            {invoice.buyer}
                          </td>
                          <td className="px-6 py-4 text-base font-medium">
                            ₱{invoice.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                                invoice.status === "paid"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {invoice.status === "paid" ? "Paid" : "Pending"}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedInvoice(invoice)}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100"
                                title="View receipt"
                              >
                                <Eye size={20} />
                              </button>
                              <button
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-100"
                                title="Print receipt"
                              >
                                <Printer size={20} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden">
                  <div className="divide-y divide-gray-100">
                    {invoices.map((invoice) => (
                      <div key={invoice.id} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium text-base">
                              {invoice.date}
                            </div>
                            <div className="text-gray-600 text-sm mt-1">
                              {invoice.buyer}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-green-500">
                            ₱{invoice.amount.toLocaleString()}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span
                            className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                              invoice.status === "paid"
                                ? "bg-green-100 text-green-600"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {invoice.status === "paid" ? "Paid" : "Pending"}
                          </span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setSelectedInvoice(invoice)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg"
                            >
                              <Eye size={16} /> View
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg">
                              <Printer size={16} /> Print
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Invoice Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Receipt Summary
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base text-gray-700">
                      Total Receipts
                    </span>
                    <span className="font-medium text-base">
                      {invoices.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-gray-700">
                      Paid Receipts
                    </span>
                    <span className="font-medium text-base text-green-500">
                      {invoices.filter((i) => i.status === "paid").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-gray-700">
                      Pending Receipts
                    </span>
                    <span className="font-medium text-base text-yellow-600">
                      {invoices.filter((i) => i.status === "pending").length}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">Total Amount</span>
                      <span className="text-xl font-bold text-green-500">
                        ₱
                        {invoices
                          .reduce((sum, i) => sum + i.amount, 0)
                          .toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Activity
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <FileText className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium">Receipt created</p>
                      <p className="text-sm text-gray-500">Today at 10:30 AM</p>
                    </div>
                    <span className="text-base font-medium text-green-500">
                      ₱{invoices[0].amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full mr-3">
                      <Printer className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium">Receipt printed</p>
                      <p className="text-sm text-gray-500">
                        Yesterday at 3:45 PM
                      </p>
                    </div>
                    <span className="text-base font-medium text-green-500">
                      ₱{invoices[1].amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full mr-3">
                      <DollarSign className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium">Payment received</p>
                      <p className="text-sm text-gray-500">Oct 12, 2023</p>
                    </div>
                    <span className="text-base font-medium text-green-500">
                      ₱{invoices[2].amount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-gray-100">
                  <button className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    See All Activity
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h3 className="text-xl font-semibold">Your Payment Methods</h3>
                <button className="flex items-center gap-2 px-4 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm">
                  <Plus className="h-5 w-5" />
                  Add Payment Method
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`p-4 border rounded-lg ${
                      method.isDefault ? "border-green-500" : "border-gray-200"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                            <BarChart3 className="h-6 w-6 text-blue-600" />
                          ) : method.type === "Digital Wallet" ? (
                            <Wallet className="h-6 w-6 text-purple-600" />
                          ) : (
                            <CreditCard className="h-6 w-6 text-green-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-lg">{method.name}</p>
                          <p className="text-base text-gray-500">
                            {method.details}
                          </p>
                          {method.isDefault && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600 mt-2">
                              Default Method
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg">
                          Edit
                        </button>
                        {!method.isDefault && (
                          <>
                            <button className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg">
                              Set as Default
                            </button>
                            <button className="px-4 py-2 text-base text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 rounded-lg">
                              Remove
                            </button>
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
                  <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-medium">Bank Transfers</h3>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  Get money sent directly to your bank account. Takes 1-3 days
                  to receive.
                </p>
                <ul className="text-base text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>No fees for farmers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Safe and reliable</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Automatic tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <Wallet className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-medium">Digital Wallets</h3>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  Get money instantly to your digital wallet like GCash or
                  PayMaya.
                </p>
                <ul className="text-base text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Instant payment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Small fees</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Works with your phone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-medium">Government Vouchers</h3>
                </div>
                <p className="text-base text-gray-600 mb-4">
                  Accept government payments. Best for selling to government
                  agencies.
                </p>
                <ul className="text-base text-gray-600 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Guaranteed payment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Less paperwork</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Priority for farmers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Invoice Details Modal */}
        {selectedInvoice && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4x max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  Receipt: {selectedInvoice.id}
                </h3>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-2">
                      From
                    </h4>
                    <p className="text-lg font-medium">Green Farms</p>
                    <p className="text-base text-gray-600">
                      123 Farm Road, Laguna
                    </p>
                    <p className="text-base text-gray-600">Philippines</p>
                    <p className="text-base text-gray-600">
                      contact@greenfarms.com
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-2">
                      To
                    </h4>
                    <p className="text-lg font-medium">
                      {selectedInvoice.buyer}
                    </p>
                    <p className="text-base text-gray-600">
                      456 Government Ave, Manila
                    </p>
                    <p className="text-base text-gray-600">Philippines</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-2">
                      Receipt Details
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Receipt Number
                          </p>
                          <p className="text-base font-medium">
                            {selectedInvoice.id}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Order ID</p>
                          <p className="text-base font-medium">
                            {selectedInvoice.orderId}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Receipt Date</p>
                          <p className="text-base font-medium">
                            {selectedInvoice.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Due Date</p>
                          <p className="text-base font-medium">
                            {selectedInvoice.dueDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-2">
                      Payment Status
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Status</p>
                          <p
                            className={`text-base font-medium ${
                              selectedInvoice.status === "paid"
                                ? "text-green-500"
                                : "text-yellow-600"
                            }`}
                          >
                            {selectedInvoice.status === "paid"
                              ? "Paid"
                              : "Pending"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Amount</p>
                          <p className="text-xl font-bold text-green-500">
                            ₱{selectedInvoice.amount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-base font-medium text-gray-700 mb-2">
                  Items Sold
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6 overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-sm font-medium text-gray-700 uppercase"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-sm font-medium text-gray-700 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-right text-sm font-medium text-gray-700 uppercase"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice.items.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-base text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 text-base text-gray-700 text-right">
                            {item.quantity}
                          </td>
                          <td className="px-4 py-3 text-base text-gray-700 text-right">
                            ₱{item.price.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-base font-medium text-gray-900 text-right">
                            ₱{item.total.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan="3"
                          className="px-4 py-3 text-base font-medium text-gray-900 text-right"
                        >
                          Subtotal
                        </td>
                        <td className="px-4 py-3 text-base font-medium text-gray-900 text-right">
                          ₱{selectedInvoice.subtotal.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan="3"
                          className="px-4 py-3 text-base font-medium text-gray-900 text-right"
                        >
                          Tax
                        </td>
                        <td className="px-4 py-3 text-base font-medium text-gray-900 text-right">
                          ₱{selectedInvoice.tax.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan="3"
                          className="px-4 py-3 text-lg font-bold text-gray-900 text-right"
                        >
                          Total
                        </td>
                        <td className="px-4 py-3 text-lg font-bold text-gray-900 text-right">
                          ₱{selectedInvoice.total.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    onClick={() => setSelectedInvoice(null)}
                    className="px-5 py-3 text-base font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                  <button className="flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
                    <Printer className="h-5 w-5" />
                    Print Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

     
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-6 text-base font-medium border-b-4 transition-colors flex items-center gap-2 justify-center lg:w-full ${
        active
          ? "border-green-500 text-green-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}


function MoneyCard({ title, value, icon, color }) {
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
      case "red":
        return "from-red-400 to-red-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div
      className={`bg-gradient-to-r ${getGradientClass(
        color
      )} rounded-xl shadow-sm p-5 transition-all hover:shadow-md`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="p-2 rounded-full bg-white/20">{icon}</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
    </div>
  );
}

function FilterButton({ label, active, icon }) {
  return (
    <button
      className={`flex items-center gap-1 px-4 py-2 rounded-full text-base font-medium transition-colors ${
        active
          ? "bg-green-500 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {icon && icon}
      {label}
    </button>
  );
}
