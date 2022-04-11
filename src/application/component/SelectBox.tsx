/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from 'react';
import {css} from "@emotion/react";
import axios from "axios";

// const options = [
//     { value: 0, name: '0$ ~ 1$' },
//     { value: 1, name: '1$ ~ 10$' },
//     { value: 2, name: '10$ ~ MAX' }
// ];

const selectBox = css`
    display: block;
    width: 300px;
    height: 45px;
    position: relative;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 2px solid;
    border-color: gray;
`;

const SelectBox = () => {
    const [users, setUsers] = useState<any[]>([]);
    const apiUrl = 'https://624ae52171e21eebbce8f507.mockapi.io/api/v1/users';

    const getUsers = async () => {
        const response = await axios.get(apiUrl)
        response.data.sort((a: any,b: any) => {
            return a.rank - b.rank;
        })
        setUsers(response.data);
    };

    const [content, setContent] = useState<number>(0);
    const onChange = (e: any) => {
        setContent(e.currentTarget.value);
    }
    useEffect(() => {
        console.log("select useEffect!!");
    })

    return (
        <select css={selectBox} onChange={onChange} value={content}>
            <option key="0" value="0">'0$ ~ 1$'</option>
            <option key="1" value="1">'1$ ~ 10$'</option>
            <option key="2" value="2">'10$ ~ MAX'</option>
        </select>
    )
}

export default SelectBox;
