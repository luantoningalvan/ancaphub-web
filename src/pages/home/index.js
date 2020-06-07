import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import LibraryIcon from 'react-ionicons/lib/IosFolder';
import GroupIcon from 'react-ionicons/lib/IosPeople';
import EventIcon from 'react-ionicons/lib/IosCalendar';
import LocationSearchIcon from 'react-ionicons/lib/IosLocate';
import ThemeProvider from '../../components/template/Provider';
import SigninForm from '../../components/auth/SigninForm';
import SignupForm from '../../components/auth/SignupForm';
import logo from '../../assets/logo-type.png';
import { AuthBox, Presentation, HomeContainer } from './styles';

const Home = () => {
  const [form, setForm] = useState('signin');

  return (
    <ThemeProvider>
      <HomeContainer>
        <Presentation>
          <h2 className="welcome-message">
            <FormattedMessage id="home.welcomeHeading" />
          </h2>

          <ul>
            <li>
              <LibraryIcon />
              <span>
                <FormattedMessage
                  id="home.features.0"
                  description="Study materials"
                />
              </span>
            </li>
            <li>
              <LocationSearchIcon />
              <span>
                <FormattedMessage
                  id="home.features.2"
                  description="Nearby people"
                />
              </span>
            </li>
            <li>
              <GroupIcon />
              <span>
                <FormattedMessage id="home.features.1" description="Groups" />
              </span>
            </li>
            <li>
              <EventIcon />
              <span>
                <FormattedMessage id="home.features.3" description="Events" />
              </span>
            </li>
          </ul>
        </Presentation>
        <AuthBox>
          <div className="auth-content">
            <div className="logo">
              <img src={logo} alt="AncapHub logo" />
            </div>
            <div className="form">
              {form === 'signin' ? (
                <>
                  <h3>Fazer Login</h3>
                  <SigninForm />
                </>
              ) : (
                <>
                  <h3>Criar Conta</h3>
                  <SignupForm />
                </>
              )}
            </div>
            <div className="switch-form">
              {form === 'signin' ? (
                <button type="button" onClick={() => setForm('signup')}>
                  Criar conta
                </button>
              ) : (
                <button type="button" onClick={() => setForm('signin')}>
                  Já possuo uma conta
                </button>
              )}
            </div>
          </div>
        </AuthBox>
      </HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
