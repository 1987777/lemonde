import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get in touch with our experts to discuss how Le Monde Digital can support your organisation's financial, sustainability, and digital transformation goals.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Get in Touch</h2>
            
            <dl className="space-y-6 text-base leading-7 text-gray-600 mb-12">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-orange-500" aria-hidden="true" />
                </dt>
                <dd>
                  <strong>Le Monde Digital</strong><br />
                  Wawa Street, Digitronix Plaza<br />
                  Kokomlemle, Accra, Ghana
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-orange-500" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="tel:+233244707481">
                    +233 244 707 481
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-orange-500" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-slate-900" href="mailto:info@lemondedigital.org">
                    info@lemondedigital.org
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 border-t border-gray-100 pt-6">
                <dt className="flex-none text-slate-900 font-semibold">
                  Business Hours:
                </dt>
                <dd>
                  Monday – Friday: 8:00 AM – 5:00 PM GMT
                </dd>
              </div>
            </dl>

            <div className="rounded-2xl overflow-hidden bg-gray-100 h-80 ring-1 ring-gray-200">
               {/* Embed Map Placeholder - Since it's a specific address in Accra, we use an iframe */}
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.333857321685!2d-0.208151!3d5.584742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9c7c7c7c7c%3A0xc7c7c7c7c7c7c7c7!2sKokomlemle%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl ring-1 ring-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Send us a message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="organisation" className="block text-sm font-semibold leading-6 text-slate-900">
                    Organisation
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="organisation"
                      id="organisation"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900">
                    Email Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-900">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-semibold leading-6 text-slate-900">
                    Service Required
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="service"
                      name="service"
                      className="block w-full rounded-md border-0 px-3.5 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 bg-white"
                    >
                      <option>Select a service...</option>
                      <option>Sustainability Consulting</option>
                      <option>ISSB Disclosure Training</option>
                      <option>Sustainability Reporting</option>
                      <option>Sustainability Assurance</option>
                      <option>Accounting Software</option>
                      <option>Payroll Software</option>
                      <option>Accountancy Services</option>
                      <option>Financial Planning and Analysis</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-orange-600 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
