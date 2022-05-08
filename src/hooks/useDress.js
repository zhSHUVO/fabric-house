import { useEffect, useState } from "react";

const useDress = () => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        fetch("https://obscure-earth-50907.herokuapp.com/dress")
            .then((res) => res.json())
            .then((data) => setDresses(data));
    }, []);
    return [dresses, setDresses];
};

export default useDress;
