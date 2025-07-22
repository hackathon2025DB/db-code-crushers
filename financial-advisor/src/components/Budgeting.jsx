import { useState } from 'react';
import './Budgeting.css';

const FISCAL_YEARS = ['2023-24', '2024-25', '2025-26'];
const BUDGET_PERIODS = ['Q1', 'Q2', 'Q3', 'Q4', 'Full Year'];
const PROJECTS = ['General', 'Expansion', 'R&D', 'Marketing'];

const BUDGET_DATA = [
  { category: 'Salaries', planned: 50000, actual: 48000 },
  { category: 'Office Rent', planned: 20000, actual: 20000 },
  { category: 'Marketing', planned: 15000, actual: 12000 },
  { category: 'R&D', planned: 10000, actual: 8000 },
  { category: 'Miscellaneous', planned: 5000, actual: 6000 },
];

export default function Budgeting() {
  const [fiscalYear, setFiscalYear] = useState(FISCAL_YEARS[0]);
  const [period, setPeriod] = useState(BUDGET_PERIODS[0]);
  const [project, setProject] = useState(PROJECTS[0]);

  return (
    <div className="budgeting-layout">
      <aside className="budgeting-controls">
        <h3>Budget Filters</h3>
        <label>
          Fiscal Year
          <select value={fiscalYear} onChange={e => setFiscalYear(e.target.value)}>
            {FISCAL_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>
        <label>
          Budget Period
          <select value={period} onChange={e => setPeriod(e.target.value)}>
            {BUDGET_PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <label>
          Project
          <select value={project} onChange={e => setProject(e.target.value)}>
            {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
      </aside>
      <section className="budgeting-table-section">
        <h3>Budget Overview</h3>
        <table className="budgeting-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Planned</th>
              <th>Actual</th>
              <th>Variance</th>
            </tr>
          </thead>
          <tbody>
            {BUDGET_DATA.map(row => (
              <tr key={row.category}>
                <td>{row.category}</td>
                <td>₹{row.planned.toLocaleString()}</td>
                <td>₹{row.actual.toLocaleString()}</td>
                <td style={{ color: row.actual - row.planned > 0 ? '#ff4d4f' : '#00f2fe' }}>
                  {row.actual - row.planned > 0 ? '+' : ''}{(row.actual - row.planned).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
} 