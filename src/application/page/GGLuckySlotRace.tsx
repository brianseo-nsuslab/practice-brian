import '../css/GGLuckySlotRace.css';
import SelectBox from "../component/SelectBox";
import MyRank from "../component/MyRank";
import RankTable from "../component/RankTable";
import TopDate from "../component/TopDate";

const main = `
    margin-left: 500px;
    padding-top: 50px;
    text-align: center;
`;
const GGLuckySlotRace = () => {
    return (
        <div className='frame'>
            <TopDate />
            <SelectBox />
            <MyRank />
            <RankTable />
        </div>
    )
}

export default GGLuckySlotRace;