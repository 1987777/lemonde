import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Sustainability Consulting", href: "/sustainability" },
      { name: "Software Solutions", href: "/software-solutions" },
      { name: "Accountancy & Financial Advisory", href: "/accountancy" },
    ],
  },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white sticky top-0 z-50 w-full border-b border-gray-100 shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-orange-500" />
              Wawa Street, Kokomlemle, Accra
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-orange-500" />
              +233 244 707 481
            </span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center hover:text-orange-400 transition-colors cursor-pointer">
              <Mail className="w-4 h-4 mr-2 text-orange-500" />
              info@lemondedigital.org
            </span>
          </div>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Le Monde Digital</span>
            <img
              className="h-10 w-auto object-contain"
              src="/OFFICIAL%20LOGO%20rectangle.png"
              alt="Le Monde Digital"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
             <div className="hidden font-bold text-2xl tracking-tight text-slate-900">
                LEMONDE<span className="text-orange-500">.</span>
             </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 transition-colors py-2">
                  {item.name}
                  <ChevronDown
                    className="h-4 w-4 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute -left-8 top-full z-10 w-64 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-semibold leading-6 hover:bg-slate-50 transition-colors ${
                           location.pathname === child.href ? 'text-orange-600 bg-orange-50/50' : 'text-gray-900'
                        }`}
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  isActive(item.href)
                    ? "text-orange-600"
                    : "text-gray-900 hover:text-orange-600"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all hover:-translate-y-0.5"
          >
            Talk to an Expert
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img
                  className="h-8 w-auto object-contain"
                  src="/OFFICIAL%20LOGO%20rectangle.png"
                  alt="Le Monde Digital"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                 <div className="hidden font-bold text-xl tracking-tight text-slate-900">
                    LEMONDE<span className="text-orange-500">.</span>
                 </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.children ? (
                      <div key={item.name} className="space-y-2">
                        <div className="font-semibold text-gray-500 text-sm uppercase tracking-wider pl-3 pb-2 pt-4">
                          {item.name}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`block rounded-lg py-2.5 pl-6 pr-3 text-base font-semibold leading-7 hover:bg-slate-50 transition-colors ${
                              location.pathname === child.href ? 'text-orange-600 bg-orange-50/50' : 'text-gray-900'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-slate-50 transition-colors ${
                          isActive(item.href) ? 'text-orange-600 bg-orange-50/50' : 'text-gray-900'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
