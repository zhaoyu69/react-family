import React from 'react';
import ReactDom from 'react-dom';
import "./main.css";
import { Hello } from "./Hello";

ReactDom.render(
    <Hello compiler="TypeScript" framework="React"/>,
    document.getElementById('root')
);