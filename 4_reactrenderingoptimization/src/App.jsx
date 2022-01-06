import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
    console.log("App rendering.");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
        setNum(num + 1);
        console.log(num);
    };
    const onClickButton1 = () => {
        setNum((num) => num + 1);
        setNum((num) => num + 1);
        console.log(num);
    };

    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return(
        <>
            <button onClick={onClickButton}>button</button>
            <button onClick={onClickButton1}>button</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset}/>
            <Child4/>
        </>
    );
});
