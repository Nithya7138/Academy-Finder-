@echo off
echo Starting Academy Finder application...
echo.
echo Starting API server on port 3001...
start cmd /k "cd /d %~dp0 && node app.js"
echo.
echo Starting Next.js frontend on port 3004...
start cmd /k "cd /d %~dp0 && npm run dev"
echo.
echo Academy Finder is running!
echo API: http://localhost:3004
echo Frontend: http://localhost:3004g
echo.
echo Press any key to stop all servers...
pause > nul
taskkill /f /im node.exe
echo Application stopped.
echo 
