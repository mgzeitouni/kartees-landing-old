var React=require('react');
import Signup from './Signup.js'
import Description from './Description.js'


export default class Body extends React.Component {

   render() {
    return  (<div>
    			<Signup/>
    			<Description/>
    		</div>);
  }
}
