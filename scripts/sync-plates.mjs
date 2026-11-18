import { cpSync, mkdirSync } from 'node:fs';

mkdirSync('public/assets/plates', { recursive: true });
cpSync('assets/plates', 'public/assets/plates', { recursive: true });
