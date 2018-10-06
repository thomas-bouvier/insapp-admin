import React from 'react';
import { CheckboxGroupInput } from 'react-admin';

class PromotionPicker extends React.Component {
  render() {
    return (
      <CheckboxGroupInput
        source="promotions"
        choices={[
          { id: '1STPI', name: '1STPI' },
          { id: '2STPI', name: '2STPI' },
          { id: '3EII', name: '3EII' },
          { id: '4EII', name: '4EII' },
          { id: '5EII', name: '5EII' },
          { id: '3GM', name: '3GM' },
          { id: '4GM', name: '4GM' },
          { id: '5GM', name: '5GM' },
          { id: '3GMA', name: '3GMA' },
          { id: '4GMA', name: '4GMA' },
          { id: '5GMA', name: '5GMA' },
          { id: '3GCU', name: '3GCU' },
          { id: '4GCU', name: '4GCU' },
          { id: '5GCU', name: '5GCU' },
          { id: '3INFO', name: '3INFO' },
          { id: '4INFO', name: '4INFO' },
          { id: '5INFO', name: '5INFO' },
          { id: '3SGM', name: '3SGM' },
          { id: '4SGM', name: '4SGM' },
          { id: '5SGM', name: '5SGM' },
          { id: '3SRC', name: '3SRC' },
          { id: '4SRC', name: '4SRC' },
          { id: '5SRC', name: '5SRC' },
          { id: 'ALTERNANT', name: 'Alternants' },
          { id: 'PERSONNEL/ENSEIGNANT', name: 'Personnel/Enseignants' }
        ]}
      />
    );
  }
}

export default PromotionPicker;
