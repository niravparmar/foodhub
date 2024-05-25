import {useState} from 'react';

const User = ({name, location}) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);


    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={()=> {
                setCount(count+1);
            }}>
                Count Increase
            </button>
            <h1>Count2 : {count2}</h1>

            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: @niravparmar</h2>
        </div>
    )
}

export default User;