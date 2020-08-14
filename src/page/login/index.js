import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Icon, Textfield, Button, Container, Segment, Row, Col, Text, ButtonLink, ButtonGroup, Spinner } from '@elevenia/master-ui/components/Atom';
import { validateForm } from 'helper';
import { useInput, useSingleToggle, useAction, useAlertBlock } from 'hooks';
import { useSelector } from 'react-redux';
import { requestAuthentication } from 'store/actions/authentication';
import logo from 'assets/image/logo.png';

const Layout = props => {
	document.title = props.title;
	const { hasFetch } = useAction();
	const [open, setOpen] = useSingleToggle(false);
	const { value, bindChange } = useInput({
		initialObjects: {
			username: "",
			password: ""
		},
		identity: "myForm",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		const account = {
			username: value.username,
			password: value.password
		}
		const valid = validateForm(e.target.id);
		valid && hasFetch(requestAuthentication(account));
	}
	const { AlertBlockComponent } = useAlertBlock({ TimeOut: 3000 })
	const loading = useSelector(state => state.authentication.loading);

	return (
		<Container className="container">
			<Row className="u-al-items-center u-js-center u-hg-vh">
				<Segment className="u-fx-column" style={{ width: 584 }}>
					<img src={logo} alt="Logo" style={{ width: 196, margin: 'auto' }} />
					<Segment bg="white" className="box u-fx-column u-mt-20 u-p-40">
						{AlertBlockComponent}
						<Text className="u-tx-d4 u-tx-center u-mb-24">Please sign in</Text>
						<form id="myForm" onSubmit={handleSubmit} autoComplete="false" className="u-px-40">
							<Col pb={12} wide={12}>
								<FormControl>
									<Textfield
										inputProps={{
											...bindChange,
											type: "text",
											name: 'username',
											className: 'validate[required]',
											placeholder: 'Username',
											value: value.username
										}}
										state="normal"
										model="default"
									/>
								</FormControl>
							</Col>
							<Col wide={12} pb={21}>
								<FormControl>
									<Textfield
										inputProps={{
											...bindChange,
											type: open ? 'text' : 'password',
											name: 'password',
											className: 'validate[required]',
											placeholder: 'Password',
										}}
										right={
											<ButtonLink type="button" onClick={setOpen}>
												<Icon
													name={open ? 'visible' : 'invisible'}
													size={16}
													fillColor="#70727D"
												/>
											</ButtonLink>
										}
										state="normal"
									/>
								</FormControl>
							</Col>
							<ButtonGroup responsive>
								<Button disabled={loading} type="submit" variant="primary-alt">
									{loading ? <Spinner color="green" /> : "Sign in"}
								</Button>
							</ButtonGroup>
						</form>
						<Row pt={21}>
							<Col className="u-tx-right">
								<Link to="/public-access" className="u-tx-center">Public Access</Link>
							</Col>
						</Row>
					</Segment>
				</Segment>
			</Row>
		</Container>
	)
}

export default Layout