import { CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  const values = [
    { name: "Integrity", description: "Upholding the highest professional and ethical standards in all our client engagements." },
    { name: "Professional Excellence", description: "Delivering exceptional quality, accuracy, and diligence in our consulting services." },
    { name: "Innovation", description: "Leveraging modern technology and digital solutions to solve complex business challenges." },
    { name: "Client Focus", description: "Putting our clients' needs first and designing solutions that add real, measurable value." },
    { name: "Collaboration", description: "Working closely with client teams to build capacity and ensure sustainable outcomes." },
    { name: "Continuous Improvement", description: "Constantly evolving our expertise to stay ahead of industry trends and reporting standards." },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover who we are, our approach to consulting, and the core values that drive our commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Who We Are</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
              Le Monde Digital is a professional consulting and digital solutions firm providing expertise across sustainability reporting, financial management, accounting, payroll systems and data-driven business decision support.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600 text-balance">
              We combine professional expertise with technology to help organisations improve reporting quality, operational efficiency, financial visibility and decision-making. Operating at the intersection of finance, sustainability, and digital transformation, we serve as a trusted partner for organisations in Ghana and across Africa.
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform opacity-10">
               <div className="h-64 w-64 rounded-full bg-orange-500 blur-3xl" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 relative z-10">Our Approach</h3>
            <p className="text-gray-600 mb-6 relative z-10">
              Le Monde Digital works collaboratively with clients to ensure solutions are practical, scalable, and deeply integrated into their operations:
            </p>
            <ul className="space-y-4 relative z-10">
              {[
                "Understand their business and operational environment",
                "Identify challenges and opportunities",
                "Design practical and scalable solutions",
                "Build internal capacity",
                "Support implementation",
                "Improve reporting and decision-making processes"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-slate-700">
                  <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wider">Our DNA</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
