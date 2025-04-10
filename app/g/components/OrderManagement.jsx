"use client"

import { useState } from "react"
import {
  AlertCircle,
  Calendar,
  Check,
  ChevronDown,
  CreditCard,
  Download,
  Eye,
  Filter,
  Package,
  Search,
  ShoppingCart,
  Truck,
  X,
} from "lucide-react"

export default function GovOrderManagementPage() {
  const [activeTab, setActiveTab] = useState("purchase-orders")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateRange, setDateRange] = useState("all")
  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
  const [isModifyQuantityModalOpen, setIsModifyQuantityModalOpen] = useState(false)
  const [modifiedItems, setModifiedItems] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPaymentOrder, setSelectedPaymentOrder] = useState(null)

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

    // Filter by date range (simplified for demo)
    if (dateRange === "this_week") {
      // In a real app, you would check if the order date is within this week
      return true
    } else if (dateRange === "this_month") {
      // In a real app, you would check if the order date is within this month
      return true
    } else if (dateRange === "last_month") {
      // In a real app, you would check if the order date is within last month
      return true
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

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Order Management</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab("purchase-orders")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "purchase-orders"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Purchase Orders
          </button>
          <button
            onClick={() => setActiveTab("order-tracking")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "order-tracking"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Order Tracking
          </button>
          <button
            onClick={() => setActiveTab("payments-invoicing")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "payments-invoicing"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Payments & Invoicing
          </button>
        </nav>
      </div>

      {/* Purchase Orders */}
      {activeTab === "purchase-orders" && (
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Search by PO number, supplier, or department..."
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span>Status</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  {isFilterOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setStatusFilter("all")
                            setIsFilterOpen(false)
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
                            setIsFilterOpen(false)
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
                            setIsFilterOpen(false)
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
                            setIsFilterOpen(false)
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
                            setIsFilterOpen(false)
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
                            setIsFilterOpen(false)
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

                <div className="relative">
                  <button
                    onClick={() => setIsDateRangeOpen(!isDateRangeOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Date Range</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  {isDateRangeOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setDateRange("all")
                            setIsDateRangeOpen(false)
                          }}
                          className={`block px-4 py-2 text-sm w-full text-left ${
                            dateRange === "all" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          All Time
                        </button>
                        <button
                          onClick={() => {
                            setDateRange("this_week")
                            setIsDateRangeOpen(false)
                          }}
                          className={`block px-4 py-2 text-sm w-full text-left ${
                            dateRange === "this_week" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          This Week
                        </button>
                        <button
                          onClick={() => {
                            setDateRange("this_month")
                            setIsDateRangeOpen(false)
                          }}
                          className={`block px-4 py-2 text-sm w-full text-left ${
                            dateRange === "this_month"
                              ? "bg-green-50 text-green-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          This Month
                        </button>
                        <button
                          onClick={() => {
                            setDateRange("last_month")
                            setIsDateRangeOpen(false)
                          }}
                          className={`block px-4 py-2 text-sm w-full text-left ${
                            dateRange === "last_month"
                              ? "bg-green-50 text-green-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          Last Month
                        </button>
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

                <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  <option value="all">All Departments</option>
                  <option value="education">Department of Education</option>
                  <option value="health">Department of Health</option>
                  <option value="social">Department of Social Welfare</option>
                  <option value="agriculture">Department of Agriculture</option>
                </select>
              </div>
            </div>

            {/* Custom Date Range (if selected) */}
            {dateRange === "custom" && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Apply Date Range
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Purchase Orders List */}
          <div className="space-y-4">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Supplier</h4>
                        <p className="text-sm font-medium">{order.supplier.name}</p>
                        <p className="text-sm text-gray-500">{order.supplier.location}</p>
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
                          {order.paymentStatus === "paid"
                            ? "Paid"
                            : order.paymentStatus === "partially_paid"
                              ? "Partially Paid"
                              : "Unpaid"}
                        </p>
                      </div>
                    </div>

                    {/* Order Items Summary */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Order Items</h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="space-y-2">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex justify-between">
                              <span className="text-sm">
                                {item.quantity} {item.unit} x {item.name}
                              </span>
                              <span className="text-sm font-medium">₱{item.total.toLocaleString()}</span>
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
                          <button
                            onClick={() => handleApproveOrder(order.id)}
                            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                          >
                            Approve Order
                          </button>
                          <button
                            onClick={() => handleModifyQuantity(order.id)}
                            className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Modify Quantities
                          </button>
                          <button
                            onClick={() => handleRejectOrder(order.id)}
                            className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {order.status === "approved" && (
                        <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Track Order
                        </button>
                      )}
                      {(order.status === "approved" || order.status === "in_transit") &&
                        order.paymentStatus !== "paid" && (
                          <button
                            onClick={() => handleProcessPayment(order)}
                            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                          >
                            Process Payment
                          </button>
                        )}
                      {order.status === "delivered" && (
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                          View Receipt
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No purchase orders found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn't find any purchase orders matching your current filters. Try adjusting your search
                  criteria.
                </p>
                <button
                  onClick={() => {
                    setStatusFilter("all")
                    setDateRange("all")
                    setSearchQuery("")
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order Tracking */}
      {activeTab === "order-tracking" && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
          </div>

          {/* Order Tracking List */}
          <div className="space-y-6">
            {purchaseOrders
              .filter((order) => order.status !== "pending_approval" && order.status !== "rejected")
              .map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
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
                                  <p className="text-sm font-medium">{update.status.replace("_", " ").toUpperCase()}</p>
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
      )}

      {/* Payments & Invoicing */}
      {activeTab === "payments-invoicing" && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
          </div>

          {/* Invoices Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Invoices</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Invoice #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      PO #
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
                      Supplier
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Department
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.supplier}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.department}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ₱{invoice.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <PaymentStatusBadge status={invoice.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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

          {/* Payment Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Payment Summary</h3>
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
                  <span className="text-gray-500">Partially Paid</span>
                  <span className="font-medium">{invoices.filter((i) => i.status === "partially_paid").length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Unpaid Invoices</span>
                  <span className="font-medium">{invoices.filter((i) => i.status === "unpaid").length}</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-bold text-green-600">
                      ₱{invoices.reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Bank Transfer</span>
                  <span className="font-medium">
                    {invoices.filter((i) => i.paymentMethod === "bank_transfer").length} invoices
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Government Voucher</span>
                  <span className="font-medium">
                    {invoices.filter((i) => i.paymentMethod === "government_voucher").length} invoices
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Paid</span>
                    <span className="font-bold text-green-600">
                      ₱
                      {invoices
                        .filter((i) => i.status === "paid")
                        .reduce((sum, i) => sum + i.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Department Breakdown</h3>
              <div className="space-y-4">
                {Array.from(new Set(invoices.map((i) => i.department))).map((department) => (
                  <div key={department} className="flex justify-between">
                    <span className="text-gray-500">{department}</span>
                    <span className="font-medium">
                      ₱
                      {invoices
                        .filter((i) => i.department === department)
                        .reduce((sum, i) => sum + i.amount, 0)
                        .toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Purchase Order Details: {selectedOrder.id}</h3>
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
                        <p className="text-xs text-gray-500">Order Date</p>
                        <p className="text-sm font-medium">{selectedOrder.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Status</p>
                        <OrderStatusBadge status={selectedOrder.status} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Status</p>
                        <p
                          className={`text-sm font-medium ${
                            selectedOrder.paymentStatus === "paid"
                              ? "text-green-600"
                              : selectedOrder.paymentStatus === "partially_paid"
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {selectedOrder.paymentStatus === "paid"
                            ? "Paid"
                            : selectedOrder.paymentStatus === "partially_paid"
                              ? "Partially Paid"
                              : "Unpaid"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Method</p>
                        <p className="text-sm font-medium">
                          {selectedOrder.paymentMethod === "bank_transfer" ? "Bank Transfer" : "Government Voucher"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Supplier Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">{selectedOrder.supplier.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedOrder.supplier.location}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Contact: {selectedOrder.supplier.contactPerson}, {selectedOrder.supplier.contactNumber}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Email: {selectedOrder.supplier.email}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Requested By</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">{selectedOrder.requestedBy}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedOrder.department}</p>
                    <p className="text-sm text-gray-500 mt-1">Priority: {selectedOrder.priority.toUpperCase()}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Delivery Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">{selectedOrder.deliveryAddress}</p>
                    <p className="text-sm text-gray-500 mt-1">Expected Delivery: {selectedOrder.deliveryDate}</p>
                    {selectedOrder.notes && (
                      <div className="mt-2 p-2 bg-yellow-50 border border-yellow-100 rounded-md">
                        <p className="text-xs text-yellow-800">Note: {selectedOrder.notes}</p>
                      </div>
                    )}
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
                        Unit
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
                    {selectedOrder.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.quantity}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.unit}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">₱{item.price.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{item.total.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                        Total
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                        ₱{selectedOrder.total.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Tracking Timeline */}
              {selectedOrder.trackingUpdates.length > 0 && (
                <>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Tracking Updates</h4>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
                      <ul className="space-y-4">
                        {selectedOrder.trackingUpdates.map((update, index) => (
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
                              <p className="text-sm font-medium">{update.status.replace("_", " ").toUpperCase()}</p>
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
                  </div>
                </>
              )}

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Close
                </button>

                {selectedOrder.status === "pending_approval" && (
                  <>
                    <button
                      onClick={() => handleModifyQuantity(selectedOrder.id)}
                      className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Modify Quantities
                    </button>
                    <button
                      onClick={() => handleRejectOrder(selectedOrder.id)}
                      className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => handleApproveOrder(selectedOrder.id)}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Approve Order
                    </button>
                  </>
                )}

                {(selectedOrder.status === "approved" || selectedOrder.status === "in_transit") &&
                  selectedOrder.paymentStatus !== "paid" && (
                    <button
                      onClick={() => handleProcessPayment(selectedOrder)}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Process Payment
                    </button>
                  )}

                {selectedOrder.status === "delivered" && (
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Download Receipt
                  </button>
                )}
              </div>
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
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">From</h4>
                  <p className="font-medium">{selectedInvoice.supplier}</p>
                  <p className="text-sm text-gray-500">Supplier Address</p>
                  <p className="text-sm text-gray-500">Philippines</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">To</h4>
                  <p className="font-medium">{selectedInvoice.department}</p>
                  <p className="text-sm text-gray-500">Government Agency Address</p>
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
                              : selectedInvoice.status === "partially_paid"
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {selectedInvoice.status === "paid"
                            ? "Paid"
                            : selectedInvoice.status === "partially_paid"
                              ? "Partially Paid"
                              : "Unpaid"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="text-sm font-bold">₱{selectedInvoice.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    {selectedInvoice.status === "partially_paid" && (
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Paid Amount</p>
                          <p className="text-xs font-medium">₱{selectedInvoice.partialPayment.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-500">Remaining</p>
                          <p className="text-xs font-medium">₱{selectedInvoice.remainingAmount.toLocaleString()}</p>
                        </div>
                      </div>
                    )}
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
                        Unit
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
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.unit}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">₱{item.price.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{item.total.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4" className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                        Total
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                        ₱{selectedInvoice.amount.toLocaleString()}
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
                <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Print Invoice
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

      {/* Modify Quantity Modal */}
      {isModifyQuantityModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Modify Order Quantities</h3>
              <button onClick={() => setIsModifyQuantityModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-4">
                Adjust the quantities below. The total will be recalculated automatically.
              </p>

              <div className="space-y-4">
                {modifiedItems.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        ₱{item.price.toFixed(2)} per {item.unit}
                      </p>
                    </div>
                    <div className="w-32">
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">
                        Quantity
                      </label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        min="0"
                        value={item.quantity}
                        onChange={(e) => {
                          const newQuantity = Number.parseInt(e.target.value) || 0
                          const newItems = [...modifiedItems]
                          newItems[index] = {
                            ...item,
                            quantity: newQuantity,
                            total: newQuantity * item.price,
                          }
                          setModifiedItems(newItems)
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="w-32 text-right">
                      <p className="text-sm font-medium">₱{(item.quantity * item.price).toLocaleString()}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">New Total</span>
                    <span className="text-sm font-bold">
                      ₱{modifiedItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
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

      {/* Payment Processing Modal */}
      {isPaymentModalOpen && selectedPaymentOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Process Payment</h3>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Order Information</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Order ID</p>
                      <p className="text-sm font-medium">{selectedPaymentOrder.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Supplier</p>
                      <p className="text-sm font-medium">{selectedPaymentOrder.supplier.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Amount</p>
                      <p className="text-sm font-medium">₱{selectedPaymentOrder.total.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Payment Status</p>
                      <p
                        className={`text-sm font-medium ${
                          selectedPaymentOrder.paymentStatus === "paid"
                            ? "text-green-600"
                            : selectedPaymentOrder.paymentStatus === "partially_paid"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {selectedPaymentOrder.paymentStatus === "paid"
                          ? "Paid"
                          : selectedPaymentOrder.paymentStatus === "partially_paid"
                            ? "Partially Paid"
                            : "Unpaid"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    id="payment-method"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="government_voucher">Government Voucher</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="payment-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">₱</span>
                    </div>
                    <input
                      type="number"
                      id="payment-amount"
                      defaultValue={selectedPaymentOrder.total}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="Enter payment amount"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {selectedPaymentOrder.paymentStatus === "partially_paid"
                      ? "Remaining balance: ₱XX,XXX.XX"
                      : "Enter the full amount or a partial payment"}
                  </p>
                </div>

                <div>
                  <label htmlFor="payment-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="payment-date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="payment-reference" className="block text-sm font-medium text-gray-700 mb-1">
                    Reference Number
                  </label>
                  <input
                    type="text"
                    id="payment-reference"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter reference number"
                  />
                </div>

                <div>
                  <label htmlFor="payment-notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    id="payment-notes"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Add any additional notes about this payment"
                  ></textarea>
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
                  Process Payment
                </button>
              </div>
            </div>
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
      bgColor = "bg-gray-100"
      textColor = "text-gray-800"
      label = status.replace("_", " ")
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

function PaymentStatusBadge({ status }) {
  let bgColor = ""
  let textColor = ""
  let label = ""

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
      bgColor = "bg-gray-100"
      textColor = "text-gray-800"
      label = status.replace("_", " ")
  }

  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>{label}</span>
}
