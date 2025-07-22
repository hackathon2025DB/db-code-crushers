import './LongTermPlanning.css';

const YEARS = [2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034];
const PROJECTION = [
  { year: 2025, revenue: 1000000, expense: 700000 },
  { year: 2026, revenue: 1150000, expense: 800000 },
  { year: 2027, revenue: 1300000, expense: 900000 },
  { year: 2028, revenue: 1450000, expense: 1000000 },
  { year: 2029, revenue: 1600000, expense: 1100000 },
  { year: 2030, revenue: 1750000, expense: 1200000 },
  { year: 2031, revenue: 1900000, expense: 1300000 },
  { year: 2032, revenue: 2050000, expense: 1400000 },
  { year: 2033, revenue: 2200000, expense: 1500000 },
  { year: 2034, revenue: 2350000, expense: 1600000 },
];

const STEPS = [
  'Set Clear Financial Goals: Define revenue, profit, and growth targets for 3-5 years.',
  'Forecast Revenue: Estimate sales growth based on market trends, seasonality, and expansion plans.',
  'Estimate Expenses: Include fixed (rent, salaries) and variable (inventory, marketing) costs. Account for inflation.',
  'Project Net Income: Subtract total expenses from total revenue for each year.',
  'Plan Investments: Identify capital expenditures (equipment, expansion) and funding needs.',
  'Monitor Cash Flow: Ensure you have enough liquidity for operations and emergencies.',
  'Review & Adjust: Revisit your plan annually and update projections as needed.',
];

export default function LongTermPlanning() {
  return (
    <div className="ltp-layout">
      <div className="ltp-section">
        <h3>5-10 Year Financial Projection</h3>
        <table className="ltp-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Revenue (₹)</th>
              <th>Expense (₹)</th>
              <th>Net Income (₹)</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTION.map(row => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.revenue.toLocaleString()}</td>
                <td>{row.expense.toLocaleString()}</td>
                <td style={{ color: row.revenue - row.expense > 0 ? '#00f2fe' : '#ff4d4f' }}>
                  {(row.revenue - row.expense).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="ltp-section">
        <h3>Long-Term Planning Steps</h3>
        <ul className="ltp-steps">
          {STEPS.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 