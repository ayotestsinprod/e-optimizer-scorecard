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
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div 
            className="inline-block mb-6 px-4 py-2 rounded-full border"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
            }}
          >
            <span className="text-sm font-medium" style={{ color: '#60a5fa' }}>Battery Optimizer Analysis</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight text-white">
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
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
            Get your battery optimizer scorecard in 60 seconds. See exactly how much revenue you're leaving on the table.
          </p>
        </div>

        {/* Upload Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="relative border-2 border-dashed rounded-2xl p-12 text-center transition-all"
          style={{
            borderColor: isDragging ? '#3b82f6' : '#334155',
            backgroundColor: isDragging ? 'rgba(59, 130, 246, 0.05)' : 'rgba(15, 23, 42, 0.5)',
            transform: isDragging ? 'scale(1.02)' : 'scale(1)',
            pointerEvents: isUploading ? 'none' : 'auto',
          }}
        >
          {isUploading ? (
            <div className="py-8">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: '#334155' }}></div>
                <div 
                  className="absolute inset-0 border-4 rounded-full border-t-transparent animate-spin"
                  style={{ borderColor: '#3b82f6' }}
                ></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Processing your data...
              </h3>
              <p style={{ color: '#94a3b8' }}>
                Analyzing dispatch patterns and calculating optimal revenue
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Drop your dispatch data here
              </h3>
              <p className="mb-8" style={{ color: '#94a3b8' }}>
                Or click to browse files
              </p>

              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".csv"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-8 py-4 text-white font-semibold rounded-xl cursor-pointer transition-all"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.3)';
                }}
              >
                Select CSV File
              </label>

              <p className="text-sm mt-8" style={{ color: '#64748b' }}>
                Upload one month of dispatch data • CSV format • Anonymous & secure
              </p>
            </>
          )}
        </div>

        {/* Trust Signals */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { value: '60s', label: 'Time to insights' },
            { value: '£0', label: 'No signup required' },
            { value: '100%', label: 'Anonymous analysis' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="text-center p-6 rounded-xl border transition-colors"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                borderColor: '#1e293b',
              }}
            >
              <div 
                className="text-4xl font-bold mb-2"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {item.value}
              </div>
              <div className="text-sm" style={{ color: '#94a3b8' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
