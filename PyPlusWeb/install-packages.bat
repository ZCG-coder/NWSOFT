title Here we go!
rem Asks the user to install packages
choice /C:YN /M:"Install packages? [Y/N]"
if %errorlevel% ==1 goto install
if %errorlevel% ==2 goto exit

:install
rem Install the packages
pip install pygments
pip install ttkthemes

:exit
pause
exit
