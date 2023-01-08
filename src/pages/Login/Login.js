import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div data-theme="valentine" className='h-[800px] flex justify-center items-center drop-shadow-2xl'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters or longer" } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <select className="input input-bordered w-full max-w-xs my-3" {...register("category", { required: true })}>
                        <option value="">Select...</option>
                        <option value="A">Admin</option>
                        <option value="B">Seller</option>
                    </select>
                    <input className='btn  w-full mb-3' value='Login' type="submit" />
                </form>
                <p>Don't have an account?<Link className='text-orange-600' to="/signup">Sign Up</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-primary w-full">LOGIN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;