@echo off
echo ========================================
echo   Sport Clube Borbense Development
echo ========================================
echo.

REM Set environment variables for backend
set ADMIN_JWT_SECRET=your-admin-jwt-secret-here
set API_TOKEN_SALT=your-api-token-salt-here
set TRANSFER_TOKEN_SALT=your-transfer-token-salt-here
set APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4

echo Starting Strapi Backend...
echo Backend will be available at: http://localhost:1337/admin
echo.
echo Press Ctrl+C to stop the backend, then the frontend will start automatically.
echo.

cd /d %~dp0backend
npm run develop

echo.
echo Backend stopped. Starting Frontend...
echo Frontend will be available at: http://localhost:3000
echo.

cd /d %~dp0frontend
npm run dev
