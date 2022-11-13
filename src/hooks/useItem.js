import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const useItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const url = `https://obscure-earth-50907.herokuapp.com/item?email=${email}`;
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [user?.email]);
    return [item, setItem];
};

export default useItem;
