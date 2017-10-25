import React from 'react'

import { Button, Container, Header, Menu } from 'semantic-ui-react'

export const Navbar = () => (
	<Menu>
		<Menu.Menu>
			<Menu.Item>My New Menu</Menu.Item>
		</Menu.Menu>
		<Menu.Menu position="right">
			<Menu.Item>Sign Up!</Menu.Item>
			<Menu.Item>Login</Menu.Item>
		</Menu.Menu>
	</Menu>
);