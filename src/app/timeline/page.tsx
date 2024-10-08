import './timeline.css';

const TimelineEntries = [
  {
    key: 'graduation',
    description: 'Graduated from the University of Waterloo (Computer Engineering, BASc)',
    label: 'Jun \'18',
    image: '',
  },
  {
    key: 'job1',
    description: 'Joined Flybits as a Junior frontend developer',
    label: 'Oct \'18',
    image: '',
  },
  {
    key: 'gap',
    description: 'Taught English as an Assistant Language Teacher in Nagasaki',
    label: 'Aug \'19',
    image: '',
  },
  {
    key: 'job2',
    description: 'Re-joined Flybits as an intermediate frontend engineer',
    label: 'Oct \'21',
    image: '',
  },
  {
    key: 'job3',
    description: 'Promoted to senior frontend engineer at Flybits',
    label: 'Apr \'23',
    image: '',
  },
];

const MAIN_CLASS = 'timeline';
const Timeline = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        {TimelineEntries.map(item => (
          <div key={`timeline-item-${item.key}`} className="flex items-center gap-16">
            <div className="w-14">{item.label}</div>
            <div className={`${MAIN_CLASS}__item relative pl-8 border-l-4 border-[var(--foreground)] py-8`}>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
