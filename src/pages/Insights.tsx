import { ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "Understanding IFRS S1 and IFRS S2",
      category: "ISSB Standards",
      date: "August 2026",
      description: "A comprehensive guide to the new sustainability disclosure standards and what they mean for businesses operating in Africa.",
    },
    {
      title: "Preparing Your Organisation for Sustainability Reporting",
      category: "Sustainability Reporting",
      date: "July 2026",
      description: "Practical steps to align your internal data collection and governance processes with evolving global sustainability frameworks.",
    },
    {
      title: "Improving Financial Decision-Making Through Data",
      category: "Data Analytics",
      date: "June 2026",
      description: "How modern financial planning and analysis (FP&A) teams are leveraging data analytics to drive strategic growth.",
    },
    {
      title: "Key Considerations When Implementing Accounting Software",
      category: "ERP Implementation",
      date: "May 2026",
      description: "Avoid common pitfalls and ensure a smooth transition when upgrading to robust ERP solutions like Sage 300.",
    },
    {
      title: "The Role of Financial Planning and Analysis in Business Growth",
      category: "Financial Planning and Analysis",
      date: "April 2026",
      description: "Why transitioning from historical reporting to forward-looking financial modelling is critical for scaling businesses.",
    },
  ];

  const categories = [
    "All",
    "Sustainability Reporting",
    "ISSB Standards",
    "Financial Reporting",
    "Accounting Technology",
    "ERP Implementation",
    "Payroll",
    "Financial Planning and Analysis",
    "Data Analytics",
    "Business Transformation"
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Insights & Thought Leadership</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Expert perspectives, research, and practical guidance on sustainability, financial management, and digital transformation.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Categories */}
          <div className="lg:w-1/4">
            <h3 className="text-sm font-semibold leading-6 text-slate-900 uppercase tracking-wider mb-6">Topics</h3>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={category}>
                  <button className={`text-sm leading-6 transition-colors ${index === 0 ? 'font-semibold text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles Grid */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.title} className="flex flex-col items-start justify-between bg-white p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime={article.date} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {article.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-bold leading-7 text-slate-900 group-hover:text-orange-600 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-500">
                  Read article <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
