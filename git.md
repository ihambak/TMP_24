…or create a new repository on the command line
echo "# cgt-tree" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/000000
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/000000
git branch -M main
git push -u origin main

git branch -M 1.0.0
git push -u origin 1.0.0
