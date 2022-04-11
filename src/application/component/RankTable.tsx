/** @jsxImportSource @emotion/react */
import {css, jsx} from "@emotion/react";
import {useEffect, useState} from "react";
import axios from "axios";
import TopDate from "./TopDate";
import SelectBox from "./SelectBox";
import MyRank from "./MyRank";

const users = [{rank:'-1', nickname: '-1', points: '-1', prize: '-1'}, {rank:'-2', nickname: '-2', points: '-2', prize: '-2'}
, {rank:'3-', nickname: '3-', points: '3-', prize: '3-'}, {rank:'-4', nickname: '-4', points: '-4', prize: '-4'}, {rank:'-5', nickname: '-5', points: '-5', prize: '-5'}, {rank:'-6', nickname: '-6', points: '-6', prize: '-6'}
    , {rank:'-7', nickname: '-7', points: '-7', prize: '-7'}, {rank:'7-', nickname: '7-', points: '7-', prize: '7-'}, {rank:'8-', nickname: '8-', points: '8-', prize: '8-'}, {rank:'9-', nickname: '9-', points: '9-', prize: '9-'}
    , {rank:'-10', nickname: '-10', points: '-10', prize: '-10'}, {rank:'-11', nickname: '-11', points: '-11', prize: '-11'}];


const RankTable = () => {

    const [users, setUsers] = useState<any[]>([]);
    const apiUrl = 'https://624ae52171e21eebbce8f507.mockapi.io/api/v1/users';

    const getUsers = async () => {
        const response = await axios.get(apiUrl)
        response.data.sort((a: any,b: any) => {
            return a.rank - b.rank;
        })
        setUsers(response.data);
    };

    useEffect(() => {
        setUsers([]);
        getUsers();
    }, []);

    return (
        <>
            {/*<TopDate />*/}
            {/*<SelectBox />*/}
            {/*<MyRank />*/}
            <div css={div}>
                <table css={rankTable}>
                    <thead>
                        <tr>
                            <th css={th}>Rank</th>
                            <th css={th}>Nickname</th>
                            <th css={th}>Points</th>
                            <th css={th}>Prize</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, idx)=>(
                        <tr key={idx}>
                            <td css={td} key={user.rank+"first"}>{user.rank}</td>
                            <td css={td} key={user.nickname+"sec"}>{user.nickname}</td>
                            <td css={td} key={user.points+"third"}>{user.points}</td>
                            <td css={td} key={user.prize+"fourth"}>{user.prize}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

const div = css `
    border: 2px solid;
    border-color: white;
    margin-top: 50px;
    width: 60%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    overflow: scroll
`
const rankTable = css`
    width: 100%;
    text-align: center;
    position: relative;
    color: white;
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
export default RankTable;