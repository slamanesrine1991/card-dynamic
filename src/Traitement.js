import React from "react";
import Card from "./Card";

const data = [{ name: 'nes', num: '123' }]

const CardList = () => {
return <div >
    <h1>hello</h1>
<p>{data.map(elm=><Card name={elm.name}/>)}</p>
</div>;
};

export default CardList;

