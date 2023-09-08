import React from 'react';
import HomeScreen from './HomeScreen';

test('renders HomeScreen correctly', () => {  
  
  const welcomeText = getByText('Welcome to HomeScreen!');
  expect(welcomeText).toBeTruthy();
});
