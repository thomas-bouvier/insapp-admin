import React from 'react';
import { ViewTitle } from 'react-admin';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default () => (
  <Card>
    <ViewTitle title="Welcome to the Insapp administration" />
    <CardContent>
      Don't hesitate to send us a message if you have forgotten your password!
    </CardContent>
  </Card>
);
