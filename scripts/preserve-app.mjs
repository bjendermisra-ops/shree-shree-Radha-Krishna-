import { cpSync, existsSync } from 'node:fs';
// Preserve the existing standalone application assets without consuming or modifying them.
if (existsSync('app')) cpSync('app', 'dist/app', { recursive: true });

// Publish the original notification pages without modifying their source.
if (existsSync('notification')) cpSync('notification', 'dist/notification', { recursive: true, filter: source => !/(?:^|[\\/])(?:api|vercel\.json)$/.test(source) });
