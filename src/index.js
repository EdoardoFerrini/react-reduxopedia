import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./app/layout/Header"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import Counter from './app/components/Counter';
import DestinationList from '../src/app/components/DestinationList'
import Destination from "../src/app/components/Destination"
import ResetApp from "../src/app/components/ResetApp"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetApp />
      <Header />
      <Counter />
      <div className='p-4 border text-center'>
        <h4 className='text-success'>Destination List</h4>
        <DestinationList />
        <Destination />
      </div>
      
    </Provider>
  </React.StrictMode>
);


