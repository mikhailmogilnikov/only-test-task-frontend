import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { HomePage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    ),
    children: [{ path: '/', element: <HomePage /> }],
  },
]);
