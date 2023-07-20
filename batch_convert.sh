#!/bin/bash

for file in $(find . -name "*.png"); do
  filename=$(basename "$file")
  filename="${filename%.*}"

  directory=$(dirname "$file")

  cwebp input "$file" -q 90  -alpha_q 100 -m 6 -o "$directory/$filename-alpha.webp"
done

