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

Run BEFORE Making your changes:

1. ```git checkout master && git fetch origin master ```
2. ```git pull --rebase origin master```
  - If that doesn't work: ```git reset --hard origin/master```
  - Followed by" ```git pull --rebase origin master```.
3. ```git checkout -b [BRANCH-NEW-NAME]```

Make changes to your files etc. Then run:

1. ```git add --all```
2. ```git commit -m "DESCRIPTION"```
3. ```git push origin [BRANCH-NEW-NAME]```

After that, go into: [https://github.com/saescapa/ffsb](https://github.com/saescapa/ffsb)
and fill up the 'pull request' button.
