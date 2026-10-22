import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { HooksApp } from './HooksApp';

// Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
