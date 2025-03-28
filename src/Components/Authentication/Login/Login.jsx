import { useContext, useState } from 'react';
import { AuthContext } from '../../../Routes/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { JackInTheBox } from 'react-awesome-reveal';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
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
                navigate(location?.state ? location?.state : '/');
                form.reset();
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

    //google login
    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                return toast.success('User Login Successfully');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('Something wrong please reload the page and try again');
            });
    };
    //github login
    const handleGithub = () => {
        githubLogin()
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location?.state : '/');
                return toast.success('User Login Successfully');
            })
            .catch((error) => {
                console.log(error.message);
                return toast.error('Something wrong please reload the page and try again');
            });
    };

    return (
        <>
            <Helmet>
                <title>Jj Tourism || Login</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <p>Already have an account,Please</p>
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-[#A5B68D] w-full min-w-96 shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <JackInTheBox duration={3000}>
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input bg-[#C1CFA1]" placeholder="Email" />
                                </JackInTheBox>
                                <JackInTheBox delay={200} duration={2800}>
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
                                </JackInTheBox>
                                <JackInTheBox delay={400} duration={2600}>
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn text-white bg-[#27391C] mt-4 w-full">Login</button>
                                </JackInTheBox>
                            </fieldset>
                        </form>

                        <div className="divider"></div>
                        <div className="mx-5">
                            <JackInTheBox delay={600} duration={2400}>
                                <div onClick={handleGoogle} className="flex items-center gap-3 btn text-xl my-2 bg-[#3F7D58] text-white">
                                    <FaGoogle size={20} />
                                    <span>Google Login</span>
                                </div>
                            </JackInTheBox>
                            <JackInTheBox delay={800} duration={2200}>
                                <div onClick={handleGithub} className="flex items-center gap-3 btn text-xl my-2 bg-black text-white">
                                    <FaGithub size={20} />
                                    <span>Github Login</span>
                                </div>
                            </JackInTheBox>
                        </div>
                        <JackInTheBox delay={1000} duration={2000}>
                            <p className='text-center my-2'>New to the website, <Link to={'/register'} className='text-blue-700 font-bold hover:underline'>Please Register</Link></p>
                        </JackInTheBox>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;