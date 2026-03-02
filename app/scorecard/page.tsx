'use client';

import { useState } from 'react';

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
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to backend/webhook (placeholder for now)
    console.log('Lead captured:', { email, company });
    
    // For MVP, just show success state
    setSubmitted(true);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setEmail('');
      setCompany('');
    }, 2000);
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        padding: '24px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Sample Banner */}
        <div 
          style={{
            marginBottom: '24px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#60a5fa', fontSize: '14px', fontWeight: 500, margin: 0 }}>
            📊 Sample Scorecard — Upload your data to see your actual performance
          </p>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div 
            style={{
              display: 'inline-block',
              marginBottom: '16px',
              padding: '4px 12px',
              borderRadius: '8px',
              border: '1px solid #334155',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
            }}
          >
            <span style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.05em', color: '#94a3b8' }}>
              OPTIMIZER SCORECARD
            </span>
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'white', marginBottom: '8px', marginTop: 0 }}>
            {mockData.asset}
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', margin: 0 }}>
            {mockData.market} • {mockData.period}
          </p>
        </div>

        {/* Hero Grade */}
        <div 
          style={{
            position: 'relative',
            marginBottom: '32px',
            padding: '48px',
            borderRadius: '24px',
            border: '1px solid #334155',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
          }}
        >
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
            }}
          />
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{ marginBottom: '24px' }}>
              <div 
                style={{ 
                  fontSize: '14rem',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.025em',
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
            <div style={{ fontSize: '1.5rem', color: '#e2e8f0', fontWeight: 600, marginBottom: '8px' }}>
              Performance Grade
            </div>
            <div style={{ fontSize: '1.125rem', color: '#94a3b8' }}>
              Better than <span style={{ color: '#60a5fa', fontWeight: 700 }}>{mockData.peerBenchmark.percentile}%</span> of optimizers
            </div>
          </div>
        </div>

        {/* Revenue Gap */}
        <div 
          style={{
            marginBottom: '32px',
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid #334155',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div 
              style={{
                width: '4px',
                height: '24px',
                borderRadius: '2px',
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            />
            <h3 style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.05em', color: '#94a3b8', margin: 0 }}>
              REVENUE ANALYSIS
            </h3>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <div 
              style={{
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #334155',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
              }}
            >
              <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                Actual Revenue
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'monospace', color: 'white' }}>
                {formatCurrency(mockData.actualRevenue)}
              </div>
            </div>
            <div 
              style={{
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #334155',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
              }}
            >
              <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                Optimal Revenue
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'monospace', color: 'white' }}>
                {formatCurrency(mockData.optimalRevenue)}
              </div>
            </div>
            <div 
              style={{
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
              }}
            >
              <div style={{ fontSize: '12px', color: '#f87171', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                Money Left on Table
              </div>
              <div style={{ fontSize: '2.25rem', fontWeight: 700, fontFamily: 'monospace', color: '#f87171' }}>
                -{formatCurrency(mockData.gapAmount)}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(248, 113, 113, 0.8)', marginTop: '8px' }}>
                ({mockData.gapPercent}% unrealized)
              </div>
            </div>
          </div>

          <div 
            style={{
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div 
                style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                }}
              >
                <svg width="24" height="24" fill="#fbbf24" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div style={{ color: '#fef3c7', fontWeight: 600, marginBottom: '4px' }}>
                  Revenue Opportunity Identified
                </div>
                <div style={{ color: 'rgba(254, 243, 199, 0.8)', fontSize: '14px' }}>
                  Your optimizer left <span style={{ color: 'white', fontWeight: 700 }}>{formatCurrency(mockData.gapAmount)}</span> on the table this month. That's potential revenue that could be recovered with optimization.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div 
          style={{
            marginBottom: '32px',
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid #334155',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div 
              style={{
                width: '4px',
                height: '24px',
                borderRadius: '2px',
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            />
            <h3 style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.05em', color: '#94a3b8', margin: 0 }}>
              KEY METRICS
            </h3>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {mockData.stats.map((stat, idx) => (
              <div 
                key={idx} 
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #334155',
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '1.875rem', fontWeight: 700, fontFamily: 'monospace', color: 'white', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div 
                  style={{ 
                    fontSize: '14px',
                    fontWeight: 500,
                    color: stat.positive === true ? '#34d399' : stat.positive === false ? '#f87171' : '#64748b'
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
          style={{
            marginBottom: '48px',
            padding: '32px',
            borderRadius: '24px',
            border: '1px solid #334155',
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <div 
              style={{
                width: '4px',
                height: '24px',
                borderRadius: '2px',
                background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
              }}
            />
            <h3 style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.05em', color: '#94a3b8', margin: 0 }}>
              MARKET BENCHMARK
            </h3>
          </div>
          
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '32px' }}>
              Distribution of <span style={{ color: 'white', fontWeight: 600 }}>{mockData.peerBenchmark.distribution.reduce((sum, d) => sum + d.count, 0)}</span> optimizers (anonymous)
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', height: '256px', padding: '0 16px' }}>
              {mockData.peerBenchmark.distribution.map((item, idx) => {
                const maxCount = Math.max(...mockData.peerBenchmark.distribution.map(d => d.count));
                const height = (item.count / maxCount) * 100;
                const isCurrentGrade = item.grade === mockData.grade.charAt(0);
                
                return (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#cbd5e1' }}>{item.count}</div>
                    <div
                      style={{ 
                        width: '100%',
                        height: `${height}%`,
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        transition: 'all 0.2s',
                        background: isCurrentGrade 
                          ? 'linear-gradient(180deg, #2563eb 0%, #06b6d4 100%)' 
                          : '#475569',
                        boxShadow: isCurrentGrade ? '0 10px 40px rgba(59, 130, 246, 0.5)' : 'none',
                      }}
                    />
                    <div 
                      style={{ 
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        fontFamily: 'monospace',
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
            style={{
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
            }}
          >
            <div style={{ color: '#cbd5e1' }}>
              Your optimizer ranks in the <span style={{ fontWeight: 700, fontSize: '1.125rem', color: '#60a5fa' }}>{mockData.peerBenchmark.percentile}th percentile</span> — better than most, but there's room to improve.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div 
          style={{
            textAlign: 'center',
            padding: '48px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
            boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
          }}
        >
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'white', marginBottom: '16px', marginTop: 0 }}>
            Ready to close the gap?
          </h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto 32px', color: '#dbeafe' }}>
            Deep dive into dispatch patterns, market opportunities, and optimization recommendations
          </p>
          <button 
            onClick={() => setShowModal(true)}
            style={{ 
              padding: '20px 40px',
              backgroundColor: 'white',
              color: '#2563eb',
              fontWeight: 700,
              fontSize: '1.125rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 20px 60px rgba(255, 255, 255, 0.2)',
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

      {/* Modal */}
      {showModal && (
        <div 
          onClick={() => !submitted && setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            zIndex: 50,
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              border: '1px solid #334155',
            }}
          >
            {!submitted ? (
              <>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginTop: 0, marginBottom: '8px' }}>
                  Get Your Full Analysis
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
                  Enter your details and we'll send you a comprehensive breakdown of your optimizer's performance.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#cbd5e1', marginBottom: '8px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #334155',
                        backgroundColor: '#0f172a',
                        color: 'white',
                        fontSize: '16px',
                      }}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#cbd5e1', marginBottom: '8px' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company name"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #334155',
                        backgroundColor: '#0f172a',
                        color: 'white',
                        fontSize: '16px',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      style={{
                        flex: 1,
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: '1px solid #334155',
                        backgroundColor: 'transparent',
                        color: '#94a3b8',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{
                        flex: 1,
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                        color: 'white',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginTop: 0, marginBottom: '8px' }}>
                  Thank you!
                </h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>
                  We'll send your full analysis shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
