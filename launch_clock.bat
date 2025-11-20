@echo off
cd /d "%~dp0"
echo Starting React Clock App...
start "React Clock" /min npm run dev -- --open
exit
