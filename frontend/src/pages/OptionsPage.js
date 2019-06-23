import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import { navigate } from '@reach/router';

import { useUserSettings } from '../context/userSettingsContext';
import MiddleOfPage from '../components/MiddleOfPage';
import Button from '../components/Button';

const OutOfOffice = styled.div`
  width: 400px;
  height: 100px;
  background: grey;
`;

const PrayerOption = ({ prayerName }) => {
  const intervals = [5, 10, 15, 20, 30, 45, 60];
  return (
    <div>
      <label htmlFor={`${prayerName}-option`}>{prayerName}</label>
      <select>
        {intervals.map((interval, key) => (
          <option key={key} name={`${prayerName}-option`} value={interval}>
            {interval} mins
          </option>
        ))}
      </select>
    </div>
  );
};

const OptionsPage = () => {
  const [userSettings, setUserSettings] = React.useState();

  const onSubmit = (values, { setSubmitting }) => {
    setUserSettings(values);
    navigate('/done');
  };

  React.useEffect(() => {
    console.log(userSettings);
  }, [userSettings]);

  return (
    <MiddleOfPage>
      <Formik initialValues={{ OutOfOffice: '' }} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <h2>Set your options</h2>
            <input id="ooh" type="checkbox" name="outOfOffice" />
            <label htmlFor="ooh">Out of office</label>
            <PrayerOption prayerName="Fajr" />
            <PrayerOption prayerName="Zohr" />
            <PrayerOption prayerName="Asr" />
            <PrayerOption prayerName="Magrib" />
            <PrayerOption prayerName="Isha" />

            <OutOfOffice />
            <Button type="submit">Confirm</Button>
          </Form>
        )}
      </Formik>
    </MiddleOfPage>
  );
};

export default OptionsPage;
