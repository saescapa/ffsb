# Committing here

This is for you to be able to edit everything in here.

## First time:

1. Make sure you have GIT installed: [Here](https://git-scm.com/downloads)
2. Proceed with going into your folder through Terminal or Command-Line.
  - Terminal || Command-Line:
    - Typing ```cd``` will allow you to go into a folder.
    - Typing ```ls``` will you give you the current FOLDERS you can 'cd' into.
    - Typing ```pwd``` will give you your current position in folders.
    - Typing ```mkdir ffsb``` will create a folder with name ffsb in
      the current directory you are in (Type 'ls' to find out where you are).
3. You want to create a folder 'ffsb' that is easily accessible.
4. Run ```git clone https://github.com/saescapa/ffsb.git``` in the Command
   Prompt / Terminal in the folder. You can double check you are in the right
  folder by typing ```ls```.

## Everytime you do edits

Run

1. ```git checkout master && git fetch origin master ```
2. ```git pull --rebase origin master```
  - If that doesn't work: ```git reset --hard origin/master```
  - Followed by" ```git pull --rebase origin master```.



git checkout -b [BRANCH-NEW-NAME]

MAKE CHANGES git status to make sure we have the right changes

git add --all

git commit -m "DESCRIPTION"

git push origin [BRANCH-NEW-NAME]

Go to your github fork repo and pull request. Don’t forget to add description and tag someone.
