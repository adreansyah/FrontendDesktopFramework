import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// import { DynamicRoute } from 'helper'
import HeaderBlock from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Routes from 'config/Route'
import { Segment, Row, Col } from '@elevenia/master-ui/components/Atom'


const Layout = props => {

    const loading = () => (
        <></>
    )

    return (
        <>
            <Row>
                <Col wide={2} style={{ display: "grid" }}>
                    <Sidebar {...props} />
                </Col>
                <Col wide={10}>
                    <section>
                        <HeaderBlock {...props} />
                        <Segment>
                            <Suspense fallback={loading()}>
                                <Switch>
                                    {Routes.private.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => {
                                                    return <route.component {...props} title={route.name} />
                                                }}
                                            />
                                        ) : null
                                    })}
                                    {/* <Route render={(props) => <DynamicRoute {...props} />} /> */}
                                </Switch>
                            </Suspense>
                        </Segment>
                    </section>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Layout