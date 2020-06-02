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
import { AuthBox, Features } from './styles'
import { Container} from '../../components/ui'


export default () => {
  const [activeBox, setActiveBox] = useState('signup');

  return (
    <ThemeProvider>
      <Container>
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div>
            <img src={logo} alt="AncapHub logo" />
            <h2 style={{ fontWeight: 'bold', marginTop: 24 }}>
              <FormattedMessage id="home.welcomeHeading" />
            </h2>
            <Features>
              <li>
                <LibraryIcon />
                <span>
                  <FormattedMessage id="home.features.0" description="Study materials" />
                </span>
              </li>
              <li>
                <LocationSearchIcon />
                <span>
                  <FormattedMessage id="home.features.2" description="Nearby people" />
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
            </Features>
          </div>
          <AuthBox>
            {activeBox === 'signin' ? (
              <>
                <h3 style={{
                  fontWeight: 'bold', marginBottom: 16, marginTop: 8, textAlign: 'center',
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
                <h3 style={{
                  fontWeight: 'bold', marginBottom: 16, marginTop: 8, textAlign: 'center',
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
        </div>
      </Container>
    </ThemeProvider>
  );
};
