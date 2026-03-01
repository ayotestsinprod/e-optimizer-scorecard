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
    { label: 'Utilization Rate', value: '87.2%', change: '+2.1%' },
    { label: 'Response Time', value: '1.8s', change: '-0.3s' },
    { label: 'Efficiency', value: '91.5%', change: '+1.2%' },
    { label: 'Availability', value: '98.1%', change: '0%' },
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
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-sm font-mono text-gray-400 mb-2">OPTIMIZER SCORECARD</h2>
          <h1 className="text-3xl font-bold">{mockData.asset}</h1>
          <p className="text-gray-400 mt-1">
            {mockData.market} • {mockData.period}
          </p>
        </div>

        {/* Hero Grade */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-12 mb-8 text-center">
          <div className="mb-4">
            <div className="text-[12rem] font-bold leading-none" style={{ color: mockData.gradeColor }}>
              {mockData.grade}
            </div>
          </div>
          <div className="text-2xl text-gray-400 mb-2">Performance Grade</div>
          <div className="text-lg text-gray-400">
            Better than {mockData.peerBenchmark.percentile}% of optimizers
          </div>
        </div>

        {/* Revenue Gap */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
          <h3 className="text-sm font-mono text-gray-400 mb-6">REVENUE ANALYSIS</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">Actual Revenue</div>
              <div className="text-3xl font-bold font-mono">
                {formatCurrency(mockData.actualRevenue)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Optimal Revenue</div>
              <div className="text-3xl font-bold font-mono">
                {formatCurrency(mockData.optimalRevenue)}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Opportunity Gap</div>
              <div className="text-3xl font-bold font-mono text-red-400">
                -{formatCurrency(mockData.gapAmount)}
              </div>
              <div className="text-sm text-red-400 mt-1">
                ({mockData.gapPercent}% unrealized)
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-2 text-sm">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">
                Your optimizer left <span className="text-white font-semibold">{formatCurrency(mockData.gapAmount)}</span> on the table this month
              </span>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8">
          <h3 className="text-sm font-mono text-gray-400 mb-6">KEY METRICS</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {mockData.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className="text-2xl font-bold font-mono mb-1">{stat.value}</div>
                <div className={`text-sm ${stat.change.startsWith('+') || stat.change.startsWith('-') ? (parseFloat(stat.change) > 0 ? 'text-green-400' : 'text-red-400') : 'text-gray-400'}`}>
                  {stat.change !== '0%' ? stat.change + ' vs last month' : 'No change'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Benchmark */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-sm font-mono text-gray-400 mb-6">MARKET BENCHMARK</h3>
          
          <div className="mb-6">
            <div className="text-sm text-gray-400 mb-4">
              Distribution of {mockData.peerBenchmark.distribution.reduce((sum, d) => sum + d.count, 0)} optimizers (anonymous)
            </div>
            
            <div className="flex items-end gap-4 h-48">
              {mockData.peerBenchmark.distribution.map((item, idx) => {
                const maxCount = Math.max(...mockData.peerBenchmark.distribution.map(d => d.count));
                const height = (item.count / maxCount) * 100;
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-lg font-bold">{item.count}</div>
                    <div
                      className={`w-full rounded-t-lg ${item.grade === mockData.grade.charAt(0) ? 'bg-blue-500' : 'bg-gray-600'}`}
                      style={{ height: `${height}%` }}
                    />
                    <div className="text-lg font-bold font-mono">{item.grade}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 text-sm text-gray-400">
            Your optimizer ranks in the <span className="text-white font-semibold">68th percentile</span> — better than most, but there's room to improve.
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            Get Full Analysis
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Deep dive into dispatch patterns, market opportunities, and optimization recommendations
          </p>
        </div>
      </div>
    </div>
  );
}
