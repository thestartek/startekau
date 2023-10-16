export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <div>
        {/* Hero section */}
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to Startek AU
            </h1>
            <p className="text-xl mb-8">
              Only thing you&apos;ll ever need to get to Australia.
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-50"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Expectation section */}
        <section className="container bg-white mx-auto py-12 px-10 lg:min-h-[40vh]">
          <h2 className="text-2xl font-semibold mb-4">
            What To Expect From Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Expectation 1 */}
            <div className="transition-all ease-in-out p-4 bg-white rounded-lg shadow hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Expectation 1</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, a.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="transition-all ease-in-out p-4 bg-white rounded-lg shadow hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Expectation 2</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, quasi?
              </p>
            </div>

            {/* Feature 3 */}
            <div className="transition-all ease-in-out p-4 bg-white rounded-lg shadow hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Expectation 3</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                obcaecati.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
