import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store'; 
import App from './App';
import '../src/i18n/i18n';

const queryClient = new QueryClient();



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker kapsamı ile kaydedildi:', registration.scope);
      })
      .catch((error) => {
        console.error('ServiceWorker kaydı başarısız oldu:', error);
      });
  });
}


ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
