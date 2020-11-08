$directoryPath = (Get-Location).path
$source = $directoryPath + "/dist"
$zip = $directoryPath + "/publish.zip"
$apiUrl = "https://dousedashboard.scm.azurewebsites.net/api/zipdeploy"
Write-Host "Publishing to" $apiUrl
Write-Host "Building Angular"

ng build --prod


if ($lastexitcode -ne 0) {
	Write-Error 'ng build failed - exiting script without publishing'
	exit $lastexitcode
}

Write-Host 'Build complete'
Write-Host 'Starting publish to the cloud'

#Delete .zip file if exists from prior publish
if (Test-Path $zip) { Remove-Item $zip }

Add-Type -assembly "system.io.compression.filesystem"
[io.compression.zipfile]::CreateFromDirectory($source, $zip)
Write-Host "Zip complete"

$username = "esaith"
$password = "dev4days88!" 

Write-Host "Uploading ..."
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $username, $password)))
$userAgent = "powershell/1.0"
Invoke-RestMethod -Uri $apiUrl -Headers @{Authorization = ("Basic {0}" -f $base64AuthInfo) } -UserAgent $userAgent -Method POST -InFile $zip -ContentType "multipart/form-data"
Write-Host "Publish complete"
