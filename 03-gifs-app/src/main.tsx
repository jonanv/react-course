import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import { GifsApp } from './GifsApp';
import { MyCounterApp } from './counter/components/MyCounterApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GifsApp /> */}
    <MyCounterApp />
  </StrictMode>,
);
