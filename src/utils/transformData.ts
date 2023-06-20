import { groupBy, meanBy, entries, sum, maxBy } from "lodash";
import type { Transaction, Result } from "../types/transaction";

const transformData = (transactions: Transaction[]): Result[] => {
  const data = transactions.map((item) => ({
    ...item,
    price:
      item.price && typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
        : "",
  }));
  const groups = groupBy(data, "cardName");
  const results = entries(groups).map(([key, value]: [string, Transaction[]]) => {
    const avg = meanBy(value, "price");
    const std = Math.sqrt(sum(value.map(v => (v.price as number - avg) ** 2)) / value.length);

    return {
      cardName: key,
      averagePrice: avg,
      lowerBound: avg - 2 * std,
      upperBound: avg + 2 * std,
      standardDeviation: std,
      peakPrice: maxBy(value, 'price')?.price as number,
      peakDay: maxBy(value, 'price')?.txnDate as number,
    }
  });

  return results;
};

export { transformData };
