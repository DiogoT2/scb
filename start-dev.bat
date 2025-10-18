@echo off
echo ========================================
echo   Sport Clube Borbense Development
echo ========================================
echo.
echo Starting both frontend and backend...
echo.

REM Set environment variables for backend
set ADMIN_JWT_SECRET=your-admin-jwt-secret-here
set API_TOKEN_SALT=your-api-token-salt-here
set TRANSFER_TOKEN_SALT=your-transfer-token-salt-here
set APP_KEYS=your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4

echo [1/2] Starting Strapi Backend (Port 1337)...
start "Strapi Backend" cmd /k "cd /d %~dp0backend && npm run develop"

echo [2/2] Starting Next.js Frontend (Port 3000)...
start "Next.js Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ========================================
echo   Both servers are starting...
echo ========================================
echo.
echo Backend:  http://localhost:1337/admin
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause >nul
