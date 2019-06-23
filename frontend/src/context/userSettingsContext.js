import React from 'react';

const UserSettingsContext = React.createContext();

function useUserSettings() {
  const context = React.useContext(UserSettingsContext);
  if (!context) {
    throw new Error(
      `useUserSettings must be used within a UserSettingsProvider`
    );
  }
  return context;
}

function UserSettingsProvider(props) {
  const [userSettings, setUserSettings] = React.useState();
  const value = React.useMemo(() => [userSettings, setUserSettings], [
    userSettings
  ]);
  return <UserSettingsContext.Provider value={value} {...props} />;
}

export { UserSettingsProvider, useUserSettings };
