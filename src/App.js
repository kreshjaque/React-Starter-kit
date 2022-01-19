import React from 'react';
import chalk from 'chalk';
import { Title, Content } from './App.styles';

const App = () => {
    console.log(chalk.blue('Hello world!'));
    return (
        <div>
            <Title>Welcome to React App</Title>
            <Content>Date :{new Date().toDateString()}</Content>
        </div>
    );
};

export default App;
