# Download Patreon career screenshots into public/images/start/
# Run from paralives-web: .\scripts\fetch-start-career-images.ps1
#
# 1. Open https://www.patreon.com/posts/how-jobs-and-in-92227432
# 2. Right-click each in-post image → Copy image address
# 3. Paste URLs when prompted (4 images, top to bottom in the post)

$ErrorActionPreference = 'Stop'
$outDir = Join-Path $PSScriptRoot '..\public\images\start'
$names = @(
  'careers-enrolled.webp',
  'careers-upgraded.webp',
  'careers-perk-cards.webp',
  'careers-postings.webp'
)

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

Write-Host "Paste 4 image URLs from the Patreon post (one per line). Empty line skips."
$urls = @()
for ($i = 0; $i -lt 4; $i++) {
  $u = Read-Host "URL $($i + 1) / $($names[$i])"
  if ($u) { $urls += $u.Trim() }
}

if ($urls.Count -eq 0) {
  Write-Host 'No URLs entered. Save WebP files manually — see public/images/start/README.md'
  exit 0
}

$i = 0
foreach ($url in $urls) {
  if ($i -ge $names.Length) { break }
  $dest = Join-Path $outDir $names[$i]
  Write-Host "Downloading $($names[$i]) ..."
  curl.exe -fsSL --max-time 120 -o $dest $url
  $i++
}

Write-Host "Done. Files in $outDir"
