import React from 'react';

const UserInfo = ({ user }) => {
    let { name, picture, email, location, phone } = user;
    name = name.first + ' ' + name.last;
    return (


        <tbody className=''>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='mr-5' src={picture.thumbnail} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {location?.country}
                    <br />
                    <span className="badge badge-ghost badge-sm">{location.city}</span>
                </td>
                <td className='hidden lg:block bg-white'>{phone}</td>
            </tr>
        </tbody>


    );
};

export default UserInfo;