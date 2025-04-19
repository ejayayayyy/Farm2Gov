"use client";

import { useState, useRef } from "react";
import {
  BarChart3,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  ExternalLink,
  Filter,
  MapPin,
  Package,
  Search,
  Truck,
  X,
} from "lucide-react";

export default function LogisticsDeliveryPage() {
  const [activeTab, setActiveTab] = useState("deliveries");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [proofImages, setProofImages] = useState([]);
  const [dateFilter, setDateFilter] = useState("month");
  const fileInputRef = useRef(null);

  // Sample data for deliveries
  const deliveries = [
    {
      id: "DEL-2023-1001",
      orderId: "ORD-2023-1001",
      buyer: "Department of Education",
      destination: "123 Main St, Quezon City",
      origin: "Green Farms, Laguna",
      items: [
        { name: "Fresh Tomatoes", quantity: 50 },
        { name: "Carrots", quantity: 30 },
      ],
      status: "pending",
      scheduledDate: "2023-10-20",
      estimatedArrival: "2023-10-21",
      logisticsPartner: "FastTrack Logistics",
      trackingNumber: "FTL-78945612",
      contactPerson: "Juan Dela Cruz",
      contactNumber: "09123456789",
      notes: "Please deliver during office hours (8am-5pm)",
      trackingUpdates: [],
    },
    {
      id: "DEL-2023-1002",
      orderId: "ORD-2023-1002",
      buyer: "Department of Health",
      destination: "456 Health Ave, Manila",
      origin: "Green Farms, Laguna",
      items: [
        { name: "Red Delicious Apples", quantity: 100 },
        { name: "Brown Rice (5kg)", quantity: 20 },
      ],
      status: "in-progress",
      scheduledDate: "2023-10-18",
      estimatedArrival: "2023-10-19",
      logisticsPartner: "Rural Express",
      trackingNumber: "RE-45678923",
      contactPerson: "Maria Santos",
      contactNumber: "09187654321",
      notes: "Call recipient 30 minutes before arrival",
      trackingUpdates: [
        {
          status: "Picked up from farm",
          timestamp: "2023-10-18 08:30 AM",
          location: "Green Farms, Laguna",
        },
        {
          status: "In transit",
          timestamp: "2023-10-18 10:15 AM",
          location: "SLEX, Calamba",
        },
      ],
    },
    {
      id: "DEL-2023-1003",
      orderId: "ORD-2023-1003",
      buyer: "Department of Social Welfare",
      destination: "789 Welfare Rd, Makati",
      origin: "Green Farms, Laguna",
      items: [{ name: "Fresh Milk (1L)", quantity: 200 }],
      status: "delivered",
      scheduledDate: "2023-10-15",
      deliveredDate: "2023-10-16",
      estimatedArrival: "2023-10-16",
      logisticsPartner: "FastTrack Logistics",
      trackingNumber: "FTL-12345678",
      contactPerson: "Roberto Reyes",
      contactNumber: "09198765432",
      notes: "",
      proofOfDelivery: "/images/delivery-proof-1003.jpg",
      trackingUpdates: [
        {
          status: "Picked up from farm",
          timestamp: "2023-10-15 09:00 AM",
          location: "Green Farms, Laguna",
        },
        {
          status: "In transit",
          timestamp: "2023-10-15 11:30 AM",
          location: "SLEX, Calamba",
        },
        {
          status: "In transit",
          timestamp: "2023-10-15 01:45 PM",
          location: "Makati City",
        },
        {
          status: "Delivered",
          timestamp: "2023-10-16 10:20 AM",
          location: "789 Welfare Rd, Makati",
        },
      ],
    },
    {
      id: "DEL-2023-1004",
      orderId: "ORD-2023-1004",
      buyer: "Department of Agriculture",
      destination: "101 Agri Blvd, Quezon City",
      origin: "Green Farms, Laguna",
      items: [{ name: "Organic Potatoes", quantity: 150 }],
      status: "delivered",
      scheduledDate: "2023-10-12",
      deliveredDate: "2023-10-13",
      estimatedArrival: "2023-10-13",
      logisticsPartner: "Rural Express",
      trackingNumber: "RE-87654321",
      contactPerson: "Antonio Garcia",
      contactNumber: "09123459876",
      notes: "Leave at security gate if no one answers",
      proofOfDelivery: "/iamges/delivery-proof-1004.jpg",
      trackingUpdates: [
        {
          status: "Picked up from farm",
          timestamp: "2023-10-12 08:15 AM",
          location: "Green Farms, Laguna",
        },
        {
          status: "In transit",
          timestamp: "2023-10-12 10:45 AM",
          location: "SLEX, Calamba",
        },
        {
          status: "In transit",
          timestamp: "2023-10-12 01:30 PM",
          location: "Quezon City",
        },
        {
          status: "Delivered",
          timestamp: "2023-10-13 09:45 AM",
          location: "101 Agri Blvd, Quezon City",
        },
      ],
    },
  ];

  // Sample data for logistics partners
  const logisticsPartners = [
    {
      id: 1,
      name: "FastTrack Logistics",
      logo: "/images/fast-track-career.png",
      contactNumber: "09123456789",
      email: "support@fasttrack.com",
      website: "https://www.fasttrack.com",
      coverage: ["Metro Manila", "Calabarzon", "Central Luzon"],
      specialization: "Same-day delivery for fresh produce",
      rates: "₱500 base + ₱20/km",
      status: "active",
    },
    {
      id: 2,
      name: "Rural Express",
      logo: "/images/country-road-delivery.png",
      contactNumber: "09187654321",
      email: "info@ruralexpress.com",
      website: "https://www.ruralexpress.com",
      coverage: ["Calabarzon", "Bicol Region", "Western Visayas"],
      specialization: "Rural area deliveries",
      rates: "₱400 base + ₱15/km",
      status: "active",
    },
    {
      id: 3,
      name: "Island Movers",
      logo: "/images/tropical-island-relocation.png",
      contactNumber: "09198765432",
      email: "contact@islandmovers.com",
      website: "https://www.islandmovers.com",
      coverage: ["Visayas", "Mindanao"],
      specialization: "Inter-island logistics",
      rates: "₱800 base + ₱25/km",
      status: "active",
    },
  ];

  const filteredDeliveries =
    statusFilter === "all"
      ? deliveries
      : deliveries.filter((delivery) => delivery.status === statusFilter);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        file: file,
      }));
      setProofImages([...proofImages, ...newImages]);
    }
  };

  const removeImage = (id) => {
    setProofImages(proofImages.filter((image) => image.id !== id));
  };

  const uploadProofOfDelivery = () => {
    if (proofImages.length === 0 || !selectedDelivery) return;

    // In a real app, you would upload these to a server
    console.log(
      `Uploading proof of delivery for ${selectedDelivery.id}:`,
      proofImages
    );

    // Clear the images
    setProofImages([]);

    // Close the modal
    setSelectedDelivery(null);
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Logistics & Delivery
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage deliveries, track orders, and coordinate with logistics
                partners.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
                <Download size={16} />
                Export Data
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                onClick={() => {}}
              >
                <Truck size={16} />
                Schedule Delivery
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
              onClick={() => setActiveTab("deliveries")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "deliveries"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Delivery Management
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "tracking"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Order Tracking
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "partners"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Logistics Partners
            </button>
          </div>
        </div>

        {/* Date Filter */}
        {/* <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
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
        </div> */}

        {/* Delivery Management */}
        {activeTab === "deliveries" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Deliveries List */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StatCard
                  title="Total Deliveries"
                  value={deliveries.length.toString()}
                  change="+12.2%"
                  icon={<Truck className="w-6 h-6 text-white" />}
                  color="blue"
                />
                <StatCard
                  title="Pending"
                  value={deliveries
                    .filter((d) => d.status === "pending")
                    .length.toString()}
                  change="+5.1%"
                  icon={<Clock className="w-6 h-6 text-white" />}
                  color="amber"
                />
                <StatCard
                  title="In Progress"
                  value={deliveries
                    .filter((d) => d.status === "in-progress")
                    .length.toString()}
                  change="+18.4%"
                  icon={<Package className="w-6 h-6 text-white" />}
                  color="purple"
                />
                <StatCard
                  title="Delivered"
                  value={deliveries
                    .filter((d) => d.status === "delivered")
                    .length.toString()}
                  change="+20.1%"
                  icon={<CheckCircle className="w-6 h-6 text-white" />}
                  color="green"
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
                    placeholder="Search deliveries..."
                  />
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsStatusDropdownOpen(!isStatusDropdownOpen)
                      }
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
                              setStatusFilter("all");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "all"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            All Deliveries
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("pending");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "pending"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("in-progress");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "in-progress"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            In Progress
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("delivered");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`block px-4 py-2 text-sm w-full text-left ${
                              statusFilter === "delivered"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            Delivered
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="upcoming">Upcoming Deliveries</option>
                  </select>
                </div>
              </div>

              {/* Deliveries List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Deliveries
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Manage and track your product deliveries
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
                          Delivery ID
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          Destination
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          Partner
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          Status
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-sm">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDeliveries.map((delivery) => (
                        <tr
                          key={delivery.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium">
                            {delivery.id}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {delivery.destination}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {delivery.status === "delivered"
                              ? delivery.deliveredDate
                              : delivery.scheduledDate}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {delivery.logisticsPartner}
                          </td>
                          <td className="px-6 py-4">
                            <DeliveryStatusBadge status={delivery.status} />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedDelivery(delivery)}
                                className="px-3 py-1 text-xs font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                              >
                                View
                              </button>
                              {delivery.status === "pending" && (
                                <button className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
                                  Confirm
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredDeliveries.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Truck className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      No deliveries found
                    </h3>
                    <p className="text-gray-500">
                      {statusFilter === "all"
                        ? "You don't have any deliveries yet."
                        : `You don't have any ${statusFilter} deliveries.`}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Deliveries */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Upcoming Deliveries
                  </h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    {deliveries
                      .filter((d) => d.status === "pending")
                      .slice(0, 3)
                      .map((delivery) => (
                        <div
                          key={delivery.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                        >
                          <div className="rounded-full p-2 bg-blue-100">
                            <Truck className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium text-gray-900">
                              {delivery.id}
                            </p>
                            <p className="text-xs text-gray-500">
                              To: {delivery.buyer} - {delivery.destination}
                            </p>
                            <p className="text-xs text-gray-400">
                              Scheduled: {delivery.scheduledDate}
                            </p>
                          </div>
                          <button
                            className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-gray-200 transition-colors"
                            onClick={() => setSelectedDelivery(delivery)}
                            aria-label="View delivery details"
                          >
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      ))}

                    {deliveries.filter((d) => d.status === "pending").length ===
                      0 && (
                      <div className="text-center py-4">
                        <p className="text-gray-500">No upcoming deliveries</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-white">
                  <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    View All Upcoming
                  </button>
                </div>
              </div>

              {/* Logistics Partners Summary */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Logistics Partners
                  </h3>
                </div>
                <div className="p-5 space-y-4">
                  {logisticsPartners.map((partner) => (
                    <div key={partner.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        {partner.logo ? (
                          <img
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Truck className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{partner.name}</p>
                        <p className="text-xs text-gray-500">
                          {partner.specialization}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-600">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-white">
                  <button
                    onClick={() => setActiveTab("partners")}
                    className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Manage Partners
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
                    label="Schedule New Delivery"
                    icon={<Truck className="w-4 h-4" />}
                    color="green"
                  />
                  <QuickActionButton
                    label="Track Shipment"
                    icon={<MapPin className="w-4 h-4" />}
                    color="blue"
                  />
                  <QuickActionButton
                    label="Contact Logistics Partner"
                    icon={<Package className="w-4 h-4" />}
                    color="purple"
                  />
                  <QuickActionButton
                    label="View Delivery Reports"
                    icon={<BarChart3 className="w-4 h-4" />}
                    color="amber"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Tracking */}
        {activeTab === "tracking" && (
          <div className="space-y-6">
            {/* Search Tracking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold mb-4">Track a Delivery</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="trackingNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    id="trackingNumber"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter tracking number"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="logisticsPartner"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Logistics Partner
                  </label>
                  <select
                    id="logisticsPartner"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select logistics partner</option>
                    {logisticsPartners.map((partner) => (
                      <option key={partner.id} value={partner.id}>
                        {partner.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full md:w-auto px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Track Delivery
                  </button>
                </div>
              </div>
            </div>

            {/* Tracking Map */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-4">Live Tracking Map</h3>
              <div className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">
                    Select a delivery to view its real-time location on the map
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Deliveries for Tracking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Deliveries
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Track your recent deliveries
                  </p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left bg-green-500">
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Tracking No.
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Order ID
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Destination
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Logistics Partner
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Status
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-sm">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveries.map((delivery) => (
                      <tr
                        key={delivery.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium">
                          {delivery.trackingNumber}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {delivery.orderId}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {delivery.destination}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          {delivery.logisticsPartner}
                        </td>
                        <td className="px-6 py-4">
                          <DeliveryStatusBadge status={delivery.status} />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelectedDelivery(delivery)}
                            className="text-green-500 hover:text-green-600 font-medium text-sm"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Logistics Partners */}
        {activeTab === "partners" && (
          <div className="space-y-6">
            {/* Partner Search and Add */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Search logistics partners..."
                />
              </div>

              <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Add New Partner
              </button>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="w-16 h-16 object-contain rounded-md border border-gray-200"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {partner.name}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600">
                          Active Partner
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Contact Information
                        </h4>
                        <p className="text-sm">{partner.contactNumber}</p>
                        <p className="text-sm">{partner.email}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Coverage Areas
                        </h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {partner.coverage.map((area, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Specialization
                        </h4>
                        <p className="text-sm">{partner.specialization}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Rates
                        </h4>
                        <p className="text-sm">{partner.rates}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-green-500 hover:text-green-600"
                      >
                        Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                      <button className="text-sm text-gray-600 hover:text-gray-800">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Integration Guide */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
              <h3 className="text-lg font-semibold">
                Logistics Partner Integration
              </h3>
              <div className="prose max-w-none flex flex-col gap-4">
                <p>
                  Integrate with our logistics partners to streamline your
                  delivery process. Follow these steps to get started:
                </p>
                <ol className="list-decimal pl-5 space-y-2 indent-5">
                  <li>Select a logistics partner from our approved list</li>
                  <li>
                    Complete the integration form with your account details and
                    delivery requirements
                  </li>
                  <li>Set up API access credentials for real-time tracking</li>
                  <li>Test the integration with a sample delivery</li>
                  <li>Go live with your integrated logistics solution</li>
                </ol>
                <p>
                  For technical assistance with integration, please contact our
                  support team at support@farmconnect.com
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Details Modal */}
        {selectedDelivery && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Delivery Details: {selectedDelivery.id}
                </h3>
                <button
                  onClick={() => setSelectedDelivery(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Delivery Information
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">
                            Scheduled Date
                          </p>
                          <p className="text-sm font-medium">
                            {selectedDelivery.scheduledDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Status</p>
                          <DeliveryStatusBadge
                            status={selectedDelivery.status}
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            Logistics Partner
                          </p>
                          <p className="text-sm font-medium">
                            {selectedDelivery.logisticsPartner}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            Tracking Number
                          </p>
                          <p className="text-sm font-medium">
                            {selectedDelivery.trackingNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      Destination Information
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium">
                        {selectedDelivery.buyer}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedDelivery.destination}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Contact: {selectedDelivery.contactPerson},{" "}
                        {selectedDelivery.contactNumber}
                      </p>
                      {selectedDelivery.notes && (
                        <div className="mt-2 p-2 bg-yellow-50 border border-yellow-100 rounded-md">
                          <p className="text-xs text-yellow-800">
                            Note: {selectedDelivery.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Items for Delivery
                </h4>
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedDelivery.items.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 text-right">
                            {item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tracking Timeline */}
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Tracking Updates
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  {selectedDelivery.trackingUpdates.length > 0 ? (
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
                      <ul className="space-y-4">
                        {selectedDelivery.trackingUpdates.map(
                          (update, index) => (
                            <li key={index} className="relative pl-10">
                              <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                {update.status
                                  .toLowerCase()
                                  .includes("delivered") ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Truck className="h-4 w-4 text-green-500" />
                                )}
                              </div>
                              <div className="bg-white p-3 rounded-md shadow-sm">
                                <p className="text-sm font-medium">
                                  {update.status}
                                </p>
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                  <span>{update.timestamp}</span>
                                  <span>{update.location}</span>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">
                        No tracking updates available yet
                      </p>
                    </div>
                  )}
                </div>

                {/* Proof of Delivery Upload */}
                {selectedDelivery.status === "in-progress" && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Upload Proof of Delivery
                    </h4>
                    <div className="mt-1 flex items-center flex-wrap gap-4">
                      {proofImages.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={image.url || "/placeholder.svg"}
                            alt="Proof of delivery"
                            className="h-24 w-24 object-cover rounded-md border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="h-24 w-24 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
                      >
                        <Camera className="h-6 w-6 mb-1" />
                        <span className="text-xs">Add Photo</span>
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Upload photos of signed delivery receipts, packages at
                      delivery location, or other proof of successful delivery.
                    </p>
                  </div>
                )}

                {/* Proof of Delivery View */}
                {selectedDelivery.status === "delivered" &&
                  selectedDelivery.proofOfDelivery && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Proof of Delivery
                      </h4>
                      <div className="mt-1">
                        <img
                          src={
                            selectedDelivery.proofOfDelivery ||
                            "/placeholder.svg"
                          }
                          alt="Proof of delivery"
                          className="h-48 object-cover rounded-md border border-gray-300"
                        />
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Delivered on {selectedDelivery.deliveredDate}
                      </p>
                    </div>
                  )}

                <div className="flex justify-between">
                  <div className="space-x-3">
                    <button
                      onClick={() => setSelectedDelivery(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Close
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      Print Details
                    </button>
                  </div>

                  <div className="space-x-3">
                    {selectedDelivery.status === "pending" && (
                      <>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                          Confirm Pickup
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                          Reschedule
                        </button>
                      </>
                    )}
                    {selectedDelivery.status === "in-progress" &&
                      proofImages.length > 0 && (
                        <button
                          onClick={uploadProofOfDelivery}
                          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Confirm Delivery
                        </button>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DeliveryStatusBadge({ status }) {
  let bgColor = "";
  let textColor = "";
  let label = "";

  switch (status) {
    case "pending":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      label = "Pending";
      break;
    case "in-progress":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      label = "In Progress";
      break;
    case "delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      label = "Delivered";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
      label = status;
  }

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded-full ${bgColor} ${textColor}`}
    >
      {label}
    </span>
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
