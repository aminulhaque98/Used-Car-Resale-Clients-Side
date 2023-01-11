import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');;
    const { signInUser, providerLogin, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();



    const handleLogin = data => {
        setLoginError('');

        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully login to the account');
                navigate(from, { replace: true });

            })
            .catch(error => {
                toast.error(error.message);
                setLoginError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                toast.success('Successfully login to the account');
            })
            .catch(error => toast.error(error.message))
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
                    <input className='btn  w-full mb-3' value='Login' type="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
                <p>Don't have an account?<Link className='text-orange-600' to="/signup">Sign Up</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">LOGIN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;