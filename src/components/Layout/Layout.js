import React , {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from "./Layout.css";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
	state = {
		showSideDrawer: true
	}

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	}

    sideDrawerToggleHandler = () => {
    	this.setState ( (prevState) => {
			console.log("sunitha", prevState);
    		return { showSideDrawer: !prevState.showSideDrawer}
    		});
    }

	render() {
		return (
			<Aux>
				<Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
			    <SideDrawer  />
				<main className={classes.Content}>
				    {this.props.children}
				</main>
			</Aux>
			)
    }
}	
export default Layout;

