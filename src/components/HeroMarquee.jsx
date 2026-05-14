const ITEMS = [
  'EXPERIENCE',
  'MULTIPLE PROJECTS',
  'FULLSTACK DEVELOPER',
  'REACT · NODE · CLOUD',
  '3+ YEARS BUILDING',
  'CLEAN CODE & UX',
  'FRONTEND DEVELOPER',
];

export default function HeroMarquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="hero-marquee" aria-hidden="true">
      <div className="hero-marquee__fade hero-marquee__fade--left" />
      <div className="hero-marquee__fade hero-marquee__fade--right" />
      <div className="hero-marquee__viewport">
        <div className="hero-marquee__track">
          {loop.map((text, i) => (
            <span key={`${text}-${i}`} className="hero-marquee__segment">
              <span className="hero-marquee__star" aria-hidden="true">
                ✦
              </span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
