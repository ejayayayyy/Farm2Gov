"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProfileSettings = ({ userType = "farmer" }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

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
    agencyLogo: "/images/da-logo.png",
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
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative h-48 rounded overflow- mb-16">
          <Image
            src={farmerProfile.coverImage || "/placeholder.svg"}
            alt="Farm cover"
            className="w-full h-full object-cover rounded-lg"
            width={800}
            height={200}
          />
          <div className="absolute bottom-0 transform translate-y-1/2 left-6">
            <div className="">
              <Image
                src={farmerProfile.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover z-50"
                width={128}
                height={128}
              />
              {farmerProfile.isVerified && (
                <div
                  className="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1"
                  title={`Verified on ${farmerProfile.verificationDate}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{farmerProfile.businessName}</h1>
            <p className="text-gray-600">{farmerProfile.name} - Owner</p>
            {farmerProfile.isVerified && (
              <div className="flex items-center mt-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm font-medium">Verified Seller</span>
              </div>
            )}
          </div>
          {!isEditing ? (
            <button
              onClick={handleEditProfile}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSaveProfile}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Save Changes
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Business Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600">Business Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={farmerProfile.businessName}
                    onChange={(e) => setFarmerProfile({ ...farmerProfile, businessName: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    rows={3}
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{farmerProfile.description}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={farmerProfile.email}
                    onChange={(e) => setFarmerProfile({ ...farmerProfile, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{farmerProfile.address}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Account Settings</h2>
          <div className="space-y-4">
            <button
              onClick={handleChangePassword}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>

            {!farmerProfile.isVerified && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Your account is pending verification. Please submit the required documents to get verified.
                    </p>
                    <button className="mt-2 text-sm font-medium text-yellow-700 hover:text-yellow-600">
                      Submit Verification Documents
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const renderGovProfile = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
          <div className="relative z-10">
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
                  className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSaveProfile}
                  className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Agency Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600">Agency Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={govProfile.agency}
                    onChange={(e) => setGovProfile({ ...govProfile, agency: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.officeAddress}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-600">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={govProfile.email}
                    onChange={(e) => setGovProfile({ ...govProfile, email: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    rows={3}
                  />
                ) : (
                  <p className="mt-1 text-gray-800">{govProfile.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Account Settings</h2>
          <div className="space-y-4">
            <button
              onClick={handleChangePassword}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderFarmerProducts = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">My Products</h2>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
            Add New Product
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Stock
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
              {products.map((product) => (
                <tr key={product.id}>
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
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    {product.status === "active" ? (
                      <button
                        className="text-yellow-600 hover:text-yellow-900 mr-3"
                        onClick={() => handleProductStatusChange(product.id, "draft")}
                      >
                        Unpublish
                      </button>
                    ) : product.status === "draft" ? (
                      <button
                        className="text-green-600 hover:text-green-900 mr-3"
                        onClick={() => handleProductStatusChange(product.id, "active")}
                      >
                        Publish
                      </button>
                    ) : null}
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderOrderHistory = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Order History</h2>

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
                  {userType === "farmer" ? "Buyer" : "Seller"}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Items
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
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
              {(userType === "farmer" ? orders : purchases).map((order) => (
                <tr key={order.id}>
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
                    <div className="text-sm text-gray-900">₱{order.total.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                    {userType === "government" && !order.rated && order.status === "completed" && (
                      <button className="ml-3 text-green-600 hover:text-green-900">Rate Order</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  const renderRatingsGiven = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Ratings Given</h2>

        {ratingsGiven.length > 0 ? (
          <div className="space-y-4">
            {ratingsGiven.map((rating) => (
              <div key={rating.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{rating.seller}</h3>
                    <p className="text-sm text-gray-500">Rated on {rating.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < rating.rating ? "text-yellow-400" : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{rating.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
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
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
            <button onClick={() => setShowPasswordModal(false)} className="text-gray-400 hover:text-gray-500">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowPasswordModal(false)}
                className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account information and preferences</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === "profile"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
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
                  Ratings Given
                </button>
              )}
            </nav>
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
};

export default ProfileSettings;
