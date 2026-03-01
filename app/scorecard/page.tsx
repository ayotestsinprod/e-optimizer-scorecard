'use client';

// Mock data for MVP
const mockData = {
  grade: 'B+',
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
    <div 
      className="min-h-screen p-6 lg:p-12"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div 
            className="inline-block mb-4 px-3 py-1 rounded-lg border"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              borderColor: '#334155',
            }}
          >
            <span className="text-xs font-mono tracking-wider" style={{ color: '#94a3b8' }}>
              OPTIMIZER SCORECARD
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{mockData.asset}</h1>
          <p className="text-lg" style={{ color: '#94a3b8' }}>
            {mockData.market} • {mockData.period}
          </p>
        </div>

        {/* Hero Grade */}
        <div 
          className="relative mb-8 p-12 rounded-3xl border shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
            borderColor: '#334155',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
            }}
          ></div>
          <div className="relative text-center">
            <div className="mb-6">
              <div 
                className="font-bold leading-none tracking-tight"
                style={{ 
                  fontSize: '14rem',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 0.4))',
                }}
              >
                {mockData.grade}
              </div>
            </div>
            <div className="text-2xl font-semibold mb-2" style={{ color: '#e2e8f0' }}>
              Performance Grade
            </div>
            <div className="text-lg" style={{ color: '#94a3b8' }}>
              Better than <span className="font-bold" style={{ color: '#60a5fa' }}>{mockData.peerBenchmark.percentile}%</span> of optimizers
            </div>
          </div>
        </div>

        {/* Revenue Gap */}
        <div 
          className="mb-8 p-8 rounded-3xl border shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            borderColor: '#334155',
          }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div 
              className="w-1 h-6 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            ></div>
            <h3 className="text-sm font-mono tracking-wider" style={{ color: '#94a3b8' }}>
              REVENUE ANALYSIS
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div 
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderColor: '#334155',
              }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>
                Actual Revenue
              </div>
              <div className="text-4xl font-bold font-mono text-white">
                {formatCurrency(mockData.actualRevenue)}
              </div>
            </div>
            <div 
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderColor: '#334155',
              }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>
                Optimal Revenue
              </div>
              <div className="text-4xl font-bold font-mono text-white">
                {formatCurrency(mockData.optimalRevenue)}
              </div>
            </div>
            <div 
              className="p-6 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
                borderColor: 'rgba(239, 68, 68, 0.3)',
              }}
            >
              <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: '#f87171' }}>
                Opportunity Gap
              </div>
              <div className="text-4xl font-bold font-mono" style={{ color: '#f87171' }}>
                -{formatCurrency(mockData.gapAmount)}
              </div>
              <div className="text-sm mt-2" style={{ color: 'rgba(248, 113, 113, 0.8)' }}>
                ({mockData.gapPercent}% unrealized)
              </div>
            </div>
          </div>

          <div 
            className="p-6 rounded-2xl border"
            style={{
              background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.3)',
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                }}
              >
                <svg className="w-6 h-6" style={{ color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-semibold mb-1" style={{ color: '#fef3c7' }}>
                  Revenue Opportunity Identified
                </div>
                <div className="text-sm" style={{ color: 'rgba(254, 243, 199, 0.8)' }}>
                  Your optimizer left <span className="text-white font-bold">{formatCurrency(mockData.gapAmount)}</span> on the table this month. That's potential revenue that could be recovered with optimization.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div 
          className="mb-8 p-8 rounded-3xl border shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            borderColor: '#334155',
          }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div 
              className="w-1 h-6 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            ></div>
            <h3 className="text-sm font-mono tracking-wider" style={{ color: '#94a3b8' }}>
              KEY METRICS
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {mockData.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border transition-colors"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  borderColor: '#334155',
                }}
              >
                <div className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>
                  {stat.label}
                </div>
                <div className="text-3xl font-bold font-mono text-white mb-2">{stat.value}</div>
                <div 
                  className="text-sm font-medium"
                  style={{ 
                    color: stat.positive === true ? '#34d399' : 
                           stat.positive === false ? '#f87171' : 
                           '#64748b'
                  }}
                >
                  {stat.change !== '0%' ? stat.change + ' vs last month' : 'No change'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Benchmark */}
        <div 
          className="mb-12 p-8 rounded-3xl border shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            borderColor: '#334155',
          }}
        >
          <div className="flex items-center gap-2 mb-8">
            <div 
              className="w-1 h-6 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            ></div>
            <h3 className="text-sm font-mono tracking-wider" style={{ color: '#94a3b8' }}>
              MARKET BENCHMARK
            </h3>
          </div>
          
          <div className="mb-8">
            <div className="text-sm mb-8" style={{ color: '#94a3b8' }}>
              Distribution of <span className="text-white font-semibold">{mockData.peerBenchmark.distribution.reduce((sum, d) => sum + d.count, 0)}</span> optimizers (anonymous)
            </div>
            
            <div className="flex items-end justify-between gap-6 h-64 px-4">
              {mockData.peerBenchmark.distribution.map((item, idx) => {
                const maxCount = Math.max(...mockData.peerBenchmark.distribution.map(d => d.count));
                const height = (item.count / maxCount) * 100;
                const isCurrentGrade = item.grade === mockData.grade.charAt(0);
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-4">
                    <div className="text-xl font-bold" style={{ color: '#cbd5e1' }}>{item.count}</div>
                    <div
                      className="w-full rounded-t-2xl transition-all"
                      style={{ 
                        height: `${height}%`,
                        background: isCurrentGrade 
                          ? 'linear-gradient(180deg, #2563eb 0%, #06b6d4 100%)' 
                          : '#475569',
                        boxShadow: isCurrentGrade ? '0 10px 40px rgba(59, 130, 246, 0.5)' : 'none',
                      }}
                    />
                    <div 
                      className="text-2xl font-bold font-mono"
                      style={{ 
                        color: isCurrentGrade ? '#60a5fa' : '#64748b'
                      }}
                    >
                      {item.grade}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div 
            className="p-6 rounded-2xl border"
            style={{
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
            }}
          >
            <div style={{ color: '#cbd5e1' }}>
              Your optimizer ranks in the <span className="font-bold text-lg" style={{ color: '#60a5fa' }}>{mockData.peerBenchmark.percentile}th percentile</span> — better than most, but there's room to improve.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          className="text-center p-12 rounded-3xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to close the gap?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg" style={{ color: '#dbeafe' }}>
            Deep dive into dispatch patterns, market opportunities, and optimization recommendations
          </p>
          <button 
            className="px-10 py-5 bg-white font-bold text-lg rounded-xl transition-all shadow-xl"
            style={{ 
              color: '#2563eb',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 70px rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 255, 255, 0.2)';
            }}
          >
            Get Full Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
