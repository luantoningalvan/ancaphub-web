import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  FiFolder as LibraryIcon,
  FiUsers as GroupIcon,
  FiCalendar as EventIcon,
  FiCrosshair as LocationSearchIcon,
} from 'react-icons/fi';

import ThemeProvider from '../../components/template/Provider';
import SigninForm from '../../components/auth/SigninForm';
import SignupForm from '../../components/auth/SignupForm';
import { ReactComponent as AncapHubLogo } from '../../assets/ancaphub.svg';
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
              <AncapHubLogo />
            </div>
            <div className="form">
              {form === 'signin' ? (
                <>
                  <h3>
                    <FormattedMessage id="common.login" />
                  </h3>
                  <SigninForm />
                </>
              ) : (
                <>
                  <h3>
                    <FormattedMessage id="common.register" />
                  </h3>
                  <SignupForm />
                </>
              )}
            </div>
            <div className="switch-form">
              {form === 'signin' ? (
                <button type="button" onClick={() => setForm('signup')}>
                  <FormattedMessage id="common.register" />
                </button>
              ) : (
                <button type="button" onClick={() => setForm('signin')}>
                  <FormattedMessage id="home.form.hasAccount" />
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
