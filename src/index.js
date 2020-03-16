import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Router} from "react-router-dom";
import createHistory from 'history/createHashHistory';
import "antd/dist/antd.css"
import Contanier from './contanier/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
        <Router history={createHistory()}>
            <Switch>
                <Route path="/" component={Contanier}></Route>
            </Switch>
        </Router>
    </div>,
    document.getElementById('root')
);
// class App extends React.Component{
//     render(){
//         return <HashRouter>
//                       <Switch>
//                           <Route path="/" component={Contanier}></Route>
//                       </Switch>
//                 </HashRouter>
//     }
// }
// ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();


