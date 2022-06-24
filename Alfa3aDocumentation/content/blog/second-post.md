---
title: My second blog post
description: Ceci est mon premier essai de blog sous Nuxt
slug: second-post
img: export_excel_test.png
---



# GITHUB
##### compte
fbpmoreau@pm.me
Gitnor1?

##### terminal

git init
git config --global user.name = "PMOR"
git config --global user.email = "fbpmoreau@pm.me"
git config --get remote.origin.url
git add xxx OU *
(git status)
git commit -m "message"
git log
git checkout {identififiant log}
git checkout main -f
git branch
git branch accueil
git checkout accueil
git checkout main
git merge accueil
git branch -d accueil
git reset --hard HEAD
git revert {id log}
### declare le remote et sync
git remote add github <https://github...>
git fetch github

### config
```
git config --global --edit
```
2.  Execute `git config --list` to check current username & email in your local repo.
3.  Change username & email as desired. Make it a global change or specific to the local repo:  
    `git config [--global] user.name "Full Name"`  
    `git config [--global] user.email "email@address.com"`  
      
    Per repo basis you could also edit `.git/config` manually instead.
4.  Done!
```
git config --get remote.origin.url
```

Or just go to the repository page on Github and get the new URL. Then use

```
git remote set-url origin https://{new url with username replaced}
```
git remote set-url origin https://github.com/tryphonpm/DevTheoryNuxt3.gi
t
git remote --verbose


### macos afficher les fichiers cachés
**defaults write com.apple.finder AppleShowAllFiles TRUE**
**killall Finder**


# ERD
https://github.com/tryphonpm/ERD.git


