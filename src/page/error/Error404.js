import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Text, Row, Col } from '@elevenia/master-ui/components/Atom';
import logo from 'assets/image/logo.png';

const Layout = () => {
	document.title = 'Page Not Found'

	return (
		<Fragment>
			<Segment p={21}>
				<Text H28>{document.title}</Text>
			</Segment>
			<Row mt="24" className="u-js-center" >
				<Col wide={4.5}>
					<Segment bg="white" p={40} className="box">
						<Row>
							<Col>
								<img src={logo} alt="Logo" style={{ width: 196, margin: 'auto' }} className="u-yal-middle" />
							</Col>
							<Col>
								<Text className="u-tx-d4 u-tx-center u-mb-16" mb={16}>
									Page Not Found
								</Text>
								<Text className="u-tx-info" mb={12}>
									Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
								</Text>
								<Link to={'/'}>
									Back to home page
								</Link>
							</Col>
						</Row>
					</Segment>
				</Col>
			</Row>
		</Fragment>
	)
}

export default Layout