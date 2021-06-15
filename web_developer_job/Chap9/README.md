# Lesson Goals #
1. Understand what a branch is.<br>
master branch as the primary, main, live and production version of our project.
Switch terminal is easily within vscode(ubuntu).<br>
Create a new branch for each new feature of our project. <br>
2. How to create a new branch.<br>
3. How to switch between branches.<br>
4. Merge one branch into another.<br>

To be continued <br>
1. "--no-ff" merge option... 
2. How to handle merge conflicts...
-----------------------------------------------------------------
```
git branch # list all of branches

git reset <file path> # unstage a file

#Create a new branch count-to-ten

#Checkout(switch to) count-to-ten branch
git checkout count-to-ten
# add an ordered list in the index.html


git add .
git commit -m'message'
git commit -m'count to ten! Complete!'

git checkout main
git merge count-to-ten # merge feature from count-to-ten into main

```

LEC 29TH