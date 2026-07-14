import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import { initAnalytics } from './lib/analytics';
import './index.css';

initAnalytics();

export const createRoot = ViteReactSSG({
  routes,
  // Ensure Helmet is initialized globally for SSG
});
