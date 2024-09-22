import { RouterProvider } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { router } from './router';

gsap.registerPlugin(useGSAP);

export const App = () => {
  return <RouterProvider router={router} />;
};
