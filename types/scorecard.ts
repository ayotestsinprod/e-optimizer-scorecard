export interface ScorecardData {
  grade: string;
  asset: string;
  market: string;
  period: string;
  actualRevenue: number;
  optimalRevenue: number;
  gapAmount: number;
  gapPercent: number;
  stats: Array<{
    label: string;
    value: string;
    change: string;
    positive: boolean | null;
  }>;
  peerBenchmark: {
    percentile: number;
    distribution: Array<{
      grade: string;
      count: number;
    }>;
  };
}
