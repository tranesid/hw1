# HW1 Jest Starter Project

For this homework you will be finishing the hw1.js file located in the
src directory.  The methods have been stubbed out for you, you just need to
make them work.  Do not change the names of the function but you can add your own
and add your work where it says todo.

The test that are run are located in the hw1.test.js in the tests folder.  DO NOT EDIT
THESE!!! But you can look at them as they might give some clarification on what
is needed

### Getting Started
```

// NOTE: be in the directory in Iterm where you want this project to live (probable week1)

// clone project from github (ie. download from the internet)
$ git clone git@github.com:jimibue/jest_starter.git hw1

// navigate to the hw1 project in terminal
$ cd hw1

// remove link to github repo
$ git remote rm origin

// create a github repo and add you link
$ git remote add origin <your-ssh-link>

//Before starting to code, don't forget to install all dependencies.
$ yarn

```



### Running tests

Run all tests once:

```shell
yarn test
// or
yarn jest
```

Run specific file:

```shell
yarn test filename
// or
yarn jest filename
```


Run specific test:

```shell
yarn test -t 'string to match'
// or
yarn jest -t 'string to match'
```

### Git and Github
```
// DO THESE TWO STEPS JUST ONCE
// remove link to github repo
$ git remote rm origin

// create a github repo and add you link
$ git remote add origin <your-ssh-link>

// DO THESE STEPS WHEN YOU WANT TO "SAVE" YOUR CHANGES

// first save all files in vscode...
// stage changes
$ git add .

// commit changes
$ git commit -m 'changes'

// push up to github 
//(note it might be main instead of master depending how you setup github)
$ git push origin master
```

## Tools

- Jest for testing
