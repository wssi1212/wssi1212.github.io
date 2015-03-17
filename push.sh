#!/bin/bash
#This is a simple bash script to simplify the upload process

if [ $# -ne 1 ]
then
	echo "Usage: ./push \"Commit message\""
	exit 1
else
	git add *
	git commit -m "$1"
	git push
fi
