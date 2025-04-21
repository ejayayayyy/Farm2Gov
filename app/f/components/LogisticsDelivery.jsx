"use client";

import { useState, useRef, useEffect } from "react";
import {
  Camera,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  ExternalLink,
  Filter,
  HelpCircle,
  MapPin,
  Package,
  Phone,
  Search,
  Truck,
  X,
} from "lucide-react";

export default function FarmerLogisticsDelivery() {
  const [activeTab, setActiveTab] = useState("deliveries");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [proofImages, setProofImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const fileInputRef = useRef(null);
  const statusDropdownRef = useRef(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setIsStatusDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      proofOfDelivery: "/images/delivery-proof-1004.jpg",
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
      logo: "/images/ship-logo.png",
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

  const callLogisticsPartner = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

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
                Logistics & Delivery
              </h1>
              <p className="mt-2 text-base text-gray-600">
                Track your product deliveries
              </p>
            </div>
          </div>
        </div>
        {/* Tabs - Larger for touch */}
        <div className="bg-white overflow-x-auto mb-6 shadow-sm rounded-xl">
          <div className="flex m">
            <button
              onClick={() => setActiveTab("deliveries")}
              className={`py-4 px-6 text-base font-medium border-b-4 justify-center w-full transition-colors flex items-center gap-2 ${
                activeTab === "deliveries"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Package className="h-5 w-5" />
              <span>My Deliveries</span>
            </button>

            <button
              onClick={() => setActiveTab("tracking")}
              className={`py-4 px-6 text-base font-medium border-b-4 justify-center w-full transition-colors flex items-center gap-2 ${
                activeTab === "tracking"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span>Track Orders</span>
            </button>

            <button
              onClick={() => setActiveTab("partners")}
              className={`py-4 px-6 text-base font-medium border-b-4 justify-center w-full transition-colors flex items-center gap-2 ${
                activeTab === "partners"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Truck className="h-5 w-5" />
              <span>Delivery Partners</span>
            </button>
          </div>
        </div>

        {/* Delivery Management */}
        {activeTab === "deliveries" && (
          <div className="space-y-6">
            {/* Stats Overview - Simplified for mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                title="All Deliveries"
                value={deliveries.length.toString()}
                icon={<Truck className="w-6 h-6 text-white" />}
                color="blue"
              />
              <StatCard
                title="Waiting"
                value={deliveries
                  .filter((d) => d.status === "pending")
                  .length.toString()}
                icon={<Clock className="w-6 h-6 text-white" />}
                color="amber"
              />
              <StatCard
                title="On the Way"
                value={deliveries
                  .filter((d) => d.status === "in-progress")
                  .length.toString()}
                icon={<Package className="w-6 h-6 text-white" />}
                color="purple"
              />
              <StatCard
                title="Completed"
                value={deliveries
                  .filter((d) => d.status === "delivered")
                  .length.toString()}
                icon={<CheckCircle className="w-6 h-6 text-white" />}
                color="green"
              />
            </div>

            {/* Filters - Simplified */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Find delivery..."
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative w-full" ref={statusDropdownRef}>
                    <button
                      onClick={() =>
                        setIsStatusDropdownOpen(!isStatusDropdownOpen)
                      }
                      className=" flex items-center gap-2 px-4 py-3 text-base border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Filter className="h-5 w-5 text-gray-500" />
                        <span>
                          Status:{" "}
                          {statusFilter === "all" ? "All" : statusFilter}
                        </span>
                      </div>
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </button>
                    {isStatusDropdownOpen && (
                      <div className="absolute left-0 right-0 md:left-auto md:right-0 mt-2 w-full md:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setStatusFilter("all");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`flex items-center gap-2 px-4 py-3 text-base w-full text-left ${
                              statusFilter === "all"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                            All Deliveries
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("pending");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`flex items-center gap-2 px-4 py-3 text-base w-full text-left ${
                              statusFilter === "pending"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                            Waiting
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("in-progress");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`flex items-center gap-2 px-4 py-3 text-base w-full text-left ${
                              statusFilter === "in-progress"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                            On the Way
                          </button>
                          <button
                            onClick={() => {
                              setStatusFilter("delivered");
                              setIsStatusDropdownOpen(false);
                            }}
                            className={`flex items-center gap-2 px-4 py-3 text-base w-full text-left ${
                              statusFilter === "delivered"
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-green-400"></span>
                            Completed
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Deliveries List - Card view for mobile, table for desktop */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">
                  My Deliveries
                </h3>
              </div>

              {/* Mobile Card View */}
              <div className="xl:hidden">
                {filteredDeliveries.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredDeliveries.map((delivery) => (
                      <div
                        key={delivery.id}
                        className="p-6 flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-lg">
                              {delivery.id}
                            </h4>
                            <p className="text-gray-500">{delivery.buyer}</p>
                          </div>
                          <DeliveryStatusBadge status={delivery.status} />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-medium">
                              {delivery.destination}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Date</p>
                            <p className="font-medium">
                              {delivery.status === "delivered"
                                ? delivery.deliveredDate
                                : delivery.scheduledDate}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Partner</p>
                            <p className="font-medium">
                              {delivery.logisticsPartner}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Tracking #</p>
                            <p className="font-medium">
                              {delivery.trackingNumber}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedDelivery(delivery)}
                            className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2"
                          >
                            <Package size={20} />
                            View Details
                          </button>

                          {delivery.status === "pending" && (
                            <button className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2">
                              <CheckCircle size={20} />
                              Confirm
                            </button>
                          )}

                          {delivery.status === "in-progress" && (
                            <button
                              onClick={() =>
                                callLogisticsPartner(delivery.contactNumber)
                              }
                              className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2"
                            >
                              <Phone size={20} />
                              Call Driver
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Truck className="h-8 w-8 text-gray-400" />
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

              {/* Desktop Table View */}
              <div className="hidden xl:block overflow-x-auto">
                {filteredDeliveries.length > 0 ? (
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="text-left bg-green-500">
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Delivery ID
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Destination
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium text-white text-base">
                          Partner
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
                      {filteredDeliveries.map((delivery) => (
                        <tr
                          key={delivery.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-base font-medium">
                            {delivery.id}
                          </td>
                          <td className="px-6 py-4 text-base">
                            {delivery.destination}
                          </td>
                          <td className="px-6 py-4 text-base">
                            {delivery.status === "delivered"
                              ? delivery.deliveredDate
                              : delivery.scheduledDate}
                          </td>
                          <td className="px-6 py-4 text-base">
                            {delivery.logisticsPartner}
                          </td>
                          <td className="px-6 py-4">
                            <DeliveryStatusBadge status={delivery.status} />
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setSelectedDelivery(delivery)}
                                className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                              >
                                View Details
                              </button>
                              {delivery.status === "pending" && (
                                <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
                                  Confirm
                                </button>
                              )}
                              {delivery.status === "in-progress" && (
                                <button
                                  onClick={() =>
                                    callLogisticsPartner(delivery.contactNumber)
                                  }
                                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 flex items-center gap-1"
                                >
                                  <Phone size={16} />
                                  Call
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Truck className="h-8 w-8 text-gray-400" />
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

            {/* Upcoming Deliveries - Only show on desktop */}
            <div className="hidden md:block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">
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
                        className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <div className="rounded-full p-3 bg-blue-100">
                          <Truck className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-base font-medium text-gray-900">
                            {delivery.id}
                          </p>
                          <p className="text-sm text-gray-500">
                            To: {delivery.buyer} - {delivery.destination}
                          </p>
                          <p className="text-sm text-gray-500">
                            Scheduled: {delivery.scheduledDate}
                          </p>
                        </div>
                        <button
                          className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-200 transition-colors"
                          onClick={() => setSelectedDelivery(delivery)}
                          aria-label="View delivery details"
                        >
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    ))}

                  {deliveries.filter((d) => d.status === "pending").length ===
                    0 && (
                    <div className="text-center py-6">
                      <p className="text-gray-500">No upcoming deliveries</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Tracking */}
        {activeTab === "tracking" && (
          <div className="space-y-6">
            {/* Search Tracking - Simplified for mobile */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-semibold mb-4">Track a Delivery</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="trackingNumber"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Tracking Number
                  </label>
                  <input
                    type="text"
                    id="trackingNumber"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter tracking number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="logisticsPartner"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Delivery Company
                  </label>
                  <select
                    id="logisticsPartner"
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select delivery company</option>
                    {logisticsPartners.map((partner) => (
                      <option key={partner.id} value={partner.id}>
                        {partner.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button className="w-full md:w-auto px-6 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Track Delivery
                  </button>
                </div>
              </div>
            </div>

            {/* Tracking Map */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Live Tracking Map</h3>
              <div className="bg-gray-100 rounded-lg h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">
                    Enter a tracking number above to see your delivery on the
                    map
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Deliveries for Tracking - Card view for mobile */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">
                  Recent Deliveries
                </h3>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden">
                {deliveries.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {deliveries.map((delivery) => (
                      <div key={delivery.id} className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-lg">
                              {delivery.trackingNumber}
                            </h4>
                            <p className="text-gray-500">{delivery.orderId}</p>
                          </div>
                          <DeliveryStatusBadge status={delivery.status} />
                        </div>

                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-medium">
                              {delivery.destination}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Delivery Company
                            </p>
                            <p className="font-medium">
                              {delivery.logisticsPartner}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedDelivery(delivery)}
                          className="w-full py-3 px-4 bg-green-500 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2"
                        >
                          <MapPin size={20} />
                          Track This Delivery
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">No recent deliveries found</p>
                  </div>
                )}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left bg-green-500">
                      <th className="px-6 py-4 font-medium text-white text-base">
                        Tracking No.
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-base">
                        Order ID
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-base">
                        Destination
                      </th>
                      <th className="px-6 py-4 font-medium text-white text-base">
                        Delivery Company
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
                    {deliveries.map((delivery) => (
                      <tr
                        key={delivery.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-base font-medium">
                          {delivery.trackingNumber}
                        </td>
                        <td className="px-6 py-4 text-base">
                          {delivery.orderId}
                        </td>
                        <td className="px-6 py-4 text-base">
                          {delivery.destination}
                        </td>
                        <td className="px-6 py-4 text-base">
                          {delivery.logisticsPartner}
                        </td>
                        <td className="px-6 py-4">
                          <DeliveryStatusBadge status={delivery.status} />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelectedDelivery(delivery)}
                            className="px-4 py-2 text-base font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100 flex items-center gap-2"
                          >
                            <MapPin size={16} />
                            Track
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
            {/* Partner Search - Simplified */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Find delivery company..."
                />
              </div>
            </div>

            {/* Partners Grid - Card based for all devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          partner.logo || "/placeholder.svg?height=64&width=64"
                        }
                        alt={partner.name}
                        className="w-16 h-16 object-contain rounded-md border border-gray-200"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {partner.name}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
                          Active Partner
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg--500 h-full flex flex-col">
                    <div className="space-y-4 flex flex-col gap-4">
                      <div>
                        <h4 className="text-base font-medium text-gray-700">
                          Contact Information
                        </h4>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-gray-400" />
                            <p className="text-base">{partner.contactNumber}</p>
                          </div>
                          <p className="text-base">{partner.email}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-700">
                          Coverage Areas
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {partner.coverage.map((area, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded text-sm font-medium bg-gray-100 text-gray-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-700">
                          Specialization
                        </h4>
                        <p className="text-base mt-1">
                          {partner.specialization}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-700">
                          Rates
                        </h4>
                        <p className="text-base mt-1">{partner.rates}</p>
                      </div>
                    </div>

                    {/* buttons */}
                    <div className="mt-6 flex flex-col gap-3">
                      <button
                        onClick={() =>
                          callLogisticsPartner(partner.contactNumber)
                        }
                        className="flex-1 py-3 px-4 bg-green-500 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2"
                      >
                        <Phone size={20} />
                        Call
                      </button>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg font-medium text-center flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={20} />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Integration Guide - Simplified */}
            <div className="bg-white rounded-xl shadow-sm ">
              <h3 className="text-xl font-semibold mb6 p-6 border border-gray-100">
                How to Work with Delivery Companies
              </h3>

              <div className="space-y- flex flex-col gap-6 p-6">
                <p className="text-base">
                  Follow these simple steps to arrange delivery of your
                  products:
                </p>

                <ol className="list-decimal pl-8 space-y-3 text-gray-600">
                  <li className="text-base">
                    Choose a delivery company from the list above
                  </li>
                  <li className="text-base">
                    Call them using the phone number provided
                  </li>
                  <li className="text-base">
                    Tell them what products you need to deliver and where
                  </li>
                  <li className="text-base">Agree on a pickup date and time</li>
                  <li className="text-base">
                    Prepare your products for pickup
                  </li>
                </ol>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-base text-blue-700">
                    Need help? Call our support team at{" "}
                    <span className="font-bold">09123456789</span> for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Details Modal */}
        {selectedDelivery && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-xl font-semibold">
                  Delivery: {selectedDelivery.id}
                </h3>
                <button
                  onClick={() => setSelectedDelivery(null)}
                  className="text-gray-400 hover:text-gray-500 p-2"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                {/* Status Badge - Large and prominent */}
                <div className="mb-6 flex justify-center">
                  <DeliveryStatusBadgeLarge status={selectedDelivery.status} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-3">
                      Delivery Information
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            Scheduled Date
                          </p>
                          <p className="text-base font-medium">
                            {selectedDelivery.scheduledDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Delivery Company
                          </p>
                          <p className="text-base font-medium">
                            {selectedDelivery.logisticsPartner}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Tracking Number
                          </p>
                          <p className="text-base font-medium">
                            {selectedDelivery.trackingNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-3">
                      Destination Information
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-base font-medium">
                        {selectedDelivery.buyer}
                      </p>
                      <p className="text-base text-gray-700 mt-2">
                        {selectedDelivery.destination}
                      </p>
                      <p className="text-base text-gray-700 mt-2">
                        Contact: {selectedDelivery.contactPerson}
                      </p>
                      <p className="text-base text-gray-700">
                        Phone: {selectedDelivery.contactNumber}
                      </p>
                      {selectedDelivery.notes && (
                        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                          <p className="text-sm text-yellow-800">
                            <span className="font-medium">Note:</span>{" "}
                            {selectedDelivery.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h4 className="text-base font-medium text-gray-700 mb-3">
                  Items for Delivery
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-4 py-3 text-left text-sm font-medium text-gray-700"
                          >
                            Item
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-3 text-right text-sm font-medium text-gray-700"
                          >
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedDelivery.items.map((item, index) => (
                          <tr key={index} className="border-t border-gray-200">
                            <td className="px-4 py-3 text-base text-gray-900">
                              {item.name}
                            </td>
                            <td className="px-4 py-3 text-base text-gray-900 text-right">
                              {item.quantity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tracking Timeline - Simplified */}
                <h4 className="text-base font-medium text-gray-700 mb-3">
                  Delivery Updates
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  {selectedDelivery.trackingUpdates.length > 0 ? (
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-200"></div>
                      <ul className="space-y-6">
                        {selectedDelivery.trackingUpdates.map(
                          (update, index) => (
                            <li key={index} className="relative pl-14">
                              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                {update.status
                                  .toLowerCase()
                                  .includes("delivered") ? (
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                ) : (
                                  <Truck className="h-6 w-6 text-green-600" />
                                )}
                              </div>
                              <div className="bg-white p-4 rounded-md shadow-sm">
                                <p className="text-base font-medium">
                                  {update.status}
                                </p>
                                <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-500 mt-2">
                                  <span className="font-medium">
                                    {update.timestamp}
                                  </span>
                                  <span>{update.location}</span>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-lg">
                        No updates available yet
                      </p>
                      <p className="text-gray-500">
                        Check back later for delivery updates
                      </p>
                    </div>
                  )}
                </div>

                {/* Proof of Delivery Upload - Simplified */}
                {selectedDelivery.status === "in-progress" && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="text-lg font-medium text-gray-700 mb-3">
                      Upload Proof of Delivery
                    </h4>
                    <p className="text-base mb-4">
                      Take photos of the delivered items or signed receipt
                    </p>
                    <div className="mt-1 flex flex-wrap gap-4">
                      {proofImages.map((image) => (
                        <div key={image.id} className="relative group">
                          <img
                            src={
                              image.url || "/placeholder.svg?height=96&width=96"
                            }
                            alt="Proof of delivery"
                            className="h-24 w-24 object-cover rounded-md border border-gray-300"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.id)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="h-24 w-24 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
                      >
                        <Camera className="h-8 w-8 mb-1" />
                        <span className="text-sm">Add Photo</span>
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
                    <p className="mt-3 text-sm text-gray-500">
                      Take clear photos of the delivered items or signed receipt
                    </p>
                  </div>
                )}

                {/* Proof of Delivery View */}
                {selectedDelivery.status === "delivered" &&
                  selectedDelivery.proofOfDelivery && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-medium text-gray-700 mb-3">
                        Proof of Delivery
                      </h4>
                      <div className="mt-1">
                        <img
                          src={
                            selectedDelivery.proofOfDelivery ||
                            "/placeholder.svg?height=200&width=300" ||
                            "/placeholder.svg"
                          }
                          alt="Proof of delivery"
                          className="h-auto max-w-full rounded-md border border-gray-300"
                        />
                      </div>
                      <p className="mt-3 text-sm text-gray-500">
                        Delivered on {selectedDelivery.deliveredDate}
                      </p>
                    </div>
                  )}

                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <button
                    onClick={() => setSelectedDelivery(null)}
                    className="order-2 md:order-1 py-3 px-6 text-base font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Close
                  </button>

                  <div className="order-1 md:order-2 flex flex-col sm:flex-row gap-3">
                    {selectedDelivery.status === "pending" && (
                      <>
                        <button className="py-3 px-6 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                          Confirm Pickup
                        </button>
                        <button className="py-3 px-6 text-base font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                          Reschedule
                        </button>
                      </>
                    )}
                    {selectedDelivery.status === "in-progress" &&
                      proofImages.length > 0 && (
                        <button
                          onClick={uploadProofOfDelivery}
                          className="py-3 px-6 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          Confirm Delivery
                        </button>
                      )}
                    {selectedDelivery.status === "in-progress" && (
                      <button
                        onClick={() =>
                          callLogisticsPartner(selectedDelivery.contactNumber)
                        }
                        className="py-3 px-6 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                      >
                        <Phone size={20} />
                        Call Driver
                      </button>
                    )}
                    {selectedDelivery.status === "delivered" && (
                      <button className="py-3 px-6 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Download Receipt
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
      label = "Waiting";
      break;
    case "in-progress":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      label = "On the Way";
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
      className={`px-3 py-1 text-sm font-semibold rounded-full ${bgColor} ${textColor}`}
    >
      {label}
    </span>
  );
}

function DeliveryStatusBadgeLarge({ status }) {
  let bgColor = "";
  let textColor = "";
  let label = "";
  let icon = null;

  switch (status) {
    case "pending":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      label = "Waiting for Pickup";
      icon = <Clock className="h-6 w-6 mr-2" />;
      break;
    case "in-progress":
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
      label = "On the Way";
      icon = <Truck className="h-6 w-6 mr-2" />;
      break;
    case "delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      label = "Delivered";
      icon = <CheckCircle className="h-6 w-6 mr-2" />;
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-800";
      label = status;
      icon = <Package className="h-6 w-6 mr-2" />;
  }

  return (
    <span
      className={`px-6 py-3 text-lg font-semibold rounded-full ${bgColor} ${textColor} flex items-center`}
    >
      {icon}
      {label}
    </span>
  );
}

function StatCard({ title, value, icon, color }) {
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
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="p-2 rounded-full bg-white/20">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </div>
  );
}
