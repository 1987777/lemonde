import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Monitor, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 transform sm:translate-x-1/2 lg:translate-x-1/3">
             <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-orange-500 to-orange-300 opacity-20 blur-3xl" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 transform sm:-translate-x-1/2 lg:-translate-x-1/3">
             <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 blur-3xl" />
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              Empowering Organisations Through Sustainability Reporting, Financial Visibility and Digital Transformation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-balance">
              Le Monde Digital provides professional consulting, training and technology solutions that help organisations strengthen financial management, sustainability reporting, internal processes and data-driven decision-making.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/sustainability"
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all hover:-translate-y-0.5"
              >
                Explore Our Services
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-white group flex items-center">
                Talk to an Expert <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wider">Our Expertise</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Professional Advisory & Digital Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine professional expertise with leading technology to solve complex challenges and drive sustainable growth.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              
              {/* Sustainability Consulting */}
              <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-600 transition-colors">
                  <Leaf className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-slate-900 mb-4">Sustainability Consulting</h3>
                <p className="text-sm leading-6 text-gray-600 flex-grow mb-6">
                  Helping organisations understand, implement and respond to evolving sustainability reporting requirements.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8 flex-grow">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> ISSB Standards Disclosure Training</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Sustainability Reporting</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Sustainability Assurance</li>
                </ul>
                <Link to="/sustainability" className="text-sm font-semibold leading-6 text-orange-600 flex items-center mt-auto group/link">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Software Solutions */}
              <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-slate-900 transition-colors">
                  <Monitor className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-slate-900 mb-4">Accounting & Payroll Software</h3>
                <p className="text-sm leading-6 text-gray-600 flex-grow mb-6">
                  Providing implementation, training and ongoing support for accounting, ERP and payroll systems.
                </p>
                <div className="text-sm font-medium text-slate-900 mb-2">Supported Systems:</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Sage 300 ERP</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Sage 300 People</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Sage 50</span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Manager Accounting</span>
                </div>
                <Link to="/software-solutions" className="text-sm font-semibold leading-6 text-orange-600 flex items-center mt-auto group/link">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Accountancy */}
              <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 group-hover:bg-orange-600 transition-colors">
                  <BarChart3 className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-slate-900 mb-4">Accountancy & Business Support</h3>
                <p className="text-sm leading-6 text-gray-600 flex-grow mb-6">
                  Professional accounting services to support reliable financial information and operational decision-making.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8 flex-grow">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Financial Statements</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Tax Support & Outsourced Payroll</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Process & Controls Improvement</li>
                </ul>
                <Link to="/accountancy" className="text-sm font-semibold leading-6 text-orange-600 flex items-center mt-auto group/link">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* FP&A */}
              <div className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-slate-900 transition-colors">
                  <TrendingUp className="h-6 w-6 text-slate-900 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-7 text-slate-900 mb-4">Financial Planning & Analysis</h3>
                <p className="text-sm leading-6 text-gray-600 flex-grow mb-6">
                  Helping management teams improve planning, forecasting and business performance through data-driven insights.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8 flex-grow">
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Budgeting & Forecasting</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Financial Modelling</li>
                  <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0"/> Management Dashboards</li>
                </ul>
                <Link to="/accountancy" className="text-sm font-semibold leading-6 text-orange-600 flex items-center mt-auto group/link">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 relative isolate overflow-hidden">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Partner with Le Monde Digital to build capacity, streamline operations, and drive sustainable growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all hover:-translate-y-0.5"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
