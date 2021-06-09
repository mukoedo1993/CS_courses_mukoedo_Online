# 7th course #

1. Created a github account.<br>
2. Created a new empty repo on Github's server.<br>
3. Pushed our starter file on github.<br>

```
(base) zcw@mukoedo1993:~$ git clone Sites
fatal: repository 'Sites' does not exist
(base) zcw@mukoedo1993:~$ cd Sites
(base) zcw@mukoedo1993:~/Sites$ git clone https://github.com/LearnWebCode/travel-site-files.git
Cloning into 'travel-site-files'...
remote: Enumerating objects: 98, done.
remote: Total 98 (delta 0), reused 0 (delta 0), pack-reused 98
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git remote -v # server address of where git thinks you want to push to
origin	https://github.com/LearnWebCode/travel-site-files.git (fetch)
origin	https://github.com/LearnWebCode/travel-site-files.git (push)
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git remote set-url origin https://github.com/mukoedo1993/travel-site-sec7.git
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git remote -v
origin	https://github.com/mukoedo1993/travel-site-sec7.git (fetch)
origin	https://github.com/mukoedo1993/travel-site-sec7.git (push)
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git push origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/mukoedo1993/travel-site-sec7.git'
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/mukoedo1993/travel-site-sec7.git'
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git branch -M main
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git push -u origin main
Username for 'https://github.com': mukoedo1993
Password for 'https://mukoedo1993@github.com': 
Enumerating objects: 98, done.
Counting objects: 100% (98/98), done.
Delta compression using up to 4 threads
Compressing objects: 100% (95/95), done.
Writing objects: 100% (98/98), 3.37 MiB | 2.76 MiB/s, done.
Total 98 (delta 12), reused 0 (delta 0)
remote: Resolving deltas: 100% (12/12), done.
To https://github.com/mukoedo1993/travel-site-sec7.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ # modify the index.html file.
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   app/index.html

no changes added to commit (use "git add" and/or "git commit -a")
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git add -A
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git commit -m'for sec7 of course udemy only'
[main 066ff14] for sec7 of course udemy only
 1 file changed, 1 insertion(+), 1 deletion(-)
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ git push origin main
Username for 'https://github.com': mukoedo1993
Password for 'https://mukoedo1993@github.com': 
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 425 bytes | 425.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/mukoedo1993/travel-site-sec7.git
   308a29b..066ff14  main -> main
(base) zcw@mukoedo1993:~/Sites/travel-site-sec7$ 

```
