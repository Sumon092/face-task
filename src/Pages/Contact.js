
import { useQuery } from 'react-query';
import Loading from './Shared/Loading';
import UserInfo from './UserInfo';
import InfiniteScroll from 'react-infinite-scroll-component';


const Contact = () => {
    const { data: users, isLoading } = useQuery('users', async () => await fetch(`https://randomuser.me/api/?page=1&results=20&seed=abc`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const allUser = users.results;
    console.log(allUser);

    const fetchData = () => {
        console.log('hello');
    }
    return (
        <InfiniteScroll
            dataLength={allUser.length} //This is important field to render the next data
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

        </InfiniteScroll>
    );
};

export default Contact;