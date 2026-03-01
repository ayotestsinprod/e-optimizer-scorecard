'use client';

// Mock data for MVP
const mockData = {
  grade: 'B+',
  gradeColor: '#3B82F6',
  asset: 'Bramley Battery',
  market: 'GB Frequency Response',
  period: 'February 2026',
  actualRevenue: 285420,
  optimalRevenue: 342880,
  gapAmount: 57460,
  gapPercent: 16.8,
  stats: [
    { label: 'Utilization Rate', value: '87.2%', change: '+2.1%', positive: true },
    { label: 'Response Time', value: '1.8s', change: '-0.3s', positive: true },
    { label: 'Efficiency', value: '91.5%', change: '+1.2%', positive: true },
    { label: 'Availability', value: '98.1%', change: '0%', positive: null },
  ],
  peerBenchmark: {
    percentile: 68,
    distribution: [
      { grade: 'A', count: 12 },
      { grade: 'B', count: 24 },
      { grade: 'C', count: 18 },
      { grade: 'D', count: 8 },
      { grade: 'F', count: 3 },
    ],
  },
};

export default function Scorecard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen p-6 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-lg bg-slate-800/50 border border-slate-700">
            <span className="text-xs font-mono text-slate-400 tracking-wider">OPTIMIZER SCORECARD</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{mockData.asset}</h1>
          <p className="text-lg text-slate-400">
            {mockData.market} • {mockData.period}
          </p>
        </div>

        {/* Hero Grade */}
        <div className="relative mb-8 p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5"></div>
          <div className="relative text-center">
            <div className="mb-6">
              <div 
                className="text-[14rem] font-bold leading-none tracking-tight"
                style={{ 
                  background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.3))'
                }}
              >
                {mockData.grade}
              </div>
            </div>
            <div className="text-2xl text-slate-300 font-semibold mb-2">Performance Grade</div>
            <div className="text-lg text-slate-400">
              Better than <span className="text-blue-400 font-bold">{mockData.peerBenchmark.percentile}%</span> of optimizers
            </div>
          </div>
        </div>

        {/* Revenue Gap */}
        <div className="mb-8 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-mono text-slate-400 tracking-wider">REVENUE ANALYSIS</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">Actual Revenue</div>
              <div className="text-4xl font-bold font-mono text-white">
                {formatCurrency(mockData.actualRevenue)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">Optimal Revenue</div>
              <div className="text-4xl font-bold font-mono text-white">
                {formatCurrency(mockData.optimalRevenue)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30">
              <div className="text-xs text-red-400 font-mono uppercase tracking-wider mb-3">Opportunity Gap</div>
              <div className="text-4xl font-bold font-mono text-red-400">
                -{formatCurrency(mockData.gapAmount)}
              </div>
              <div className="text-sm text-red-400/80 mt-2">
                ({mockData.gapPercent}% unrealized)
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-amber-100 font-semibold mb-1">Revenue Opportunity Identified</div>
                <div className="text-amber-200/80 text-sm">
                  Your optimizer left <span className="text-white font-bold">{formatCurrency(mockData.gapAmount)}</span> on the table this month. That's potential revenue that could be recovered with optimization.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mb-8 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-mono text-slate-400 tracking-wider">KEY METRICS</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {mockData.stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">{stat.label}</div>
                <div className="text-3xl font-bold font-mono text-white mb-2">{stat.value}</div>
                <div className={`text-sm font-medium ${
                  stat.positive === true ? 'text-emerald-400' : 
                  stat.positive === false ? 'text-red-400' : 
                  'text-slate-500'
                }`}>
                  {stat.change !== '0%' ? stat.change + ' vs last month' : 'No change'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Benchmark */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <h3 className="text-sm font-mono text-slate-400 tracking-wider">MARKET BENCHMARK</h3>
          </div>
          
          <div className="mb-8">
            <div className="text-sm text-slate-400 mb-8">
              Distribution of <span className="text-white font-semibold">{mockData.peerBenchmark.distribution.reduce((sum, d) => sum + d.count, 0)}</span> optimizers (anonymous)
            </div>
            
            <div className="flex items-end justify-between gap-6 h-64 px-4">
              {mockData.peerBenchmark.distribution.map((item, idx) => {
                const maxCount = Math.max(...mockData.peerBenchmark.distribution.map(d => d.count));
                const height = (item.count / maxCount) * 100;
                const isCurrentGrade = item.grade === mockData.grade.charAt(0);
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-4">
                    <div className="text-xl font-bold text-slate-300">{item.count}</div>
                    <div
                      className={`w-full rounded-t-2xl transition-all ${
                        isCurrentGrade 
                          ? 'bg-gradient-to-t from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/50' 
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                      style={{ height: `${height}%` }}
                    />
                    <div className={`text-2xl font-bold font-mono ${
                      isCurrentGrade ? 'text-blue-400' : 'text-slate-500'
                    }`}>
                      {item.grade}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
            <div className="text-slate-300">
              Your optimizer ranks in the <span className="text-blue-400 font-bold text-lg">{mockData.peerBenchmark.percentile}th percentile</span> — better than most, but there's room to improve.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-2xl shadow-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to close the gap?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Deep dive into dispatch patterns, market opportunities, and optimization recommendations
          </p>
          <button className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
            Get Full Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
