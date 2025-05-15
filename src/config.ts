// src/config.ts
export const API_BASE_URL =
    window.location.hostname === 'localhost'
        ? 'http://localhost:3000'
        : 'https://core.arami.kr';
