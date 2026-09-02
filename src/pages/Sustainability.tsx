import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ShieldCheck, FileText } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sustainability Consulting</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional training and advisory services to help organisations understand, implement, and respond to evolving sustainability reporting requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="flex flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
              <BookOpen className="h-7 w-7 text-orange-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">ISSB Standards Disclosure Training</h2>
            <p className="text-gray-600 mb-6 flex-grow text-balance">
              Comprehensive training on ISSB Standards to support professionals in understanding and applying sustainability-related financial disclosures.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-slate-900 mb-3">Standards Covered:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• IFRS S1 General Requirements for Disclosure of Sustainability-related Financial Information</li>
                <li>• IFRS S2 Climate-related Disclosures</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-slate-900 mb-3">Key Learning Areas:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sustainability-related risks and opportunities</li>
                <li>• Materiality assessments</li>
                <li>• Governance structures</li>
                <li>• Strategy formulation</li>
                <li>• Risk Management</li>
                <li>• Metrics and Targets</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
              <FileText className="h-7 w-7 text-blue-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Sustainability Reporting</h2>
            <p className="text-gray-600 mb-6 flex-grow text-balance">
              We support organisations in developing robust sustainability reporting processes and disclosures that align with relevant global frameworks and standards. From initial readiness assessments to full report drafting, we guide you through the complexities of ESG data collection and narrative formulation.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
              <ShieldCheck className="h-7 w-7 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Sustainability Assurance</h2>
            <p className="text-gray-600 mb-6 flex-grow text-balance">
              Preparing your organisation for external assurance by building rigorous internal controls over sustainability data.
            </p>
            <div className="mb-8">
              <h3 className="font-semibold text-slate-900 mb-3">Assurance Support Includes:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sustainability information readiness</li>
                <li>• Internal control considerations</li>
                <li>• Data quality enhancement</li>
                <li>• Evidence and documentation gathering</li>
                <li>• Reporting processes review</li>
                <li>• Complete assurance preparedness</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-gray-100 pt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="rounded-md bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all"
          >
            Request Training
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-slate-900 group flex items-center hover:text-orange-600 transition-colors"
          >
            Discuss Your Sustainability Reporting Needs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
