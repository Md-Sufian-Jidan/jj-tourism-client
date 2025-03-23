import { useContext } from "react";
import { AuthContext } from "../../../Routes/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../../../Firebase/Firebase.config";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password);
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                const user = { name, email, photoUrl };
                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    fetch(`${import.meta.env.VITE_LOCALHOST_API}/user`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data?.insertedId) {
                                Swal.fire({
                                    title: "Success",
                                    text: "User Created Successfully",
                                    icon: "success"
                                });
                            }
                        });
                }).catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                    });
                });
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <p>New to Jj Tourism</p>
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                </div>
                <div className="card bg-[#DCA06D] w-full min-w-96 shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name='name' className="input bg-[#706D54]" placeholder="Your Name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input bg-[#706D54]" placeholder="Email" />
                            <label className="fieldset-label">Photo Url</label>
                            <input type="text" name='photoUrl' className="input bg-[#706D54]" placeholder="Your Photo Url" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input bg-[#706D54]" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#A55B4B] mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;