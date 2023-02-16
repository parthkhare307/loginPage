import './App.css';
import profile from "./img/a.png";
import email from "./img/email.png";
import pass from "./img/pass.png";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>

          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>

          <div>
            <h2 className="h2">Welcome to Bardeen</h2>
            <h3 className="h3">Let's log in to launch your automations.</h3>
            
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="Email Address" className="name"/>
            </div>
            
            <div className="second-input">
              <img src={pass} alt="password" className="email" />
              <input type="text" placeholder="Password" className="name"/>
            </div>
            
            <div className="login-button">
              <button>Sign Up</button>
            </div>

              <p className="link">
                <a href="#">Forgot Password?</a>
              </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
