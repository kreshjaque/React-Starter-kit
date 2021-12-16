import React from 'react';
import { Title, Content } from './App.styles';

const App = () => (
    <div>
        <Title>Welcome to React App</Title>
        <Content>Date :{new Date().toDateString()}</Content>
    </div>
);

export default App;
