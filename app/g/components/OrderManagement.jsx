"use client"

import { useState } from "react"
import {
  AlertCircle,
  BarChart3,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  FileText,
  Filter,
  MessageCircle,
  Package,
  Search,
  Send,
  ShoppingCart,
  Truck,
  User,
  X,
} from "lucide-react"

export default function GovOrderManagementPage() {
  const [activeTab, setActiveTab] = useState("purchase-orders")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("month")
  const [isModifyQuantityModalOpen, setIsModifyQuantityModalOpen] = useState(false)
  const [modifiedItems, setModifiedItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPaymentOrder, setSelectedPaymentOrder] = useState(null)
  const [messageText, setMessageText] = useState("")

  // Sample data for purchase orders
  const purchaseOrders = [
    {
      id: "PO-2023-1001",
      date: "2023-10-15",
      supplier: {
        id: 1,
        name: "Green Farms",
        location: "Laguna",
        contactPerson: "Juan Dela Cruz",
        contactNumber: "09123456789",
        email: "info@greenfarms.com",
      },
      items: [
        { id: 1, name: "Fresh Tomatoes", quantity: 200, unit: "kg", price: 75.0, total: 15000.0 },
        { id: 2, name: "Carrots", quantity: 150, unit: "kg", price: 60.0, total: 9000.0 },
      ],
      total: 24000.0,
      status: "pending_approval",
      requestedBy: "Maria Santos",
      department: "Department of Education",
      priority: "high",
      deliveryAddress: "123 Education St., Quezon City",
      deliveryDate: "2023-10-25",
      notes: "For school feeding program. Please ensure fresh produce.",
      paymentStatus: "unpaid",
      paymentMethod: "bank_transfer",
      trackingUpdates: [],
      messages: [
        {
          sender: "supplier",
          text: "Hello, I'd like to confirm the delivery date for this order.",
          time: "2023-10-15 10:30 AM",
        },
      ],
    },
    {
      id: "PO-2023-1002",
      date: "2023-10-14",
      supplier: {
        id: 2,
        name: "Sunshine Organics",
        location: "Batangas",
        contactPerson: "Maria Santos",
        contactNumber: "09187654321",
        email: "contact@sunshineorganics.com",
      },
      items: [
        { id: 3, name: "Red Delicious Apples", quantity: 300, unit: "kg", price: 120.0, total: 36000.0 },
        { id: 4, name: "Brown Rice (5kg)", quantity: 50, unit: "sack", price: 250.0, total: 12500.0 },
      ],
      total: 48500.0,
      status: "approved",
      requestedBy: "Juan Dela Cruz",
      department: "Department of Health",
      priority: "medium",
      deliveryAddress: "456 Health Ave., Manila",
      deliveryDate: "2023-10-22",
      notes: "For hospital cafeteria. Organic produce preferred.",
      paymentStatus: "unpaid",
      paymentMethod: "government_voucher",
      trackingUpdates: [
        {
          status: "approved",
          timestamp: "2023-10-15 09:30 AM",
          user: "Admin",
          notes: "Purchase order approved",
        },
      ],
      messages: [],
    },
    {
      id: "PO-2023-1003",
      date: "2023-10-12",
      supplier: {
        id: 3,
        name: "Valley Dairy Cooperative",
        location: "Bulacan",
        contactPerson: "Roberto Reyes",
        contactNumber: "09198765432",
        email: "info@valleydairy.coop",
      },
      items: [{ id: 5, name: "Fresh Milk (1L)", quantity: 500, unit: "bottle", price: 85.0, total: 42500.0 }],
      total: 42500.0,
      status: "in_transit",
      requestedBy: "Roberto Reyes",
      department: "Department of Social Welfare",
      priority: "high",
      deliveryAddress: "789 Welfare Rd., Makati",
      deliveryDate: "2023-10-18",
      notes: "For community feeding program. Please ensure cold chain is maintained.",
      paymentStatus: "partially_paid",
      paymentMethod: "bank_transfer",
      trackingUpdates: [
        {
          status: "approved",
          timestamp: "2023-10-13 10:15 AM",
          user: "Admin",
          notes: "Purchase order approved",
        },
        {
          status: "processing",
          timestamp: "2023-10-14 02:30 PM",
          user: "Supplier",
          notes: "Order is being processed",
        },
        {
          status: "shipped",
          timestamp: "2023-10-16 09:45 AM",
          user: "Supplier",
          notes: "Order has been shipped",
        },
        {
          status: "in_transit",
          timestamp: "2023-10-17 11:20 AM",
          user: "Logistics",
          notes: "Order is in transit to delivery address",
        },
      ],
      messages: [
        {
          sender: "government",
          text: "Your order has been shipped and will arrive tomorrow.",
          time: "2023-10-13 09:15 AM",
        },
        {
          sender: "supplier",
          text: "Thank you for the update!",
          time: "2023-10-13 10:30 AM",
        },
      ],
    },
    {
      id: "PO-2023-1004",
      date: "2023-10-10",
      supplier: {
        id: 4,
        name: "Mountain Fresh Produce",
        location: "Nueva Ecija",
        contactPerson: "Antonio Garcia",
        contactNumber: "09123459876",
        email: "info@mountainfresh.com",
      },
      items: [{ id: 6, name: "Organic Potatoes", quantity: 400, unit: "kg", price: 90.0, total: 36000.0 }],
      total: 36000.0,
      status: "delivered",
      requestedBy: "Antonio Garcia",
      department: "Department of Agriculture",
      priority: "low",
      deliveryAddress: "101 Agri Blvd., Quezon City",
      deliveryDate: "2023-10-15",
      notes: "For research purposes. Organic certification required.",
      paymentStatus: "paid",
      paymentMethod: "government_voucher",
      trackingUpdates: [
        {
          status: "approved",
          timestamp: "2023-10-11 08:30 AM",
          user: "Admin",
          notes: "Purchase order approved",
        },
        {
          status: "processing",
          timestamp: "2023-10-12 01:15 PM",
          user: "Supplier",
          notes: "Order is being processed",
        },
        {
          status: "shipped",
          timestamp: "2023-10-13 10:30 AM",
          user: "Supplier",
          notes: "Order has been shipped",
        },
        {
          status: "in_transit",
          timestamp: "2023-10-14 09:45 AM",
          user: "Logistics",
          notes: "Order is in transit to delivery address",
        },
        {
          status: "delivered",
          timestamp: "2023-10-15 02:30 PM",
          user: "Logistics",
          notes: "Order has been delivered",
        },
      ],
      messages: [
        {
          sender: "supplier",
          text: "The potatoes were excellent quality. Thank you!",
          time: "2023-10-11 14:20 PM",
        },
        {
          sender: "government",
          text: "We're glad you're satisfied with your order!",
          time: "2023-10-11 15:45 PM",
        },
      ],
    },
    {
      id: "PO-2023-1005",
      date: "2023-10-08",
      supplier: {
        id: 5,
        name: "Sunrise Poultry Farm",
        location: "Cavite",
        contactPerson: "Elena Reyes",
        contactNumber: "09187654322",
        email: "contact@sunrisepoultry.com",
      },
      items: [
        { id: 7, name: "Fresh Eggs", quantity: 200, unit: "tray", price: 180.0, total: 36000.0 },
        { id: 8, name: "Chicken (Whole)", quantity: 100, unit: "kg", price: 150.0, total: 15000.0 },
      ],
      total: 51000.0,
      status: "rejected",
      requestedBy: "Elena Reyes",
      department: "Department of Education",
      priority: "medium",
      deliveryAddress: "123 Education St., Quezon City",
      deliveryDate: "2023-10-18",
      notes: "For school feeding program. Fresh eggs and chicken required.",
      paymentStatus: "unpaid",
      paymentMethod: "bank_transfer",
      trackingUpdates: [
        {
          status: "rejected",
          timestamp: "2023-10-09 11:45 AM",
          user: "Admin",
          notes: "Budget constraints. Please resubmit with reduced quantities.",
        },
      ],
      messages: [],
    },
  ]

  // Sample data for invoices
  const invoices = [
    {
      id: "INV-2023-1001",
      orderId: "PO-2023-1004",
      date: "2023-10-15",
      dueDate: "2023-10-30",
      amount: 36000.0,
      status: "paid",
      paymentDate: "2023-10-16",
      paymentMethod: "government_voucher",
      supplier: "Mountain Fresh Produce",
      department: "Department of Agriculture",
      items: [{ name: "Organic Potatoes", quantity: 400, unit: "kg", price: 90.0, total: 36000.0 }],
    },
    {
      id: "INV-2023-1002",
      orderId: "PO-2023-1003",
      date: "2023-10-14",
      dueDate: "2023-10-29",
      amount: 42500.0,
      status: "partially_paid",
      paymentDate: "2023-10-15",
      paymentMethod: "bank_transfer",
      supplier: "Valley Dairy Cooperative",
      department: "Department of Social Welfare",
      items: [{ name: "Fresh Milk (1L)", quantity: 500, unit: "bottle", price: 85.0, total: 42500.0 }],
      partialPayment: 20000.0,
      remainingAmount: 22500.0,
    },
    {
      id: "INV-2023-1003",
      orderId: "PO-2023-1002",
      date: "2023-10-16",
      dueDate: "2023-10-31",
      amount: 48500.0,
      status: "unpaid",
      paymentMethod: "government_voucher",
      supplier: "Sunshine Organics",
      department: "Department of Health",
      items: [
        { name: "Red Delicious Apples", quantity: 300, unit: "kg", price: 120.0, total: 36000.0 },
        { name: "Brown Rice (5kg)", quantity: 50, unit: "sack", price: 250.0, total: 12500.0 },
      ],
    },
  ]

  // Filter purchase orders based on selected filters
  const filteredOrders = purchaseOrders.filter((order) => {
    // Filter by search query
    if (
      searchQuery &&
      !order.id.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !order.supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !order.department.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by status
    if (statusFilter !== "all" && order.status !== statusFilter) {
      return false
    }

    return true
  })

  // Handle order approval
  const handleApproveOrder = (orderId) => {
    // In a real app, you would make an API call to approve the order
    console.log(`Approving order ${orderId}`)
    // For demo purposes, we'll just close the modal
    setSelectedOrder(null)
  }

  // Handle order rejection
  const handleRejectOrder = (orderId) => {
    // In a real app, you would make an API call to reject the order
    console.log(`Rejecting order ${orderId}`)
    // For demo purposes, we'll just close the modal
    setSelectedOrder(null)
  }

  // Handle quantity modification
  const handleModifyQuantity = (orderId) => {
    // Find the order
    const order = purchaseOrders.find((o) => o.id === orderId)
    if (!order) return

    // Initialize modified items with current quantities
    setModifiedItems(order.items.map((item) => ({ ...item })))
    setIsModifyQuantityModalOpen(true)
  }

  // Handle saving modified quantities
  const handleSaveModifiedQuantities = () => {
    // In a real app, you would make an API call to update the quantities
    console.log("Saving modified quantities:", modifiedItems)
    // Close the modal
    setIsModifyQuantityModalOpen(false)
    setModifiedItems([])
  }

  // Handle payment processing
  const handleProcessPayment = (order) => {
    setSelectedPaymentOrder(order)
    setIsPaymentModalOpen(true)
  }

  // Handle payment submission
  const handleSubmitPayment = () => {
    // In a real app, you would make an API call to process the payment
    console.log(`Processing payment for order ${selectedPaymentOrder.id}`)
    // Close the modal
    setIsPaymentModalOpen(false)
    setSelectedPaymentOrder(null)
  }

  // Handle sending message
  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedOrder) return

    // In a real app, you would send this to an API
    console.log(`Sending message to order ${selectedOrder.id}: ${messageText}`)

    // Clear the input
    setMessageText("")
  }

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Order Management</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage purchase orders, track deliveries, and process payments
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                <Download size={16} />
                Export Orders
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm">
                <ShoppingCart size={16} />
                New Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-l mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("purchase-orders")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "purchase-orders"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Purchase Orders
            </button>
            <button
              onClick={() => setActiveTab("order-tracking")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "order-tracking"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Order Tracking
            </button>
            <button
              onClick={() => setActiveTab("payments-invoicing")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "payments-invoicing"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Payments & Invoicing
            </button>
            <button
              onClick={() => setActiveTab("communication")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "communication"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Communication
            </button>
          </div>
        </div>

        {/* Purchase Orders */}
        {activeTab === "purchase-orders" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Orders List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  title="Total Orders"
                  value={purchaseOrders.length.toString()}
                  change="+12.2%"
                  icon={<ShoppingCart className="w-6 h-6 text-white" />}
                  color="blue"
                />
                <StatCard
                  title="Pending Orders"
                  value={purchaseOrders.filter((o) => o.status === "pending_approval").length.toString()}
                  change="+5.1%"
                  icon={<Clock className="w-6 h-6 text-white" />}
                  color="amber"
                />
                <StatCard
                  title="Delivered"
                  value={purchaseOrders.filter((o) => o.status === "delivered").length.toString()}
                  change="+18.4%"
                  icon={<Package className="w-6 h-6 text-white" />}
                  color="green"
                />
                <StatCard
                  title="Total Spent"
                  value={`₱${purchaseOrders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}`}
                  change="+20.1%"
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  color="purple"
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search orders..."
                  />
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <button
                      onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <Filter className="h-4 w-4 text-gray-500" />
                      <span>Status</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </button>
                    {isStatusDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setStatusFilter("all")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "all" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            All Orders
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("pending_approval")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "pending_approval"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Pending Approval
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("approved")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "approved"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Approved
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("in_transit")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "in_transit"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            In Transit
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("delivered")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "delivered"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Delivered
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("rejected")
                              setIsStatusDropdownOpen(false)
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "rejected"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Rejected
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <select className="px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Amount</option>
                    <option value="lowest">Lowest Amount</option>
                  </select>
                </div>
              </div>

              {/* Orders List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage and process your purchase orders</p>
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
                        <th className="px-6 py-4 font-medium text-white text-sm">Order ID</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Supplier</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Date</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Amount</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Status</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">{order.id}</td>
                          <td className="px-6 py-4 text-sm">{order.supplier.name}</td>
                          <td className="px-6 py-4 text-sm">{order.date}</td>
                          <td className="px-6 py-4 text-sm font-medium">₱{order.total.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <OrderStatusBadge status={order.status} />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedOrder(order)}
                                className="px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                              >
                                View
                              </button>
                              {order.status === "pending_approval" && (
                                <button
                                  onClick={() => handleApproveOrder(order.id)}
                                  className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                                >
                                  Approve
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredOrders.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Package className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
                    <p className="text-gray-500">
                      {statusFilter === "all"
                        ? "You don't have any orders yet."
                        : `You don't have any ${statusFilter.replace("_", " ")} orders.`}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Payment Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Summary</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Orders</span>
                    <span className="font-medium text-xl">{purchaseOrders.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Pending Payments</span>
                    <span className="font-medium text-xl">
                      {purchaseOrders.filter((o) => o.paymentStatus === "unpaid").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Completed Payments</span>
                    <span className="font-medium text-xl">
                      {purchaseOrders.filter((o) => o.paymentStatus === "paid").length}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Spent</span>
                      <span className="font-bold text-green-600 text-xl">
                        ₱{purchaseOrders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
                    <div className="px-2 py-0.5 text-xs font-semibold text-white bg-green-500 rounded-full">
                      {purchaseOrders.filter((o) => o.messages && o.messages.length > 0).length}
                    </div>
                  </div>
                  <button className="text-sm font-medium text-green-500 hover:text-green-600 transition-colors">
                    View All
                  </button>
                </div>
                <div className="p-5">
                  <div className="h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                    {purchaseOrders.some((o) => o.messages && o.messages.length > 0) ? (
                      <div className="space-y-3">
                        {purchaseOrders
                          .filter((o) => o.messages && o.messages.length > 0)
                          .map((order) => (
                            <div
                              key={order.id}
                              className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
                            >
                              <div className="rounded-full p-2 bg-blue-100">
                                <MessageCircle className="w-4 h-4 text-blue-600" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium text-gray-900">
                                  {order.supplier.name} - {order.id}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {order.messages[order.messages.length - 1].text.substring(0, 50)}
                                  {order.messages[order.messages.length - 1].text.length > 50 ? "..." : ""}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {order.messages[order.messages.length - 1].time}
                                </p>
                              </div>
                              <button
                                className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-200 transition-colors"
                                onClick={() => {
                                  setActiveTab("communication")
                                  setSelectedOrder(order)
                                }}
                                aria-label="View conversation"
                              >
                                <ChevronRight className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-center p-4">
                        <div className="p-3 bg-gray-100 rounded-full mb-3">
                          <MessageCircle className="h-6 w-6 text-gray-500" />
                        </div>
                        <h3 className="font-medium text-gray-900">No new messages</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          You're all caught up! New messages will appear here.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-5 space-y-3">
                  <QuickActionButton
                    label="Create Purchase Order"
                    icon={<ShoppingCart className="w-4 h-4" />}
                    color="green"
                  />
                  <QuickActionButton label="Process Payment" icon={<CreditCard className="w-4 h-4" />} color="blue" />
                  <QuickActionButton label="Track Deliveries" icon={<Truck className="w-4 h-4" />} color="purple" />
                  <QuickActionButton label="View Reports" icon={<BarChart3 className="w-4 h-4" />} color="amber" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Tracking */}
        {activeTab === "order-tracking" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Tracking List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  title="Total Orders"
                  value={purchaseOrders.length.toString()}
                  change="+12.2%"
                  icon={<ShoppingCart className="w-6 h-6 text-white" />}
                  color="blue"
                />
                <StatCard
                  title="In Transit"
                  value={purchaseOrders.filter((o) => o.status === "in_transit").length.toString()}
                  change="+5.1%"
                  icon={<Truck className="w-6 h-6 text-white" />}
                  color="purple"
                />
                <StatCard
                  title="Delivered"
                  value={purchaseOrders.filter((o) => o.status === "delivered").length.toString()}
                  change="+18.4%"
                  icon={<Package className="w-6 h-6 text-white" />}
                  color="green"
                />
                <StatCard
                  title="On-Time Delivery"
                  value="92%"
                  change="+3.1%"
                  icon={<Clock className="w-6 h-6 text-white" />}
                  color="amber"
                />
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search by PO number, supplier, or department..."
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="all">All Statuses</option>
                    <option value="approved">Approved</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="in_transit">In Transit</option>
                    <option value="delivered">Delivered</option>
                  </select>

                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="all">All Departments</option>
                    <option value="education">Department of Education</option>
                    <option value="health">Department of Health</option>
                    <option value="social">Department of Social Welfare</option>
                    <option value="agriculture">Department of Agriculture</option>
                  </select>
                </div>
              </div>

              {/* Order Tracking List */}
              <div className="space-y-6">
                {purchaseOrders
                  .filter((order) => order.status !== "pending_approval" && order.status !== "rejected")
                  .map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-gray-100 p-3 rounded-full">
                              <Truck className="h-6 w-6 text-gray-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{order.id}</h3>
                              <p className="text-sm text-gray-500">Ordered on {order.date}</p>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex items-center gap-3">
                            <OrderStatusBadge status={order.status} />
                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-1">Supplier</h4>
                            <p className="text-sm font-medium">{order.supplier.name}</p>
                            <p className="text-sm text-gray-500">{order.supplier.location}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-1">Delivery Information</h4>
                            <p className="text-sm font-medium">
                              {order.status === "delivered" ? "Delivered" : `Expected delivery: ${order.deliveryDate}`}
                            </p>
                            <p className="text-sm text-gray-500">{order.deliveryAddress}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-1">Department</h4>
                            <p className="text-sm font-medium">{order.department}</p>
                            <p className="text-sm text-gray-500">Requested by: {order.requestedBy}</p>
                          </div>
                        </div>

                        {/* Tracking Timeline */}
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Tracking Updates</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          {order.trackingUpdates.length > 0 ? (
                            <div className="relative">
                              <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
                              <ul className="space-y-4">
                                {order.trackingUpdates.map((update, index) => (
                                  <li key={index} className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                      {update.status === "approved" ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                      ) : update.status === "processing" ? (
                                        <Package className="h-4 w-4 text-blue-600" />
                                      ) : update.status === "shipped" || update.status === "in_transit" ? (
                                        <Truck className="h-4 w-4 text-purple-600" />
                                      ) : update.status === "delivered" ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                      ) : (
                                        <AlertCircle className="h-4 w-4 text-red-600" />
                                      )}
                                    </div>
                                    <div className="bg-white p-3 rounded-md shadow-sm">
                                      <p className="text-sm font-medium">
                                        {update.status.replace("_", " ").toUpperCase()}
                                      </p>
                                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>{update.timestamp}</span>
                                        <span>By: {update.user}</span>
                                      </div>
                                      {update.notes && <p className="text-xs text-gray-600 mt-1">{update.notes}</p>}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="text-center py-4">
                              <p className="text-gray-500">No tracking updates available yet</p>
                            </div>
                          )}
                        </div>

                        {/* Action buttons */}
                        <div className="mt-6 flex justify-end space-x-3">
                          {order.status === "approved" && (
                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              Update Status to Shipped
                            </button>
                          )}
                          {order.status === "in_transit" && (
                            <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                              Mark as Delivered
                            </button>
                          )}
                          {order.status === "delivered" && (
                            <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                              Download Delivery Receipt
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Delivery Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Delivery Summary</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Deliveries</span>
                    <span className="font-medium text-xl">
                      {purchaseOrders.filter((o) => o.status !== "pending_approval" && o.status !== "rejected").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">In Transit</span>
                    <span className="font-medium text-xl">
                      {purchaseOrders.filter((o) => o.status === "in_transit").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Delivered</span>
                    <span className="font-medium text-xl">
                      {purchaseOrders.filter((o) => o.status === "delivered").length}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">On-Time Delivery Rate</span>
                      <span className="font-bold text-green-600 text-xl">92%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Deliveries */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Deliveries</h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    {purchaseOrders
                      .filter((o) => o.status === "approved" || o.status === "in_transit")
                      .slice(0, 3)
                      .map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                        >
                          <div className="rounded-full p-2 bg-blue-100">
                            <Calendar className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{order.id}</p>
                            <p className="text-xs text-gray-500">Expected: {order.deliveryDate}</p>
                          </div>
                          <OrderStatusBadge status={order.status} />
                        </div>
                      ))}

                    {purchaseOrders.filter((o) => o.status === "approved" || o.status === "in_transit").length ===
                      0 && (
                      <div className="text-center py-4">
                        <p className="text-gray-500">No upcoming deliveries</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-5 space-y-3">
                  <QuickActionButton label="Track Delivery" icon={<Truck className="w-4 h-4" />} color="blue" />
                  <QuickActionButton label="Update Status" icon={<Package className="w-4 h-4" />} color="green" />
                  <QuickActionButton
                    label="Contact Supplier"
                    icon={<MessageCircle className="w-4 h-4" />}
                    color="purple"
                  />
                  <QuickActionButton
                    label="View Delivery Reports"
                    icon={<FileText className="w-4 h-4" />}
                    color="amber"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payments & Invoicing */}
        {activeTab === "payments-invoicing" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Invoices */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  title="Total Invoices"
                  value={invoices.length.toString()}
                  change="+8.2%"
                  icon={<FileText className="w-6 h-6 text-white" />}
                  color="blue"
                />
                <StatCard
                  title="Unpaid"
                  value={invoices.filter((i) => i.status === "unpaid").length.toString()}
                  change="-2.1%"
                  icon={<AlertCircle className="w-6 h-6 text-white" />}
                  color="amber"
                />
                <StatCard
                  title="Paid"
                  value={invoices.filter((i) => i.status === "paid").length.toString()}
                  change="+12.4%"
                  icon={<Check className="w-6 h-6 text-white" />}
                  color="green"
                />
                <StatCard
                  title="Total Amount"
                  value={`₱${invoices.reduce((sum, invoice) => sum + invoice.amount, 0).toLocaleString()}`}
                  change="+15.1%"
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  color="purple"
                />
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search by invoice number, PO number, or supplier..."
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="all">All Payment Statuses</option>
                    <option value="paid">Paid</option>
                    <option value="partially_paid">Partially Paid</option>
                    <option value="unpaid">Unpaid</option>
                  </select>

                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="all">All Departments</option>
                    <option value="education">Department of Education</option>
                    <option value="health">Department of Health</option>
                    <option value="social">Department of Social Welfare</option>
                    <option value="agriculture">Department of Agriculture</option>
                  </select>
                </div>
              </div>

              {/* Invoices Table */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Invoices</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage and process your invoices</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left bg-green-500">
                        <th className="px-6 py-4 font-medium text-white text-sm">Invoice #</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">PO #</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Date</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Supplier</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Department</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Amount</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Status</th>
                        <th className="px-6 py-4 font-medium text-white text-sm">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium">{invoice.id}</td>
                          <td className="px-6 py-4 text-sm">{invoice.orderId}</td>
                          <td className="px-6 py-4 text-sm">{invoice.date}</td>
                          <td className="px-6 py-4 text-sm">{invoice.supplier}</td>
                          <td className="px-6 py-4 text-sm">{invoice.department}</td>
                          <td className="px-6 py-4 text-sm font-medium">₱{invoice.amount.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <PaymentStatusBadge status={invoice.status} />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedInvoice(invoice)}
                                className="text-blue-600 hover:text-blue-900"
                                title="View"
                              >
                                <Eye className="h-5 w-5" />
                              </button>
                              <button className="text-green-600 hover:text-green-900" title="Download">
                                <Download className="h-5 w-5" />
                              </button>
                              {invoice.status !== "paid" && (
                                <button
                                  className="text-green-600 hover:text-green-900"
                                  title="Process Payment"
                                  onClick={() => {
                                    const order = purchaseOrders.find((o) => o.id === invoice.orderId)
                                    if (order) {
                                      handleProcessPayment(order)
                                    }
                                  }}
                                >
                                  <CreditCard className="h-5 w-5" />
                                </button>
                              )}
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
              {/* Payment Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Payment Summary</h3>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Invoices</span>
                    <span className="font-medium text-xl">{invoices.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Paid Invoices</span>
                    <span className="font-medium text-xl">{invoices.filter((i) => i.status === "paid").length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Unpaid Invoices</span>
                    <span className="font-medium text-xl">{invoices.filter((i) => i.status === "unpaid").length}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Outstanding</span>
                      <span className="font-bold text-red-600 text-xl">
                        ₱
                        {invoices
                          .filter((i) => i.status === "unpaid")
                          .reduce((sum, invoice) => sum + invoice.amount, 0)
                          .toLocaleString()}
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
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-500" />
                        <span className="font-medium">Bank Transfer</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {invoices.filter((i) => i.paymentMethod === "bank_transfer").length} Invoices
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-500" />
                        <span className="font-medium">Government Voucher</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {invoices.filter((i) => i.paymentMethod === "government_voucher").length} Invoices
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
                </div>
                <div className="p-5 space-y-3">
                  <QuickActionButton label="Process Payment" icon={<CreditCard className="w-4 h-4" />} color="green" />
                  <QuickActionButton label="Generate Invoice" icon={<FileText className="w-4 h-4" />} color="blue" />
                  <QuickActionButton
                    label="View Payment Reports"
                    icon={<BarChart3 className="w-4 h-4" />}
                    color="purple"
                  />
                  <QuickActionButton
                    label="Manage Payment Methods"
                    icon={<CreditCard className="w-4 h-4" />}
                    color="amber"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communication */}
        {activeTab === "communication" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Messages */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-medium">Orders</h3>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Search orders..."
                  />
                </div>
              </div>

              <div className="overflow-y-auto h-[600px]">
                {purchaseOrders.map((order) => (
                  <button
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`w-full text-left p-4 border-b border-gray-100 hover:bg-gray-50 ${
                      selectedOrder?.id === order.id ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{order.id}</h4>
                        <p className="text-sm text-gray-500">{order.supplier.name}</p>
                      </div>
                      <OrderStatusBadge status={order.status} />
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{order.date}</span>
                    </div>
                    {order.messages && order.messages.length > 0 && (
                      <div className="mt-2 flex items-center text-sm text-green-600">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{order.messages.length} messages</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Message Thread */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
              {selectedOrder ? (
                <>
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{selectedOrder.supplier.name}</h3>
                      <p className="text-sm text-gray-500">Order: {selectedOrder.id}</p>
                    </div>
                    <OrderStatusBadge status={selectedOrder.status} />
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedOrder.messages && selectedOrder.messages.length > 0 ? (
                      selectedOrder.messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.sender === "government" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === "government"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-4">
                        <div className="bg-gray-100 p-3 rounded-full mb-2">
                          <MessageCircle className="h-6 w-6 text-gray-400" />
                        </div>
                        <h3 className="font-medium">No messages yet</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Start a conversation with the supplier to discuss order details.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Type your message..."
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium">Select an order to view messages</h3>
                  <p className="text-gray-500 mt-2">
                    Choose an order from the list to view and respond to messages from suppliers.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && activeTab !== "communication" && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Order Details: {selectedOrder.id}</h3>
                <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Order Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Order ID</p>
                          <p className="text-sm font-medium">{selectedOrder.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Date</p>
                          <p className="text-sm font-medium">{selectedOrder.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Status</p>
                          <OrderStatusBadge status={selectedOrder.status} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Priority</p>
                          <p className="text-sm font-medium capitalize">{selectedOrder.priority}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Supplier Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium">{selectedOrder.supplier.name}</p>
                      <p className="text-sm text-gray-500 mt-1">{selectedOrder.supplier.location}</p>
                      <p className="text-sm text-gray-500 mt-1">Contact: {selectedOrder.supplier.contactPerson}</p>
                      <p className="text-sm text-gray-500 mt-1">Phone: {selectedOrder.supplier.contactNumber}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Department Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium">{selectedOrder.department}</p>
                      <p className="text-sm text-gray-500 mt-1">Requested by: {selectedOrder.requestedBy}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Delivery Information</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium">Delivery Date: {selectedOrder.deliveryDate}</p>
                      <p className="text-sm text-gray-500 mt-1">Address: {selectedOrder.deliveryAddress}</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-500 mb-2">Order Items</h4>
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
                          Unit Price
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
                      {selectedOrder.items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="px-4 py-3 text-sm">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-right">
                            {item.quantity} {item.unit}
                          </td>
                          <td className="px-4 py-3 text-sm text-right">₱{item.price.toFixed(2)}</td>
                          <td className="px-4 py-3 text-sm font-medium text-right">₱{item.total.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          Total
                        </td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                          ₱{selectedOrder.total.toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                {selectedOrder.notes && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Notes</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm">{selectedOrder.notes}</p>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex justify-between">
                  <div className="space-x-3">
                    <button
                      onClick={() => setSelectedOrder(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      Print Order
                    </button>
                  </div>

                  <div className="space-x-3">
                    {selectedOrder.status === "pending_approval" && (
                      <>
                        <button
                          onClick={() => handleApproveOrder(selectedOrder.id)}
                          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Approve Order
                        </button>
                        <button
                          onClick={() => handleRejectOrder(selectedOrder.id)}
                          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          Reject Order
                        </button>
                      </>
                    )}
                    {selectedOrder.status === "approved" && (
                      <button
                        onClick={() => handleModifyQuantity(selectedOrder.id)}
                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                      >
                        Modify Quantity
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modify Quantity Modal */}
        {isModifyQuantityModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Modify Quantities</h3>
                <button
                  onClick={() => setIsModifyQuantityModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-4">
                  Adjust the quantities of items in this order. Please ensure the quantities are accurate before saving.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left bg-gray-50">
                        <th className="px-4 py-2 text-sm font-medium text-gray-500">Item</th>
                        <th className="px-4 py-2 text-sm font-medium text-gray-500">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modifiedItems.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="px-4 py-2 text-sm">{item.name}</td>
                          <td className="px-4 py-2 text-sm">
                            <input
                              type="number"
                              className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-24 sm:text-sm border-gray-300 rounded-md"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = Number.parseInt(e.target.value)
                                setModifiedItems((prevItems) => {
                                  const updatedItems = [...prevItems]
                                  updatedItems[index].quantity = newQuantity
                                  return updatedItems
                                })
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => setIsModifyQuantityModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveModifiedQuantities}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {isPaymentModalOpen && selectedPaymentOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-lg">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Process Payment</h3>
                <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-4">
                  Confirm the payment details for order {selectedPaymentOrder.id} and submit the payment.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Order ID</h4>
                    <p className="text-sm font-medium">{selectedPaymentOrder.id}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Supplier</h4>
                    <p className="text-sm font-medium">{selectedPaymentOrder.supplier.name}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Total Amount</h4>
                    <p className="text-sm font-medium">₱{selectedPaymentOrder.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Payment Method</h4>
                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                      <option value="bank_transfer">Bank Transfer</option>
                      <option value="government_voucher">Government Voucher</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={() => setIsPaymentModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitPayment}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Submit Payment
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

function OrderStatusBadge({ status }) {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-800"
  let label = "Unknown"

  switch (status) {
    case "pending_approval":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      label = "Pending Approval"
      break
    case "approved":
      bgColor = "bg-blue-100"
      textColor = "text-blue-800"
      label = "Approved"
      break
    case "in_transit":
      bgColor = "bg-purple-100"
      textColor = "text-purple-800"
      label = "In Transit"
      break
    case "delivered":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      label = "Delivered"
      break
    case "rejected":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      label = "Rejected"
      break
    default:
      label = status.replace("_", " ")
  }

  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>{label}</span>
}

function PaymentStatusBadge({ status }) {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-800"
  let label = "Unknown"

  switch (status) {
    case "paid":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      label = "Paid"
      break
    case "partially_paid":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      label = "Partially Paid"
      break
    case "unpaid":
      bgColor = "bg-red-100"
      textColor = "text-red-800"
      label = "Unpaid"
      break
    default:
      label = status.replace("_", " ")
  }

  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>{label}</span>
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
