import { useLoaderData, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/more/logo1.png";
import hero from "./assets/more/6.jpeg";
import cups from "./assets/cups/Rectangle 9.png";
import g9 from "./assets/cups/Rectangle 9.png";
import g10 from "./assets/cups/Rectangle 10.png";
import g11 from "./assets/cups/Rectangle 11.png";
import g12 from "./assets/cups/Rectangle 12.png";
import g13 from "./assets/cups/Rectangle 13.png";
import g14 from "./assets/cups/Rectangle 14.png";
import g15 from "./assets/cups/Rectangle 15.png";
import g16 from "./assets/cups/Rectangle 16.png";
import icon1 from './assets/icons/1.png';
import icon2 from './assets/icons/2.png';
import icon3 from './assets/icons/3.png';
import icon4 from './assets/icons/4.png';
import fallbackImg from './assets/more/1.png';

function App() {
  const coffees = useLoaderData() || [];

  return (
    <div className="min-h-screen relative">
      <header className="w-full bg-[#4a1f1f] bg-opacity-90 shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
          <div className="w-1/4" />

          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <span
              className="text-white text-2xl md:text-3xl"
              style={{ fontFamily: "Rancho, cursive" }}
            >
              Byte & Beans
            </span>
          </div>

          <nav className="w-1/4 flex justify-end items-center gap-4">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/shop" className="text-white hover:underline">
              Shop
            </Link>
            <Link to="/about" className="text-white hover:underline">
              About Us
            </Link>
            <Link
              to="/login"
              className="ml-4 bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded shadow"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative">
        <div className="h-[72vh] md:h-[80vh] bg-black">
          <div className="absolute inset-0 bg-black opacity-40" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${hero})`,
              backgroundBlendMode: "overlay",
            }}
          />

          <div className="relative max-w-6xl mx-auto h-full flex items-center px-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6">
                <img
                  src={cups}
                  alt="cups"
                  className="hidden md:block object-cover rounded shadow-lg translate-x-6"
                />
              </div>

              <div className="md:col-span-6 text-right text-white pr-4">
                <h1
                  className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="mt-4 text-sm md:text-base text-gray-200 max-w-lg mx-auto md:mx-0">
                  It's coffee time - Sip & Savor - Relaxation in every sip! Get
                  the nostalgia back!! Your companion of every moment!!! Enjoy
                  the beautiful moments and make them memorable.
                </p>
                <div className="mt-6 flex justify-end">
                  <button className="bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded font-medium shadow">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="grid-16">
          <div className="content-12">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">Follow Us Now</p>
              <h3
                className="text-3xl"
                style={{ fontFamily: "Rancho, cursive", color: "#3b1f1f" }}
              >
                Follow on Instagram
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[g9, g10, g11, g12, g13, g14, g15, g16].map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={img}
                    alt={`gallery-${idx}`}
                    className="w-full h-56 md:h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--page-bg)]">
        <div className="grid-16">
          <div className="content-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-center p-6">
                <img
                  src={icon1}
                  alt="aroma"
                  className="mx-auto h-12 w-12"
                />
                <h3
                  className="mt-4 text-xl"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Awesome Aroma
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  You will definitely be a fan of the design & aroma of your
                  coffee
                </p>
              </div>

              <div className="text-center p-6">
                <img
                  src={icon2}
                  alt="quality"
                  className="mx-auto h-12 w-12"
                />
                <h3
                  className="mt-4 text-xl"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  High Quality
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We served the coffee to you maintaining the best quality
                </p>
              </div>

              <div className="text-center p-6">
                <img
                  src={icon3}
                  alt="pure"
                  className="mx-auto h-12 w-12"
                />
                <h3
                  className="mt-4 text-xl"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Pure Grades
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  The coffee is made of the green coffee beans which you will
                  love
                </p>
              </div>

              <div className="text-center p-6">
                <img
                  src={icon4}
                  alt="roast"
                  className="mx-auto h-12 w-12"
                />
                <h3
                  className="mt-4 text-xl"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Proper Roasting
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Your coffee is brewed by first roasting the green coffee beans
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular products section */}
      <section className="py-12">
        <div className="grid-16">
          <div className="content-12">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">--- Sip & Savor ---</p>
              <h2
                className="text-3xl md:text-4xl"
                style={{ fontFamily: "Rancho, cursive", color: "#3b1f1f" }}
              >
                Our Popular Products
              </h2>
              <div className="mt-4">
                <a
                  href="/add"
                  className="inline-flex items-center gap-2 bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded shadow"
                >
                  Add Coffee
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.isArray(coffees) &&
                coffees.map((coffee) => (
                  <div
                    key={coffee._id || coffee.name}
                    className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-6"
                  >
                    <div className="w-1/3">
                      <img
                        src={coffee.photo || fallbackImg}
                        alt={coffee.name}
                        className="w-full h-40 object-contain"
                      />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Name:</span>{" "}
                          <span className="text-gray-600">{coffee.name}</span>
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                          <span className="font-semibold">Supplier:</span>{" "}
                          <span className="text-gray-600">
                            {coffee.supplier || "—"}
                          </span>
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                          <span className="font-semibold">Quantity:</span>{" "}
                          <span className="text-gray-600">
                            {coffee.quantity || "—"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-3">
                        <button className="bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
