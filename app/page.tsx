export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <div className="bg-gray-100">
        {/* Hero section */}
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Startek AU</h1>
            <p className="text-xl mb-8">Only thing you'll ever need to get to Australia.</p>
            <a
              href="/contact"
              className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-50"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Expectation section */}
        <section className="container mx-auto py-12 px-10">
          <h2 className="text-2xl font-semibold mb-4">What To Expect From Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Expectation 1 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Expectation 1</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, a.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Expectation 2</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quasi?
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Expectation 3</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, obcaecati.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
