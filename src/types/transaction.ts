export interface Transaction {
  cardName: string;
  gradingCompany: string;
  grade: string;
  txnDate: number;
  pricingSource: string;
  price: string | number;
}

export interface Result {
  cardName: string;
  averagePrice: number;
  lowerBound: number;
  upperBound: number;
  standardDeviation: number;
  peakPrice: number;
  peakDay: number;
}
