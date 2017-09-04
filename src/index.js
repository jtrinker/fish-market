// loads everything from 'react' library into variable named React
import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

import { BrowserRouter, Match, Miss } from 'react-router';

// we could also create separate css files for every component
import './css/style.css'

const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker} />
                <Match pattern="/store/:storeId" component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('main'));

