#!/bin/bash
if [ $# -eq 0 ]; then
	echo "No hay argumentos"
fi
count=1
for arg in "$@"
do
	echo "$arg"
	count=$((count + 1))
	if [ $count -gt 3 ]; then
		break
	fi
done
