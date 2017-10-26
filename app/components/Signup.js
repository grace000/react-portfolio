import React from 'react'

import { Button, Container, Header, Menu, Grid, Form, Image } from 'semantic-ui-react'


export const Signup = () => (
	<Grid centered>
		<Grid.Column width={6}>
			<Form>
				<Form.Field>
					<label>Email</label>
					<input type="email" placeholder="email goes here" />
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type="password" placeholder="confirm pw here" />
				</Form.Field>
			</Form>
		</Grid.Column>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://static.pexels.com/photos/34676/pexels-photo.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://static.pexels.com/photos/34676/pexels-photo.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://static.pexels.com/photos/34676/pexels-photo.jpg' />
      </Grid.Column>
  	</Grid.Row>
	</Grid>
);