import React,{useState} from "react";
import Counter from "./counter";

const CountersList = () =>{
    const initialState = [
        { id: 0, value: 0, name: "Нежная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 2, name: "Вилка" },
        { id: 3, value: 1, name: "Ложка" },
        { id: 4, value: 3, name: "Набор программиста" }
    ]
    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () =>{
        setCounters(initialState);
    };

    const handleIncrement = (id) =>{
        const newCounters = counters.map(counter => {
            if(counter.id === id){
                counter.value ++;
            }
            return counter;
        });
        setCounters(newCounters);
    }

    const handleDecrement = (id) =>{
        const newCounters = counters.map(counter => {
            if(counter.id === id && counter.value){
                counter.value --;
            }
            return counter;
        });
        setCounters(newCounters);
    }


    return ( <>
        {counters.map(count => (
            <Counter key = {count.id}
                     {...count}
                     onDelete = {handleDelete}
                     handleDecrement = {handleDecrement}
                     handleIncrement = {handleIncrement}
            />))}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </> );
}

export default CountersList;