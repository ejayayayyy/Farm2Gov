"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  User,
  Building,
  Mail,
  Package,
  ShoppingCart,
  Star,
  Edit,
  Save,
  Lock,
  AlertTriangle,
  Check,
  X,
  ChevronRight,
  Plus,
  Trash2,
  Eye,
} from "lucide-react"

const ProfileSettings = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [userType, setUserType] = useState("farmer") // Default, will be updated from localStorage

  // Check localStorage for user role on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      try {
        const storedRole = localStorage.getItem("userRole")
        console.log("Retrieved role from localStorage:", storedRole)

        if (storedRole) {
          // Handle different possible formats of the stored role
          const normalizedRole = storedRole.toLowerCase().trim()
          console.log("Normalized role:", normalizedRole)

          // Check if the role contains government/gov or farmer keywords
          if (normalizedRole.includes("gov")) {
            setUserType("government")
            console.log("Setting user type to government")
          } else if (normalizedRole.includes("farm")) {
            setUserType("farmer")
            console.log("Setting user type to farmer")
          } else {
            // If the exact format is unknown, try to make a best guess
            setUserType(normalizedRole === "government" || normalizedRole === "gov" ? "government" : "farmer")
            console.log(
              "Best guess user type:",
              normalizedRole === "government" || normalizedRole === "gov" ? "government" : "farmer",
            )
          }
        } else {
          console.log("No role found in localStorage, defaulting to farmer")
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error)
      }
    }
  }, [])

  // Mock data for farmer profile
  const [farmerProfile, setFarmerProfile] = useState({
    name: "Juan dela Cruz",
    businessName: "Dela Cruz Organic Farms",
    email: "juan@delacrusfarms.ph",
    phone: "+63 912 345 6789",
    address: "Barangay San Isidro, Tagaytay City, Cavite",
    description: "Family-owned organic farm specializing in vegetables and fruits. Farming since 1985.",
    isVerified: true,
    verificationDate: "2023-05-15",
    profileImage: "/images/farmer-profile.png",
    coverImage: "/images/farm-cover.png",
  })

  // Mock data for government profile
  const [govProfile, setGovProfile] = useState({
    name: "Maria Santos",
    position: "Procurement Officer",
    agency: "Department of Agriculture - Region IV-A",
    email: "m.santos@da.gov.ph",
    phone: "+63 918 765 4321",
    officeAddress: "DA Regional Office, Lipa City, Batangas",
    description: "Handling agricultural procurement for CALABARZON region since 2019.",
    profileImage: "/images/gov-profile.png",
    agencyLogo: "/placeholder.svg?height=32&width=32",
  })

  // Mock product listings for farmer
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organic Red Rice",
      price: 75,
      unit: "kg",
      stock: 500,
      image: "/images/bowl-of-steamed-rice.png",
      status: "active",
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      price: 60,
      unit: "kg",
      stock: 200,
      image: "/images/ripe-red-tomatoes.png",
      status: "active",
    },
    {
      id: 3,
      name: "Carrots",
      price: 45,
      unit: "kg",
      stock: 350,
      image: "/images/bunch-of-carrots.png",
      status: "active",
    },
    {
      id: 4,
      name: "Potatoes",
      price: 50,
      unit: "kg",
      stock: 0,
      image: "/images/pile-of-potatoes.png",
      status: "out_of_stock",
    },
  ])

  // Mock order history
  const [orders, setOrders] = useState([
    {
      id: "ORD-2023-1001",
      date: "2023-10-15",
      buyer: "Department of Education - Cavite",
      items: 3,
      total: 25000,
      status: "completed",
    },
    {
      id: "ORD-2023-1002",
      date: "2023-10-10",
      buyer: "Department of Social Welfare - Batangas",
      items: 2,
      total: 15000,
      status: "completed",
    },
    {
      id: "ORD-2023-1003",
      date: "2023-10-05",
      buyer: "Department of Agriculture - Laguna",
      items: 5,
      total: 35000,
      status: "completed",
    },
    {
      id: "ORD-2023-1004",
      date: "2023-11-01",
      buyer: "Department of Health - Quezon",
      items: 4,
      total: 28000,
      status: "in_progress",
    },
  ])

  // Mock purchase history for government
  const [purchases, setPurchases] = useState([
    {
      id: "PUR-2023-2001",
      date: "2023-10-20",
      seller: "Dela Cruz Organic Farms",
      items: 4,
      total: 32000,
      status: "completed",
      rated: true,
      rating: 5,
    },
    {
      id: "PUR-2023-2002",
      date: "2023-10-12",
      seller: "Santos Vegetable Farm",
      items: 3,
      total: 18000,
      status: "completed",
      rated: true,
      rating: 4,
    },
    {
      id: "PUR-2023-2003",
      date: "2023-11-05",
      seller: "Mendoza Rice Producers",
      items: 2,
      total: 45000,
      status: "in_progress",
      rated: false,
    },
    {
      id: "PUR-2023-2004",
      date: "2023-11-10",
      seller: "Reyes Fruit Orchard",
      items: 5,
      total: 27000,
      status: "pending",
      rated: false,
    },
  ])

  // Mock ratings given by government
  const [ratingsGiven, setRatingsGiven] = useState([
    {
      id: 1,
      seller: "Dela Cruz Organic Farms",
      date: "2023-10-22",
      rating: 5,
      comment: "Excellent quality produce and on-time delivery.",
    },
    {
      id: 2,
      seller: "Santos Vegetable Farm",
      date: "2023-10-15",
      rating: 4,
      comment: "Good quality but some items were slightly damaged during delivery.",
    },
  ])

  const handleEditProfile = () => {
    setIsEditing(!isEditing)
  }

  const handleSaveProfile = () => {
    // In a real app, you would save the profile data to the backend here
    setIsEditing(false)
    alert("Profile updated successfully!")
  }

  const handleChangePassword = () => {
    setShowPasswordModal(true)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    // In a real app, you would handle password change logic here
    setShowPasswordModal(false)
    alert("Password changed successfully!")
  }

  const handleProductStatusChange = (productId, newStatus) => {
    setProducts(products.map((product) => (product.id === productId ? { ...product, status: newStatus } : product)))
  }

  const renderFarmerProfile = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="relative h-48 rounded-t-xl overflow- mb-16">
          <Image
            src={farmerProfile.coverImage || "/placeholder.svg"}
            alt="Farm cover"
            className="w-full h-full object-cover"
            width={800}
            height={200}
          />
          <div className="absolute bottom-0 transform translate-y-1/2 left-6 mb-2">
            <div className="relative">
              <Image
                src={farmerProfile.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
                width={128}
                height={128}
              />
              {farmerProfile.isVerified && (
                <div
                  className="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1"
                  title={`Verified on ${farmerProfile.verificationDate}`}
                >
                  <Check className="h-5 w-5" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{farmerProfile.businessName}</h1>
              <p className="text-gray-600">{farmerProfile.name} - Owner</p>
              {farmerProfile.isVerified && (
                <div className="flex items-center mt-1 text-green-600">
                  <Check className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Verified Seller</span>
                </div>
              )}
            </div>
            {!isEditing ? (
              <button
                onClick={handleEditProfile}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Edit className="h-4 w-4" />
                Edit Profile
              </button>
            ) : (
              <button
                onClick={handleSaveProfile}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Business Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Business Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.businessName}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, businessName: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.businessName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Owner Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.name}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, name: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Business Description</label>
                  {isEditing ? (
                    <textarea
                      value={farmerProfile.description}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, description: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                      rows={3}
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.description}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center mb-4">
                <Mail className="h-5 w-5 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={farmerProfile.email}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, email: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={farmerProfile.phone}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, phone: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Business Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.address}
                      onChange={(e) => setFarmerProfile({ ...farmerProfile, address: e.target.value })}
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800">{farmerProfile.address}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <div className="flex items-center mb-4">
              <Lock className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={handleChangePassword}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Change Password
              </button>

              {!farmerProfile.isVerified && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Your account is pending verification. Please submit the required documents to get verified.
                      </p>
                      <button className="mt-2 text-sm font-medium text-yellow-700 hover:text-yellow-600 flex items-center gap-1">
                        Submit Verification Documents
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderGovProfile = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <div className="relative">
            <Image
              src={govProfile.profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              width={128}
              height={128}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{govProfile.name}</h1>
                <p className="text-gray-600">{govProfile.position}</p>
                <div className="flex items-center mt-2">
                  <Image
                    src={govProfile.agencyLogo || "/placeholder.svg"}
                    alt="Agency logo"
                    className="w-8 h-8 mr-2"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium">{govProfile.agency}</span>
                </div>
              </div>

              {!isEditing ? (
                <button
                  onClick={handleEditProfile}
                  className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveProfile}
                  className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-5 rounded-xl">
            <div className="flex items-center mb-4">
              <Building className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Agency Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Agency Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={govProfile.agency}
                    onChange={(e) => setGovProfile({ ...govProfile, agency: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.agency}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Position</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={govProfile.position}
                    onChange={(e) => setGovProfile({ ...govProfile, position: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.position}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Office Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={govProfile.officeAddress}
                    onChange={(e) => setGovProfile({ ...govProfile, officeAddress: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.officeAddress}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={govProfile.email}
                    onChange={(e) => setGovProfile({ ...govProfile, email: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={govProfile.phone}
                    onChange={(e) => setGovProfile({ ...govProfile, phone: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Description</label>
                {isEditing ? (
                  <textarea
                    value={govProfile.description}
                    onChange={(e) => setGovProfile({ ...govProfile, description: e.target.value })}
                    className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                    rows={3}
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl">
          <div className="flex items-center mb-4">
            <Lock className="h-5 w-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleChangePassword}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Lock className="h-4 w-4" />
              Change Password
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderFarmerProducts = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">My Products</h2>
            <p className="text-sm text-gray-500 mt-1">Manage your product listings</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Plus className="h-4 w-4" />
            Add New Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-500">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="h-10 w-10 rounded-full object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ₱{product.price.toFixed(2)}/{product.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {product.stock} {product.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === "active"
                          ? "bg-green-100 text-green-800"
                          : product.status === "out_of_stock"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {product.status === "active"
                        ? "Active"
                        : product.status === "out_of_stock"
                          ? "Out of Stock"
                          : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      {product.status === "active" ? (
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          onClick={() => handleProductStatusChange(product.id, "draft")}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      ) : product.status === "draft" ? (
                        <button
                          className="text-green-600 hover:text-green-900"
                          onClick={() => handleProductStatusChange(product.id, "active")}
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      ) : null}
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-sm text-gray-500">
          Showing {products.length} products
        </div>
      </div>
    )
  }

  const renderOrderHistory = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {userType === "farmer" ? "Order History" : "Purchase History"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {userType === "farmer" ? "Track your orders and sales" : "Track your purchases and payments"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-green-500 focus:border-green-500">
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="in_progress">In Progress</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-500">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  {userType === "farmer" ? "Buyer" : "Seller"}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Items
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {(userType === "farmer" ? orders : purchases).map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{userType === "farmer" ? order.buyer : order.seller}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.items} items</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₱{order.total.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "in_progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.status === "completed"
                        ? "Completed"
                        : order.status === "in_progress"
                          ? "In Progress"
                          : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="h-4 w-4" />
                      </button>
                      {userType === "government" && !order.rated && order.status === "completed" && (
                        <button className="text-green-600 hover:text-green-900">
                          <Star className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-sm text-gray-500">
          Showing {(userType === "farmer" ? orders : purchases).length} orders
        </div>
      </div>
    )
  }

  const renderRatingsGiven = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Ratings Given</h2>
          <p className="text-sm text-gray-500 mt-1">Reviews and ratings you've provided to sellers</p>
        </div>

        {ratingsGiven.length > 0 ? (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {ratingsGiven.map((rating) => (
              <div key={rating.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{rating.seller}</h3>
                    <p className="text-sm text-gray-500">Rated on {rating.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < rating.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{rating.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400 flex items-center justify-center rounded-full bg-gray-100">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No ratings yet</h3>
            <p className="mt-1 text-sm text-gray-500">You haven't rated any sellers yet.</p>
          </div>
        )}
      </div>
    )
  }

  // Password change modal
  const renderPasswordModal = () => {
    if (!showPasswordModal) return null

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
            <button onClick={() => setShowPasswordModal(false)} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handlePasswordChange}>
            <div className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                className="mr-3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-1 text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl border border-gray-100 mb-6 overflow-hidden">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("profile")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "profile"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <User className="h-4 w-4 inline mr-2" />
              Profile Information
            </button>

            {userType === "farmer" && (
              <button
                onClick={() => setActiveTab("products")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "products"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Package className="h-4 w-4 inline mr-2" />
                My Products
              </button>
            )}

            <button
              onClick={() => setActiveTab("orders")}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === "orders"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <ShoppingCart className="h-4 w-4 inline mr-2" />
              {userType === "farmer" ? "Order History" : "Purchase History"}
            </button>

            {userType === "government" && (
              <button
                onClick={() => setActiveTab("ratings")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "ratings"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Star className="h-4 w-4 inline mr-2" />
                Ratings Given
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {activeTab === "profile" && (userType === "farmer" ? renderFarmerProfile() : renderGovProfile())}

          {activeTab === "products" && userType === "farmer" && renderFarmerProducts()}

          {activeTab === "orders" && renderOrderHistory()}

          {activeTab === "ratings" && userType === "government" && renderRatingsGiven()}
        </div>
      </div>

      {renderPasswordModal()}
    </div>
  )
}

export default ProfileSettings
