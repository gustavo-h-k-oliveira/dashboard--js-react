import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function Bench() {
  const { id } = useParams();
  return (
    <div>
        <h1>Bench Page: {id}</h1>
    </div>
  );
}
