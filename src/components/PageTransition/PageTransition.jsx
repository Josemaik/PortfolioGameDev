import { useState, useEffect } from 'react';
import './PageTransition.css';

export default function PageTransition({ isActive, onTransitionEnd, onCovered }) {
  const [phase, setPhase] = useState(''); // '', 'fade-in', 'show-logo', 'fade-out'

  useEffect(() => {
    if (isActive) {
      // Inicio de la transición
      setPhase('fade-in');
      
      // Mostrar logo después del fade-in. Llamamos onCovered justo después
      // para que la app pueda posicionar el scroll mientras la pantalla está cubierta.
      const logoTimer = setTimeout(() => {
        setPhase('show-logo');
        onCovered?.();
      }, 500);

      // Iniciar fade-out después de mostrar el logo
      const fadeOutTimer = setTimeout(() => {
        setPhase('fade-out');
      }, 2000);

      // Finalizar la transición
      const endTimer = setTimeout(() => {
        setPhase('');
        onTransitionEnd?.();
      }, 1500);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(fadeOutTimer);
        clearTimeout(endTimer);
      };
    }
  }, [isActive, onTransitionEnd, onCovered]);

  if (!isActive && !phase) return null;

  return (
    <div className={`page-transition ${phase}`}>
      <img 
        src="/assets/brand/brand-logo.gif" 
        alt="Brand Logo"
        className="transition-logo"
      />
    </div>
  );
}