#!/bin/bash

yarn build 
osascript -e 'tell application "Safari" to open location "localhost:4321"'
yarn start

