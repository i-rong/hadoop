#! /bin/bash
JS_PATH_SRC=/home/hadoop/hd/website/static/js/src/
JS_PATH_DES=/home/hadoop/hd/website/static/js/dist/
find ${JS_PATH_SRC} -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DES}web.js
