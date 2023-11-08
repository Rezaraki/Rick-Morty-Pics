import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './App';
import { setupStore } from 'state/store';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </StrictMode>
  );
}
