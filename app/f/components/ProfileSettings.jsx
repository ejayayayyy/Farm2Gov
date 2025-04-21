"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  Camera,
  Phone,
  MapPin,
  HelpCircle,
  ChevronDown,
  Calendar,
} from "lucide-react";

const FarmerProfileSettings = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [userType, setUserType] = useState("farmer"); // Default, will be updated from localStorage
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check localStorage for user role on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      try {
        const storedRole = localStorage.getItem("role");
        console.log("Retrieved role from localStorage:", storedRole);

        if (storedRole) {
          // Handle different possible formats of the stored role
          const normalizedRole = storedRole.toLowerCase().trim();
          console.log("Normalized role:", normalizedRole);

          // Check if the role contains government/gov or farmer keywords
          if (normalizedRole.includes("gov")) {
            setUserType("government");
            console.log("Setting user type to government");
          } else if (normalizedRole.includes("farm")) {
            setUserType("farmer");
            console.log("Setting user type to farmer");
          } else {
            // If the exact format is unknown, try to make a best guess
            setUserType(
              normalizedRole === "government" || normalizedRole === "gov"
                ? "government"
                : "farmer"
            );
            console.log(
              "Best guess user type:",
              normalizedRole === "government" || normalizedRole === "gov"
                ? "government"
                : "farmer"
            );
          }
        } else {
          console.log("No role found in localStorage, defaulting to farmer");
        }
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }
  }, []);

  // Mock data for farmer profile
  const [farmerProfile, setFarmerProfile] = useState({
    name: "Juan dela Cruz",
    businessName: "Dela Cruz Organic Farms",
    email: "juan@delacrusfarms.ph",
    phone: "+63 912 345 6789",
    address: "Barangay San Isidro, Tagaytay City, Cavite",
    description:
      "Family-owned organic farm specializing in vegetables and fruits. Farming since 1985.",
    isVerified: true,
    verificationDate: "2023-05-15",
    profileImage: "/images/farmer-profile.png",
    coverImage: "/images/farm-cover.png",
  });

  // Mock data for government profile
  const [govProfile, setGovProfile] = useState({
    name: "Maria Santos",
    position: "Procurement Officer",
    agency: "Department of Agriculture - Region IV-A",
    email: "m.santos@da.gov.ph",
    phone: "+63 918 765 4321",
    officeAddress: "DA Regional Office, Lipa City, Batangas",
    description:
      "Handling agricultural procurement for CALABARZON region since 2019.",
    profileImage: "/images/gov-profile.png",
    agencyLogo: "/placeholder.svg?height=32&width=32",
  });

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
  ]);

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
  ]);

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
  ]);

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
      comment:
        "Good quality but some items were slightly damaged during delivery.",
    },
  ]);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    // In a real app, you would save the profile data to the backend here
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // In a real app, you would handle password change logic here
    setShowPasswordModal(false);
    alert("Password changed successfully!");
  };

  const handleProductStatusChange = (productId, newStatus) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, status: newStatus } : product
      )
    );
  };

  const renderFarmerProfile = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="relative h-40 sm:h-48 rounded-t-xl overflow-hidden">
          <Image
            src={
              farmerProfile.coverImage ||
              "/placeholder.svg?height=200&width=800"
            }
            alt="Farm cover"
            className="w-full h-full object-cover"
            width={800}
            height={200}
          />
          <button
            className="absolute top-2 right-2 bg-white bg-opacity-70 p-2 rounded-full"
            aria-label="Change cover photo"
          >
            <Camera className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        <div className="px-4 sm:px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end">
              <div className="relative mb-3 sm:mb-0">
                <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                  <Image
                    src={
                      farmerProfile.profileImage ||
                      "/placeholder.svg?height=128&width=128"
                    }
                    alt="Profile"
                    className="w-full h-full object-cover"
                    width={128}
                    height={128}
                  />
                </div>
                <button
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md"
                  aria-label="Change profile photo"
                >
                  <Camera className="h-4 w-4 text-gray-700" />
                </button>
                {farmerProfile.isVerified && (
                  <div
                    className="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1"
                    title={`Verified on ${farmerProfile.verificationDate}`}
                  >
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div className="sm:ml-4 md:mt-20">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {farmerProfile.businessName}
                </h1>
                <p className="text-gray-600">{farmerProfile.name} - Owner</p>
                {farmerProfile.isVerified && (
                  <div className="flex items-center mt-1 text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Verified Seller</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              {!isEditing ? (
                <button
                  onClick={handleEditProfile}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-base font-medium"
                >
                  <Edit className="h-5 w-5" />
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveProfile}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-base font-medium"
                >
                  <Save className="h-5 w-5" />
                  Save Changes
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Farm Information
                </h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="block text-base font-medium text-gray-600 mb-1">
                    Farm Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.businessName}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          businessName: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-lg text-gray-800">
                      {farmerProfile.businessName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-600 mb-1">
                    Your Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.name}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          name: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-lg text-gray-800">
                      {farmerProfile.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-600 mb-1">
                    About Your Farm
                  </label>
                  {isEditing ? (
                    <textarea
                      value={farmerProfile.description}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          description: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                      rows={3}
                    />
                  ) : (
                    <p className="text-base text-gray-800">
                      {farmerProfile.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-gray-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Contact Information
                </h2>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="flex items-center text-base font-medium text-gray-600 mb-1">
                    <Mail className="h-5 w-5 mr-2 text-gray-500" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={farmerProfile.email}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          email: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-lg text-gray-800">
                      {farmerProfile.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="flex items-center text-base font-medium text-gray-600 mb-1">
                    <Phone className="h-5 w-5 mr-2 text-gray-500" />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={farmerProfile.phone}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          phone: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-lg text-gray-800">
                      {farmerProfile.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="flex items-center text-base font-medium text-gray-600 mb-1">
                    <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                    Farm Address
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={farmerProfile.address}
                      onChange={(e) =>
                        setFarmerProfile({
                          ...farmerProfile,
                          address: e.target.value,
                        })
                      }
                      className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-lg text-gray-800">
                      {farmerProfile.address}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">
                Account Settings
              </h2>
            </div>
            <div className="space-y-4">
              <button
                onClick={handleChangePassword}
                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-base font-medium w-full sm:w-auto"
              >
                <Lock className="h-5 w-5" />
                Change Password
              </button>

              {!farmerProfile.isVerified && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
                  <div className="flex">
                    <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-base text-yellow-700">
                        Your account is pending verification. Please submit the
                        required documents to get verified.
                      </p>
                      <button className="mt-2 text-base font-medium text-yellow-700 hover:text-yellow-600 flex items-center gap-1">
                        Submit Verification Documents
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFarmerProducts = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border-b border-gray-100">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-xl font-semibold text-gray-800">My Products</h2>
            <p className="text-base text-gray-500 mt-1">
              Manage your product listings
            </p>
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-base font-medium">
            <Plus className="h-5 w-5" />
            Add New Product
          </button>
        </div>

        {/* Mobile Product Cards */}
        <div className="sm:hidden">
          <div className="divide-y divide-gray-100">
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <div className="flex items-center">
                  <div className="h-16 w-16 flex-shrink-0 mr-4">
                    <Image
                      src={
                        product.image || "/placeholder.svg?height=64&width=64"
                      }
                      alt={product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-base text-gray-600">
                      ₱{product.price.toFixed(2)}/{product.unit}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`px-3 py-1 text-sm font-semibold rounded-full ${
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
                      <div className="text-sm text-gray-600">
                        Stock: {product.stock} {product.unit}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4 border-t border-gray-100 pt-4">
                  <button className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                    <Edit className="h-4 w-4" /> Edit
                  </button>
                  {product.status === "active" ? (
                    <button
                      className="flex items-center justify-center gap-1 px-3 py-2 bg-yellow-50 text-yellow-600 rounded-lg text-sm font-medium"
                      onClick={() =>
                        handleProductStatusChange(product.id, "draft")
                      }
                    >
                      <Eye className="h-4 w-4" /> Hide
                    </button>
                  ) : product.status === "draft" ? (
                    <button
                      className="flex items-center justify-center gap-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-medium"
                      onClick={() =>
                        handleProductStatusChange(product.id, "active")
                      }
                    >
                      <Check className="h-4 w-4" /> Show
                    </button>
                  ) : null}
                  <button className="flex items-center justify-center gap-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-500">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 relative">
                        <Image
                          src={
                            product.image ||
                            "/placeholder.svg?height=48&width=48"
                          }
                          alt={product.name}
                          className="h-12 w-12 rounded-lg object-cover"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      ₱{product.price.toFixed(2)}/{product.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {product.stock} {product.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
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
                      <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                        <Edit className="h-5 w-5" />
                      </button>
                      {product.status === "active" ? (
                        <button
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                          onClick={() =>
                            handleProductStatusChange(product.id, "draft")
                          }
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      ) : product.status === "draft" ? (
                        <button
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
                          onClick={() =>
                            handleProductStatusChange(product.id, "active")
                          }
                        >
                          <Check className="h-5 w-5" />
                        </button>
                      ) : null}
                      <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-base text-gray-500">
          Showing {products.length} products
        </div>
      </div>
    );
  };

  const renderOrderHistory = () => {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {userType === "farmer" ? "Order History" : "Purchase History"}
              </h2>
              <p className="text-base text-gray-500 mt-1">
                {userType === "farmer"
                  ? "Track your orders and sales"
                  : "Track your purchases and payments"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <select className="px-4 py-3 border border-gray-300 rounded-lg text-base focus:ring-green-500 focus:border-green-500">
                <option value="all">All Orders</option>
                <option value="completed">Completed</option>
                <option value="in_progress">In Progress</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Order Cards */}
        <div className="sm:hidden">
          <div className="divide-y divide-gray-100">
            {(userType === "farmer" ? orders : purchases).map((order) => (
              <div key={order.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {order.id}
                    </h3>
                    <p className="text-base text-gray-600 mt-1">
                      {userType === "farmer" ? order.buyer : order.seller}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
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
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="text-sm text-gray-500">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    {order.date}
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    ₱{order.total.toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    {order.items} items
                  </div>
                  <button className="flex items-center justify-center gap-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-base font-medium">
                    <Eye className="h-5 w-5" /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-500">
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  {userType === "farmer" ? "Buyer" : "Seller"}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Items
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {(userType === "farmer" ? orders : purchases).map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base font-medium text-gray-900">
                      {order.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">{order.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {userType === "farmer" ? order.buyer : order.seller}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base text-gray-900">
                      {order.items} items
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-base font-medium text-green-600">
                      ₱{order.total.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
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
                      <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                        <Eye className="h-5 w-5" />
                      </button>
                      {userType === "government" &&
                        !order.rated &&
                        order.status === "completed" && (
                          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600 hover:bg-green-100">
                            <Star className="h-5 w-5" />
                          </button>
                        )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-base text-gray-500">
          Showing {(userType === "farmer" ? orders : purchases).length} orders
        </div>
      </div>
    );
  };

  // Password change modal
  const renderPasswordModal = () => {
    if (!showPasswordModal) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium text-gray-900">
              Change Password
            </h3>
            <button
              onClick={() => setShowPasswordModal(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handlePasswordChange}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="current-password"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="new-password"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm p-3 text-base focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                className="px-5 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 w-full"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Help modal
  const renderHelpModal = () => {
    if (!showHelpModal) return null;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="xl:hidden h-16"></div>

      <div className="-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
          {/* Mobile menu button */}
          <button
            className="mt-4 sm:hidden flex items-center justify-between w-full px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="font-medium text-gray-700">
              {activeTab === "profile"
                ? "Profile Information"
                : activeTab === "products"
                ? "My Products"
                : activeTab === "orders"
                ? "Order History"
                : "Ratings"}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                mobileMenuOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <button
              onClick={() => {
                setActiveTab("profile");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center w-full px-6 py-4 text-left ${
                activeTab === "profile"
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700"
              }`}
            >
              <User className="h-5 w-5 mr-3" />
              <span className="text-base font-medium">Profile Information</span>
            </button>

            {userType === "farmer" && (
              <button
                onClick={() => {
                  setActiveTab("products");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-6 py-4 text-left ${
                  activeTab === "products"
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700"
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                <span className="text-base font-medium">My Products</span>
              </button>
            )}

            <button
              onClick={() => {
                setActiveTab("orders");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center w-full px-6 py-4 text-left ${
                activeTab === "orders"
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700"
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-3" />
              <span className="text-base font-medium">
                {userType === "farmer" ? "Order History" : "Purchase History"}
              </span>
            </button>

            {userType === "government" && (
              <button
                onClick={() => {
                  setActiveTab("ratings");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-6 py-4 text-left ${
                  activeTab === "ratings"
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700"
                }`}
              >
                <Star className="h-5 w-5 mr-3" />
                <span className="text-base font-medium">Ratings Given</span>
              </button>
            )}
          </div>
        )}

        {/* Desktop tabs */}
        <div className="hidden sm:block bg-white shadow-sm rounded-xl border border-gray-100 mb-6 overflow-hidden">
          <div className="flex">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center py-4 px-6 text-center border-b-2 font-medium text-base flex-1 justify-center ${
                activeTab === "profile"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </button>

            {userType === "farmer" && (
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center py-4 px-6 text-center border-b-2 font-medium text-base flex-1 justify-center ${
                  activeTab === "products"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Package className="h-5 w-5 mr-2" />
                My Products
              </button>
            )}

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center py-4 px-6 text-center border-b-2 font-medium text-base flex-1 justify-center ${
                activeTab === "orders"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {userType === "farmer" ? "Order History" : "Purchase History"}
            </button>

            {userType === "government" && (
              <button
                onClick={() => setActiveTab("ratings")}
                className={`flex items-center py-4 px-6 text-center border-b-2 font-medium text-base flex-1 ${
                  activeTab === "ratings"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Star className="h-5 w-5 mr-2" />
                Ratings Given
              </button>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {activeTab === "profile" &&
            (userType === "farmer" ? renderFarmerProfile() : null)}
          {activeTab === "products" &&
            userType === "farmer" &&
            renderFarmerProducts()}
          {activeTab === "orders" && renderOrderHistory()}
        </div>
      </div>

      {/* Fixed help button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowHelpModal(true)}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Help"
        >
          <HelpCircle className="h-7 w-7 text-white" />
        </button>
      </div>

      {renderPasswordModal()}
      {renderHelpModal()}
    </div>
  );
};

export default FarmerProfileSettings;
