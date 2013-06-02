#!/usr/local/bin

# Project Name: Didgeridoo IDE
# License: GPLv3
# GitHub: www.github.com/fmvilas/didgeridoo-ide
# Author: Francisco Mendez Vilas
#         fmvilas@gmail.com
#         @fmvilas
#         www.fmvilas.com
#
# File: build.sh
# Description:
# 
# Build, Compile and Uglify the js, css
# and less files.


# sad_print() and happy_print() has been
# taken from yeoman.io install script
# www.yeoman.io
# www.github.com/yeoman/yeoman


printf "\n\n\e[1;37;44m"
printf "                                                                         \n"
printf "   ____  _     _                 _     _               ___ ____  _____   \n"
printf "  |  _ \(_) __| | __ _  ___ _ __(_) __| | ___   ___   |_ _|  _ \| ____|  \n"
printf "  | | | | |/ _\` |/ _\` |/ _ \ '__| |/ _\` |/ _ \ / _ \   | || | | |  _|    \n"
printf "  | |_| | | (_| | (_| |  __/ |  | | (_| | (_) | (_) |  | || |_| | |___   \n"
printf "  |____/|_|\__,_|\__, |\___|_|  |_|\__,_|\___/ \___/  |___|____/|_____|  \n"
printf "                 |___/                                                   \n"
printf "                                                                         \n"
printf "\e[0m"

# Prints a header text
header() {
	printf '\n  \e[36m%s\e[0m \e[1m%s\e[0m\n\n' "•" "$1"
}

# This prints the ✘ in red,
# rest in bold.
sad_print(){
  printf '\n  \e[31m%s\e[0m \e[1m%s\e[0m %s\n\n' "✘" "$1" "$2"
}

# This prints ✓ in green,
# rest in bold.
happy_print(){
  printf '\n  \e[32m%s\e[0m \e[1m%s\e[0m %s\n\n' "✓" "$1" "$2"
}

# Welcome text
printf '\n\n  %s \e[1m%s\e[0m %s\n' "Welcome to" "Didgeridoo IDE" "build script"
printf "  ______________________________________\n\n"





# Build with RequireJS optimizing tool
#
# This action performs:
#
#     * Generate a single JS file called didgeridoo.js
#
#     * Optimize the entire project modules
#
#     * Generate a single CSS file called styles.css
#

header "Building Didgeridoo IDE ..."
node r.js -o app.build.js

if [[ $? == 1 ]]; then
	sad_print "Error building Didgeridoo IDE!"
	exit 1
fi

node r.js -o cssIn=./public/css/styles.css out=./build/public/css/styles.css

if [[ $? == 1 ]]; then
	sad_print "Error processing styles.css!"
	exit 1
fi

happy_print "Styles are now processed!"

cp -R ./public/fonts ./build/public/fonts

if [[ $? == 1 ]]; then
	sad_print "Error copying fonts!"
	exit 1
fi

happy_print "Fonts are now copied!"

cp -R ./public/images ./build/public/images

if [[ $? == 1 ]]; then
	sad_print "Error copying images!"
	exit 1
fi

happy_print "Images are now copied!"

happy_print "Building completed succesfully!"


# DONE! Nice Job!
printf '\n\n\e[1m\e[32m%s\e[0m\e[0m\n\n' "It's DONE! Nice job! :)"
