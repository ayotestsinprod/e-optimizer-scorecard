'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const simulateUpload = () => {
    setIsUploading(true);
    
    // Simulate processing
    setTimeout(() => {
      router.push('/scorecard');
    }, 1500);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    simulateUpload();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload();
    }
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}
    >
      <div style={{ maxWidth: '56rem', width: '100%' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div 
            style={{
              display: 'inline-block',
              marginBottom: '16px',
              padding: '6px 12px',
              borderRadius: '9999px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 500, color: '#60a5fa' }}>
              Battery Optimizer Analysis
            </span>
          </div>
          <h1 
            style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '12px',
              letterSpacing: '-0.025em',
              color: 'white',
            }}
          >
            How does your optimizer{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              really
            </span>{' '}
            perform?
          </h1>
          <p style={{ fontSize: '1.125rem', maxWidth: '42rem', margin: '0 auto', color: '#94a3b8' }}>
            Get your battery optimizer scorecard in 60 seconds. See exactly how much revenue you're leaving on the table.
          </p>
        </div>

        {/* Upload Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            position: 'relative',
            border: `2px dashed ${isDragging ? '#3b82f6' : '#334155'}`,
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            transition: 'all 0.2s',
            backgroundColor: isDragging ? 'rgba(59, 130, 246, 0.05)' : 'rgba(15, 23, 42, 0.5)',
            transform: isDragging ? 'scale(1.01)' : 'scale(1)',
            pointerEvents: isUploading ? 'none' : 'auto',
            marginBottom: '32px',
          }}
        >
          {isUploading ? (
            <div style={{ padding: '24px 0' }}>
              <div 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  margin: '0 auto 16px',
                  position: 'relative',
                }}
              >
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    border: '4px solid #334155', 
                    borderRadius: '50%',
                  }}
                ></div>
                <div 
                  className="animate-spin"
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    border: '4px solid #3b82f6', 
                    borderRadius: '50%',
                    borderTopColor: 'transparent',
                  }}
                ></div>
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '4px', color: 'white' }}>
                Processing your data...
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                Analyzing dispatch patterns
              </p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '12px' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '4px', color: 'white' }}>
                Drop your dispatch data here
              </h3>
              <p style={{ fontSize: '14px', marginBottom: '20px', color: '#94a3b8' }}>
                Or click to browse files
              </p>

              <input
                type="file"
                id="file-upload"
                style={{ display: 'none' }}
                accept=".csv"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  fontSize: '14px',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                  boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.3)';
                }}
              >
                Select CSV File
              </label>

              <p style={{ fontSize: '12px', marginTop: '16px', color: '#64748b' }}>
                One month of dispatch data • CSV format • Anonymous & secure
              </p>
            </>
          )}
        </div>

        {/* Trust Signals */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '16px',
          }}
        >
          {[
            { value: '60s', label: 'Time to insights' },
            { value: '£0', label: 'No signup required' },
            { value: '100%', label: 'Anonymous analysis' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              style={{
                textAlign: 'center',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #1e293b',
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                transition: 'border-color 0.2s',
              }}
            >
              <div 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '4px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {item.value}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
