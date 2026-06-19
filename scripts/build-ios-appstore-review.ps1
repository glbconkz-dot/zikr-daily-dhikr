# iOS App Store REVIEW build — Premium auto-unlocked for Apple reviewers.
# Run in Windows PowerShell (interactive).
$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host ""
Write-Host "=== ZIKR iOS App Store REVIEW Build ===" -ForegroundColor Green
Write-Host "Profile:    appStoreReview (EXPO_PUBLIC_APP_REVIEW_MODE=true)"
Write-Host "Bundle ID:  com.zikr.dailydhikr"
Write-Host ""
Write-Host "Reviewers can also unlock Premium without this build:" -ForegroundColor Cyan
Write-Host "  Premium tab -> tap crown icon 5 times within 3 seconds"
Write-Host "  OR Settings -> tap version number 5 times within 3 seconds"
Write-Host ""
Write-Host "After build finishes:" -ForegroundColor Cyan
Write-Host "  npm run submit:ios:review"
Write-Host ""

$env:Path = "C:\Program Files\nodejs;" + $env:Path
npx eas-cli build --platform ios --profile appStoreReview
