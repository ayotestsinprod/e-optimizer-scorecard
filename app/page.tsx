'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    // For MVP, redirect to scorecard with mock data
    router.push('/scorecard');
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // For MVP, redirect to scorecard with mock data
      router.push('/scorecard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            How does your optimizer{' '}
            <span className="text-blue-500">really</span> perform?
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get your battery optimizer scorecard in 60 seconds. See exactly how much revenue you're leaving on the table.
          </p>
        </div>

        {/* Upload Zone */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-xl p-12 text-center transition-all
            ${isDragging 
              ? 'border-blue-500 bg-blue-500/10' 
              : 'border-gray-700 hover:border-blue-500/50 bg-gray-800/50'
            }
          `}
        >
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          
          <h3 className="text-2xl font-semibold mb-2">
            Drop your dispatch data here
          </h3>
          <p className="text-gray-400 mb-6">
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
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
          >
            Select CSV File
          </label>

          <p className="text-sm text-gray-400 mt-6">
            Upload one month of dispatch data • CSV format • Anonymous & secure
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">60s</div>
            <div className="text-sm text-gray-400">Time to insights</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">£0</div>
            <div className="text-sm text-gray-400">No signup required</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-sm text-gray-400">Anonymous analysis</div>
          </div>
        </div>
      </div>
    </div>
  );
}
