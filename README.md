## cheat sheet links
### [emmet](https://docs.emmet.io/cheat-sheet/)


## Tools
### Fonts for VScode
#### [FiraCode](https://github.com/tonsky/FiraCode/wiki)
1. Install it using brew and then in VSCode Preferences/settings/ 
2. search for font, 
3. add 'Fira Code' to Editor: font family
4. enable Editor: font ligatures
### That make writing react easy
* Generate a package.json file
>`npm init -y`
* Prettier - for better code quality by maintaining consistency in code format
    * How to install and set up
        1. `npm i -D prettier`
        2. add prettier to scripts
        3. format your code using `npm run format`
    *  Enabling formatting when saving code in VSCode
        1. EXTENSIONS --> Prettier - Code formatter --> Install
        2. Code --> Preferences --> Settings --> <Turn on two things>
            * Editor: format on save
            * Prettier: Require Config
        3. Create a bash config file
            * In the root folder of the project `touch .prettierrc`
            * put {} to use the standard formatting

* ESLint - smart code style checker
    * How to install and setup
        1. `npm i -D eslint eslint-config-prettier`
        2. create config file in the root directory and add config info
            * `touch .eslintrc.json`
        3. add lint to package.json scripts
        4. configure it for react
            * `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
            * add config details to the `.eslintrc.json` file
        5. Configure it for hooks
            * `npm i -D eslint-plugin-react-hooks`
            * add it to rules and plugins
  
    * Enable in VSCode
        1. EXTENSIONS --> ESLint --> Install
* npm Intellisense - autocompletion
    * Enable in VSCode
        1. EXTENSIONS --> npm Intellisense --> Install

### Packager / Bundler
#### Parcel
* How to install
    1. `npm i -D parcel-bundler`
    2. add it to script in package.json and point it to index.html
    3. run using `npm run dev` It has hot reloading

### Libraries
#### React and ReactDOM
* How to install
    1. `npm i react react-dom`
        * This will make these libraries present in our local computer
# Notes
## React
* Component in react is something that returns a markup
* Power of react is that it has `composability model` - we can put components inside components 
* To-way data binding is not free in react, it has to be setup
* All hooks can not be utilized with control flow statements, because the order they are called in matters