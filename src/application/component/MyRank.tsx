/** @jsxImportSource @emotion/react */

import {css, jsx} from "@emotion/react";

const MyRank = () => {
    return (
        <div>
            <table css={rankTable}>
                <thead>
                    <tr>
                        <th css={th}>My Rank</th>
                        <th css={th}>My Points</th>
                        <th css={th}>My Prize</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td css={td}>-</td>
                        <td css={td}>-</td>
                        <td css={td}>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const rankTable = css`
    border: 2px solid;
    width: 60%;
    text-align: center;
    position: relative;
    color: white;
    left: 0;
    right: 0;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;
const th = css`
    background-color: #484c52;
    border: 1px solid;
    height: 35px;
`;
const td = css`
    border: 1px solid;
    height: 35px;
`;

export default MyRank;