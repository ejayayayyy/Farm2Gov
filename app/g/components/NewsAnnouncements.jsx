"use client"

import { useState } from "react"
import {
  Search,
  Calendar,
  Filter,
  ChevronRight,
  Bell,
  BookOpen,
  TrendingUp,
  DollarSign,
  FileText,
  Mail,
} from "lucide-react"

export default function NewsAnnouncements() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [subscribeEmail, setSubscribeEmail] = useState("")
  const [activeTab, setActiveTab] = useState("latest")

  const categories = [
    { id: "all", name: "All News" },
    { id: "policies", name: "Policy Updates" },
    { id: "practices", name: "Agricultural Practices" },
    { id: "funding", name: "Funding & Loans" },
  ]

  const featuredNews = {
    title: "Sagip Saka Act Implementation Phase 2 Begins Next Month",
    date: "May 15, 2025",
    image: "/images/agriculture-policy-discussion.png",
    category: "Policy Updates",
    description:
      "The Department of Agriculture announces the second phase of the Sagip Saka Act implementation, focusing on direct farmer-to-government procurement channels and simplified registration processes.",
    readTime: "5 min read",
  }

  const newsItems = [
    {
      id: 1,
      title: "New Procurement Guidelines for Local Government Units",
      date: "May 10, 2025",
      image: "/images/procurement-discussion.png",
      category: "Policy Updates",
      description:
        "Updated guidelines for LGUs to streamline agricultural procurement from local farmers, reducing bureaucratic processes.",
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "Amendments to Republic Act 11321 (Sagip Saka Act)",
      date: "May 8, 2025",
      image: "/images/philippine-congress-plenary.png",
      category: "Policy Updates",
      description: "Congress approves amendments to strengthen direct farmer-to-government procurement channels.",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Sustainable Farming Techniques for Tropical Climate",
      date: "May 5, 2025",
      image: "/images/lush-philippine-farm.png",
      category: "Agricultural Practices",
      description: "Learn about innovative farming techniques designed specifically for the Philippine climate.",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Market Trends: Rising Demand for Organic Produce",
      date: "May 3, 2025",
      image: "/images/vibrant-organic-display.png",
      category: "Agricultural Practices",
      description: "Analysis of the growing market for certified organic produce in government institutions.",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "New ₱500M Funding Program for Small-Scale Farmers",
      date: "April 30, 2025",
      image: "/images/bayanihan-harvest.jpg",
      category: "Funding & Loans",
      description: "The Department of Agriculture launches new funding program with simplified application process.",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Low-Interest Loans for Farm Equipment Modernization",
      date: "April 28, 2025",
      image: "/images/modern-harvest.jpg",
      category: "Funding & Loans",
      description:
        "Land Bank of the Philippines announces special loan packages for farmers upgrading to modern equipment.",
      readTime: "3 min read",
    },
  ]

  const filteredNews =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((item) =>
          item.category
            .toLowerCase()
            .includes(
              activeCategory === "policies" ? "policy" : activeCategory === "practices" ? "agricultural" : "funding",
            ),
        )

  const searchedNews = searchQuery
    ? filteredNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredNews

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News & Announcements</h1>
          <p className="text-gray-600 mt-2">Stay updated with the latest agricultural policies and opportunities</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search news..."
              className="pl-10 w-full md:w-64 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="ml-2 px-4 py-2 rounded-md border border-gray-300 flex items-center text-sm font-medium hover:bg-gray-50"
            onClick={() => {}}
          >
            <Filter size={18} className="mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Featured News */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-80"
              src={featuredNews.image || "/placeholder.svg"}
              alt={featuredNews.title}
            />
          </div>
          <div className="p-8">
            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 mr-2 mb-2">
              Featured
            </span>
            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-2">
              {featuredNews.category}
            </span>
            <div className="flex items-center text-sm text-gray-500 mt-2 mb-3">
              <Calendar size={14} className="mr-1" />
              <span>{featuredNews.date}</span>
              <span className="mx-2">•</span>
              <BookOpen size={14} className="mr-1" />
              <span>{featuredNews.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{featuredNews.title}</h2>
            <p className="text-gray-600 mb-4">{featuredNews.description}</p>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center text-sm font-medium">
              Read Full Article <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* News Categories */}
      <div className="mb-8">
        <div className="flex overflow-x-auto pb-2 space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md whitespace-nowrap text-sm font-medium ${
                activeCategory === category.id
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* News Sections */}
      <div className="mb-10">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "latest"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("latest")}
          >
            Latest Updates
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "policies"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("policies")}
          >
            Policy Updates
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "practices"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("practices")}
          >
            Best Practices
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "funding"
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("funding")}
          >
            Funding & Loans
          </button>
        </div>

        {/* Latest Updates Tab */}
        {activeTab === "latest" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                          news.category.includes("Policy")
                            ? "bg-blue-100 text-blue-800"
                            : news.category.includes("Agricultural")
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {news.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{news.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500 flex items-center">
                        <BookOpen size={14} className="mr-1" />
                        <span>{news.readTime}</span>
                      </div>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                        Read more <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {searchedNews.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">No news found matching your search criteria.</p>
                <button
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}

            {searchedNews.length > 0 && (
              <div className="flex justify-center mt-8">
                <button className="mx-1 px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                <button className="mx-1 px-3 py-1 border border-gray-300 rounded-md text-sm bg-green-50">1</button>
                <button className="mx-1 px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
                <button className="mx-1 px-3 py-1 border border-gray-300 rounded-md text-sm">3</button>
                <button className="mx-1 px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
              </div>
            )}
          </div>
        )}

        {/* Policy Updates Tab */}
        {activeTab === "policies" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              <FileText className="mr-2 text-green-600" />
              Sagip Saka Act & Government Procurement Policies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter((item) => item.category === "Policy Updates")
                .map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 w-1/3">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={14} className="mr-1" />
                          <span>{news.date}</span>
                        </div>
                        <h4 className="font-bold mb-2">{news.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{news.description}</p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                          Read more <ChevronRight size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Agricultural Practices Tab */}
        {activeTab === "practices" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              <TrendingUp className="mr-2 text-green-600" />
              Agricultural Best Practices & Market Trends
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter((item) => item.category === "Agricultural Practices")
                .map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 w-1/3">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={14} className="mr-1" />
                          <span>{news.date}</span>
                        </div>
                        <h4 className="font-bold mb-2">{news.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{news.description}</p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                          Read more <ChevronRight size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Funding & Loans Tab */}
        {activeTab === "funding" && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center">
              <DollarSign className="mr-2 text-green-600" />
              Government Funding & Loan Assistance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter((item) => item.category === "Funding & Loans")
                .map((news) => (
                  <div
                    key={news.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 w-1/3">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar size={14} className="mr-1" />
                          <span>{news.date}</span>
                        </div>
                        <h4 className="font-bold mb-2">{news.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{news.description}</p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                          Read more <ChevronRight size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-green-50 rounded-xl p-8 mb-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center text-green-800">
              <Bell className="mr-2" />
              Stay Updated with Agricultural News
            </h3>
            <p className="text-green-700 mt-2">
              Subscribe to our newsletter to receive the latest updates on agricultural policies, market trends, and
              funding opportunities directly to your inbox.
            </p>
          </div>
          <div className="md:w-1/3">
            <div className="flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 w-full h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                />
              </div>
              <button className="ml-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-green-700 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="pb-2">
              <h4 className="text-lg font-medium flex items-center">
                <FileText className="mr-2 text-green-600" size={18} />
                Policy Archives
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Access all historical policy documents and amendments</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="pb-2">
              <h4 className="text-lg font-medium flex items-center">
                <Calendar className="mr-2 text-green-600" size={18} />
                Upcoming Events
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Calendar of agricultural conferences and training sessions</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="pb-2">
              <h4 className="text-lg font-medium flex items-center">
                <DollarSign className="mr-2 text-green-600" size={18} />
                Funding Application Forms
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Download all necessary forms for funding applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
