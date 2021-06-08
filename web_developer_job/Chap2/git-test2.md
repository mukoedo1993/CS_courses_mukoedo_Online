```
git config --global user.name "mukoedo1993"
```


```
git config --global user.email "Youremail@address.com"
```

```
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap2$ pwd
/home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap2
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap2$ git --version
git version 2.25.1
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap2$ cd ..
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job$ cd Chap2
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap2$ cd '/home/zcw/sec6_test' #We just drag the icon of new-created directory towards here.
(base) zcw@mukoedo1993:~/sec6_test$ pwd
/home/zcw/sec6_test
(base) zcw@mukoedo1993:~/sec6_test$ mkdir "hello-world"
(base) zcw@mukoedo1993:~/sec6_test$ cd hello-world
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git init # initialize an empty repo here.
Initialized empty Git repository in /home/zcw/sec6_test/hello-world/.git/
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ touch "index.html"
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git add *.html
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git commit -m'my first commit test!'
[master (root-commit) fe5ca7d] my first commit test!
 1 file changed, 2 insertions(+)
 create mode 100644 index.html
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ git checkout -- . # reverse back to the status before the last commit.
(base) zcw@mukoedo1993:~/sec6_test/hello-world$ cd ..
(base) zcw@mukoedo1993:~/sec6_test$ # Pull down our existing repo.
(base) zcw@mukoedo1993:~/sec6_test$ git clone https://github.com/LearnWebCode/welcome-to-git.git
Cloning into 'welcome-to-git'...
remote: Enumerating objects: 9, done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 9
Unpacking objects: 100% (9/9), 467.34 KiB | 1.66 MiB/s, done.
```