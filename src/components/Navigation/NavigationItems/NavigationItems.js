import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from "./NavigationItems.css";


const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem Link="/" > Burger Builder </NavigationItem>
		<NavigationItem Link="/"> Checkout </NavigationItem>
	</ul>
);

export default navigationItems;

