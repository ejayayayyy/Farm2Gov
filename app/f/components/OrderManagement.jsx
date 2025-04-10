"use client"

import { useState } from "react"
import {
  Calendar,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Filter,
  MessageCircle,
  Package,
  Search,
  Send,
  User,
} from "lucide-react"

export default function OrderManagementPage() {
  const [activeTab, setActiveTab] = useState("incoming")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [messageText, setMessageText] = useState("")
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false)

  // Sample data for orders
  const orders = [
    {
      id: "ORD-2023-1001",
      buyer: "Department of Education",
      items: [
        { name: "Fresh Tomatoes", quantity: 50, price: 75.0 },
        { name: "Carrots", quantity: 30, price: 60.0 },
      ],
      total: 5550.0,
      status: "pending",
      date: "2023-10-15",
      paymentStatus: "pending",
      paymentMethod: "Bank Transfer",
      address: "123 Main St, Quezon City",
      contact: "09123456789",
      messages: [
        {
          sender: "buyer",
          text: "Hello, I'd like to confirm the delivery date for this order.",
          time: "2023-10-15 10:30 AM",
        },
      ],
    },
    {
      id: "ORD-2023-1002",
      buyer: "Department of Health",
      items: [
        { name: "Red Delicious Apples", quantity: 100, price: 120.0 },
        { name: "Brown Rice (5kg)", quantity: 20, price: 250.0 },
      ],
      total: 17000.0,
      status: "approved",
      date: "2023-10-14",
      paymentStatus: "paid",
      paymentMethod: "Government Voucher",
      address: "456 Health Ave, Manila",
      contact: "09187654321",
      messages: [],
    },
    {
      id: "ORD-2023-1003",
      buyer: "Department of Social Welfare",
      items: [{ name: "Fresh Milk (1L)", quantity: 200, price: 85.0 }],
      total: 17000.0,
      status: "in-transit",
      date: "2023-10-12",
      paymentStatus: "paid",
      paymentMethod: "Bank Transfer",
      address: "789 Welfare Rd, Makati",
      contact: "09198765432",
      messages: [
        {
          sender: "farmer",
          text: "Your order has been shipped and will arrive tomorrow.",
          time: "2023-10-13 09:15 AM",
        },
        { sender: "buyer", text: "Thank you for the update!", time: "2023-10-13 10:30 AM" },
      ],
    },
    {
      id: "ORD-2023-1004",
      buyer: "Department of Agriculture",
      items: [{ name: "Organic Potatoes", quantity: 150, price: 90.0 }],
      total: 13500.0,
      status: "completed",
      date: "2023-10-10",
      paymentStatus: "paid",
      paymentMethod: "Government Voucher",
      address: "101 Agri Blvd, Quezon City",
      contact: "09123459876",
      messages: [
        { sender: "buyer", text: "The potatoes were excellent quality. Thank you!", time: "2023-10-11 14:20 PM" },
        { sender: "farmer", text: "We're glad you're satisfied with your order!", time: "2023-10-11 15:45 PM" },
      ],
    },
  ]

  const filteredOrders = statusFilter === "all" ? orders : orders.filter((order) => order.status === statusFilter)

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedOrder) return

    // In a real app, you would send this to an API
    console.log(`Sending message to order ${selectedOrder.id}: ${messageText}`)

    // Clear the input
    setMessageText("")
  }

  const updateOrderStatus = (orderId, newStatus) => {
    // In a real app, you would update this via an API
    console.log(`Updating order ${orderId} to status: ${newStatus}`)
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
            onClick={() => setActiveTab("incoming")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "incoming"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Incoming Orders
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "history"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Order History & Payments
          </button>
          <button
            onClick={() => setActiveTab("communication")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "communication"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Communication with Buyers
          </button>
        </nav>
      </div>

      {/* Incoming Orders */}
      {activeTab === "incoming" && (
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
                          setStatusFilter("pending")
                          setIsStatusDropdownOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          statusFilter === "pending" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => {
                          setStatusFilter("approved")
                          setIsStatusDropdownOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          statusFilter === "approved" ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Approved
                      </button>
                      <button
                        onClick={() => {
                          setStatusFilter("in-transit")
                          setIsStatusDropdownOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          statusFilter === "in-transit"
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        In Transit
                      </button>
                      <button
                        onClick={() => {
                          setStatusFilter("completed")
                          setIsStatusDropdownOpen(false)
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          statusFilter === "completed"
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
              </select>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <Package className="h-6 w-6 text-gray-600" />
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Buyer</h4>
                      <p className="text-sm font-medium">{order.buyer}</p>
                      <p className="text-sm text-gray-500">{order.contact}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Order Summary</h4>
                      <p className="text-sm font-medium">{order.items.length} items</p>
                      <p className="text-sm text-gray-500">₱{order.total.toFixed(2)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Payment Status</h4>
                      <p
                        className={`text-sm font-medium ${
                          order.paymentStatus === "paid" ? "text-green-600" : "text-yellow-600"
                        }`}
                      >
                        {order.paymentStatus === "paid" ? "Paid" : "Pending"}
                      </p>
                      <p className="text-sm text-gray-500">{order.paymentMethod}</p>
                    </div>
                  </div>

                  {/* Action buttons based on status */}
                  <div className="mt-6 flex flex-wrap gap-3 justify-end">
                    {order.status === "pending" && (
                      <>
                        <button
                          onClick={() => updateOrderStatus(order.id, "approved")}
                          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Approve Order
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          Decline
                        </button>
                      </>
                    )}
                    {order.status === "approved" && (
                      <button
                        onClick={() => updateOrderStatus(order.id, "in-transit")}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Mark as Shipped
                      </button>
                    )}
                    {order.status === "in-transit" && (
                      <button
                        onClick={() => updateOrderStatus(order.id, "completed")}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Mark as Delivered
                      </button>
                    )}
                    {order.status === "completed" && (
                      <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Generate Invoice
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredOrders.length === 0 && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
                <p className="text-gray-500">
                  {statusFilter === "all"
                    ? "You don't have any orders yet."
                    : `You don't have any ${statusFilter} orders.`}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order History & Payments */}
      {activeTab === "history" && (
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
                placeholder="Search order history..."
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

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="all">All Payment Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Order History Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
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
                      Buyer
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
                      Payment
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
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.buyer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₱{order.total.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <OrderStatusBadge status={order.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            order.paymentStatus === "paid"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.paymentStatus === "paid" ? "Paid" : "Pending"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <button className="text-green-600 hover:text-green-900">
                            <FileText className="h-5 w-5" />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
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

          {/* Payment Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Payment Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Total Orders</span>
                  <span className="font-medium">{orders.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Completed Orders</span>
                  <span className="font-medium">{orders.filter((o) => o.status === "completed").length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pending Payments</span>
                  <span className="font-medium">{orders.filter((o) => o.paymentStatus === "pending").length}</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Revenue</span>
                    <span className="font-bold text-green-600">
                      ₱{orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
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
                    {orders.filter((o) => o.paymentMethod === "Bank Transfer").length} orders
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Government Voucher</span>
                  <span className="font-medium">
                    {orders.filter((o) => o.paymentMethod === "Government Voucher").length} orders
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Top Buyers</h3>
              <div className="space-y-4">
                {Array.from(new Set(orders.map((o) => o.buyer))).map((buyer) => (
                  <div key={buyer} className="flex justify-between">
                    <span className="text-gray-500">{buyer}</span>
                    <span className="font-medium">{orders.filter((o) => o.buyer === buyer).length} orders</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Communication with Buyers */}
      {activeTab === "communication" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Orders List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
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
              {orders.map((order) => (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`w-full text-left p-4 border-b hover:bg-gray-50 ${
                    selectedOrder?.id === order.id ? "bg-green-50" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{order.id}</h4>
                      <p className="text-sm text-gray-500">{order.buyer}</p>
                    </div>
                    <OrderStatusBadge status={order.status} />
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{order.date}</span>
                  </div>
                  {order.messages.length > 0 && (
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{order.messages.length} messages</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Message Thread */}
          <div className="md:col-span-2 bg-white rounded-lg shadow overflow-hidden flex flex-col h-[600px]">
            {selectedOrder ? (
              <>
                <div className="p-4 border-b flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{selectedOrder.buyer}</h3>
                    <p className="text-sm text-gray-500">Order: {selectedOrder.id}</p>
                  </div>
                  <OrderStatusBadge status={selectedOrder.status} />
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {selectedOrder.messages.length > 0 ? (
                    selectedOrder.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === "farmer" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === "farmer" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
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
                      <p className="text-sm text-gray-500 mt-1">Start the conversation with the buyer.</p>
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
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
                  Choose an order from the list to view and respond to messages from buyers.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {selectedOrder && activeTab !== "communication" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Order Details: {selectedOrder.id}</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
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
                            selectedOrder.paymentStatus === "paid" ? "text-green-600" : "text-yellow-600"
                          }`}
                        >
                          {selectedOrder.paymentStatus === "paid" ? "Paid" : "Pending"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Payment Method</p>
                        <p className="text-sm font-medium">{selectedOrder.paymentMethod}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Buyer Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">{selectedOrder.buyer}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedOrder.contact}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedOrder.address}</p>
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
                    {selectedOrder.items.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.quantity}</td>
                        <td className="px-4 py-3 text-sm text-gray-500 text-right">₱{item.price.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                          ₱{(item.quantity * item.price).toFixed(2)}
                        </td>
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

              <div className="flex justify-end space-x-3">
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
    case "pending":
      bgColor = "bg-yellow-100"
      textColor = "text-yellow-800"
      label = "Pending"
      break
    case "approved":
      bgColor = "bg-blue-100"
      textColor = "text-blue-800"
      label = "Approved"
      break
    case "in-transit":
      bgColor = "bg-purple-100"
      textColor = "text-purple-800"
      label = "In Transit"
      break
    case "completed":
      bgColor = "bg-green-100"
      textColor = "text-green-800"
      label = "Completed"
      break
    default:
      bgColor = "bg-gray-100"
      textColor = "text-gray-800"
      label = status
  }

  return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}>{label}</span>
}
