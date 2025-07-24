import { useState } from 'react';
import './LearnAbout.css';

const TOPICS = [
  { label: 'All Topics', value: 'all' },
  { label: 'Availing Loan', value: 'loan' },
  { label: 'Tax Filing', value: 'tax' },
  { label: 'GST Benefits', value: 'gst' },
];

const VIDEOS = [
  { id: '1', topic: 'loan', title: 'How to Avail a Loan', youtubeId: 'j6z8yOq6FXI' },
  { id: '2', topic: 'tax', title: 'Tax Filing Basics', youtubeId: 'zXUrjkwr4JE' },
  { id: '3', topic: 'gst', title: 'GST Benefits Explained', youtubeId: 'gqA22c0sNyk' },
  // { id: '4', topic: 'loan', title: 'Loan Eligibility Tips', youtubeId: 'eY52Zsg-KVI' },
  { id: '5', topic: 'tax', title: 'Tax Saving', youtubeId: '3v9hFUq4of0' },
  { id: '6', topic: 'gst', title: 'GST for Small Businesses', youtubeId: 'SiK1ULfJaEE' },
  { id: '7', topic: 'loan', title: 'PMEGP Loan Process', youtubeId: '9blKZSihu28' },

];

export default function LearnAbout() {
  const [selected, setSelected] = useState('all');
  const filtered = selected === 'all' ? VIDEOS : VIDEOS.filter(v => v.topic === selected);

  return (
    <div className="learnabout-layout">
      <div className="learnabout-filters">
        {TOPICS.map(t => (
          <button
            key={t.value}
            className={selected === t.value ? 'active' : ''}
            onClick={() => setSelected(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="learnabout-grid">
        {filtered.map(video => (
          <div className="learnabout-video" key={video.id}>
            <div className="video-thumb">
              <iframe
                width="100%"
                height="160"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-title">{video.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 