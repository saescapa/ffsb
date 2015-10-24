# Comiting here

## First time:

1. Make sure you have GIT installed: [Here](https://git-scm.com/downloads)
2. Proceed with going into your folder through Terminal or Command-Line.
  - Terminal || Command-Line:
    - Typing 'cd' will allow you to go into a folder.
    - Typing 'ls' will you give you the current FOLDERS you can 'cd' into.
    - Typing 'pwd' will give you your current position in folders.
    - Typing 'mkdir [foldername]' will create a folder with name foldername in
      the current directory you are in (Type 'ls' to find out where you are).
3. You want to cd into a folder and create another folder where you'll have all
   of our work.
4. Run ```git clone https://github.com/saescapa/ffsb.git```

## Following times

```
git fetch origin master
```


git pull --rebase origin master OR git reset --hard origin/master

	git pull --rebase origin master


git checkout -b [BRANCH-NEW-NAME]

MAKE CHANGES git status to make sure we have the right changes

git add --all

git commit -m "DESCRIPTION"

git push origin [BRANCH-NEW-NAME]

Go to your github fork repo and pull request. Don’t forget to add description and tag someone.
