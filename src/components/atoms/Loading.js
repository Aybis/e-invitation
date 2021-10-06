import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <div className="App">
      <div className="loading">
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
        <div className="loading__square"></div>
      </div>
    </div>
  );
}
