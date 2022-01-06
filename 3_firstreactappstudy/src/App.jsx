import { useState } from "react";
//import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

import { Box, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';

import "./index.css"

export const App = () => {

    const [num, setNum] = useState(0);
    
    const onClickButton = () => {
        //alert();
        //setNum(num + 1);
        setNum((num) => num + 1);
        console.log(num);
    };

    const [count, setCount] = useState(0);

    console.log("rendering.");
    console.log(count);

    const increment = () => {
        setCount(count + 1)
        console.log(count);
    }
    const decrement = () => {
        setCount(count - 1)
        console.log(count);
    }

    //useEffect(() => {
    //    alert();
    //}, [num]);

    return (
        <>
            <h1 style={{color: "red", backgroundColor: "blue"}}>Welcome to My page!!</h1>
            <ColoredMessage color="blue">How's it going?</ColoredMessage>
            <ColoredMessage color="pink">I'm fine.</ColoredMessage>
            <button onClick={onClickButton}>button</button>
            <p>{num}</p>
            <CssModules/>
            <Box component="span" m={1}>
                <Button variant="contained" startIcon={<FavoriteIcon />}>
                    Default
                </Button>
            </Box>
            <TwitterIcon/>
            <FavoriteIcon/>
            <h2>カウント: { count }</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
};
