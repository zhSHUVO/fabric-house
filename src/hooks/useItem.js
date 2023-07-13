import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebaseinit";

const useItem = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            if (user && user.email) {
                const accessToken = localStorage.getItem("accessToken");
                if (accessToken) {
                    const email = user.email;
                    const url = `https://fabric-house-server.onrender.com/item?email=${email}`;
                    try {
                        const response = await fetch(url, {
                            method: "GET",
                            headers: {
                                authorization: `Bearer ${accessToken}`,
                                "content-type": "application/json",
                            },
                        });
                        if (response.ok) {
                            const data = await response.json();
                            setItem(data);
                        } else {
                            // Handle the error condition when the response is not ok
                            console.error(
                                "Failed to fetch items:",
                                response.status
                            );
                        }
                    } catch (error) {
                        // Handle any other network or fetch errors
                        console.error("Error fetching items:", error);
                    }
                } else {
                    // Handle the case when the access token is not available
                    console.warn("Access token not found");
                }
            }
        };

        fetchItems();
    }, [user]);

    return [item, setItem];
};

export default useItem;
