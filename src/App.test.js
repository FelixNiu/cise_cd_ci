import React from 'react';
 import ReactDOM from 'react-dom';
 import App from './App';
 it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(<App />, div);
 ReactDOM.unmountComponentAtNode(div);
 });
 
 describe('Addition', () => {
  it('knows that 2 and 3 make 5', () => {
  expect(2 + 3).toBe(5);
  });
  });
 