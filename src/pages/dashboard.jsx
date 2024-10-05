import React, { useEffect, useState } from 'react';
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../store/user";
import axios from "axios";
import axiosInstance from "../axiosInstance";
import { BACKEND_URL } from '../urlfile';
import { Input } from "../components/ui/input";
import { Send } from "../components/ui/Send";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const Dashboard = () => {
    const [userdata, setUserData] = useRecoilState(userInfoAtom);
    const [allUsers, setAllUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

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
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load data. Please try again.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [setUserData]);

    const filteredUsers = allUsers.filter(user => 
        user.id !== userdata.id && user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="font-Nue flex flex-col m-5">
                <div className="flex justify-between items-center text-center" id="top">
                    <Skeleton className="h-16 w-64" />
                    <Skeleton className="h-12 w-48" />
                </div>
                <div className="m-5">
                    <Skeleton className="h-10 w-full" />
                </div>
                <div id="send">
                    {[...Array(5)].map((_, index) => (
                        <Skeleton key={index} className="h-12 w-full my-2" />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center mt-10">{error}</div>;
    }

    return (
        <div className="font-Nue flex flex-col m-5">
            <div className="flex justify-between items-center text-center" id="top">
                <h1 className="text-8xl">Hi {userdata.name}</h1>
                <h3 className="text-5xl">Balance - $ {userdata.balance}</h3>
            </div>

            <div className="m-5">
                <Input 
                    placeholder="Search" 
                    className="m-5"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div id="send">
                {filteredUsers.map(user => (
                    <Send key={user.id} user={user.name} id={user.id} />
                ))}
            </div>
        </div>
    );
};