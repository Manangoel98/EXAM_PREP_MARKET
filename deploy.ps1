# Student Frontend Deploy Script
# Deploys student-frontend to Vercel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deploying Student Frontend to Vercel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Update dependencies first (ensures latest packages)
Write-Host "Updating dependencies..." -ForegroundColor Yellow
pnpm update

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "pnpm update failed! Fix errors before deploying." -ForegroundColor Red
    exit 1
}

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    pnpm install
}

# Build the app first (optional but recommended)
Write-Host ""
Write-Host "Building the application..." -ForegroundColor Green
pnpm build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Build failed! Fix errors before deploying." -ForegroundColor Red
    exit 1
}

# Deploy to Vercel (production)
Write-Host ""
Write-Host "Deploying to Vercel (production)..." -ForegroundColor Green
Write-Host ""

vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Deployment Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Deployment Failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "If this is your first deploy, run 'vercel' first to link the project." -ForegroundColor Yellow
}
