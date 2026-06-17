# App Store submit — run in Windows PowerShell (interactive).
# Prerequisites:
# 1. App Store Connect app created for bundle ID: com.zikr.dailydhikr
# 2. eas.json -> submit.production.ios.ascAppId filled (numeric App ID)
# 3. Production iOS build finished: npm run build:ios:production

$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

$eas = Get-Content "eas.json" -Raw
if ($eas -match 'YOUR_ASC_APP_ID') {
  Write-Host ""
  Write-Host "ERROR: ascAppId not set in eas.json" -ForegroundColor Red
  Write-Host "1. Open https://appstoreconnect.apple.com/apps"
  Write-Host "2. Select ZIKR app -> App Information -> Apple ID (numeric)"
  Write-Host "3. Put that number in eas.json -> submit.production.ios.ascAppId"
  Write-Host ""
  exit 1
}

Write-Host ""
Write-Host "=== ZIKR iOS App Store Submit ===" -ForegroundColor Green
Write-Host "Profile: production"
Write-Host ""
Write-Host "You will be asked for Apple / App Store Connect credentials." -ForegroundColor Yellow
Write-Host ""

$env:Path = "C:\Program Files\nodejs;" + $env:Path
npx eas-cli submit --platform ios --profile production
