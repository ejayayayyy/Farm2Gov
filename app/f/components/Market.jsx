"use client"

import { useState, useRef } from "react"
import { Camera, Edit, Plus, Search, Trash2 } from "lucide-react"

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
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Market</h1>
        {activeTab !== "add" && (
          <button
            className="flex items-center gap-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => setActiveTab("add")}
          >
            <Plus size={16} />
            Add Product
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8">
          <button
            onClick={() => setActiveTab("listings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "listings"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Manage Listings
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "add"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Add/Edit Product
          </button>
          <button
            onClick={() => setActiveTab("discounts")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "discounts"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Bulk Discounts & Offers
          </button>
        </nav>
      </div>

      {/* Add/Edit Product Form */}
      {activeTab === "add" && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Add New Product</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                        className="h-24 w-24 object-cover rounded-md border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(image.id)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={14} />
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
                <p className="mt-2 text-sm text-gray-500">
                  Upload up to 5 images of your product. First image will be the cover.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setActiveTab("listings")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Manage Listings */}
      {activeTab === "listings" && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Search products..."
              />
            </div>

            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="">All Categories</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
                <option value="meat">Meat</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Listings Tabs */}
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px px-6 pt-4 space-x-8">
                <button
                  onClick={() => setListingsTab("active")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    listingsTab === "active"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Active (12)
                </button>
                <button
                  onClick={() => setListingsTab("sold")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    listingsTab === "sold"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Sold (8)
                </button>
                <button
                  onClick={() => setListingsTab("expired")}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    listingsTab === "expired"
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Expired (3)
                </button>
              </nav>
            </div>

            {/* Product Listings */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      image="/placeholder.svg?height=200&width=200&query=milk"
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
                      image="/placeholder.svg?height=200&width=200&query=lettuce"
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
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Discounts & Offers */}
      {activeTab === "discounts" && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Set Bulk Discounts</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="discountType" className="block text-sm font-medium text-gray-700 mb-1">
                    Discount Type
                  </label>
                  <select
                    id="discountType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                      %
                    </span>
                    <input
                      type="number"
                      id="discountValue"
                      min="0"
                      max="100"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Minimum quantity for discount"
                  />
                </div>

                <div>
                  <label htmlFor="applyTo" className="block text-sm font-medium text-gray-700 mb-1">
                    Apply To
                  </label>
                  <select
                    id="applyTo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Create Discount
                </button>
              </div>
            </form>
          </div>

          {/* Active Discounts */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Active Discounts & Offers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Discount Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Min. Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applied To
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Valid Until
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
                      Percentage Discount
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 units</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vegetables</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dec 31, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Buy X Get Y Free</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Buy 3 Get 1 Free</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 units</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fruits</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Nov 30, 2023</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function ProductCard({ name, category, price, quantity, image, status }) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
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
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">₱{price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{quantity} available</p>
          </div>
        </div>

        {status === "active" && (
          <div className="mt-4 flex justify-between">
            <button className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-50">
              Edit
            </button>
            <button className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50">
              Remove
            </button>
          </div>
        )}

        {(status === "sold" || status === "expired") && (
          <div className="mt-4 flex justify-center">
            <button className="px-3 py-1 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-50">
              Relist
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
