import React from 'react';
import { Outlet } from 'react-router-dom';

export default function BenchLayout() {
  return (
    <div>
      <h1>Bench Layout</h1>
      <Outlet />
    </div>
  );
}
