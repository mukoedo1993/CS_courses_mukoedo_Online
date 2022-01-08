Start from lec.15
---------------------------------------------
So far:
-Git
-Node
- NPM
- Webpack

1. Have a good attitude.
2. Create amazing website.
3. Super organized CSS

Lesson Overview:
1. File architecture

Sidenote:
(i): A programming file that starts with  is a file that should be 
treated as partial file. This file is prepared as being imported.
(ii): Import is a css native feature, but we don't want our web browsers to download multiple css files. Instead, we want postcss
and webpack to see these import lines, and replace these lines with contents from these source files word by word.
(iii): Our main/entry CSS files doesn't contain any CSS styles by itself, but it works as a receipe which points to ingredients files in other places,
which make our files super organized.

2. Identify patterns in design

3. Rules to follow for creating class names and writing our CSS selectors.


What is our goal?



Steps:
Run:
npm install postcss-import --save-dev
