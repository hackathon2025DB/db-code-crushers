import { useState } from 'react';
import './AskMe.css';

const CONTEXT_OPTIONS = [
  'Availing Loan',
  'Availing Govt Subsidy',
  'KYC Process',
  'Investment Advice',
  'Tax Planning',
];

const LOAN_TYPES = ['Personal Loan', 'Business Loan', 'Home Loan', 'Education Loan'];
const BUSINESS_AREAS = ['Manufacturing', 'Retail', 'Services', 'Agriculture', 'Other'];
const REGIONS = ['North', 'South', 'East', 'West', 'Central', 'North-East'];

function AvailLoanFlow() {
  const [step, setStep] = useState(0);
  const [businessArea, setBusinessArea] = useState('');
  const [region, setRegion] = useState('');
  const [amount, setAmount] = useState('');
  const [assets, setAssets] = useState('');
  const [loanType, setLoanType] = useState('');

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);

  return (
    <div className="askme-guided-flow">
      {step === 0 && (
        <div className="askme-chat-bubble user">I want to avail a loan.</div>
      )}
      {step === 0 && (
        <div className="askme-chat-bubble bot">
          What is your area of business?
          <div className="askme-options">
            {BUSINESS_AREAS.map(area => (
              <button key={area} onClick={() => { setBusinessArea(area); next(); }}>{area}</button>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <>
          <div className="askme-chat-bubble user">{businessArea}</div>
          <div className="askme-chat-bubble bot">
            Which region are you located in?
            <div className="askme-options">
              {REGIONS.map(r => (
                <button key={r} onClick={() => { setRegion(r); next(); }}>{r}</button>
              ))}
            </div>
            <button className="askme-back" onClick={prev}>Back</button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="askme-chat-bubble user">{region}</div>
          <div className="askme-chat-bubble bot">
            What is the loan amount you are looking for?
            <input
              type="number"
              className="askme-input"
              placeholder="Enter amount (₹)"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min={1000}
            />
            <button disabled={!amount} onClick={next}>Next</button>
            <button className="askme-back" onClick={prev}>Back</button>
          </div>
        </>
      )}
      {step === 3 && (
        <>
          <div className="askme-chat-bubble user">₹{amount}</div>
          <div className="askme-chat-bubble bot">
            What assets do you currently have? (e.g., property, equipment, savings)
            <input
              type="text"
              className="askme-input"
              placeholder="List your assets"
              value={assets}
              onChange={e => setAssets(e.target.value)}
            />
            <button disabled={!assets} onClick={next}>Next</button>
            <button className="askme-back" onClick={prev}>Back</button>
          </div>
        </>
      )}
      {step === 4 && (
        <>
          <div className="askme-chat-bubble user">Assets: {assets}</div>
          <div className="askme-chat-bubble bot">
            What type of loan do you want to avail?
            <div className="askme-options">
              {LOAN_TYPES.map(type => (
                <button key={type} onClick={() => { setLoanType(type); next(); }}>{type}</button>
              ))}
            </div>
            <button className="askme-back" onClick={prev}>Back</button>
          </div>
        </>
      )}
      {step === 5 && (
        <>
          <div className="askme-chat-bubble user">{loanType}</div>
          <div className="askme-chat-bubble bot">
            <strong>Summary:</strong>
            <ul>
              <li>Area of Business: {businessArea}</li>
              <li>Region: {region}</li>
              <li>Amount: ₹{amount}</li>
              <li>Assets: {assets}</li>
              <li>Loan Type: {loanType}</li>
            </ul>
            <div>Thank you! Our advisor will contact you soon for the next steps.</div>
            <button onClick={() => { setStep(0); setLoanType(''); setBusinessArea(''); setRegion(''); setAmount(''); setAssets(''); }}>Start Over</button>
          </div>
        </>
      )}
    </div>
  );
}

export default function AskMe() {
  const [selected, setSelected] = useState(CONTEXT_OPTIONS[0]);

  return (
    <div className="askme-layout">
      <aside className="askme-contexts">
        <h3>Select Context</h3>
        <ul>
          {CONTEXT_OPTIONS.map(option => (
            <li key={option}>
              <button
                className={selected === option ? 'active' : ''}
                onClick={() => setSelected(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className="askme-chat">
        <h3>Chat ({selected})</h3>
        <div className="chat-window">
          {selected === 'Availing Loan' ? (
            <AvailLoanFlow />
          ) : (
            <div className="chat-placeholder">Chat UI coming soon...</div>
          )}
        </div>
      </section>
    </div>
  );
} 