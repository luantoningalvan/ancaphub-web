import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { FiCrosshair as LocateIcon } from 'react-icons/fi';
import {
  SearchContainer,
  SearchContentContainer,
  SearchSidebarContainer,
  InnerSearchGridContainer,
  Message,
} from './styles';
import { searchNearbyUserRequest } from '../../../actions/search';
import { updateGeoLocationsRequest } from '../../../actions/settings';
import 'rc-slider/assets/index.css';
import UserCard from '../../../components/users/UserCard';
import { LoadContent } from '../../../components';
import { Container, Hero, Paper, Switcher } from 'snake-ui';

export default () => {
  const [radius, setRadius] = useState(50);
  const [location, setLastLocation] = useState({});
  const dispatch = useDispatch();
  const geoLocation = useSelector((state: any) => state.auth.user.geoLocation);
  const { results, loading } = useSelector((state: any) => state.search);

  const handleRadius = (value: number) => setRadius(value);

  const handleSearch = () => {
    dispatch(searchNearbyUserRequest({ radius, lastLocation: location }));
  };

  function updateLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLastLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setLastLocation(false);
        }
      );
    }
  }

  useEffect(() => {
    if (geoLocation) {
      if (!isEmpty(location) && location !== false) {
        dispatch(searchNearbyUserRequest({ radius, lastLocation: location }));
      } else {
        updateLocation();
      }
    }
  }, [dispatch, radius, geoLocation, location]);

  const switchPreferences = (value: boolean) => {
    dispatch(updateGeoLocationsRequest(value));
  };

  return (
    <Container>
      <Hero
        title={<FormattedMessage id="nearby.title" />}
        description={<FormattedMessage id="nearby.description" />}
        // prettier-ignore
        actions={(
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'block', marginRight: 8 }}>
              <FormattedMessage id="nearby.location" />
            </span>
            <Switcher initialValue={geoLocation} onChange={switchPreferences} />
          </div>
        )}
      />

      <div style={{ marginTop: 16 }}>
        {!geoLocation ? (
          <Paper padding>
            <Message>
              <LocateIcon color="" />
              <FormattedMessage id="nearby.needToEnableDescription" />
            </Message>
          </Paper>
        ) : (
          <>
            {isEmpty(location) || location === false ? (
              <Paper padding>
                <p>
                  <FormattedMessage id="nearby.needToEnable" />
                </p>
              </Paper>
            ) : (
              <LoadContent loading={loading}>
                <Paper padding>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>
                      <FormattedMessage id="nearby.radius" />
                    </span>
                    {/* @ts-ignore */}
                    <Slider
                      style={{ width: '100%', margin: '0px 16px' }}
                      value={radius}
                      min={10}
                      max={300}
                      step={10}
                      onChange={handleRadius}
                      onAfterChange={handleSearch}
                    />
                    <span>
                      {radius}
                      Km
                    </span>
                  </div>
                </Paper>

                <SearchContainer>
                  <SearchSidebarContainer />
                  <SearchContentContainer style={{ marginTop: 16 }}>
                    {!isEmpty(results) ? (
                      <InnerSearchGridContainer>
                        {Array.isArray(results) &&
                          results.map((user) => (
                            <div key={user._id}>
                              <UserCard user={user.user} />
                            </div>
                          ))}
                      </InnerSearchGridContainer>
                    ) : (
                      <Paper padding>
                        <FormattedMessage id="common.noUsersFound" />
                      </Paper>
                    )}
                  </SearchContentContainer>
                </SearchContainer>
              </LoadContent>
            )}
          </>
        )}
      </div>
    </Container>
  );
};
