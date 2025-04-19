"use client";

import { useState, useRef } from "react";
import {
  Filter,
  MapPin,
  Package,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  Tag,
  User,
  X,
} from "lucide-react";

export default function GovMarketPage() {
  const [activeTab, setActiveTab] = useState("browse");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSupplierLocation, setSelectedSupplierLocation] = useState(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [bulkOrderProduct, setBulkOrderProduct] = useState(null);
  const [bulkOrderQuantity, setBulkOrderQuantity] = useState(0);
  const fileInputRef = useRef(null);

  // Sample data for products
  const products = [
    {
      id: 1,
      name: "Fresh Organic Tomatoes",
      supplier: {
        id: 1,
        name: "Green Farms",
        location: "Laguna",
        rating: 4.8,
        totalOrders: 156,
        completedOnTime: 152,
        description:
          "Certified organic farm specializing in fresh vegetables and fruits. We follow sustainable farming practices and deliver high-quality produce to government agencies across the Philippines.",
        contactPerson: "Juan Dela Cruz",
        contactNumber: "09123456789",
        email: "info@greenfarms.com",
        certifications: ["Organic Certified", "GAP Certified", "HACCP"],
        yearEstablished: 2010,
        farmSize: "25 hectares",
        categories: ["Vegetables", "Fruits"],
      },
      category: "Vegetables",
      price: 75.0,
      unit: "kg",
      available: 500,
      minOrder: 50,
      rating: 4.8,
      organic: true,
      description:
        "Fresh, organic tomatoes grown without pesticides. Rich in flavor and perfect for government feeding programs.",
      image: "/images/ripe-red-tomatoes.png",
      deliveryTime: "2-3 days",
      reviews: [
        {
          id: 101,
          reviewer: "Department of Education",
          rating: 5,
          comment:
            "Excellent quality tomatoes. Very fresh and perfect for our school feeding program.",
          date: "2023-10-05",
        },
        {
          id: 102,
          reviewer: "Department of Health",
          rating: 4,
          comment:
            "Good quality but some tomatoes were slightly damaged during delivery.",
          date: "2023-09-28",
        },
      ],
    },
    {
      id: 2,
      name: "Red Delicious Apples",
      supplier: {
        id: 2,
        name: "Sunshine Organics",
        location: "Batangas",
        rating: 4.5,
        totalOrders: 98,
        completedOnTime: 92,
        description:
          "Family-owned farm focusing on organic fruit production. We work closely with government agencies to provide nutritious fruits for public programs.",
        contactPerson: "Maria Santos",
        contactNumber: "09187654321",
        email: "contact@sunshineorganics.com",
        certifications: ["Organic Certified", "Fair Trade"],
        yearEstablished: 2015,
        farmSize: "15 hectares",
        categories: ["Fruits", "Vegetables"],
      },
      category: "Fruits",
      price: 120.0,
      unit: "kg",
      available: 300,
      minOrder: 30,
      rating: 4.5,
      organic: true,
      description:
        "Sweet and juicy red delicious apples. Perfect for school feeding programs and government cafeterias.",
      image: "/images/red-apples-basket.png",
      deliveryTime: "2-3 days",
      reviews: [
        {
          id: 103,
          reviewer: "Department of Social Welfare",
          rating: 5,
          comment:
            "Very fresh apples. Children in our feeding program loved them!",
          date: "2023-10-02",
        },
        {
          id: 104,
          reviewer: "Department of Agriculture",
          rating: 4,
          comment: "Good quality apples but delivery was delayed by one day.",
          date: "2023-09-20",
        },
      ],
    },
    {
      id: 3,
      name: "Brown Rice",
      supplier: {
        id: 3,
        name: "Mountain Fresh Produce",
        location: "Nueva Ecija",
        rating: 4.7,
        totalOrders: 120,
        completedOnTime: 115,
        description:
          "Specializing in rice and grain production. We supply high-quality rice to government agencies nationwide.",
        contactPerson: "Roberto Reyes",
        contactNumber: "09198765432",
        email: "info@mountainfresh.com",
        certifications: ["GAP Certified", "ISO 22000"],
        yearEstablished: 2008,
        farmSize: "50 hectares",
        categories: ["Grains", "Vegetables"],
      },
      category: "Grains",
      price: 50.0,
      unit: "kg",
      available: 1000,
      minOrder: 100,
      rating: 4.7,
      organic: true,
      description:
        "Nutritious brown rice grown using sustainable farming practices. High in fiber and essential nutrients.",
      image: "/images/bowl-of-steamed-rice.png",
      deliveryTime: "3-5 days",
      reviews: [
        {
          id: 105,
          reviewer: "Department of Education",
          rating: 5,
          comment:
            "Excellent quality brown rice. Perfect for our school feeding programs.",
          date: "2023-10-08",
        },
        {
          id: 106,
          reviewer: "Department of Health",
          rating: 4,
          comment: "Good quality rice but packaging could be improved.",
          date: "2023-09-30",
        },
      ],
    },
    {
      id: 4,
      name: "Fresh Milk",
      supplier: {
        id: 4,
        name: "Valley Dairy Cooperative",
        location: "Bulacan",
        rating: 4.9,
        totalOrders: 112,
        completedOnTime: 110,
        description:
          "Cooperative of small dairy farmers producing fresh milk and dairy products. We ensure the highest quality standards in all our products.",
        contactPerson: "Antonio Garcia",
        contactNumber: "09123459876",
        email: "info@valleydairy.coop",
        certifications: ["HACCP", "ISO 9001", "FDA Approved"],
        yearEstablished: 2012,
        farmSize: "Combined 100 hectares",
        categories: ["Dairy"],
      },
      category: "Dairy",
      price: 85.0,
      unit: "L",
      available: 200,
      minOrder: 20,
      rating: 4.9,
      organic: true,
      description:
        "Fresh, pasteurized milk from grass-fed cows. Rich in calcium and essential nutrients.",
      image: "/images/spilled-milk-still-life.png",
      deliveryTime: "1-2 days",
      reviews: [
        {
          id: 107,
          reviewer: "Department of Education",
          rating: 5,
          comment:
            "Excellent quality milk. Children love it and the delivery is always on time.",
          date: "2023-10-10",
        },
        {
          id: 108,
          reviewer: "Department of Health",
          rating: 5,
          comment:
            "Very fresh milk with proper cold chain maintained during delivery.",
          date: "2023-10-05",
        },
      ],
    },
    {
      id: 5,
      name: "Fresh Carrots",
      supplier: {
        id: 1,
        name: "Green Farms",
        location: "Laguna",
        rating: 4.8,
        totalOrders: 156,
        completedOnTime: 152,
        description:
          "Certified organic farm specializing in fresh vegetables and fruits. We follow sustainable farming practices and deliver high-quality produce to government agencies across the Philippines.",
        contactPerson: "Juan Dela Cruz",
        contactNumber: "09123456789",
        email: "info@greenfarms.com",
        certifications: ["Organic Certified", "GAP Certified", "HACCP"],
        yearEstablished: 2010,
        farmSize: "25 hectares",
        categories: ["Vegetables", "Fruits"],
      },
      category: "Vegetables",
      price: 60.0,
      unit: "kg",
      available: 400,
      minOrder: 40,
      rating: 4.6,
      organic: true,
      description:
        "Fresh, organic carrots rich in beta-carotene and vitamins. Perfect for government feeding programs.",
      image: "/images/bunch-of-carrots.png",
      deliveryTime: "2-3 days",
      reviews: [
        {
          id: 109,
          reviewer: "Department of Social Welfare",
          rating: 5,
          comment:
            "Very fresh carrots. Great for our community feeding programs.",
          date: "2023-10-12",
        },
        {
          id: 110,
          reviewer: "Department of Education",
          rating: 4,
          comment:
            "Good quality carrots but some were slightly smaller than expected.",
          date: "2023-10-01",
        },
      ],
    },
    {
      id: 6,
      name: "Organic Potatoes",
      supplier: {
        id: 3,
        name: "Mountain Fresh Produce",
        location: "Nueva Ecija",
        rating: 4.7,
        totalOrders: 120,
        completedOnTime: 115,
        description:
          "Specializing in rice and grain production. We supply high-quality rice to government agencies nationwide.",
        contactPerson: "Roberto Reyes",
        contactNumber: "09198765432",
        email: "info@mountainfresh.com",
        certifications: ["GAP Certified", "ISO 22000"],
        yearEstablished: 2008,
        farmSize: "50 hectares",
        categories: ["Grains", "Vegetables"],
      },
      category: "Vegetables",
      price: 90.0,
      unit: "kg",
      available: 350,
      minOrder: 35,
      rating: 4.4,
      organic: true,
      description:
        "Organic potatoes grown without synthetic pesticides. Versatile ingredient for various meal preparations.",
      image: "/images/pile-of-potatoes.png",
      deliveryTime: "3-4 days",
      reviews: [
        {
          id: 111,
          reviewer: "Department of Health",
          rating: 4,
          comment: "Good quality potatoes. Consistent size and quality.",
          date: "2023-10-15",
        },
        {
          id: 112,
          reviewer: "Department of Social Welfare",
          rating: 5,
          comment: "Excellent potatoes. Very clean and well-packaged.",
          date: "2023-10-08",
        },
      ],
    },
  ];

  // Sample data for locations
  const locations = [
    { id: "all", name: "All Locations" },
    { id: "Laguna", name: "Laguna" },
    { id: "Batangas", name: "Batangas" },
    { id: "Bulacan", name: "Bulacan" },
    { id: "Nueva Ecija", name: "Nueva Ecija" },
    { id: "Cavite", name: "Cavite" },
  ];

  // Sample data for categories
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "Vegetables", name: "Vegetables" },
    { id: "Fruits", name: "Fruits" },
    { id: "Grains", name: "Grains" },
    { id: "Dairy", name: "Dairy" },
    { id: "Poultry", name: "Poultry" },
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Filter by search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.supplier.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }

    // Filter by supplier location
    if (
      selectedSupplierLocation !== "all" &&
      product.supplier.location !== selectedSupplierLocation
    ) {
      return false;
    }

    return true;
  });

  const handleBulkOrderRequest = () => {
    // In a real app, this would submit the bulk order request
    console.log(
      `Bulk order request for ${bulkOrderQuantity} ${bulkOrderProduct.unit} of ${bulkOrderProduct.name}`
    );

    // Close the modal and reset form
    setBulkOrderProduct(null);
    setBulkOrderQuantity(0);
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Government Market
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Browse and procure products from approved local suppliers
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm">
                <ShoppingCart size={16} />
                View Cart (0)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-l mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <nav className="flex px-6 space-x-8">
            <button
              onClick={() => setActiveTab("browse")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "browse"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Browse Products
            </button>
            <button
              onClick={() => setActiveTab("suppliers")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "suppliers"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Supplier Directory
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "orders"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Bulk Order Requests
            </button>
          </nav>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Browse Products */}
            {activeTab === "browse" && (
              <>
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <MarketStatCard
                    title="Available Products"
                    value={products.length.toString()}
                    icon={<Package className="w-6 h-6 text-white" />}
                    color="green"
                  />
                  <MarketStatCard
                    title="Approved Suppliers"
                    value="5"
                    icon={<User className="w-6 h-6 text-white" />}
                    color="blue"
                  />
                  <MarketStatCard
                    title="Avg. Product Rating"
                    value="4.7"
                    icon={<Star className="w-6 h-6 text-white" />}
                    color="purple"
                  />
                </div> */}

                {/* Search and Filter */}
                <div className="">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                    <div className="relative flex-1 max-w-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Search products, suppliers, or categories..."
                      />
                    </div>

                    <div className="flex space-x-2">
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>

                      <select
                        value={selectedSupplierLocation}
                        onChange={(e) =>
                          setSelectedSupplierLocation(e.target.value)
                        }
                        className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        {locations.map((location) => (
                          <option key={location.id} value={location.id}>
                            {location.name}
                          </option>
                        ))}
                      </select>

                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Filter size={16} />
                        Sort
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={() => setSelectedProduct(product)}
                      onRequestOrder={() => setBulkOrderProduct(product)}
                    />
                  ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                  <div className="bg-white rounded-lg shadow p-8 text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Package className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      No products found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      We couldn't find any products matching your current
                      filters. Try adjusting your search criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSelectedSupplierLocation("all");
                        setSearchQuery("");
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}

                {/* Pagination */}
                {filteredProducts.length > 0 && (
                  <div className="flex items-center justify-between mt-8">
                    <div className="text-sm text-gray-500">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">
                        {filteredProducts.length}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">
                        {filteredProducts.length}
                      </span>{" "}
                      products
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Previous
                      </button>
                      <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Supplier Directory */}
            {activeTab === "suppliers" && (
              <>
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 shadow-sm rounded-xl">
                  <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Search suppliers by name, location, or products..."
                    />
                  </div>

                  <div className="flex space-x-2">
                    <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors">
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>

                    <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors">
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Supplier Cards */}
                <div className="space-y-6">
                  {Array.from(
                    new Set(products.map((product) => product.supplier.id))
                  ).map((supplierId) => {
                    const supplier = products.find(
                      (product) => product.supplier.id === supplierId
                    ).supplier;
                    const supplierProducts = products.filter(
                      (product) => product.supplier.id === supplierId
                    );
                    return (
                      <SupplierCard
                        key={supplier.id}
                        supplier={supplier}
                        products={supplierProducts}
                        onViewProfile={() => setSelectedSupplier(supplier)}
                        onViewProduct={(product) => setSelectedProduct(product)}
                      />
                    );
                  })}
                </div>
              </>
            )}

            {/* Bulk Order Requests */}
            {activeTab === "orders" && (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Bulk Order Request Form
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Submit a request for bulk orders of agricultural products
                    </p>
                  </div>
                  <div className="p-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="department"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Department
                          </label>
                          <select
                            id="department"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          >
                            <option value="">Select Department</option>
                            <option value="education">
                              Department of Education
                            </option>
                            <option value="health">Department of Health</option>
                            <option value="social">
                              Department of Social Welfare
                            </option>
                            <option value="agriculture">
                              Department of Agriculture
                            </option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="requestor"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Requestor Name
                          </label>
                          <input
                            type="text"
                            id="requestor"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Product Category
                          </label>
                          <select
                            id="category"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          >
                            <option value="">Select Category</option>
                            {categories
                              .filter((category) => category.id !== "all")
                              .map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.name}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="delivery-date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Required Delivery Date
                          </label>
                          <input
                            type="date"
                            id="delivery-date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Order Description
                          </label>
                          <textarea
                            id="description"
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                            placeholder="Describe your bulk order requirements, including specific products, quantities, and any special instructions."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 pt-4">
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                        >
                          Submit Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Recent Bulk Order Requests */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Recent Bulk Order Requests
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Track the status of your recent bulk order requests
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Request ID
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
                            Department
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Products
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
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            BOR-2023-1001
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2023-10-15
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Department of Education
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Fresh Vegetables, Fruits, Dairy
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pending
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              View
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Cancel
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            BOR-2023-0998
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2023-10-10
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Department of Health
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Organic Fruits, Brown Rice
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              Processing
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              View
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Cancel
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            BOR-2023-0985
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2023-10-05
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Department of Social Welfare
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            Fresh Milk, Eggs, Vegetables
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Approved
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              View
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              Track
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Top Rated Suppliers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Top Rated Suppliers
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  {Array.from(
                    new Set(products.map((product) => product.supplier.id))
                  )
                    .map(
                      (supplierId) =>
                        products.find(
                          (product) => product.supplier.id === supplierId
                        ).supplier
                    )
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 3)
                    .map((supplier) => (
                      <TopSupplierItem
                        key={supplier.id}
                        name={supplier.name}
                        location={supplier.location}
                        rating={supplier.rating}
                        onClick={() => setSelectedSupplier(supplier)}
                      />
                    ))}
                </div>
              </div>
              <div className="px-5 py-3 border-t border-gray-100">
                <button
                  className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveTab("suppliers")}
                >
                  View All Suppliers
                </button>
              </div>
            </div>

            {/* Market Tips */}
            {activeTab === "browse" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-green-500">
                  <h3 className="text-lg font-semibold text-white">
                    Procurement Tips
                  </h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Tag className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Compare Suppliers
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Check ratings and reviews before making procurement
                          decisions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <ShoppingBag className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Bulk Orders Save Money
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Place bulk orders to get better prices and reduce
                          delivery costs.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          Check Product Availability
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Verify product availability before planning your
                          procurement schedule.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h3>
              </div>
              <div className="p-5 space-y-3">
                <QuickActionButton
                  label="Browse Products"
                  icon={<Package className="w-4 h-4" />}
                  color="green"
                  onClick={() => setActiveTab("browse")}
                />
                <QuickActionButton
                  label="View Suppliers"
                  icon={<User className="w-4 h-4" />}
                  color="blue"
                  onClick={() => setActiveTab("suppliers")}
                />
                <QuickActionButton
                  label="Create Bulk Order"
                  icon={<ShoppingCart className="w-4 h-4" />}
                  color="purple"
                  onClick={() => setActiveTab("orders")}
                />
                <QuickActionButton
                  label="View Procurement Reports"
                  icon={<ShoppingBag className="w-4 h-4" />}
                  color="amber"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Product Details</h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={
                      selectedProduct.image ||
                      "/placeholder.svg?height=200&width=200"
                    }
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= Math.floor(selectedProduct.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : star <= selectedProduct.rating
                                ? "text-yellow-400 fill-yellow-400 opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">
                        {selectedProduct.rating} (
                        {selectedProduct.reviews.length} reviews)
                      </span>
                    </div>
                    {selectedProduct.organic && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ORGANIC
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Supplier: {selectedProduct.supplier.name} •{" "}
                    {selectedProduct.supplier.location}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">
                        Description
                      </h4>
                      <p className="text-sm mt-1">
                        {selectedProduct.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Price
                        </h4>
                        <p className="text-xl font-bold">
                          ₱{selectedProduct.price.toFixed(2)}/
                          {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Available Quantity
                        </h4>
                        <p className="text-xl font-bold">
                          {selectedProduct.available.toLocaleString()}{" "}
                          {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Minimum Order
                        </h4>
                        <p className="text-sm font-medium">
                          {selectedProduct.minOrder} {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">
                          Delivery Time
                        </h4>
                        <p className="text-sm font-medium">
                          {selectedProduct.deliveryTime}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setBulkOrderProduct(selectedProduct);
                          setSelectedProduct(null);
                        }}
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        Request Bulk Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Reviews</h3>
                <div className="space-y-4">
                  {selectedProduct.reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">
                            {review.reviewer}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Supplier Profile Modal */}
      {selectedSupplier && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Supplier Profile</h3>
              <button
                onClick={() => setSelectedSupplier(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-full">
                  <User className="h-10 w-10 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedSupplier.name}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{selectedSupplier.location}</span>
                  </div>
                </div>
                <div className="flex items-center ml-auto">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(selectedSupplier.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : star <= selectedSupplier.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">
                    {selectedSupplier.rating}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    About
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      {selectedSupplier.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">
                            Year Established
                          </p>
                          <p className="text-sm font-medium">
                            {selectedSupplier.yearEstablished}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Farm Size</p>
                          <p className="text-sm font-medium">
                            {selectedSupplier.farmSize}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">
                    Contact Information
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Contact Person</p>
                        <p className="text-sm font-medium">
                          {selectedSupplier.contactPerson}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone Number</p>
                        <p className="text-sm font-medium">
                          {selectedSupplier.contactNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm font-medium">
                          {selectedSupplier.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Available Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {products
                    .filter(
                      (product) => product.supplier.id === selectedSupplier.id
                    )
                    .map((product) => (
                      <div
                        key={product.id}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={
                              product.image ||
                              "/placeholder.svg?height=60&width=60"
                            }
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div>
                            <h5 className="text-sm font-medium">
                              {product.name}
                            </h5>
                            <p className="text-xs text-gray-500">
                              {product.category}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-bold">
                              ₱{product.price.toFixed(2)}/{product.unit}
                            </p>
                            <p className="text-xs text-gray-500">
                              {product.available.toLocaleString()}{" "}
                              {product.unit} available
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedSupplier(null);
                              setSelectedProduct(product);
                            }}
                            className="px-2 py-1 text-xs text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Order Modal */}
      {bulkOrderProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Request Bulk Order</h3>
              <button
                onClick={() => setBulkOrderProduct(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={
                    bulkOrderProduct.image ||
                    "/placeholder.svg?height=60&width=60"
                  }
                  alt={bulkOrderProduct.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="font-medium">{bulkOrderProduct.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₱{bulkOrderProduct.price.toFixed(2)}/{bulkOrderProduct.unit}{" "}
                    • {bulkOrderProduct.supplier.name}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select Department</option>
                    <option value="education">Department of Education</option>
                    <option value="health">Department of Health</option>
                    <option value="social">Department of Social Welfare</option>
                    <option value="agriculture">
                      Department of Agriculture
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity ({bulkOrderProduct.unit})
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={bulkOrderProduct.minOrder}
                    max={bulkOrderProduct.available}
                    value={bulkOrderQuantity}
                    onChange={(e) =>
                      setBulkOrderQuantity(Number.parseInt(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder={`Minimum order: ${bulkOrderProduct.minOrder}`}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum order: {bulkOrderProduct.minOrder}{" "}
                    {bulkOrderProduct.unit} • Available:{" "}
                    {bulkOrderProduct.available.toLocaleString()}{" "}
                    {bulkOrderProduct.unit}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="delivery-date"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Required Delivery Date
                  </label>
                  <input
                    type="date"
                    id="delivery-date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Estimated delivery time: {bulkOrderProduct.deliveryTime}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Any special requirements or instructions..."
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Subtotal</span>
                    <span className="text-sm font-medium">
                      ₱
                      {(
                        (bulkOrderQuantity || 0) * bulkOrderProduct.price
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-base font-bold">Total</span>
                    <span className="text-base font-bold">
                      ₱
                      {(
                        (bulkOrderQuantity || 0) * bulkOrderProduct.price
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setBulkOrderProduct(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBulkOrderRequest}
                  disabled={
                    !bulkOrderQuantity ||
                    bulkOrderQuantity < bulkOrderProduct.minOrder
                  }
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    !bulkOrderQuantity ||
                    bulkOrderQuantity < bulkOrderProduct.minOrder
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  Submit Order Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MarketStatCard({ title, value, icon, color }) {
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
    </div>
  );
}

function ProductCard({ product, onViewDetails, onRequestOrder }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative h-48">
        <img
          src={product.image || "/placeholder.svg?height=200&width=200"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.organic && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            ORGANIC
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.supplier.name}</p>
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
            <p className="text-xs text-gray-500">
              Min. Order: {product.minOrder} {product.unit}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={onViewDetails}
              className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-50"
            >
              View Details
            </button>
            <button
              onClick={onRequestOrder}
              className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Request Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupplierCard({ supplier, products, onViewProfile, onViewProduct }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{supplier.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{supplier.location}</span>
              </div>
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
            <button
              onClick={onViewProfile}
              className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-medium text-gray-500 mb-3">
          Available Products
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 p-3 rounded-lg flex items-center gap-3"
            >
              <img
                src={product.image || "/placeholder.svg?height=60&width=60"}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <h5 className="text-sm font-medium truncate">{product.name}</h5>
                <p className="text-xs text-gray-500">
                  ₱{product.price.toFixed(2)}/{product.unit}
                </p>
              </div>
              <button
                onClick={() => onViewProduct(product)}
                className="text-xs text-green-600 hover:text-green-800"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickActionButton({ label, icon, color, onClick }) {
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
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function TopSupplierItem({ name, location, rating, onClick }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-100 p-2 rounded-full">
        <User className="h-5 w-5 text-gray-600" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{location}</p>
      </div>
      <div className="flex items-center">
        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
        <span className="text-sm font-medium">{rating}</span>
      </div>
      <button
        onClick={onClick}
        className="text-xs text-green-600 hover:text-green-800"
      >
        View
      </button>
    </div>
  );
}
