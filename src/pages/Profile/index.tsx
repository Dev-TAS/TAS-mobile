import React from 'react'

import UserProfile from './UserProfile'
import CompanyProfile from './CompanyProfile'
import { Route } from 'react-native';

function Profile(props:Route) {
  const account_id = props.route.params.account_id;
  const connectionType = props.route.params.connectionType;

  if(connectionType) {
    return <UserProfile account_id={account_id} connectionType={connectionType} />
  } else {
    return <CompanyProfile account_id={account_id} connectionType={connectionType} />
  }
}

export default Profile;