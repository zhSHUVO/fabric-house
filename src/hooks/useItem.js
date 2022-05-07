import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const useItem = () => {
    const [user, loading] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/item?email=${email}`;
        fetch(url, {
            method: "GET",
            headers: {
                "authorization":`Bearer ${localStorage.getItem("accessToken")}`,
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);
    return [item, setItem];
};

export default useItem;
