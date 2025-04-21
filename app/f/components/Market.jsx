"use client";

import { useState, useRef } from "react";
import {
  Camera,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Tag,
  Trash2,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState("listings");
  const [listingsTab, setListingsTab] = useState("active");
  const fileInputRef = useRef(null);
  const [showHelp, setShowHelp] = useState(false);

  const [productImages, setProductImages] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        url: URL.createObjectURL(file),
        file: file,
      }));
      setProductImages([...productImages, ...newImages]);
    }
  };

  const removeImage = (id) => {
    setProductImages(productImages.filter((image) => image.id !== id));
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
                Marketplace
              </h1>
              <p className="mt-2 text-base text-gray-600">
                Manage your products and listings in the marketplace
              </p>
            </div>
           
          </div>
        </div>

        {/* Mobile-friendly Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-x-auto">
          <div className="flex min-w-full">
            <button
              onClick={() => setActiveTab("listings")}
              className={`flex-1 py-4 px-4 text-center font-medium border-b-4 text-base transition-colors ${
                activeTab === "listings"
                  ? "border-green-500 text-green-600 "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1">
                <Package className="h-5 w-5" />
                <span>My Products</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`flex-1 py-4 px-4 text-center font-medium border-b-4 text-base transition-colors ${
                activeTab === "add"
                  ? "border-green-500 text-green-600 "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1">
                <Plus className="h-5 w-5" />
                <span>Add Product</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("discounts")}
              className={`flex-1 py-4 px-4 text-center font-medium border-b-4 text-base transition-colors ${
                activeTab === "discounts"
                  ? "border-green-500 text-green-600 "
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1">
                <Tag className="h-5 w-5" />
                <span>Discounts</span>
              </div>
            </button>
          </div>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Add/Edit Product Form */}
            {activeTab === "add" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-green-5">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Add New Product
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill in the details to list your product in the marketplace
                  </p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="productName"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="productName"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Enter product name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Select a category</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="price"
                          className="block text-base font-medium text-gray-700 mb-2"
                        >
                          Price (₱)
                        </label>
                        <input
                          type="number"
                          id="price"
                          min="0"
                          step="0.01"
                          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="0.00"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quantity"
                          className="block text-base font-medium text-gray-700 mb-2"
                        >
                          Quantity Available
                        </label>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter quantity"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows="3"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Describe your product"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">
                        Product Photos
                      </label>
                      <div className="mt-2 flex flex-wrap gap-4">
                        {productImages.map((image) => (
                          <div key={image.id} className="relative">
                            <img
                              src={image.url || "/placeholder.svg"}
                              alt="Product preview"
                              className="h-28 w-28 object-cover rounded-lg border border-gray-200 shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image.id)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-2 shadow-sm"
                              aria-label="Remove image"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => fileInputRef.current.click()}
                          className="h-28 w-28 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-colors"
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
                      <p className="mt-2 text-sm text-gray-500">
                        Upload up to 5 images of your product. First image will
                        be the cover.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveTab("listings")}
                        className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
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
                {/* Market Stats - Simplified for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <MarketStatCard
                    title="Active Products"
                    value="12"
                    icon={<Package className="w-7 h-7 text-white" />}
                    color="green"
                  />
                  <MarketStatCard
                    title="Total Sales"
                    value="₱45,231"
                    icon={<ShoppingBag className="w-7 h-7 text-white" />}
                    color="blue"
                  />
                  <MarketStatCard
                    title="Avg. Price"
                    value="₱125.50"
                    icon={<Tag className="w-7 h-7 text-white" />}
                    color="purple"
                  />
                </div>

                {/* Search and Filter - Simplified */}
                <div className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Search products..."
                      />
                    </div>

                    <div className="flex gap-2">
                      <select className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option value="">All Categories</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Listings Tabs - Larger touch targets */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="border-b border-gray-100">
                    <div className="flex">
                      <button
                        onClick={() => setListingsTab("active")}
                        className={`flex-1 py-4 px-4 text-center font-medium text-base transition-colors ${
                          listingsTab === "active"
                            ? "border-b-4 border-green-500 text-green-600 "
                            : "border-b-4 border-transparent text-gray-500"
                        }`}
                      >
                        Active{" "}
                        <span className="ml-1 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                          12
                        </span>
                      </button>
                      <button
                        onClick={() => setListingsTab("sold")}
                        className={`flex-1 py-4 px-4 text-center font-medium text-base transition-colors ${
                          listingsTab === "sold"
                            ? "border-b-4 border-green-500 text-green-600 "
                            : "border-b-4 border-transparent text-gray-500"
                        }`}
                      >
                        Sold{" "}
                        <span className="ml-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full">
                          8
                        </span>
                      </button>
                      <button
                        onClick={() => setListingsTab("expired")}
                        className={`flex-1 py-4 px-4 text-center font-medium text-base transition-colors ${
                          listingsTab === "expired"
                            ? "border-b-4 border-green-500 text-green-600 "
                            : "border-b-4 border-transparent text-gray-500"
                        }`}
                      >
                        Expired{" "}
                        <span className="ml-1 px-2 py-0.5 text-xs bg-gray-100 text-gray-800 rounded-full">
                          3
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Product Listings - Larger cards for touch */}
                  <div className="p-4 sm:p-6">
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

                    {/* Pagination - Simplified with larger buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
                      <div className="text-base text-gray-500 order-2 sm:order-1">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">23</span> products
                      </div>
                      <div className="flex gap-3 order-1 sm:order-2">
                        <button className="flex items-center gap-1 px-5 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <ChevronLeft size={18} />
                          <span>Previous</span>
                        </button>
                        <button className="flex items-center gap-1 px-5 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <span>Next</span>
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Bulk Discounts & Offers - Simplified form */}
            {activeTab === "discounts" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-green-0">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Set Bulk Discounts
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Create special offers for customers who buy in bulk
                  </p>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="discountType"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Discount Type
                      </label>
                      <select
                        id="discountType"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="percentage">Percentage Discount</option>
                        <option value="fixed">Fixed Amount Discount</option>
                        <option value="buy-x-get-y">Buy X Get Y Free</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="discountValue"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Discount Value
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-4 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg text-base">
                          %
                        </span>
                        <input
                          type="number"
                          id="discountValue"
                          min="0"
                          max="100"
                          className="flex-1 px-4 py-3 text-base border border-gray-300 rounded-r-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter discount percentage"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="minQuantity"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Minimum Quantity
                      </label>
                      <input
                        type="number"
                        id="minQuantity"
                        min="2"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Minimum quantity for discount"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="applyTo"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Apply To
                      </label>
                      <select
                        id="applyTo"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="all">All Products</option>
                        <option value="category">Specific Category</option>
                        <option value="products">Selected Products</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="validUntil"
                        className="block text-base font-medium text-gray-700 mb-2"
                      >
                        Valid Until
                      </label>
                      <input
                        type="date"
                        id="validUntil"
                        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                      <button
                        type="button"
                        className="px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 text-base font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
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
            {/* Market Tips - More visual with icons */}
            {activeTab === "listings" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-green-500">
                  <h3 className="text-lg font-semibold text-white">
                    Market Tips
                  </h3>
                </div>
                <div className="p-5">
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Tag className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          Set Good Prices
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Check what others are charging and set fair prices for
                          your products.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Camera className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          Take Clear Photos
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Good photos in bright light help sell your products
                          faster.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Package className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          Update Your Stock
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Keep your quantities up to date to avoid problems with
                          buyers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions - Larger buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-green-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h3>
              </div>
              <div className="p-5 space-y-3">
                <QuickActionButton
                  label="Add New Product"
                  icon={<Plus className="w-5 h-5" />}
                  color="green"
                  onClick={() => setActiveTab("add")}
                />
                <QuickActionButton
                  label="Manage Inventory"
                  icon={<Package className="w-5 h-5" />}
                  color="blue"
                />
                <QuickActionButton
                  label="Create Discount"
                  icon={<Tag className="w-5 h-5" />}
                  color="purple"
                  onClick={() => setActiveTab("discounts")}
                />
                <QuickActionButton
                  label="View Sales Report"
                  icon={<ShoppingBag className="w-5 h-5" />}
                  color="amber"
                />
              </div>
            </div>

            {/* Top Selling Products - Enhanced for readability */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 bg-green-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Top Selling Products
                </h3>
              </div>
              <div className="p-5">
                <div className="space-y-5">
                  <TopSellingItem
                    name="Organic Rice (50kg)"
                    sales="₱45,000"
                    units="30 units"
                    image="/images/bowl-of-steamed-rice.png"
                  />
                  <TopSellingItem
                    name="Fresh Tomatoes"
                    sales="₱22,500"
                    units="300 kg"
                    image="/images/ripe-red-tomatoes.png"
                  />
                  <TopSellingItem
                    name="Red Apples"
                    sales="₱18,000"
                    units="150 kg"
                    image="/images/red-apples-basket.png"
                  />
                </div>
              </div>
              <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
                <button className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
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
      )} rounded-xl shadow-sm p-5 transition-all hover:shadow-md`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <div className="p-2 rounded-full bg-white/20">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function ProductCard({ name, category, price, quantity, image, status }) {
  return (
    <div className="flex flex-col h-full border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className="relative">
        <img
          src={image || "/placeholder.svg?height=200&width=200"}
          alt={name}
          className="w-full h-52 object-cover"
        />
        {status === "sold" && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="px-4 py-2 bg-red-500 text-white font-semibold rounded-full text-base">
              SOLD OUT
            </span>
          </div>
        )}
        {status === "expired" && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-full text-base">
              EXPIRED
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col justify-between ">
        <div className="flex justify-between items-start ">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <p className="text-base text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">
              ₱{price.toFixed(2)}
            </p>
            <p className="text-base text-gray-500">{quantity} available</p>
          </div>
        </div>

        {status === "active" && (
          <div className="mt-5 flex justify-between gap-3 ">
            <button className="flex-1 px-4 py-3 text-base font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Edit
            </button>
            <button className="flex-1 px-4 py-3 text-base font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
              Remove
            </button>
          </div>
        )}

        {(status === "sold" || status === "expired") && (
          <div className="mt-5 flex justify-center">
            <button className="w-full px-4 py-3 text-base font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
              Relist Product
            </button>
          </div>
        )}
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
      className={`flex items-center w-full p-4 rounded-lg border-2 ${getColorClass(
        color
      )} transition-colors`}
      onClick={onClick}
    >
      <div className="mr-3 p-2 rounded-full bg-gray-50">{icon}</div>
      <span className="font-medium text-base">{label}</span>
    </button>
  );
}

function TopSellingItem({ name, sales, units, image }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image || "/placeholder.svg?height=60&width=60"}
        alt={name}
        className="h-16 w-16 object-cover rounded-lg border border-gray-200"
      />
      <div className="flex-1">
        <h4 className="text-base font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{units} sold</p>
      </div>
      <div className="text-right">
        <p className="text-base font-bold text-gray-900">{sales}</p>
      </div>
    </div>
  );
}
