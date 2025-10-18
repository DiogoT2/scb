Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Sport Clube Borbense Development" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set environment variables for backend
$env:ADMIN_JWT_SECRET = "your-admin-jwt-secret-here"
$env:API_TOKEN_SALT = "your-api-token-salt-here"
$env:TRANSFER_TOKEN_SALT = "your-transfer-token-salt-here"
$env:APP_KEYS = "your-app-key-1,your-app-key-2,your-app-key-3,your-app-key-4"

Write-Host "[1/2] Starting Strapi Backend (Port 1337)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\backend'; npm run develop"

Write-Host "[2/2] Starting Next.js Frontend (Port 3000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\frontend'; npm run dev"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Both servers are starting..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend:  http://localhost:1337/admin" -ForegroundColor Yellow
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
