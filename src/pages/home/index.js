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
import { Container } from '../../components/ui';

const Home = () => {
  const [activeBox, setActiveBox] = useState('signup');

  return (
    <ThemeProvider>
      <Container>
        <HomeContainer>
          <Presentation>
            <div className="logo">
              <img src={logo} alt="AncapHub logo" />
            </div>

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
            {activeBox === 'signin' ? (
              <>
                <h3
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 16,
                    marginTop: 8,
                    textAlign: 'center',
                  }}
                >
                  <FormattedMessage id="common.login" />
                </h3>
                <SigninForm />
                <span
                  className="switch-form"
                  onClick={() => setActiveBox('signup')}
                  role="link"
                  tabIndex={0}
                  onKeyDown={() => {}}
                >
                  <FormattedMessage id="home.form.noAccount" />
                </span>
              </>
            ) : (
              <>
                <h3
                  style={{
                    fontWeight: 'bold',
                    marginBottom: 16,
                    marginTop: 8,
                    textAlign: 'center',
                  }}
                >
                  <FormattedMessage id="home.form.signUp" />
                </h3>
                <SignupForm />
                <span
                  className="switch-form"
                  onClick={() => setActiveBox('signin')}
                  role="link"
                  tabIndex={0}
                  onKeyDown={() => {}}
                >
                  <FormattedMessage id="home.form.hasAccount" />
                </span>
              </>
            )}
          </AuthBox>
        </HomeContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
