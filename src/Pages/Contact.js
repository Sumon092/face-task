import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';
import UserInfo from './UserInfo';

const Contact = (id) => {
    const { data: users, isLoading } = useQuery('products', () => fetch('https://randomuser.me/api/?results=500').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users);
    const allUser = users.results;
    return (
        <div className='lg:px-24 px-0'>

            {
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    {
                        allUser.map(user => <UserInfo key={user.cell} user={user}></UserInfo>)
                    }
                </table>
            }
        </div>
    );
};

export default Contact;