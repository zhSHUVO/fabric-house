import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const useItem = () => {
    const [user, loading] = useAuthState(auth);
    const [item, setItem] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`http://localhost:5000/item?email=${email}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);
    return [item, setItem];
};

export default useItem;
