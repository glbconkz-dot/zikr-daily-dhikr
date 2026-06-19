# Submit App Store REVIEW build to App Store Connect.
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host ""
Write-Host "=== ZIKR iOS Submit (appStoreReview) ===" -ForegroundColor Green
Write-Host ""

$env:Path = "C:\Program Files\nodejs;" + $env:Path
npx eas-cli submit --platform ios --profile appStoreReview
