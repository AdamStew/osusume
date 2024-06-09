import { AppRoot } from '@dynatrace/strato-components-preview/core';
import ReactDOM from 'react-dom/client';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <AppRoot>
    <App />
  </AppRoot>
);
