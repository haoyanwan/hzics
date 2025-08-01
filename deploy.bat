@echo off
echo Starting deployment to Alibaba Cloud OSS...

REM Build the project
echo Building React app...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% neq 0 (
    echo Build failed. Deployment aborted.
    exit /b 1
)

echo Build successful. Uploading to OSS...

REM Upload build folder to OSS bucket
REM --update flag only uploads changed files
REM --delete flag removes files from OSS that don't exist locally (optional)
ossutil cp -r build/ oss://hongkongstaticwebsite/ --update

REM Check if upload was successful
if %ERRORLEVEL% equ 0 (
    echo Deployment successful!
    echo Website URL: https://hongkongstaticwebsite.oss-cn-hongkong.aliyuncs.com
) else (
    echo Deployment failed!
    exit /b 1
)

pause