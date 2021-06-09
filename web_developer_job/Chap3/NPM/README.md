1. What is NPM? What is package management? Why would we use it?<br>
Node Package Manager<br>
resemblence: grocery <-- code<br>

<h>Baking a Cake</h>
- Flour<br>
- Sugar<br>
- Vanilla extract<br>
- Baking powder<br>

<h>Baking a... website</h>
- Bootstrap<br>
- Lodash<br>
- Auto compile CSS<br>
- Auto concat JS<br>

<h>NPM:</h>
a centralized place where developers share<br>
their code with the world free of charge.<br>
<br>
        Create better work. <br>
        Avoid reinventing the wheel.<br>
<br>
        Code can become outdated, or contain bugs.<br>
<br>
What is package management?<br>
        A package manager can automatically grab fresh copies
        of all our ingredients.




2. What types of files / packages do we hope to find on NPM?<br>
2 Types of packages<br>
#1 Node packages<br>
- Automation<br>
- Build tools<br>
- Server tasks<br>

#2 Other things<br>
- Lodash<br>
- Bootstrap<br>
- Normalize.css <br>

One-stop shop ->npm <br>
See script.txt<br>

3. Hands-on demo. Follow along step-by-step.<br>
```
npm install lodash
```

More organized way:
You could check package.json file:

```
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/NPM$ npm init -y
Wrote to /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/NPM/package.json:

{
  "name": "NPM",
  "version": "1.0.0",
  "description": "1. What is NPM? What is package management? Why would we use it?<br> Node Package Manager<br> resemblence: grocery <-- code<br>",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/NPM$ # The list above could help us to check the package.
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/NPM$ npm install lodash
npm WARN NPM@1.0.0 No repository field.

+ lodash@4.17.21
added 1 package from 2 contributors and audited 1 package in 0.855s
found 0 vulnerabilities

(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/NPM$ npm install normalize.css
npm WARN NPM@1.0.0 No repository field.

+ normalize.css@8.0.1
added 1 package and audited 2 packages in 0.538s
found 0 vulnerabilities

```

Even if delete a package, you could stll run npm install to recover it.<br>

Common Questions<br>
1. How do I know the exact name of packages?<br>

2. How do we actually use the package JS & CSS files?<br>
Leave the package exactly what they are in the module folder. Learn how to import files in the future.<br>

3. Why are the new package files not tracked by Git?<br>
See: https://github.com/mukoedo1993/travel-site-sec7/blob/main/.gitignore
It is the best practice. As long as we have the package.json file, there is no sense in bloating git repo for these files...
We will not add .gitignore file in the current directory.<br>
I add package-lock.json and package.json in the .gitignore file. <br>
