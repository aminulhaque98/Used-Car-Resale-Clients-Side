import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllUsers = () => {
    useTitle('AllUsers');

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-server-side-amber.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://products-resale-server-side-amber.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            //admin verify with jwt
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('You make him admin successfully');
                    refetch();
                }
                console.log(data)
            })
    }


    const userHandlerDelete = id => {
        const proceed = window.confirm('Are you sure,you want to cancel this review');
        if (proceed) {
            fetch(`https://products-resale-server-side-amber.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Successfully Complete Your deleted data!');
                    }
                })
        }

    }



    return (
        <div>
            <h1 className='text-4xl font-bold text-secondary text-center my-3'>Our All Users Here!</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id} user={user} i={i}
                            >
                                <th>{i + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>

                                <td>{user?.role !== 'Admin' && <button onClick={() => handleMakeAdmin(user?._id)} className="btn btn-xs btn-active btn-primary">Make Admin</button>}
                                </td>

                                <td><button onClick={() => userHandlerDelete(user?._id)} className="btn btn-xs btn-active btn-secondary">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;