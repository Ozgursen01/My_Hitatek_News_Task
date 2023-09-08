import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import store from './src/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query'; 

const queryClient = new QueryClient(); 

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MainStack />
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
