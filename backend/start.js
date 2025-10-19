#!/usr/bin/env node

// Simple startup script for Railway
console.log('Starting Strapi server...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', process.env.PORT);
console.log('Host:', process.env.HOST);

// Start Strapi
require('@strapi/strapi/lib/Strapi').default().start();
