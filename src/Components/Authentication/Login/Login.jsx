import { useContext, useState } from 'react';
import { AuthContext } from '../../../Routes/AuthProvider';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target();
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Hurrah!",
                    text: "User Login Successfully!",
                    icon: "success"
                  });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error?.message,
                });
            })
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <p>Already have an account,Please</p>
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-[#A5B68D] w-full min-w-96 shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input bg-[#C1CFA1]" placeholder="Email" />
                            <div className='relative'>
                                <label className="fieldset-label">Password</label>
                                <input type={show ? "text" : "password"} name='password' className="input bg-[#C1CFA1]" placeholder="Password" />
                                <span className="absolute top-8 right-5" onClick={() => setShow(!show)}>
                                    {show ?
                                        <FaEye size={16} /> :
                                        <FaEyeSlash size={16} />
                                    }
                                </span>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#27391C] mt-4">Login</button>
                        </fieldset>
                    </form>
                    <p className='text-center my-2'>New to the website, <Link to={'/register'} className='text-blue-700 font-bold hover:underline'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;