"use client"

import { useState, useRef } from "react"
import { Camera, Filter, Package, Plus, Search, ShoppingBag, Tag, Trash2 } from "lucide-react"

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState("listings")
  const [listingsTab, setListingsTab] = useState("active")
  const fileInputRef = useRef(null)

  const [productImages, setProductImages] = useState([])

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        file: file,
      }))
      setProductImages([...productImages, ...newImages])
    }
  }

  const removeImage = (id) => {
    setProductImages(productImages.filter((image) => image.id !== id))
  }

  return (
    <div className="flex-1 bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Market</h1>
              <p className="mt-1 text-sm text-gray-500">Manage your products and listings in the marketplace</p>
            </div>
            <div className="flex items-center gap-3">
              {activeTab !== "add" && (
                <button
                  className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                  onClick={() => setActiveTab("add")}
                >
                  <Plus size={16} />
                  Add Product
                </button>
              )}
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
              onClick={() => setActiveTab("listings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "listings"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Manage Listings
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "add"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Add/Edit Product
            </button>
            <button
              onClick={() => setActiveTab("discounts")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "discounts"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-green-600 hover:border-green-300"
              }`}
            >
              Bulk Discounts & Offers
            </button>
          </nav>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add/Edit Product Form */}
            {activeTab === "add" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">Add New Product</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the details to list your product in the marketplace
                  </p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="productName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          placeholder="Enter product name"
                        />
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select
                          id="category"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                        >
                          <option value="">Select a category</option>
                          <option value="vegetables">Vegetables</option>
                          <option value="fruits">Fruits</option>
                          <option value="grains">Grains</option>
                          <option value="dairy">Dairy</option>
                          <option value="meat">Meat</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                          Price (₱)
                        </label>
                        <input
                          type="number"
                          id="price"
                          min="0"
                          step="0.01"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          placeholder="0.00"
                        />
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                          Quantity Available
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          placeholder="Enter quantity"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          id="description"
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          placeholder="Describe your product"
                        ></textarea>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Photos</label>
                        <div className="mt-1 flex items-center flex-wrap gap-4">
                          {productImages.map((image) => (
                            <div key={image.id} className="relative group">
                              <img
                                src={image.url || "/placeholder.svg"}
                                alt="Product preview"
                                className="h-24 w-24 object-cover rounded-lg border border-gray-200 shadow-sm"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(image.id)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className="h-24 w-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
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
                        <p className="mt-2 text-sm text-gray-500">
                          Upload up to 5 images of your product. First image will be the cover.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab("listings")}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                      >
                        Save Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Manage Listings */}
            {activeTab === "listings" && (
              <>
                {/* Market Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <MarketStatCard
                    title="Active Products"
                    value="12"
                    icon={<Package className="w-6 h-6 text-white" />}
                    color="green"
                  />
                  <MarketStatCard
                    title="Total Sales"
                    value="₱45,231.89"
                    icon={<ShoppingBag className="w-6 h-6 text-white" />}
                    color="blue"
                  />
                  <MarketStatCard
                    title="Avg. Product Price"
                    value="₱125.50"
                    icon={<Tag className="w-6 h-6 text-white" />}
                    color="purple"
                  />
                </div>

                {/* Search and Filter */}
                <div className="">
                  <div className="flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="relative flex-1 max-w-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Search products..."
                      />
                    </div>

                    <div className="flex space-x-2">
                      <select className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-colors">
                        <option value="">All Categories</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                      </select>

                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Filter size={16} />
                        Sort
                      </button>
                    </div>
                  </div>
                </div>

                {/* Listings Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="border-b border-gray-100">
                    <nav className="flex -mb-px px-6 pt-4 space-x-8">
                      <button
                        onClick={() => setListingsTab("active")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                          listingsTab === "active"
                            ? "border-green-500 text-green-600"
                            : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        Active{" "}
                        <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">12</span>
                      </button>
                      <button
                        onClick={() => setListingsTab("sold")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                          listingsTab === "sold"
                            ? "border-green-500 text-green-600"
                            : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        Sold <span className="ml-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full">8</span>
                      </button>
                      <button
                        onClick={() => setListingsTab("expired")}
                        className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                          listingsTab === "expired"
                            ? "border-green-500 text-green-600"
                            : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
                        }`}
                      >
                        Expired{" "}
                        <span className="ml-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full">3</span>
                      </button>
                    </nav>
                  </div>

                  {/* Product Listings */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Sample Products - These would be dynamically generated */}
                      {listingsTab === "active" && (
                        <>
                          <ProductCard
                            name="Fresh Organic Tomatoes"
                            category="Vegetables"
                            price={75.0}
                            quantity={50}
                            image="/images/ripe-red-tomatoes.png"
                            status="active"
                          />
                          <ProductCard
                            name="Red Delicious Apples"
                            category="Fruits"
                            price={120.0}
                            quantity={30}
                            image="/images/red-apples-basket.png"
                            status="active"
                          />
                          <ProductCard
                            name="Brown Rice (5kg)"
                            category="Grains"
                            price={250.0}
                            quantity={20}
                            image="/images/bowl-of-steamed-rice.png"
                            status="active"
                          />
                          <ProductCard
                            name="Fresh Carrots"
                            category="Vegetables"
                            price={60.0}
                            quantity={40}
                            image="/images/bunch-of-carrots.png"
                            status="active"
                          />
                        </>
                      )}

                      {listingsTab === "sold" && (
                        <>
                          <ProductCard
                            name="Organic Potatoes"
                            category="Vegetables"
                            price={90.0}
                            quantity={0}
                            image="/images/pile-of-potatoes.png"
                            status="sold"
                          />
                          <ProductCard
                            name="Fresh Milk (1L)"
                            category="Dairy"
                            price={85.0}
                            quantity={0}
                            image="/images/spilled-milk-still-life.png"
                            status="sold"
                          />
                        </>
                      )}

                      {listingsTab === "expired" && (
                        <>
                          <ProductCard
                            name="Organic Lettuce"
                            category="Vegetables"
                            price={45.0}
                            quantity={0}
                            image="/images/crisp-lettuce-heads.png"
                            status="expired"
                          />
                        </>
                      )}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-8">
                      <div className="text-sm text-gray-500">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">23</span> results
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
                  </div>
                </div>
              </>
            )}

            {/* Bulk Discounts & Offers */}
            {activeTab === "discounts" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900">Set Bulk Discounts</h2>
                  <p className="text-sm text-gray-500 mt-1">Create special offers for customers who buy in bulk</p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="discountType" className="block text-sm font-medium text-gray-700 mb-1">
                          Discount Type
                        </label>
                        <select
                          id="discountType"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                        >
                          <option value="percentage">Percentage Discount</option>
                          <option value="fixed">Fixed Amount Discount</option>
                          <option value="buy-x-get-y">Buy X Get Y Free</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="discountValue" className="block text-sm font-medium text-gray-700 mb-1">
                          Discount Value
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
                            %
                          </span>
                          <input
                            type="number"
                            id="discountValue"
                            min="0"
                            max="100"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg shadow-sm transition-colors"
                            placeholder="Enter discount percentage"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="minQuantity" className="block text-sm font-medium text-gray-700 mb-1">
                          Minimum Quantity
                        </label>
                        <input
                          type="number"
                          id="minQuantity"
                          min="2"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          placeholder="Minimum quantity for discount"
                        />
                      </div>

                      <div>
                        <label htmlFor="applyTo" className="block text-sm font-medium text-gray-700 mb-1">
                          Apply To
                        </label>
                        <select
                          id="applyTo"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                        >
                          <option value="all">All Products</option>
                          <option value="category">Specific Category</option>
                          <option value="products">Selected Products</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="validUntil" className="block text-sm font-medium text-gray-700 mb-1">
                          Valid Until
                        </label>
                        <input
                          type="date"
                          id="validUntil"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm transition-colors"
                        />
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
                        Create Discount
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Market Tips */}
            {activeTab === "listings" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-green-500">
                  <h3 className="text-lg font-semibold text-white">Market Tips</h3>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Tag className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Optimize Your Pricing</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Research market rates and set competitive prices for your products.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Camera className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Use Quality Photos</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Clear, well-lit photos help your products stand out and sell faster.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-full">
                        <Package className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Update Inventory Regularly</h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Keep your product quantities accurate to avoid overselling.
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
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-5 space-y-3">
                <QuickActionButton
                  label="Add New Product"
                  icon={<Plus className="w-4 h-4" />}
                  color="green"
                  onClick={() => setActiveTab("add")}
                />
                <QuickActionButton label="Manage Inventory" icon={<Package className="w-4 h-4" />} color="blue" />
                <QuickActionButton
                  label="Create Discount"
                  icon={<Tag className="w-4 h-4" />}
                  color="purple"
                  onClick={() => setActiveTab("discounts")}
                />
                <QuickActionButton label="View Sales Report" icon={<ShoppingBag className="w-4 h-4" />} color="amber" />
              </div>
            </div>

            {/* Top Selling Products */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Top Selling Products</h3>
              </div>
              <div className="p-5">
                <div className="space-y-4">
                  <TopSellingItem
                    name="Organic Rice (50kg)"
                    sales="₱45,000"
                    units="30 units"
                    image="/images/bowl-of-steamed-rice.png"
                  />
                  <TopSellingItem name="Fresh Tomatoes" sales="₱22,500" units="300 kg" image="/ripe-red-tomatoes.png" />
                  <TopSellingItem name="Red Apples" sales="₱18,000" units="150 kg" image="/red-apples-basket.png" />
                </div>
              </div>
              <div className="px-5 py-3 border-t border-gray-100">
                <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketStatCard({ title, value, icon, color }) {
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
    </div>
  )
}

function ProductCard({ name, category, price, quantity, image, status }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative">
        <img src={image || "/placeholder.svg?height=200&width=200"} alt={name} className="w-full h-48 object-cover" />
        {status === "sold" && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="px-3 py-1 bg-red-500 text-white font-semibold rounded-full text-sm">SOLD OUT</span>
          </div>
        )}
        {status === "expired" && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="px-3 py-1 bg-gray-500 text-white font-semibold rounded-full text-sm">EXPIRED</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">₱{price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{quantity} available</p>
          </div>
        </div>

        {status === "active" && (
          <div className="mt-4 flex justify-between">
            <button className="px-3 py-1.5 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Edit
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
              Remove
            </button>
          </div>
        )}

        {(status === "sold" || status === "expired") && (
          <div className="mt-4 flex justify-center">
            <button className="px-3 py-1.5 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Relist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function QuickActionButton({ label, icon, color, onClick }) {
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
    <button
      className={`flex items-center w-full p-3 rounded-lg border ${getColorClass(color)} transition-colors`}
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  )
}

function TopSellingItem({ name, sales, units, image }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={image || "/placeholder.svg?height=60&width=60"}
        alt={name}
        className="h-12 w-12 object-cover rounded-lg border border-gray-200"
      />
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{units} sold</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-gray-900">{sales}</p>
      </div>
    </div>
  )
}
