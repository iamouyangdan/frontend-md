
call npm run docs:build

@REM call node ./scripts/rename.js

call cd docs/.vuepress/dist

call git init
call git add -A
call git commit -m 'deploy'

call git push -f git@github.com:iamouyangdan/frontend-md.git master:gh-pages
