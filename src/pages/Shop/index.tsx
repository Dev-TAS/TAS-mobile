import React from 'react'
import { Route } from 'react-native';

import UserShop from './UserShop'
import CompanyShop from './CompanyShop'

function Shop(props:Route) {
  const account_id = props.route.params.account_id;
  const connectionType = props.route.params.connectionType;

  if(connectionType) {
    return <UserShop account_id={account_id} connectionType={connectionType} />
  } else {
    return <CompanyShop account_id={account_id} connectionType={connectionType} />
  }
};

export default Shop;