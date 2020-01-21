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


# Notes
## React
Component in react:
>is something that returns a markup

Power of react is that it has `composability model` - we can put components inside components 
