import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { HooksApp } from './HooksApp';
import { TrafficLight } from './01-useState/TrafficLight';

// Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLight />
  </StrictMode>,
)
