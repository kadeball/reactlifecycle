import React, {useState, useEffect} from "react";
import Count from "./Count";
import '../App.css';
import Box from "../components/Box";

function Timer(){

    const chooseColor=[
        "blue",
        "pink",
        "#9932CC"
    ];

    const [num, setNum] = useState(0);
    const [boxes, setBoxes]= useState([]);
    const [color, setColor]=useState(chooseColor[Math.floor(Math.random()* chooseColor.length)]);

    useEffect(() => {
        if (num % 10 === 0) {
            setColor(chooseColor[Math.floor(Math.random() * chooseColor.length)]);
        }
    }, [num]);

    let colorRender = () => {
        if (num % 5 === 0) {
            let random = Math.floor(Math.random() * chooseColor.length);
            setColor(chooseColor[random]);
            return chooseColor[random];
        }
        return color;
    };

    useEffect(() => {
        if (num % 2 === 1) {
            let box = [...boxes];
            box.push({color: colorRender(), number: num});
            setBoxes(box);
        }
    }, [num]);

    let reset = () => {
        setNum(0);
        setBoxes([]);
    };

    let box = boxes.map((box, idx) =>
        <Box key={idx} color={box.color} number={box.number}/>
    );
    return(
        <div>
            <button onClick={reset}>reset</button>
            <button onClick={() => setNum(num + 1)}>Increase</button>
            <Count count={num}/>
            <div className="boxes">{box}</div>
        </div>
    )
}

export default Timer;