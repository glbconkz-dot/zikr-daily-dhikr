# iOS PRODUCTION build (App Store) — run in Windows PowerShell.
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host ""
Write-Host "=== ZIKR iOS PRODUCTION Build (App Store) ===" -ForegroundColor Green
Write-Host "Profile:    production"
Write-Host "Bundle ID:  com.zikr.dailydhikr"
Write-Host ""
Write-Host "When prompted:" -ForegroundColor Yellow
Write-Host "  - Log in to Apple account -> Y"
Write-Host "  - Apple ID + password + 2FA"
Write-Host "  - Distribution certificate / provisioning (EAS can auto-create)"
Write-Host ""
Write-Host "After build finishes:" -ForegroundColor Cyan
Write-Host "  npm run submit:ios          (production — no auto Premium)"
Write-Host "  npm run submit:ios:review   (review build — Premium auto-unlocked)"
Write-Host ""
Write-Host "App Store Connect review notes:" -ForegroundColor Cyan
Write-Host "  scripts/app-store-review-notes.txt"
Write-Host ""

$env:Path = "C:\Program Files\nodejs;" + $env:Path
npx eas-cli build --platform ios --profile production
