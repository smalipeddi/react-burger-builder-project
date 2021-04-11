import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
	return (
	<header className={classes.Toolbar}>
		<DrawerToggle  clicked={props.drawerToggleClicked}/>
		<div clicked={props.toggleSideDraw}>MENU </div>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav classes={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>);
}

export default Toolbar;