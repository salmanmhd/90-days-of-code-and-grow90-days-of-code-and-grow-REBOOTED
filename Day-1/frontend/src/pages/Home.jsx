function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gray-800 px-6 py-16">
        <div className="container mx-auto flex min-h-[500px] flex-col items-center justify-center text-center md:min-h-[600px]">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            Simplify Your Payments
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-gray-300">
            Send and receive money securely and instantly with Paytm. Join
            millions of users and experience seamless transactions.
          </p>
          <button className="rounded-full bg-[#0CBA74] px-8 py-3 font-semibold text-gray-900 transition-all hover:scale-105 hover:bg-[#0aa360]">
            Get Started
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-900 px-8 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="mb-4 text-3xl font-bold text-gray-200">
            Why Choose Paytm?
          </h3>
          <p className="mb-8 text-gray-400">
            Paytm provides fast, reliable, and secure digital payment services
            for individuals and businesses. Manage your money, pay bills, and
            send money seamlessly.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6 shadow-md transition-transform hover:scale-105">
              <h4 className="mb-2 text-xl font-semibold text-[#e0ca3c]">
                Instant Payments
              </h4>
              <p className="text-gray-400">
                Send and receive money instantly with a single click.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 shadow-md transition-transform hover:scale-105">
              <h4 className="mb-2 text-xl font-semibold text-[#e0ca3c]">
                Secure Transactions
              </h4>
              <p className="text-gray-400">
                Your security is our priority. We keep your data safe and
                encrypted.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6 shadow-md transition-transform hover:scale-105">
              <h4 className="mb-2 text-xl font-semibold text-[#e0ca3c]">
                24/7 Support
              </h4>
              <p className="text-gray-400">
                Get help whenever you need it with our dedicated support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
