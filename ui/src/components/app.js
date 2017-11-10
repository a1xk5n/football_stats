import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainContainer from '../containers/main-container';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <MainContainer />
            </BrowserRouter>
        );
    }
}

export default App;
