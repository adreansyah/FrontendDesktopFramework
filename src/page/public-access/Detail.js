import React from 'react'
import logo from 'assets/image/logo.png'

const Layout = props => {
    document.title = props.title

    return (
        <div className="content">
            <div className="row u-al-items-center u-js-center u-hg-vh">
                <div className="u-fx-column" style={{ width: 584 }}>
                    <img src={logo} alt="Logo" style={{ width: 196, margin: 'auto' }} />
                    <div className="box u-fx-column u-bg-white u-mt-20 u-p-40">
                        <span className="u-tx-d4 u-tx-center u-mb-24">Public Access Detail</span>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => props.history.goBack()} className="btn-select">Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout