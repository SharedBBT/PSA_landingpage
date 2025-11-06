Write-Host "🧹 PSA Landing Page Clean Script Starting..." -ForegroundColor Cyan

# 1️⃣ 删除所有 node_modules
$paths = @(
    "node_modules",
    "aa\node_modules",
    "server\node_modules"
)

foreach ($path in $paths) {
    if (Test-Path $path) {
        Write-Host "📦 Removing $path ..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force $path
    } else {
        Write-Host "✅ $path not found, skipping." -ForegroundColor Green
    }
}

# 2️⃣ 删除 lock 文件（防止冲突）
$lockFiles = @(
    "package-lock.json",
    "aa\package-lock.json",
    "server\package-lock.json"
)

foreach ($file in $lockFiles) {
    if (Test-Path $file) {
        Write-Host "🗑️ Removing $file ..." -ForegroundColor Yellow
        Remove-Item -Force $file
    }
}

# 3️⃣ 清理 npm 缓存
Write-Host "🧰 Cleaning npm cache ..." -ForegroundColor Yellow
npm cache clean --force

# 4️⃣ 清理 Git 缓存（让 .gitignore 生效）
Write-Host "🧹 Cleaning Git cache ..." -ForegroundColor Yellow
git rm -r --cached .
git add .
Write-Host "✅ Git cache cleaned and re-indexed." -ForegroundColor Green

# 5️⃣ 显示当前状态
Write-Host "`n📋 Current git status:" -ForegroundColor Cyan
git status

Write-Host "`n🎉 Clean complete! You can now safely commit & push." -ForegroundColor Green
