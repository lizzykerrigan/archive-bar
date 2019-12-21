/* credit to @selbekk for this function and its related CSS 
https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
*/

import React from 'react'

function FadeInSection({ children }) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
