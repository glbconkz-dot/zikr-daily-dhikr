# iOS EAS build — run in Windows PowerShell (not Cursor agent terminal).
# Requires: Apple ID + Apple Developer Program for real iPhone install.

$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host ""
Write-Host "=== ZIKR iOS Build ===" -ForegroundColor Green
Write-Host "EAS account: mirok1"
Write-Host "Bundle ID:   com.zikr.dailydhikr"
Write-Host ""
Write-Host "When prompted:" -ForegroundColor Yellow
Write-Host "  1. Log in to Apple account -> Y (Yes)"
Write-Host "  2. Enter Apple ID + password"
Write-Host "  3. Approve 2FA on your iPhone/Mac"
Write-Host ""
Write-Host "If Apple account is locked: https://iforgot.apple.com" -ForegroundColor Yellow
Write-Host ""

$env:Path = "C:\Program Files\nodejs;" + $env:Path
npx eas-cli build --platform ios --profile preview
