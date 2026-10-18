import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircleIcon, ChartBarIcon, BriefcaseIcon, GlobeAltIcon, ArrowRightIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    subtitle: "Effortless Financial Clarity",
    description: "Beyond just logging numbers. We design and implement smart accounting systems that give you real-time visibility into your business health. Our boutique approach ensures you get high-quality attention for your specific needs.",
    icon: <ChartBarIcon className="h-12 w-12 text-gold" />,
    features: [
      "Custom Xero/QuickBooks implementation",
      "Monthly bookkeeping & bank reconciliation",
      "Management accounts & financial reporting",
      "Accounts payable/receivable management",
      "Cash flow forecasting & optimization"
    ],
    highlight: "Ask about our 'Get Xero for Zero' offer – your first month is on us."
  },
  {
    id: "tax",
    title: "VAT & Corporate Tax",
    subtitle: "Navigate UAE Compliance with Confidence",
    description: "Regulations in the UAE are evolving rapidly. We provide the expertise to ensure you remain fully compliant while optimizing your tax position. Turn tax requirements into strategic business decisions.",
    icon: <BriefcaseIcon className="h-12 w-12 text-gold" />,
    features: [
      "VAT registration and return filing",
      "Corporate tax impact assessment",
      "Strategic tax planning & advisory",
      "FTA audit support and representation",
      "Economic Substance Regulation (ESR) support"
    ]
  },
  {
    id: "advisory",
    title: "Business Advisory",
    subtitle: "Strategic Insights for Growth",
    description: "Navigate complex business decisions with confidence. Our advisory services provide the strategic insights you need to identify opportunities, mitigate risks, and drive sustainable growth.",
    icon: <GlobeAltIcon className="h-12 w-12 text-gold" />,
    features: [
      "Business planning & strategy development",
      "Market analysis & opportunity assessment",
      "Risk management & mitigation",
      "Operational efficiency consulting",
      "Business restructuring support"
    ]
  },
  {
    id: "cfo",
    title: "CFO Services",
    subtitle: "Executive Financial Leadership",
    description: "Get the expertise of a high-level CFO without the full-time cost. We act as your strategic partner, helping you see the bigger picture and navigate complex financial milestones with precision.",
    icon: <UserGroupIcon className="h-12 w-12 text-gold" />,
    features: [
      "Strategic financial planning (FP&A)",
      "Performance benchmarking & KPIs",
      "Working capital optimization",
      "Investor readiness & fundraising support",
      "Internal control & process improvement"
    ],
    highlight: "Perfect for growing businesses that need CFO expertise without the full-time commitment."
  }
];

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 triangle-pattern" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy via-transparent to-navy" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold mb-6 border border-gold/20">
            Tailored Solutions
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our <span className="gradient-text">Expertise</span>
          </h1>
          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Financial strategies designed for every stage of your SME journey.
            From startup launch to sustainable expansion.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                id={solution.id}
                className={`flex flex-col lg:items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1">
                  <div className="mb-6 p-4 bg-navy rounded-2xl w-fit shadow-lg shadow-navy/20">
                    {solution.icon}
                  </div>
                  <h2 className="text-[32px] font-extrabold text-navy leading-tight mb-2">
                    {solution.title}
                  </h2>
                  <p className="text-lg font-bold text-gold uppercase tracking-widest mb-6">
                    {solution.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <div className="grid sm:grid-cols-1 gap-4 mb-8">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-gold flex-shrink-0" />
                        <span className="text-navy font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {solution.highlight && (
                    <div className="p-4 bg-gold/10 border-l-4 border-gold rounded-r-xl mb-8">
                      <p className="text-navy font-bold flex items-center gap-2">
                        <span className="text-xl">✨</span> {solution.highlight}
                      </p>
                    </div>
                  )}

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-navy font-extrabold group"
                  >
                    Discuss this solution
                    <ArrowRightIcon className="h-5 w-5 text-gold group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="flex-1 relative">
                  <div className="aspect-[4/3] rounded-3xl bg-gray-50 overflow-hidden shadow-2xl ring-1 ring-navy/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#0a1454] to-navy flex items-center justify-center p-8">
                      {/* Accounting Illustration */}
                      {index === 0 && (
                        <div className="w-full max-w-sm">
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-white/60 text-sm">Financial Overview</span>
                              <span className="text-green-400 text-sm font-bold">+24.5%</span>
                            </div>
                            <div className="text-3xl font-bold text-white mb-6">AED 1.2M</div>
                            <div className="flex items-end gap-2 h-32">
                              {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-gold to-gold/50 rounded-t" style={{ height: `${h}%` }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Tax Illustration */}
                      {index === 1 && (
                        <div className="w-full max-w-sm space-y-4">
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircleIcon className="w-6 h-6 text-green-400" />
                              </div>
                              <div>
                                <p className="text-white font-semibold">VAT Return</p>
                                <p className="text-white/50 text-sm">Filed Successfully</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                <BriefcaseIcon className="w-6 h-6 text-gold" />
                              </div>
                              <div>
                                <p className="text-white font-semibold">Corporate Tax</p>
                                <p className="text-white/50 text-sm">100% Compliant</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                <GlobeAltIcon className="w-6 h-6 text-blue-400" />
                              </div>
                              <div>
                                <p className="text-white font-semibold">FTA Registered</p>
                                <p className="text-white/50 text-sm">Active Status</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Advisory Illustration */}
                      {index === 2 && (
                        <div className="w-full max-w-sm space-y-4">
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white font-semibold">Strategy Planning</p>
                                <p className="text-white/50 text-sm">In Progress</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-white font-semibold">Market Analysis</p>
                                <p className="text-white/50 text-sm">Opportunities Found</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircleIcon className="w-6 h-6 text-green-400" />
                              </div>
                              <div>
                                <p className="text-white font-semibold">Risk Mitigation</p>
                                <p className="text-white/50 text-sm">Protected</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* CFO Services Illustration */}
                      {index === 3 && (
                        <div className="w-full max-w-sm">
                          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                            <p className="text-white/60 text-sm mb-2">CFO Dashboard</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-white/5 rounded-xl p-4">
                                <p className="text-gold text-2xl font-bold">+147%</p>
                                <p className="text-white/50 text-xs">Revenue Growth</p>
                              </div>
                              <div className="bg-white/5 rounded-xl p-4">
                                <p className="text-green-400 text-2xl font-bold">32%</p>
                                <p className="text-white/50 text-xs">Cost Savings</p>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-white/60">Cash Flow</span>
                                <span className="text-white font-semibold">Optimized</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-4/5 bg-gradient-to-r from-gold to-green-400 rounded-full" />
                              </div>
                              <div className="flex justify-between text-sm mt-4">
                                <span className="text-white/60">Investor Ready</span>
                                <span className="text-green-400 font-semibold">100%</span>
                              </div>
                              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Floating geometric elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-navy/10 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 triangle-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-navy via-[#0a1454] to-navy border border-gold/30 rounded-[40px] p-12 lg:p-20 text-center shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-8">
              Ready to <span className="gradient-text">Azpire</span> Higher?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the 500+ UAE businesses who have transformed their finances with our tailored boutique approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-10 py-5 bg-gold text-navy font-bold rounded-2xl shadow-xl shadow-gold/20 hover:bg-gold-light hover:scale-105 hover:shadow-gold/40 transition-all"
              >
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/971524492816"
                className="px-10 py-5 bg-white/10 text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
