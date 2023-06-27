[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/casually-button)

# How to Use

### Link to HTML file
Attach this script within the `<head>` or `<body>` scope in standalone HTML files, cross-language net frameworks, or when NPM import fails.

    <script type="module" src="https://unpkg.com/casually-button@latest/casually-button.js"></script>

### Install from NPM
Install `casually-button` with any NodeJS framework (e.g. React, Vue, Svelte, Angular) or ES architecture that uses NPM.  

    npm i casually-button

Import and it's ready to go! No need to declare the module internally.

    import 'casually-button'


## Props

#### `skin`: `'platinum'` | `'asphalt'`
Color variants. Default is **platinum**

#### `shape`: `'hex'` | `'wedge'`
Shape variants. Default is **hex**

#### `text`: `<your string>`
Text content inside the button

#### `link`: `<your url>`
Link to direct to when clicked


## Example usages

    <casually-button text="Submit" link="/submit"></casually-button>

    <casually-button 
        text="Visit Github"
        link="https://github.com/"
        skin="asphalt"
        shape="wedge"
    ></casually-button>