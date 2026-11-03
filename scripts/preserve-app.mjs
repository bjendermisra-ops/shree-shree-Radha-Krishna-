import { cpSync, existsSync } from 'node:fs';
// Preserve the existing standalone application assets without consuming or modifying them.
if (existsSync('app')) cpSync('app', 'dist/app', { recursive: true });
