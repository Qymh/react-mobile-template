#!/bin/bash
set -e

# 带时间的日志输出
log() {
  echo -e "\033[31m [$(date '+%Y-%m-%d %H:%M:%S')] $1 \033[0m"
}

log "build code"
yarn build

git add .

if [[ `git status -s | grep -o -E ".*"` ]]
then
  git commit -m "chore: 🤖 build code"
fi

git push