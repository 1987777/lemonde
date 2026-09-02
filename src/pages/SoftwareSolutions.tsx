import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function SoftwareSolutions() {
  const solutions = [
    {
      name: "Sage 300",
      description: "A robust, comprehensive ERP solution designed for organisations requiring advanced financial and operational management across multiple entities or locations.",
      features: ["Implementation", "Configuration", "Training", "Support", "Reporting", "Process Improvement"]
    },
    {
      name: "Sage 300 People",
      description: "An agile, cost-effective payroll and human capital management (HCM) solution providing deep insights into your workforce.",
      features: ["Implementation", "Configuration", "Training", "Support", "Reporting", "Process Improvement"]
    },
    {
      name: "Sage 50",
      description: "Powerful accounting software suitable for small and growing businesses, offering intuitive financial tracking and reliable desktop performance.",
      features: ["Implementation", "Configuration", "Training", "Support", "Reporting", "Process Improvement"]
    },
    {
      name: "Manager Accounting",
      description: "Flexible accounting software supporting efficient financial record-keeping, multi-currency operations, and comprehensive reporting.",
      features: ["Implementation", "Configuration", "Training", "Support", "Reporting", "Process Improvement"]
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Software Solutions</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              End-to-end implementation, training, and ongoing support for industry-leading accounting, ERP, and payroll systems.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {solutions.map((solution) => (
            <div key={solution.name} className="flex flex-col bg-white rounded-3xl ring-1 ring-gray-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">{solution.name}</h2>
              <p className="mt-4 text-base leading-7 text-gray-600 flex-grow">
                {solution.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider mb-4">Our Services Include:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-3 text-sm leading-6 text-gray-700">
                      <Check className="h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-orange-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all"
          >
            Talk to a Software Consultant
          </Link>
        </div>
      </div>
    </div>
  );
}
