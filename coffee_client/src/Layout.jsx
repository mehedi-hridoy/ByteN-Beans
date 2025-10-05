import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./assets/more/logo1.png";
import { useContext } from "react";
import AuthContext from "./components/context/AuthContext";
import Footer from "./Footer";

export default function Layout() {
  const { user, logout } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (mobileOpen) {
      closeBtnRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return (
    <div>
      <header className="w-full bg-[#fffaf6] shadow-sm">
        <div className="grid grid-16 items-center">
          <div className="content-12 mx-auto w-full">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3">
                <img src={logo} alt="logo" className="h-10 w-auto" />
                <span
                  className="text-[#2b2b2b] text-xl md:text-2xl"
                  style={{ fontFamily: "Rancho, cursive" }}
                >
                  Byte & Beans
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-[#2b2b2b] hover:underline">
                  Home
                </Link>
                <Link to="/shop" className="text-[#2b2b2b] hover:underline">
                  Shop
                </Link>
                {user && (
                  <Link to="/admin" className="text-[#2b2b2b] hover:underline">
                    Dashboard
                  </Link>
                )}
                <Link to="/about" className="text-[#2b2b2b] hover:underline">
                  About Us
                </Link>
              </nav>

              <div className="hidden md:flex items-center gap-4">
                {user ? (
                  <>
                    <span className="text-[#2b2b2b] hidden sm:inline">
                      {user.displayName || user.email}
                    </span>
                    <button
                      onClick={logout}
                      className="ml-2 bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded shadow"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="ml-2 bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded shadow"
                  >
                    Login
                  </Link>
                )}
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                  className="p-2"
                >
                  <svg
                    className="w-6 h-6 text-[#2b2b2b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {mobileOpen && (
              <div
                className="fixed inset-0 z-50 md:hidden"
                role="dialog"
                aria-modal="true"
              >
                <div
                  className="absolute inset-0 bg-black bg-opacity-40"
                  onClick={() => setMobileOpen(false)}
                />

                <aside className="absolute top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50">
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={logo} alt="logo" className="h-8 w-auto" />
                      <span
                        className="text-[#2b2b2b] text-lg"
                        style={{ fontFamily: "Rancho, cursive" }}
                      >
                        Espresso
                      </span>
                    </div>
                    <button
                      ref={closeBtnRef}
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                      className="p-2 text-xl leading-none"
                    >
                      ✕
                    </button>
                  </div>

                  <nav className="p-4 flex flex-col gap-3">
                    <Link
                      to="/"
                      className="text-[#2b2b2b]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to="/shop"
                      className="text-[#2b2b2b]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Shop
                    </Link>
                    {user && (
                      <Link
                        to="/admin"
                        className="text-[#2b2b2b]"
                        onClick={() => setMobileOpen(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                    <Link
                      to="/about"
                      className="text-[#2b2b2b]"
                      onClick={() => setMobileOpen(false)}
                    >
                      About Us
                    </Link>
                  </nav>

                  <div className="p-4 border-t">
                    {user ? (
                      <button
                        onClick={() => {
                          logout();
                          setMobileOpen(false);
                        }}
                        className="w-full bg-[#d4b48a] px-3 py-2 rounded"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        to="/login"
                        className="w-full inline-block text-center bg-[#d4b48a] px-3 py-2 rounded"
                        onClick={() => setMobileOpen(false)}
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </aside>
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
