import { useEffect, useState } from 'react';
import './SplashScreen.css';

// Module-level: runs exactly once per page load, before any React lifecycle.
// sessionStorage is cleared when the browser/tab is closed, so this is true
// on every fresh browser session and false on in-session refreshes.
const SHOW_SPLASH = !sessionStorage.getItem('sk_splash_shown');
if (SHOW_SPLASH) sessionStorage.setItem('sk_splash_shown', 'true');

const imageModules = import.meta.glob('../assets/startingPage/*', { eager: true });
const allImages = Object.values(imageModules).map(m => m.default);

const COLUMN_COUNT = 6;
const COLUMN_SPEEDS = [5, 6.5, 4.5, 5.8, 4.2, 6];

const columns = (() => {
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  const cols = Array.from({ length: COLUMN_COUNT }, () => []);
  shuffled.forEach((img, i) => cols[i % COLUMN_COUNT].push(img));
  return cols;
})();

export default function SplashScreen() {
  const [visible, setVisible] = useState(SHOW_SPLASH);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!SHOW_SPLASH) return;

    // Runs twice in Strict Mode dev — cleanup cancels old timers and
    // this re-fires with fresh ones. SHOW_SPLASH is a stable module constant
    // so both runs proceed correctly.
    const t1 = setTimeout(() => setFading(true), 3000);
    const t2 = setTimeout(() => setVisible(false), 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-overlay${fading ? ' splash-fading' : ''}`}>
      <div className="splash-columns">
        {columns.map((colImages, colIndex) => {
          const isDown = colIndex % 2 !== 0;
          const track = [...colImages, ...colImages, ...colImages];
          return (
            <div key={colIndex} className="splash-column">
              <div
                className="splash-track"
                style={{
                  animationName: isDown ? 'splashScrollDown' : 'splashScrollUp',
                  animationDuration: `${COLUMN_SPEEDS[colIndex]}s`,
                  animationDelay: `${colIndex * -0.9}s`,
                }}
              >
                {track.map((src, i) => (
                  <div key={i} className="splash-image-wrapper">
                    <img src={src} alt="" className="splash-image" loading="eager" />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="splash-vignette" />
      <div className="splash-fade-top" />
      <div className="splash-fade-bottom" />
    </div>
  );
}
