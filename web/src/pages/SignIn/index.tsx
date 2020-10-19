import React, { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
// import {signIn} from '../../services/auth';
import {useAuth} from '../../contexts/auth';

import logotipoImg from '../../images/logotipo.svg';

import '../../styles/pages/signin.css';

const SignIn: React.FC = () => {
  // const history = useHistory();
  const {goBack} = useHistory();
  const {signed, signIn} = useAuth();
  
  // useEffect(() => {
  //   console.log('signed', signed);
  //   if(signed) {
  //     history.push('/dashboard');
  //   }
  // }, [history, signed])

  // async function handleSignIn() {
  //   await signIn();
  //   history.push('dashboard');
  // }

  console.log(signed)

  return (
    <div id="page-signin">
      <section>
        <div className="content-landing">
          <img src={logotipoImg} alt="Logo"/>

          <div className="location">
            <strong>Paraná</strong>
            <span>Ibiporã</span>
          </div>
        </div>
      </section>
      <aside>
        
        <button  className="back-button" type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#15C3D6" />
        </button>
        <main>
          <form 
            //onSubmit={handleSubmit} 
           className="signin-form">
              <fieldset>
                <legend>Fazer login</legend>
                <div className="input-block">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    id="email" 
                    // value={name} 
                    // onChange={event => setName(event.target.value)} 
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="password">Senha</label>
                  <input 
                    id="password" 
                    // value={name} 
                    // onChange={event => setName(event.target.value)} 
                  />
                </div>
                <div className="input-block-row">
                  <div className="input-block">
                    <label htmlFor="remember-password">
                      <input id="remember-password" type="checkbox" />
                      <span className="checkmark"></span>
                      Senha
                    </label>
                  </div>
                  <a href="http://" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a>
                </div>

              </fieldset>
              <button className="confirm-button">
                Entrar
              </button>
          </form>
        </main>
        {/* <div className="content-signin">
          <button type="button" onClick={handleSignIn}>Sign in</button>
        </div> */}
      </aside>
    </div>
  )
};

export default SignIn;