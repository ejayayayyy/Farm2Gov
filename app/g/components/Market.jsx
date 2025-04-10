"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Filter, MapPin, Package, Search, ShoppingCart, Star, User, X } from "lucide-react"

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState("browse")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [quantityRange, setQuantityRange] = useState([0, 1000])
  const [selectedSupplierLocation, setSelectedSupplierLocation] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedSupplier, setSelectedSupplier] = useState(null)
  const [bulkOrderProduct, setBulkOrderProduct] = useState(null)
  const [bulkOrderQuantity, setBulkOrderQuantity] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

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
          comment: "Excellent quality tomatoes. Very fresh and perfect for our school feeding program.",
          date: "2023-10-05",
        },
        {
          id: 102,
          reviewer: "Department of Health",
          rating: 4,
          comment: "Good quality but some tomatoes were slightly damaged during delivery.",
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
          comment: "Very fresh apples. Children in our feeding program loved them!",
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
          comment: "Excellent quality brown rice. Perfect for our school feeding programs.",
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
      description: "Fresh, pasteurized milk from grass-fed cows. Rich in calcium and essential nutrients.",
      image: "/images/spilled-milk-still-life.png",
      deliveryTime: "1-2 days",
      reviews: [
        {
          id: 107,
          reviewer: "Department of Education",
          rating: 5,
          comment: "Excellent quality milk. Children love it and the delivery is always on time.",
          date: "2023-10-10",
        },
        {
          id: 108,
          reviewer: "Department of Health",
          rating: 5,
          comment: "Very fresh milk with proper cold chain maintained during delivery.",
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
          comment: "Very fresh carrots. Great for our community feeding programs.",
          date: "2023-10-12",
        },
        {
          id: 110,
          reviewer: "Department of Education",
          rating: 4,
          comment: "Good quality carrots but some were slightly smaller than expected.",
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
    {
      id: 7,
      name: "Fresh Eggs",
      supplier: {
        id: 5,
        name: "Sunrise Poultry Farm",
        location: "Cavite",
        rating: 4.6,
        totalOrders: 85,
        completedOnTime: 80,
        description:
          "Family-owned poultry farm producing fresh eggs and poultry products. We maintain high standards of animal welfare and product quality.",
        contactPerson: "Elena Reyes",
        contactNumber: "09187654322",
        email: "contact@sunrisepoultry.com",
        certifications: ["HACCP", "Animal Welfare Certified"],
        yearEstablished: 2014,
        farmSize: "10 hectares",
        categories: ["Poultry", "Eggs"],
      },
      category: "Poultry",
      price: 180.0,
      unit: "tray",
      available: 150,
      minOrder: 15,
      rating: 4.6,
      organic: true,
      description: "Fresh eggs from free-range chickens. Rich in protein and essential nutrients.",
      image: "/images/fresh-eggs-carton.png",
      deliveryTime: "1-2 days",
      reviews: [
        {
          id: 113,
          reviewer: "Department of Education",
          rating: 5,
          comment: "Very fresh eggs. Perfect for our school feeding programs.",
          date: "2023-10-18",
        },
        {
          id: 114,
          reviewer: "Department of Health",
          rating: 4,
          comment: "Good quality eggs but occasional breakage during delivery.",
          date: "2023-10-10",
        },
      ],
    },
    {
      id: 8,
      name: "Organic Cabbage",
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
      category: "Vegetables",
      price: 45.0,
      unit: "kg",
      available: 250,
      minOrder: 25,
      rating: 4.3,
      organic: true,
      description: "Fresh, organic cabbage grown without synthetic pesticides. Great for salads and cooked dishes.",
      image: "/images/fresh-cabbage-head.png",
      deliveryTime: "2-3 days",
      reviews: [
        {
          id: 115,
          reviewer: "Department of Social Welfare",
          rating: 4,
          comment: "Good quality cabbage. Fresh and well-packaged.",
          date: "2023-10-20",
        },
        {
          id: 116,
          reviewer: "Department of Education",
          rating: 5,
          comment: "Excellent cabbage. Very fresh and perfect for our school meals.",
          date: "2023-10-15",
        },
      ],
    },
  ]

  // Sample data for locations
  const locations = [
    { id: "all", name: "All Locations" },
    { id: "Laguna", name: "Laguna" },
    { id: "Batangas", name: "Batangas" },
    { id: "Bulacan", name: "Bulacan" },
    { id: "Nueva Ecija", name: "Nueva Ecija" },
    { id: "Cavite", name: "Cavite" },
  ]

  // Sample data for categories
  const categories = [
    { id: "all", name: "All Categories" },
    { id: "Vegetables", name: "Vegetables" },
    { id: "Fruits", name: "Fruits" },
    { id: "Grains", name: "Grains" },
    { id: "Dairy", name: "Dairy" },
    { id: "Poultry", name: "Poultry" },
  ]

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Filter by search query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by category
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false
    }

    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }

    // Filter by quantity range
    if (product.available < quantityRange[0] || product.available > quantityRange[1]) {
      return false
    }

    // Filter by supplier location
    if (selectedSupplierLocation !== "all" && product.supplier.location !== selectedSupplierLocation) {
      return false
    }

    return true
  })

  const handleBulkOrderRequest = () => {
    // In a real app, this would submit the bulk order request
    console.log(`Bulk order request for ${bulkOrderQuantity} ${bulkOrderProduct.unit} of ${bulkOrderProduct.name}`)

    // Close the modal and reset form
    setBulkOrderProduct(null)
    setBulkOrderQuantity(0)
  }

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Government Procurement Market</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <ShoppingCart className="h-4 w-4" />
            View Cart (0)
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab("browse")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "browse"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Browse Products
          </button>
          <button
            onClick={() => setActiveTab("suppliers")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "suppliers"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Supplier Directory
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "orders"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Bulk Order Requests
          </button>
        </nav>
      </div>

      {/* Browse Products */}
      {activeTab === "browse" && (
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Search products, suppliers, or categories..."
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedSupplierLocation}
                  onChange={(e) => setSelectedSupplierLocation(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <Filter className="h-4 w-4 text-gray-500" />
                  <span>More Filters</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range (₱)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Min"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min="0"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="quantityRange" className="block text-sm font-medium text-gray-700 mb-1">
                      Available Quantity
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        value={quantityRange[0]}
                        onChange={(e) => setQuantityRange([Number.parseInt(e.target.value), quantityRange[1]])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Min"
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min="0"
                        value={quantityRange[1]}
                        onChange={(e) => setQuantityRange([quantityRange[0], Number.parseInt(e.target.value)])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedSupplierLocation("all")
                      setPriceRange([0, 1000])
                      setQuantityRange([0, 1000])
                      setSearchQuery("")
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Product Results */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"} Found
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="px-3 py-1 border border-gray-300 rounded-md text-sm">
                  <option value="relevance">Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="available">Availability</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative h-48">
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
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
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
                          onClick={() => setSelectedProduct(product)}
                          className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-50"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => setBulkOrderProduct(product)}
                          className="px-3 py-1 text-sm text-white bg-green-500 rounded-md hover:bg-green-600"
                        >
                          Request Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn't find any products matching your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all")
                    setSelectedSupplierLocation("all")
                    setPriceRange([0, 1000])
                    setQuantityRange([0, 1000])
                    setSearchQuery("")
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{filteredProducts.length}</span> of{" "}
                  <span className="font-medium">{filteredProducts.length}</span> products
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Supplier Directory */}
      {activeTab === "suppliers" && (
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
                  placeholder="Search suppliers by name, location, or products..."
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>

                <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                  <option value="rating-desc">Highest Rated</option>
                  <option value="rating-asc">Lowest Rated</option>
                  <option value="orders-desc">Most Orders</option>
                  <option value="reliability">Reliability</option>
                </select>
              </div>
            </div>
          </div>

          {/* Supplier Cards */}
          <div className="space-y-6">
            {Array.from(new Set(products.map((product) => product.supplier.id))).map((supplierId) => {
              const supplier = products.find((product) => product.supplier.id === supplierId).supplier
              return (
                <div key={supplier.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6 border-b border-gray-200">
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
                          onClick={() => setSelectedSupplier(supplier)}
                          className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 rounded-md hover:bg-green-100"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Performance</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>On-time Delivery</span>
                                <span className="font-medium">
                                  {Math.round((supplier.completedOnTime / supplier.totalOrders) * 100)}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-green-500 h-1.5 rounded-full"
                                  style={{
                                    width: `${Math.round((supplier.completedOnTime / supplier.totalOrders) * 100)}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Quality Rating</span>
                                <span className="font-medium">{supplier.rating}/5</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-green-500 h-1.5 rounded-full"
                                  style={{ width: `${(supplier.rating / 5) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Response Time</span>
                                <span className="font-medium">95%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Categories</h4>
                        <div className="bg-gray-50 p-4 rounded-lg h-full">
                          <div className="flex flex-wrap gap-2">
                            {supplier.categories.map((category, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">{supplier.totalOrders}</span> orders completed with{" "}
                              <span className="font-medium">{supplier.completedOnTime}</span> on-time deliveries
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Actions</h4>
                        <div className="bg-gray-50 p-4 rounded-lg h-full">
                          <div className="space-y-2">
                            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                              View Products
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                              Contact Supplier
                            </button>
                            <button className="w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                              View Certifications
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Available Products */}
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Available Products</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {products
                        .filter((product) => product.supplier.id === supplier.id)
                        .slice(0, 3)
                        .map((product) => (
                          <div key={product.id} className="bg-gray-50 p-3 rounded-lg flex items-center gap-3">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-md"
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-medium truncate">{product.name}</h5>
                              <p className="text-xs text-gray-500">
                                ₱{product.price.toFixed(2)}/{product.unit}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Bulk Order Requests */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium mb-4">Bulk Order Request Form</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <option value="agriculture">Department of Agriculture</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="requestor" className="block text-sm font-medium text-gray-700 mb-1">
                    Requestor Name
                  </label>
                  <input
                    type="text"
                    id="requestor"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Category
                  </label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                  <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Required Delivery Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="delivery-date"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Order Description
                  </label>
                  <textarea
                    id="description"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Describe your bulk order requirements, including specific products, quantities, and any special instructions."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Submit Bulk Order Request
                </button>
              </div>
            </div>
          </div>

          {/* Recent Bulk Order Requests */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Recent Bulk Order Requests</h3>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BOR-2023-1001</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Department of Education</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Fresh Vegetables, Fruits, Dairy</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                      <button className="text-red-600 hover:text-red-900">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BOR-2023-0998</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Department of Health</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Organic Fruits, Brown Rice</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Processing
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                      <button className="text-red-600 hover:text-red-900">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BOR-2023-0985</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-05</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Department of Social Welfare</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Fresh Milk, Eggs, Vegetables</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                      <button className="text-blue-600 hover:text-blue-900">Track</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">BOR-2023-0972</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-09-28</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Department of Agriculture</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Organic Potatoes, Carrots</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Receipt</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Product Details</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
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
                        {selectedProduct.rating} ({selectedProduct.reviews.length} reviews)
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
                    Supplier: {selectedProduct.supplier.name} • {selectedProduct.supplier.location}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Description</h4>
                      <p className="text-sm mt-1">{selectedProduct.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Price</h4>
                        <p className="text-xl font-bold">
                          ₱{selectedProduct.price.toFixed(2)}/{selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Available Quantity</h4>
                        <p className="text-xl font-bold">
                          {selectedProduct.available.toLocaleString()} {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Minimum Order</h4>
                        <p className="text-sm font-medium">
                          {selectedProduct.minOrder} {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Delivery Time</h4>
                        <p className="text-sm font-medium">{selectedProduct.deliveryTime}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setBulkOrderProduct(selectedProduct)
                          setSelectedProduct(null)
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
                                  star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{review.reviewer}</span>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
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
              <button onClick={() => setSelectedSupplier(null)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-full">
                  <User className="h-10 w-10 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedSupplier.name}</h2>
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
                  <span className="text-lg font-medium">{selectedSupplier.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">About</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">{selectedSupplier.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500">Year Established</p>
                          <p className="text-sm font-medium">{selectedSupplier.yearEstablished}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Farm Size</p>
                          <p className="text-sm font-medium">{selectedSupplier.farmSize}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Contact Person</p>
                        <p className="text-sm font-medium">{selectedSupplier.contactPerson}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone Number</p>
                        <p className="text-sm font-medium">{selectedSupplier.contactNumber}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm font-medium">{selectedSupplier.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Performance Metrics</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>On-time Delivery</span>
                          <span className="font-medium">
                            {Math.round((selectedSupplier.completedOnTime / selectedSupplier.totalOrders) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-500 h-1.5 rounded-full"
                            style={{
                              width: `${Math.round((selectedSupplier.completedOnTime / selectedSupplier.totalOrders) * 100)}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Quality Rating</span>
                          <span className="font-medium">{selectedSupplier.rating}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-green-500 h-1.5 rounded-full"
                            style={{ width: `${(selectedSupplier.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Response Time</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Certifications</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex flex-wrap gap-2">
                      {selectedSupplier.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">{selectedSupplier.totalOrders}</span> orders completed with{" "}
                        <span className="font-medium">{selectedSupplier.completedOnTime}</span> on-time deliveries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Available Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {products
                    .filter((product) => product.supplier.id === selectedSupplier.id)
                    .map((product) => (
                      <div key={product.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div>
                            <h5 className="text-sm font-medium">{product.name}</h5>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-bold">
                              ₱{product.price.toFixed(2)}/{product.unit}
                            </p>
                            <p className="text-xs text-gray-500">
                              {product.available.toLocaleString()} {product.unit} available
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedSupplier(null)
                              setSelectedProduct(product)
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

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setSelectedSupplier(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Close
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Contact Supplier
                </button>
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
              <button onClick={() => setBulkOrderProduct(null)} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={bulkOrderProduct.image || "/placeholder.svg"}
                  alt={bulkOrderProduct.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="font-medium">{bulkOrderProduct.name}</h4>
                  <p className="text-sm text-gray-500">
                    ₱{bulkOrderProduct.price.toFixed(2)}/{bulkOrderProduct.unit} • {bulkOrderProduct.supplier.name}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
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
                    <option value="agriculture">Department of Agriculture</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity ({bulkOrderProduct.unit})
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="quantity"
                      min={bulkOrderProduct.minOrder}
                      max={bulkOrderProduct.available}
                      value={bulkOrderQuantity}
                      onChange={(e) => setBulkOrderQuantity(Number.parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder={`Minimum order: ${bulkOrderProduct.minOrder}`}
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum order: {bulkOrderProduct.minOrder} {bulkOrderProduct.unit} • Available:{" "}
                    {bulkOrderProduct.available.toLocaleString()} {bulkOrderProduct.unit}
                  </p>
                </div>

                <div>
                  <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Required Delivery Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="delivery-date"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Estimated delivery time: {bulkOrderProduct.deliveryTime}</p>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
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
                      ₱{((bulkOrderQuantity || 0) * bulkOrderProduct.price).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Estimated Delivery</span>
                    <span className="text-sm font-medium">{bulkOrderProduct.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-base font-bold">Total</span>
                    <span className="text-base font-bold">
                      ₱{((bulkOrderQuantity || 0) * bulkOrderProduct.price).toLocaleString()}
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
                  disabled={!bulkOrderQuantity || bulkOrderQuantity < bulkOrderProduct.minOrder}
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                    !bulkOrderQuantity || bulkOrderQuantity < bulkOrderProduct.minOrder
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
  )
}
