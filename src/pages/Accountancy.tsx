import { Link } from "react-router-dom";
import { FileSpreadsheet, Calculator, Users, PieChart, LineChart } from "lucide-react";

export default function Accountancy() {
  const services = [
    {
      title: "Financial Statements Preparation",
      description: "Support organisations in preparing structured, IFRS-compliant, and reliable financial statements tailored for stakeholders, auditors, and regulatory bodies.",
      icon: FileSpreadsheet,
    },
    {
      title: "Tax Support",
      description: "Provide professional support relating to tax compliance, strategic planning, and navigating complex financial reporting requirements.",
      icon: Calculator,
    },
    {
      title: "Outsourced Payroll",
      description: "Support businesses with efficient, confidential, and reliable end-to-end payroll processing, ensuring statutory compliance and timely disbursements.",
      icon: Users,
    },
    {
      title: "Management Decision Support",
      description: "Use deep financial data, advanced analytics, and custom management reporting to provide actionable insights that support better operational decision-making.",
      icon: PieChart,
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">Accountancy & Financial Advisory</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional accounting, control improvement, and advanced financial planning services to transform your financial data into strategic business value.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <service.icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold leading-7 text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* FP&A Deep Dive */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <LineChart className="h-6 w-6 text-blue-600" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Financial Planning and Analysis (FP&A)</h2>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                Helping management teams look beyond historical data. We improve planning, forecasting, and overall business performance through rigorous financial analysis and scenario modelling.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all"
              >
                Discuss Your FP&A Needs
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Budgeting",
                "Forecasting",
                "Performance Analysis",
                "Variance Analysis",
                "Financial Modelling",
                "Cash Flow Analysis",
                "Scenario Analysis"
              ].map((item) => (
                <div key={item} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
