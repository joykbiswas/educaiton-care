import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Login = () => {
    return (
        <div>
      <Navbar></Navbar>
      <h2 className="text-3xl text-center">Please Login </h2>
      <div className="w-1/2 mx-auto">
        <form  className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
           
            <p>you do not have account? 
                <Link to="/register" className="text-red-400 p-4">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Login;