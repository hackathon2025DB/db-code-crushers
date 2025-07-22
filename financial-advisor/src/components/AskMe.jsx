import { useState } from 'react';
import './AskMe.css';

const CONTEXT_OPTIONS = [
  'Availing Loan',
  'Availing Govt Subsidy',
  'KYC Process',
  'Investment Advice',
  'Tax Planning',
];

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
          <div className="chat-placeholder">Chat UI coming soon...</div>
        </div>
      </section>
    </div>
  );
} 