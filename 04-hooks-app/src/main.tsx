import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { Toaster } from 'sonner';
import { getUserAction } from './08-use-suspense/api/get-user.action';

// Components
// import { HooksApp } from './HooksApp';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { ScrambleWords } from './05-useReducer/ScrambleWorldsUseState';
// import { ScrambleWords } from './05-useReducer/ScrambleWorldsUseReducer';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { InstagromApp } from './07-useOptimistic/InstragromApp';
import { ClientInfiormation } from './08-use-suspense/ClientInfiormation';

// Styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={(
      <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl'>Cargando...</h1>
      </div>
    )}>
      <ClientInfiormation getUser={ getUserAction(100) } />
    </Suspense>
  </StrictMode>,
)
