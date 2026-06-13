# Push local .env variables to EAS (preview + production).
# Requires: eas login, filled .env file
#
# Usage (PowerShell):
#   .\scripts\setup-eas-secrets.ps1
#
# Or manually:
#   eas env:push --environment preview --path .env
#   eas env:push --environment production --path .env

$ErrorActionPreference = "Stop"
$env:Path = "C:\Program Files\nodejs;" + $env:Path

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

$envExample = Join-Path $projectRoot ".env.example"
$envFile = Join-Path $projectRoot ".env"

if (-not (Test-Path $envFile)) {
  if (Test-Path $envExample) {
    Copy-Item $envExample $envFile
    Write-Host "Created .env from .env.example — fill in your API keys first." -ForegroundColor Yellow
  } else {
    Write-Host ".env.example not found." -ForegroundColor Red
    exit 1
  }
}

$required = @(
  "EXPO_PUBLIC_REVENUECAT_IOS_API_KEY",
  "EXPO_PUBLIC_REVENUECAT_ANDROID_API_KEY"
)

$envContent = Get-Content $envFile -Raw
$missing = @()
foreach ($key in $required) {
  $line = Select-String -Path $envFile -Pattern "^$([regex]::Escape($key))=(.*)$" | Select-Object -First 1
  if (-not $line) {
    $missing += $key
    continue
  }
  $val = $line.Matches.Groups[1].Value.Trim()
  if ($val -eq '' -or $val -match 'your_') {
    $missing += $key
  }
}

if ($missing.Count -gt 0) {
  Write-Host "Missing or placeholder values in .env:" -ForegroundColor Yellow
  $missing | ForEach-Object { Write-Host "  - $_" }
  Write-Host "Edit .env then run this script again." -ForegroundColor Yellow
  exit 1
}

Write-Host "Pushing env to EAS (preview)..." -ForegroundColor Cyan
npx eas env:push --environment preview --path .env
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Pushing env to EAS (production)..." -ForegroundColor Cyan
npx eas env:push --environment production --path .env
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Done. EAS builds will include RevenueCat keys." -ForegroundColor Green
Write-Host ""
Write-Host "Verify:" -ForegroundColor Cyan
Write-Host "  npx eas env:list --environment preview"
Write-Host "  npx eas env:list --environment production"
