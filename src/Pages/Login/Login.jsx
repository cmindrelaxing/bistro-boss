import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import axios from "axios";
import useAuth from "../../hooks/useAuth";
import loginImg from "../../assets/others/authentication2.png"



const Login = () => {


    const {signIn, googleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\]).{6,}$/;
        return passwordRegex.test(password);
    };


    const loginBtn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {email, password};
        console.log(loginInfo);

        // Validate email and password
        if (!validateEmail(email)) {
            toast.error('Invalid email format', { position: 'top-left' });
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Please use at least 6 characters, including both letters, numbers and special character for added security.)', { position: 'top-left' });
            return;
        }

        // Login with email and password
        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            // const user = {email};
            toast.success('Login Successfully completed');
            navigate(location?.state ? location?.state : '/')
            
            
            // get access token
            // axios.post('https://restaurant-management-server-g3evb8yb5.vercel.app/jwt', user, {withCredentials: true})
            // .then(res => {
            //     console.log(res.data);
            //     if(res.data.success) {
            //         // navigate after login success
            //         navigate(location?.state ? location?.state : '/')
            //     }
            // })
        })
        .catch(err => {
            console.error(err);
        });
    };



    // google sign in
    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                // navigation to google sign in page
                navigate(location?.state ? location?.state : '/');
            })
            .catch(err => {
                console.error(err);
            });
    };


    // github sign up page
    const githubLogIn = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Successfully toasted!')
                // navigation to google sign up page
                navigate(location?.state ? location?.state : '/');
            })
            .catch(err => {
                console.log(err);
            })
    };
    
    

    return (
        <div className=" min-h-screen bg-base-200 flex items-center justify-center py-10 ">
            <div className="hero-content w-full flex-col-reverse md:flex-row justify-center">
                <div className="text-center mb-2">
                    {/* <h1 className="text-5xl font-bold mb-14">Signup now!</h1> */}
                    <img className='lg:w-[85%] mt-16 md:mt-0' src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginBtn} className="card-body"  data-aos="flip-left">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#5dff33] text-white py-2 hover:bg-black hover:text-white rounded-full">Login</button>
                        </div>

                        <p className="text-center mt-4"><small>Do not Have an account <Link to="/signup" className="text-blue-600 font-bold">Signup</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center dancing">Login with</h2>
                            <div className="flex justify-between items-center mt-5 gap-3">
                                <button onClick={googleSignIn} className="flex items-center font-medium bg-[#5dff33] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google text-black' ></i><span className="text-black">G</span>oogle</button>
                                <button onClick={githubLogIn} className="flex items-center font-medium bg-[#5dff33] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github text-black' ></i><span className="text-black">G</span>ithub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;