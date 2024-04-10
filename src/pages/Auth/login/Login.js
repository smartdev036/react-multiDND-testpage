import React from "react";
import "./Login.scss";
import PageContainer from "../../../components/shared/layouts/pageContainer";
import img_login from '../../../assets/images/login.svg';
import LoginRegister from "../../../components/pages/Auth/loginRegister";


function Login() {
  return (
      <PageContainer>
        <div className="row h-50 loginpage">
          <div className="col-lg-6 h-100vh leftpart">
            <div className="d-flex justify-content-center align-items-center w-100  h-100vh">
              <img src={img_login} className='login_img' alt='login'/>
            </div>
          </div>
          <div className="col-lg-6 h-100vh ">
            <div className="d-flex justify-content-center align-items-center w-100  h-100vh">
              <LoginRegister />
            </div>
          </div>
        </div>

      </PageContainer>
  );
}

export default Login;
