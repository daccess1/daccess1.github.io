#! /bin/bash

shopt -s nullglob       # Globs that match nothing expand to nothing
shopt -s globstar       # ** matches multiple directory levels

root_webp_dir=/home/grannysbuds/WebstormProjects/umperium/umperium-mini-app/img

for png_path in **/*.png ; do
    png_file=${png_path##*/}
    [[ $png_path == */* ]] && png_dir=${png_path%/*} || png_dir=.

    webp_dir=${root_webp_dir}/${png_dir}
    webp_path=${webp_dir}/${png_file%.jpg}.png.webp

    [[ -d $webp_dir ]] || mkdir -p -- "$webp_dir"
    cwebp -q 100 "$png_path" -o "$webp_path"
done
