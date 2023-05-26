import "./register.scss"
import testimonials from "../../assets/images/testimonials.png"
import doctors from "../../assets/images/doctors.png"
import { Link } from "react-router-dom"
import {FacebookIcon, GoogleIcon} from "../../assets/icons/SvgIcons"
const Register = () => {

  return (
    <div className='register'>
      <div className="form">
        <div>
          <h3>Sing up your account </h3>
          <p>Let’s Enter your data to continue use healthy 24 services</p>
          <form action="">
            <label htmlFor="name">
              <span>Fullname</span>
              <input type="text" name="name" id="name" placeholder="Enter Your name here"/>
            </label>

            <label htmlFor="email">
              <span>Email</span>
              <input type="email" name="email" id="email" placeholder="Enter Your emal here"/>
            </label>

            <label htmlFor="password">
              <span>Password</span>
              <input type="password" name="password" id="password" placeholder="Enter Your password here"/>
            </label>

            <div className="terms">
              <input type="checkbox" name="terms" />
              <p>by sign up to healthy 24 you agree all <span>term</span> and <span>condition</span></p>
            </div>

            <button type="submit">Sign Up</button>
          </form>

          <div className="social-registration">
            <span>Or</span>
            <div className="buttons">
              <button><span>Sign Up with google</span></button>
              <button><span> Sign Up with facebook</span></button>
            </div>
            <p>You Already have account ?  <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>

      <div className="about">
        <h3>We give the best experience</h3>
        <p>Dedicated virtual consulting platform for docotrs and patients to help them consult across vatious channels</p>
        
      </div>
    </div>
  )
}

export default Register
