
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';
import UserInfo from './UserInfo';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';


const Contact = () => {
    const [users, setUsers] = useState([])
    const firstPage = async () => {
        const res = await fetch(`https://randomuser.me/api/?page=1&results=20&seed=abc`);
        let data = await res.json();
        const allUser = data.results
        setUsers(allUser)
    }
    const secondPage = async () => {
        const res = await fetch(`https://randomuser.me/api/?page=2&results=20&seed=abc`);
        let data = await res.json();
        const allUser2 = data.results
        console.log('second page', allUser2);
        return allUser2;
    }

    // const allUser = users.results;

    firstPage();
    console.log(users);

    const fetchData = async () => {
        const loadUsersData = await secondPage()
        setUsers([...users, ...loadUsersData]);

    }
    return (
        <InfiniteScroll className='px-24 bg-transparent'
            dataLength={users.length} //This is important field to render the next data
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>

            }
        >
            {
                <table class="table w-full bg-transparent">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    {
                        users.map(user => <UserInfo key={user.cell} user={user}></UserInfo>)
                    }
                </table>
            }

        </InfiniteScroll>
    );
};

export default Contact;