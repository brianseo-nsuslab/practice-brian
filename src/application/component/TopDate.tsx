import {IconContext} from "react-icons";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {useEffect, useState} from "react";
import axios from "axios";

const TopDate = () => {
    const [date, setDate] = useState<Date>(new Date());

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
        getUsers();
        console.log("useEffect!!!");
    }, [date]);

    const onPrevClick = () => {
        setDate(new Date(getComputedDate(date, false)));
    }
    const onNextClick = () => {
        setDate(new Date(getComputedDate(date, true)));
    }
    return (
        <div className='top-date'>
            <IconContext.Provider value={{color: "white", size: "55px",  style: {verticalAlign: 'middle', marginBottom: '5px'} }}>
                < FiChevronLeft onClick={onPrevClick} />
            </IconContext.Provider>
            {getFormatedDate(date)}
            <IconContext.Provider value={{color: "white", size: "55px", style: {verticalAlign: 'middle', marginBottom: '5px'} }}>
                < FiChevronRight onClick={onNextClick} />
            </IconContext.Provider>
        </div>
    )
}

const getDateFromString = (formattedDate: string) => {
    const dateArr = formattedDate.split("/");
    const date = new Date(Number(dateArr[2]), Number(dateArr[1])-1, Number(dateArr[0]));
    console.log(date);
    return date;
}

const getFormatedDate = (date: Date) => {
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    let year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('/');
}

const getComputedDate = (date: Date, flag: boolean) => {
    const day = date.getDate();
    return flag ? (date.setDate(day+1)) : (date.setDate(day-1));
}


export default TopDate;
