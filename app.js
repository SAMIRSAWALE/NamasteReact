// 
{/* <div id="parent">
    <div id="child"> 
        <h1> 
            hellow workd
        </h1>
    </div>
</div> 
<div id="parent1">
    <div id="child1"> 
        <h1> 
            hellow workd
        </h1>
    </div>
</div>*/}
// 


const heading =  React.createElement(
        "h1",
        {},
        "finnaly achived",
);
const heading_Sec =  React.createElement(
        "h5",
        {},
        "finnaly achived 2"
);
const child  =  React.createElement(
    "div",
    {id:"child"},
    [heading,heading_Sec]
);

const parent  =  React.createElement(
    "div",
    {id:"parent"},
    child,
);

const heading1 =  React.createElement(
        "h1",
        {},
        "finnaly achived",
);
const heading_Sec1 =  React.createElement(
        "h5",
        {},
        "finnaly achived 2"
);
const child1  =  React.createElement(
    "div",
    {id:"child1"},
    [heading1,heading_Sec1]
);

const parent2  =  React.createElement(
    "div",
    {id:"parent2"},
    child1,
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(
    [parent2,parent1]

);
