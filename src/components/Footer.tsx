import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
             <div className="flex items-center">
                 <img
                  className="h-10 w-auto object-contain bg-white p-1 rounded-sm"
                  src="/OFFICIAL%20LOGO%20rectangle.png"
                  alt="Le Monde Digital"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                 <div className="hidden font-bold text-2xl tracking-tight text-white">
                    LEMONDE<span className="text-orange-500">.</span>
                 </div>
              </div>
            <p className="text-sm leading-6 text-gray-300 max-w-sm">
              Le Monde Digital provides professional consulting services across sustainability reporting, accounting, financial management, software implementation and data-driven business decision support.
            </p>
            <div className="flex space-x-6">
               <img src="/ISSB-Training-Partner-Logo-JPG.jpg" alt="ISSB Training Partner" className="h-12 bg-white rounded-sm object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
               <img src="/IFRS%20LOGO.png" alt="IFRS Sustainability" className="h-12 bg-white rounded-sm object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
               <img src="/sage-partner-logo.png" alt="Sage Partner" className="h-12 bg-white rounded-sm object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div className="flex space-x-6 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/insights" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Insights</Link></li>
                  <li><Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link to="/sustainability" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Sustainability Consulting</Link></li>
                  <li><Link to="/sustainability" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">ISSB Training</Link></li>
                  <li><Link to="/sustainability" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Reporting and Assurance</Link></li>
                  <li><Link to="/software-solutions" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Accounting & Payroll Software</Link></li>
                  <li><Link to="/accountancy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Accountancy Services</Link></li>
                  <li><Link to="/accountancy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Financial Planning & Analysis</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Contact Information</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                    <span>Wawa Street, Digitronix Plaza<br />Kokomlemle, Accra, Ghana</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                    <span>+233 244 707 481</span>
                  </li>
                  <li className="flex gap-x-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                    <span>info@lemondedigital.org</span>
                  </li>
                  <li className="text-sm leading-6 text-gray-300 pt-2 border-t border-gray-800">
                    <strong>Business Hours:</strong><br/>
                    Monday – Friday, 8:00 AM – 5:00 PM GMT
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Le Monde Digital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
