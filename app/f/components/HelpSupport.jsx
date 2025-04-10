"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  FileText,
  ShoppingCart,
  HelpCircle,
  ExternalLink,
  Check,
  ArrowRight,
} from "lucide-react";

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("faqs");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedGuide, setExpandedGuide] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I register as a farmer on the platform?",
      answer:
        "To register as a farmer, click on the 'Sign Up' button on the homepage, select 'Farmer Account', and complete the registration form with your personal and farm details. You'll need to provide valid ID, farm location, and product information. Once submitted, your application will be reviewed within 2-3 business days.",
      category: "registration",
    },
    {
      id: 2,
      question: "What documents do I need to register as a government buyer?",
      answer:
        "Government buyers need to provide: 1) Official government email address, 2) Department/agency ID, 3) Authorization letter from the department head, and 4) Procurement officer certification if applicable. All documents should be uploaded during the registration process.",
      category: "registration",
    },
    {
      id: 3,
      question: "How are payments processed on the platform?",
      answer:
        "Payments are processed through our secure payment gateway. Government buyers can use their authorized procurement cards or direct bank transfers. Farmers receive payments directly to their registered bank accounts within 3-5 business days after delivery confirmation. All transactions are recorded and receipts are automatically generated.",
      category: "payments",
    },
    {
      id: 4,
      question: "What happens if there's an issue with my product delivery?",
      answer:
        "If there's an issue with delivery, both parties should document the problem with photos. The buyer should report the issue through the 'Report Problem' button on the order page within 24 hours. Our support team will investigate and mediate a resolution. For perishable goods, we have an expedited resolution process.",
      category: "delivery",
    },
    {
      id: 5,
      question: "How do I update my product listings and prices?",
      answer:
        "To update product listings, log in to your farmer dashboard, go to 'My Products', select the item you want to update, and click 'Edit'. You can modify prices, quantities, descriptions, and photos. Price changes take effect immediately, but are subject to review for existing orders.",
      category: "products",
    },
    {
      id: 6,
      question: "Can I cancel an order after it's been placed?",
      answer:
        "Order cancellation policies differ based on the stage of the order. Buyers can cancel within 12 hours of placing the order without penalty. After that, cancellations may incur a fee based on the order value. Farmers can only cancel in exceptional circumstances and must contact support immediately.",
      category: "orders",
    },
    {
      id: 7,
      question:
        "How does the Sagip Saka Act affect transactions on this platform?",
      answer:
        "The Sagip Saka Act (Republic Act 11321) provides tax incentives for direct purchases from farmers. Transactions on our platform are compliant with this law, ensuring government buyers receive the applicable tax benefits. The platform automatically generates the necessary documentation for tax reporting purposes.",
      category: "policy",
    },
    {
      id: 8,
      question: "What support is available for technical issues?",
      answer:
        "For technical issues, we offer 24/7 support through chat, email, and phone during business hours (8AM-5PM, Monday-Friday). For urgent matters, use the emergency support line. Our technical team typically responds within 1 hour during business hours and within 4 hours outside business hours.",
      category: "support",
    },
  ];

  // Farmer guides
  const farmerGuides = [
    {
      id: 1,
      title: "Creating Your Product Listings",
      description:
        "Learn how to create effective product listings that attract government buyers",
      steps: [
        "Log in to your farmer dashboard",
        "Navigate to 'My Products' and click 'Add New Product'",
        "Fill in all required fields (name, category, quantity, price, etc.)",
        "Upload high-quality photos of your products (at least 3 recommended)",
        "Add detailed description including growing methods and harvest dates",
        "Set your available quantity and pricing",
        "Review and publish your listing",
      ],
      tips: [
        "Use clear, well-lit photos that accurately represent your products",
        "Be specific about product varieties and qualities",
        "Update your inventory regularly to maintain accuracy",
        "Respond promptly to inquiries about your products",
      ],
      icon: FileText,
    },
    {
      id: 2,
      title: "Managing Orders and Deliveries",
      description:
        "Step-by-step guide to handling orders from acceptance to delivery",
      steps: [
        "Review new orders in your 'Orders' dashboard",
        "Accept or request modifications within 24 hours",
        "Prepare products according to order specifications",
        "Package products securely with proper labeling",
        "Coordinate with the platform's logistics partners",
        "Track delivery status through the dashboard",
        "Confirm successful delivery and payment receipt",
      ],
      tips: [
        "Always double-check order quantities before confirming",
        "Use appropriate packaging for different product types",
        "Keep communication lines open with buyers during delivery",
        "Document the condition of products before shipping",
      ],
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: "Best Practices for Successful Sales",
      description:
        "Tips and strategies to maximize your success on the platform",
      steps: [
        "Maintain consistent product quality and accurate descriptions",
        "Price your products competitively based on market rates",
        "Build your profile with complete farm information and certifications",
        "Respond to inquiries and orders promptly (within 12 hours)",
        "Seek and respond to feedback from buyers",
        "Participate in seasonal promotions and featured farmer programs",
        "Regularly update your product catalog with new offerings",
      ],
      tips: [
        "Quality and reliability are key factors for government procurement",
        "Consider offering volume discounts for large orders",
        "Highlight any special farming practices or certifications",
        "Build relationships with repeat buyers through consistent service",
      ],
      icon: Check,
    },
  ];

  // Buyer guides
  const buyerGuides = [
    {
      id: 1,
      title: "Government Procurement Process",
      description:
        "Understanding the streamlined procurement process through our platform",
      steps: [
        "Log in to your government buyer account",
        "Browse available products or search for specific items",
        "Add products to your procurement cart",
        "Review selections and quantities",
        "Generate a procurement request with appropriate approvals",
        "Submit the order with delivery specifications",
        "Track order status through your dashboard",
        "Confirm receipt and quality of delivered products",
      ],
      tips: [
        "Plan procurements in advance to ensure availability",
        "Check farmer ratings and reviews before placing large orders",
        "Use the comparison tool to evaluate different offerings",
        "Save frequently ordered items as templates for future use",
      ],
      icon: FileText,
    },
    {
      id: 2,
      title: "Payment Instructions and Documentation",
      description: "Guide to payment processes and required documentation",
      steps: [
        "Review the invoice generated after order confirmation",
        "Process payment through your authorized government payment method",
        "Download and save payment receipts and transaction records",
        "Complete the delivery confirmation process",
        "File appropriate documentation for Sagip Saka Act compliance",
        "Generate procurement reports for auditing purposes",
        "Maintain digital copies of all transaction documents",
      ],
      tips: [
        "Set up payment templates for recurring suppliers",
        "Understand the documentation required for tax incentives",
        "Keep detailed records of all transactions for audit purposes",
        "Use the platform's reporting tools for budget tracking",
      ],
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: "Maximizing Value in Government Procurement",
      description:
        "Strategies for effective and efficient agricultural procurement",
      steps: [
        "Utilize the seasonal forecast tool for procurement planning",
        "Engage with multiple farmers to compare quality and pricing",
        "Consider bulk purchasing options for staple products",
        "Participate in direct farmer-buyer virtual meetings",
        "Provide constructive feedback to improve farmer offerings",
        "Use data analytics to optimize procurement decisions",
        "Implement regular quality assessment protocols",
      ],
      tips: [
        "Balance cost considerations with quality and reliability",
        "Build relationships with reliable farmers for consistent supply",
        "Consider the total value including delivery and quality guarantees",
        "Use the platform's tools to demonstrate Sagip Saka Act compliance",
      ],
      icon: Check,
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  // Toggle FAQ expansion
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Toggle guide expansion
  const toggleGuide = (id) => {
    setExpandedGuide(expandedGuide === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Help & Support Center
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Find answers to common questions, learn how to use the platform, or
          contact our support team for assistance.
        </p>
        <div className="mt-6 max-w-xl mx-auto relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for help topics..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        <button
          className={`px-4 py-2 font-medium text-sm mr-4 ${
            activeTab === "faqs"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("faqs")}
        >
          Frequently Asked Questions
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm mr-4 ${
            activeTab === "contact"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Support
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm mr-4 ${
            activeTab === "farmers"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("farmers")}
        >
          Guide for Farmers
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === "buyers"
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("buyers")}
        >
          Guide for Buyers
        </button>
      </div>

      {/* FAQs Tab */}
      {activeTab === "faqs" && (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10">
              <HelpCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 mb-4">
                No FAQs found matching your search criteria.
              </p>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="text-gray-500" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-500" size={20} />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-800 mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-green-700 mb-4">
              Our support team is ready to assist you with any questions or
              issues you may have.
            </p>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
              onClick={() => setActiveTab("contact")}
            >
              Contact Support <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      )}

      {/* Contact Support Tab */}
      {activeTab === "contact" && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Contact Our Support Team</h2>
          <p className="text-gray-600 mb-8">
            Our dedicated support team is available to assist you with any
            questions or issues you may encounter while using our platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Chat with our support team in real-time for immediate assistance
                with your questions.
              </p>
              <p className="text-sm text-gray-500 mb-2">Available Hours:</p>
              <p className="text-sm text-gray-500 mb-4">
                Monday-Friday: 8AM - 8PM
              </p>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send us an email with your questions or issues, and we'll
                respond within 24 hours.
              </p>
              <p className="text-sm text-gray-500 mb-2">Email Address:</p>
              <p className="text-sm text-gray-500 mb-4">
                support@sagipsaka.gov.ph
              </p>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Send Email
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Call our support hotline for direct assistance with urgent
                matters or complex issues.
              </p>
              <p className="text-sm text-gray-500 mb-2">Phone Number:</p>
              <p className="text-sm text-gray-500 mb-4">(02) 8888-1234</p>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Call Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-xl font-medium mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What is your message about?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Please describe your issue or question in detail"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Guide for Farmers Tab */}
      {activeTab === "farmers" && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Guide for Farmers</h2>
          <p className="text-gray-600 mb-8">
            Learn how to effectively use our platform to list your products,
            manage orders, and maximize your sales to government institutions.
          </p>

          <div className="space-y-6">
            {farmerGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="px-6 py-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleGuide(guide.id)}
                >
                  <div className="flex items-center">
                    <guide.icon className="text-green-600 mr-3" size={24} />
                    <div>
                      <h3 className="font-medium text-lg">{guide.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                  {expandedGuide === guide.id ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </div>
                {expandedGuide === guide.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Step-by-Step Guide:
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        {guide.steps.map((step, index) => (
                          <li key={index} className="text-gray-700">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Pro Tips:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {guide.tips.map((tip, index) => (
                          <li key={index} className="text-gray-700">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-800 mb-2">
              Need additional assistance?
            </h3>
            <p className="text-green-700 mb-4">
              Our farmer support specialists are available to provide
              personalized guidance for your specific needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center">
                Schedule a Training Session{" "}
                <ExternalLink size={16} className="ml-2" />
              </button>
              <button
                className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors flex items-center"
                onClick={() => setActiveTab("contact")}
              >
                Contact Farmer Support <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Guide for Buyers Tab */}
      {activeTab === "buyers" && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Guide for Government Buyers
          </h2>
          <p className="text-gray-600 mb-8">
            Learn how to navigate the procurement process, make payments, and
            maximize the value of your agricultural purchases through our
            platform.
          </p>

          <div className="space-y-6">
            {buyerGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="px-6 py-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleGuide(guide.id)}
                >
                  <div className="flex items-center">
                    <guide.icon className="text-green-600 mr-3" size={24} />
                    <div>
                      <h3 className="font-medium text-lg">{guide.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                  {expandedGuide === guide.id ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </div>
                {expandedGuide === guide.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Step-by-Step Guide:
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        {guide.steps.map((step, index) => (
                          <li key={index} className="text-gray-700">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Pro Tips:
                      </h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {guide.tips.map((tip, index) => (
                          <li key={index} className="text-gray-700">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-green-800 mb-2">
              Need specialized procurement assistance?
            </h3>
            <p className="text-green-700 mb-4">
              Our government procurement specialists can help you optimize your
              agricultural purchasing strategy and ensure compliance with all
              regulations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center">
                Request Procurement Consultation{" "}
                <ExternalLink size={16} className="ml-2" />
              </button>
              <button
                className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors flex items-center"
                onClick={() => setActiveTab("contact")}
              >
                Contact Buyer Support <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
