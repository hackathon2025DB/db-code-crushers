import './FundingOpportunities.css';

const COLUMNS = [
  { key: 'bank', label: 'Bank Loans' },
  { key: 'govt', label: 'Government Schemes' },
  { key: 'micro', label: 'Microfinance & Cooperative Banks' },
  { key: 'crowd', label: 'Crowd Fundings' },
];

const PLACEHOLDER = {
  bank: [
    { name: 'SBI Business Loan', url: 'https://sbi.co.in/business-loan' },
    { name: 'HDFC MSME Loan', url: 'https://www.hdfcbank.com/msme-loan' },
    { name: 'ICICI Working Capital Loan', url: 'https://www.icicibank.com/working-capital' },
  ],
  govt: [
    { name: 'PMEGP', url: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp' },
    { name: 'MUDRA Yojana', url: 'https://www.mudra.org.in/' },
    { name: 'Stand-Up India', url: 'https://www.standupmitra.in/' },
  ],
  micro: [
    { name: 'SKS Microfinance', url: 'https://www.bfil.co.in/' },
    { name: 'BASIX', url: 'https://www.basixindia.com/' },
    { name: 'Local Cooperative Bank', url: '#' },
  ],
  crowd: [
    { name: 'Ketto', url: 'https://www.ketto.org/' },
    { name: 'Wishberry', url: 'https://www.wishberry.in/' },
    { name: 'FuelADream', url: 'https://www.fueladream.com/' },
  ],
};

export default function FundingOpportunities() {
  return (
    <div className="funding-grid">
      {COLUMNS.map(col => (
        <div className="funding-col" key={col.key}>
          <h3>{col.label}</h3>
          <ul>
            {PLACEHOLDER[col.key].map((item, idx) => (
              <li key={idx}>
                <a className="funding-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
} 