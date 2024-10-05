import { Input } from "../components/ui/input";
import { Send } from "../components/ui/Send";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../store/user";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { BACKEND_URL } from '../urlfile';
import axios from "axios";
export const Dashboard = () => {
    const [userdata, setUserData] = useRecoilState(userInfoAtom);
    const [allUsers, setAllUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const [currentUserResponse, allUsersResponse] = await Promise.all([
                    axios.get(`${BACKEND_URL}/users/currentuser`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }),
                    axiosInstance.get(`${BACKEND_URL}/users/allusers`)
                ]);

                setUserData({
                    id: currentUserResponse.data.id,
                    name: currentUserResponse.data.name,
                    balance: currentUserResponse.data.balance,
                });

                setAllUsers(allUsersResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [setUserData]);

    if (isLoading) {
        return <div><h1>Loading ...</h1></div>;
    }
    return (
        <div className="font-Nue flex flex-col m-5">
            <div className="flex justify-between items-center text-center" id="top">
                <h1 className="text-8xl">Hi {userdata.name}</h1>
                <h3 className="text-5xl">Balance - $ {userdata.balance}</h3>
            </div>

            <div className="m-5">
                <Input placeholder="Search" className="m-5"></Input>
            </div>

            <div id="send">
                {allUsers
                .filter(user=>user.id !=userdata.id)
                .map(user => (
                    <Send key={user.id} user={user.name} id={user.id}></Send>
                ))}
            </div>
        </div>
    );
};
