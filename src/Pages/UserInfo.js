import React from 'react';

const UserInfo = ({ user }) => {
    let { name, picture, email, location, phone } = user;
    name = name.first + ' ' + name.last;
    return (


        <tbody>
            <tr>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='mr-5' src={picture.thumbnail} alt='' />
                            </div>
                        </div>
                        <div>
                            <div class="font-bold">{name}</div>
                            <div class="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {location?.country}
                    <br />
                    <span class="badge badge-ghost badge-sm">{location.city}</span>
                </td>
                <td>{phone}</td>
                <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </tbody>


    );
};

export default UserInfo;