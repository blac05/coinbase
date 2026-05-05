import { Link } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

export default function Learn() {
  const learningTopics = [
    {
      id: 1,
      title: "What is Bitcoin?",
      description:
        "Learn about the world's first cryptocurrency and how it works.",
      icon: "₿",
    },
    {
      id: 2,
      title: "What is Crypto?",
      description:
        "Understand the basics of cryptocurrency and blockchain technology.",
      icon: "🔐",
    },
    {
      id: 3,
      title: "What is a Blockchain?",
      description: "Explore the technology behind cryptocurrencies.",
      icon: "⛓️",
    },
    {
      id: 4,
      title: "How to Set Up a Crypto Wallet?",
      description:
        "Step-by-step guide to creating and securing your crypto wallet.",
      icon: "👛",
    },
    {
      id: 5,
      title: "How to Send Crypto?",
      description: "Learn how to safely send and receive cryptocurrency.",
      icon: "📤",
    },
    {
      id: 6,
      title: "Crypto Taxes",
      description:
        "Understand tax implications of cryptocurrency transactions.",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Learn Crypto
            </h1>
            <p className="text-xl text-gray-600">
              Educational resources to help you understand cryptocurrency and
              blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {learningTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <Link
                  to="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Create your Coinbase account today and start your crypto journey
              with confidence.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
