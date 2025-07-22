import { useState } from 'react';
import './KYCDocuments.css';

const DOC_TYPES = [
  'Aadhaar Card',
  'PAN Card',
  'Passport',
  'Voter ID',
  'Driving License',
];

export default function KYCDocuments() {
  const [selectedType, setSelectedType] = useState(DOC_TYPES[0]);
  const [uploaded, setUploaded] = useState([]);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }

  function handleUpload() {
    if (preview && fileName) {
      setUploaded(prev => [
        ...prev,
        { type: selectedType, url: preview, name: fileName }
      ]);
      setPreview(null);
      setFileName('');
    }
  }

  // For each doc type, show uploaded or placeholder
  const gridDocs = DOC_TYPES.map(type => {
    const doc = uploaded.find(d => d.type === type);
    return doc || { type, placeholder: true };
  });

  return (
    <div className="kyc-layout">
      <aside className="kyc-upload">
        <h3>Upload Document</h3>
        <label>
          Document Type
          <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
            {DOC_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
        {preview && (
          <div className="kyc-preview">
            <img src={preview} alt="Preview" />
            <div className="kyc-doc-name">{fileName}</div>
          </div>
        )}
        <label className="kyc-file-label kyc-file-btn">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <span>{preview ? 'Change File' : 'Choose File'}</span>
        </label>
        <button
          className="kyc-upload-btn"
          onClick={handleUpload}
          disabled={!preview}
        >
          Upload
        </button>
      </aside>
      <section className="kyc-docs-grid">
        <h3>Uploaded Documents</h3>
        <div className="kyc-grid">
          {gridDocs.map((doc, idx) => (
            <div className={`kyc-doc-card${doc.placeholder ? ' kyc-placeholder' : ''}`} key={doc.type}>
              {doc.placeholder ? (
                <div className="kyc-placeholder-img">No {doc.type} uploaded</div>
              ) : (
                <img src={doc.url} alt={doc.name} />
              )}
              <div className="kyc-doc-type">{doc.type}</div>
              {!doc.placeholder && <div className="kyc-doc-name">{doc.name}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 