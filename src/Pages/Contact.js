import Loading from '../Pages/Shared/Loading'
import UserInfo from './UserInfo';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';


const Contact = () => {
    const [users, setUsers] = useState([])
    const [noMore, setNoMore] = useState(true);
    const [page, setPage] = useState(2);

    useEffect(() => {
        const firstPage = async () => {
            const res = await fetch(`https://randomuser.me/api/?page=1&results=20&seed=abc`);
            let data = await res.json();
            const allUser = data.results
            setUsers(allUser)
        }
        firstPage();
    }, [])
    const secondPage = async () => {
        const res = await fetch(`https://randomuser.me/api/?page=${page}&results=20&seed=abc`);
        let data = await res.json();
        const allUser2 = data.results
        console.log('second page', allUser2);
        return allUser2;
    }
    // const allUser = users.results;
    console.log(users);
    const fetchData = async () => {
        const loadUsersData = await secondPage()
        setUsers([...users, ...loadUsersData]);
        if (loadUsersData.length === 0 || loadUsersData.length < 20) {
            setNoMore(false);
        }
        setPage(page + 1);
    }
    return (
        <InfiniteScroll className='px-24 bg-transparent'
            dataLength={users.length}
            next={fetchData}
            hasMore={noMore}
            loader={<Loading></Loading>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>

            }
        >
            {
                <table className="table w-full bg-transparent">

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