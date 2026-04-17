// Wrapper script for React Start SSR server
// Provides explicit logging and error handling to surface startup failures

process.env.NODE_ENV = 'production';

console.log('[start.js] Starting React Start SSR server...');
console.log('[start.js] NODE_ENV:', process.env.NODE_ENV);
console.log('[start.js] PORT:', process.env.PORT || '3000');
console.log('[start.js] Loading dist/server/server.js...');

process.on('uncaughtException', (err) => {
  console.error('[start.js] Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('[start.js] Unhandled rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

import('./dist/server/server.js')
  .then(() => {
    console.log('[start.js] Server module loaded successfully.');
  })
  .catch((err) => {
    console.error('[start.js] Failed to load server module:', err);
    process.exit(1);
  });
