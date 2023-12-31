import React from 'react'
import ReactDOM from 'react-dom/client';



// // const heading = React.createElement("h1", { id: "heading", xyz: "xyz" }, "Hello World from React");
// // console.log(heading)// its giving the object (just give ReactElement) not a h1 tag

// // // ReactElement(object) => HTML(Browser Understand)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // console.log(root)
// // root.render(heading); // here render upcoming  object to h1 tag and show it to browser



// /****
//  *
//  *   <div id="parent">
//  *      <div id="child">
//  *         <h1 >I am h1 tag</h1>
//  *      </div>
// *
//  *   </div>
//  *
//  *
//  *
//  */

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child1" },
//         [React.createElement("h1", { id: "heading" },
//             "I am h1 tag"
//         ), React.createElement("h2", { id: "heading" },
//             "I am h2 tag"
//         )]
//     ), React.createElement("div", { id: "child2" },
//         [React.createElement("h1", { id: "heading" },
//             "I am h1 tag"
//         ), React.createElement("h2", { id: "heading" },
//             "I am h2 tag"
//         )]
//     )]
// )
// root.render(parent)

//Episode 3


// const heading = React.createElement("h1", { id: "heading" }, "Namaste React")
// console.log(heading)

//JSX 
// JSX (transpile before its reaches to JS)-PARCEL-Babel
//JSX => Babel transpile it to React.createElement => ReactElement -JS Object =>HTMLElement(render)

//ReactElement
const heading = (<h1 id="heading">Namaste React Using JSX</h1>)

//ReactComponent 
const Title = () => <h1 id="heading">Namaste React Using JSX</h1>

const title = <h1>this is a title</h1>

//Component Composition
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            {title}
            <h1>
                This is a React Component
            </h1>
        </div>
    )
}

// console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(<HeadingComponent />)

