var React=require('react');
import {Header} from './Header.js';
import Body from './Body.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    }


   render() {
    return  (<div className="page-wrapper">
    			<Header/>
    			<Body/>
    		</div>);
  }
}
