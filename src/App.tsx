import React from 'react';
import './App.css';
import { Container, Grid } from 'semantic-ui-react'
import FormikStepper from './components/Forms/FormikStepper';

function App() {
  return (
    <div className="App" style={{minHeight: '100vh'}}>
      <Grid stackable centered style={{minHeight : '100vh'}}>
        <Grid.Column color="blue" width={4}>
        </Grid.Column>
        <Grid.Column width={12} verticalAlign="middle">
            <FormikStepper />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
