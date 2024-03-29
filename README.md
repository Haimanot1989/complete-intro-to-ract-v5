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
            * Editor: 
               * format on save
               * Default Formatter : Prettier - Code formatter
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

* enable experimental syntax 
    * `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
    * create a `.babelrc` file and add 
    ```js
        {
            "presets": ["@babel/preset-react", "@babel/preset-env"],
            "plugins": ["@babel/plugin-proposal-class-properties"]
        }
    ```
    * What they do
        * `preset-react` brings all the plugins that we need to transpile react

        * `preset-env` transpiles out code for the environment that we specify(package.json/browserslist)
    * In `.eslintrc` add a parser option
        * `  "parser": "babel-eslint",`
            * We are telling eslint to use babel to understand the experimental syntax.

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

### Hooks
* Create the component
* Set the state of the component
    * import useState
    * declare a hook - (a way of having a stateful logic with react)
        * `  const [location, setLocation] = useState("Seattle, WA");`
        * location is the current state
        * setLocation is un updater for that piece of state. You can call this method whatever you like.
        * "Seattle, WA is the default 
        * useState creates a hook
    * give the filed that you want to manage the state of an onChangeHandler
        ```jsx 
        const SearchParams = () => {
        const [location, setLocation] = useState("Seattle, WA");

        return (
            <div className="search-params">
            <form>
                <label htmlFor="location">
                Location
                <input
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={e => setLocation(e.target.value)}
                />
                </label>
                <button>Submit</button>
            </form>
            </div>
        );
        };
        ```
    * Add two selects where one is dependent on the other
        ```jsx
        const SearchParams = () => {
        const [location, setLocation] = useState("Seattle, WA");
        const [animal, setAnimal] = useState("dog");
        const [breed, setBreed] = useState("");
        const [breeds, setBreeds] = useState([]);
        return (
            <div className="search-params">
            <form>
                <label htmlFor="location">
                Location
                <input
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={e => setLocation(e.target.value)}
                />
                </label>
                <label htmlFor="animal">
                Animal
                <select
                    id="animal"
                    value={animal}
                    onChange={e => setAnimal(e.target.value)}
                >
                    <option>All</option>
                    {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                        {animal}
                    </option>
                    ))}
                </select>
                </label>
                <label htmlFor="breed">
                Breed
                <select
                    id="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    disabled={breeds.length === 0}
                >
                    <option>All</option>
                    {breeds.map(breedString => (
                    <option key={breedString} value={breedString}>
                        {breedString}
                    </option>
                    ))}
                </select>
                </label>
                <button>Submit</button>
            </form>
            </div>
        );
        };

        export default SearchParams;

        ```
    * Generic dropdown hook: extract the common thing about creating dropdowns to a component
        ```jsx
            import React, { useState } from "react";

            const useDropdown = (label, defaultState, options) => {
            const [state, setState] = useState(defaultState);
            const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
            const Dropdown = () => (
                <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={state}
                    onChange={e => setState(e.target.value)}
                    onBlur={e => setState(e.target.value)}
                    disabled={options.length === 0}
                >
                    <option>All</option>
                    {options.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                    ))}
                </select>
                </label>
            );

            return [state, Dropdown, setState];
            };

            export default useDropdown;
        ```
    * SearchParams component when using the generic dropdown hook
        ```jsx
            import React, { useState } from "react";
            import { ANIMALS } from "@frontendmasters/pet";
            import useDropdown from "./useDropdown";
            const SearchParams = () => {
            const [location, setLocation] = useState("Seattle, WA");
            const [breeds, setBreeds] = useState([]);
            const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
            const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);
            return (
                <div className="search-params">
                <form>
                    <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location}
                        placeholder="location"
                        onChange={e => setLocation(e.target.value)}
                    />
                    </label>
                    <AnimalDropdown />
                    <BreedDropdown />
                            <button>Submit</button>
                </form>
                </div>
            );
            };

            export default SearchParams;
        ```

### Effects
* import the api client `import pet from "@frontendmasters/pet"`
* import `useEffect` from `react`
* call `useEffect()` in the component. Give it a function as a parameter. The callback will run after the component has rendered. Call to apis should be here, as you don't want to delay displaying something to the user, until the ajax response has come back.
    * An example of an effect and its declared dependencies(Which change of states should trigger this effect?). Whatever state updater you are calling on the callback should be listed in the dependency array(setBreeds and setBreed). If you do not have a dependency array, then whatever change of state in the component will trigger the effect(location for example). The effect will run every time something updates. If you want it to run once, just use empty array. This is useful for setting things up.
    ```jsx
        import React, { useState, useEffect } from "react";
        import pet, { ANIMALS } from "@frontendmasters/pet";
        import useDropdown from "./useDropdown";

        const SearchParams = () => {
        const [location, setLocation] = useState("Seattle, WA");
        const [breeds, setBreeds] = useState([]);
        const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
        const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);

        useEffect(() => {
            setBreeds([]);
            setBreed("");

            pet.breeds(animal).then(
            ({ breeds }) => {
                debugger;
                const breedStrings = breeds.map(({ name }) => name);
                setBreeds(breedStrings);
            },
            error => console.error(error)
            );
        }, [animal, setBreed, setBreeds]);

        return (
            <div className="search-params">
            <form>
                <label htmlFor="location">
                Location
                <input
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={e => setLocation(e.target.value)}
                />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
            </div>
        );
        };

        export default SearchParams;

    ```
* If you need the effect to run once, then give it an empty dependency array. This is useful for setting up things.
* If you want to run it every time the component updates, then remove the dependency array all together.


### Async & Routing
* `npm install -D cross-env` to be able to set cross platform env variables
* One way data flow
    * The general pattern for react is that Data flows from parent to child. This is very helpful in cases of error. We know where problems might have begun.

* Debugging
    * Dump pretty formatted view of the props to the dom
    ```jsx
        const Details = props => {
            return (
                <pre>
                <code>{JSON.stringify(props, null, 4)}</code>
                </pre>
            );
        };
    ```

### Error Boundaries 
* `getDriveStateFromError`
* `componentDidCatch` 
* `this.props.children` What ever the content of the component is
### Life cycle methods
* `componentDidMount` Runs when when the component first gets created. A lot like Effect, but we don't pass any dependencies here like we do with Effect. Useful for doing ajax request, set things up, integrate with other libraries 
* `componentDidUpdate` used to react to updates
* `componentWillMount` allows you to clean up things before the component leaves the DOM
* `componentWillReceiveProps` I'm about to receive brand new props
* `componentWillUpdate` runs every single time we get new state or new props

### Context
* How to avoid `prop-drilling` - which is passing props to multiple levels of nesting
* Context gives us a way to provide a global app state
* To use the context hook in a component, the context provider has to be a parent of that component
### JS tips
* `active: +event.target.dataset.index` The unary `+` coerses string to int 
* Whenever you are passing functions into children or whenever you are doing event listeners, use arrow function.
