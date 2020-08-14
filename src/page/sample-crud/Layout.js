import React from "react";
import { Segment, Row, Col, FormControl, Textfield, Button, ButtonLink, Icon } from "@elevenia/master-ui/components/Atom";
import { useInput, useAction, useMultiToogle } from "hooks";
import { validateForm } from 'helper';
import { requestSampleLayout } from "store/actions/sampleform";

const FirstLayout = ({ onClose, ...props }) => {
    const { hasFetch } = useAction();

    const { value, bindChange } = useInput({
        initialObjects: {
            nik: "",
            barcode: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
            equalpassword: ""
        },
        identity: "SampleForm1",
    });

    const { isToogle, toogler } = useMultiToogle({
        openPassword: false,
        openEqualPwd: false
    });

    const isSubmited = (e) => {
        e.preventDefault();
        const valid = validateForm(e.target.id, true, false);
        valid && hasFetch(requestSampleLayout(value));
        valid && onClose()
    }

    return (
        <Segment bg="white">            
            <form id="SampleForm1" onSubmit={isSubmited}>
                <Segment py={16}>
                    <Row>
                        <Col wide={12} px={16} pb={8}>
                            <FormControl label="Barcode">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: "text",
                                        name: 'barcode',
                                        className: 'validate[required]',
                                        placeholder: 'Barcode...',
                                        value: value.barcode
                                    }}
                                    state="normal"
                                    model="default"
                                />
                            </FormControl>
                        </Col>
                        <Col wide={12} px={16} pb={8}>
                            <FormControl label="NIK">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: "text",
                                        name: 'nik',
                                        className: 'validate[required]',
                                        placeholder: 'NIK...',
                                        value: value.nik
                                    }}
                                    state="normal"
                                    model="default"
                                />
                            </FormControl>
                        </Col>
                        <Col wide={12} px={16} pb={8}>
                            <FormControl label="Email">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: "text",
                                        name: 'email',
                                        className: 'validate[required,email]',
                                        placeholder: 'Email...',
                                        value: value.email
                                    }}
                                    state="normal"
                                    model="default"
                                />
                            </FormControl>
                        </Col>
                        <Col wide={6} px={16} pb={8}>
                            <FormControl label="First Name">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: "text",
                                        name: 'firstname',
                                        className: 'validate[required]',
                                        placeholder: 'First Name...',
                                        value: value.firstname
                                    }}
                                    state="normal"
                                    model="default"
                                />
                            </FormControl>
                        </Col>
                        <Col wide={6} px={16} pb={8}>
                            <FormControl label="Last Name">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: "text",
                                        name: 'lastname',
                                        className: 'validate[required]',
                                        placeholder: 'Last Name...',
                                        value: value.lastname
                                    }}
                                    state="normal"
                                    model="default"
                                />
                            </FormControl>
                        </Col>
                        <Col wide={6} px={16} pb={8}>
                            <FormControl label="Password">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: isToogle.openPassword ? "text" : "password",
                                        name: 'password',
                                        className: 'validate[required,password]',
                                        placeholder: 'Pasword...',
                                        value: value.password
                                    }}
                                    state="normal"
                                    model="default"
                                    right={
                                        <ButtonLink id="openPassword" type="button" {...toogler}>
                                            <Icon
                                                name={isToogle.openPassword ? 'visible' : 'invisible'}
                                                size={16}
                                                fillColor="#70727D"
                                            />
                                        </ButtonLink>
                                    }
                                />
                            </FormControl>
                        </Col>
                        <Col wide={6} px={16} pb={8}>
                            <FormControl label="Confirm Password">
                                <Textfield
                                    inputProps={{
                                        ...bindChange,
                                        type: isToogle.openEqualPwd ? "text" : "password",
                                        name: 'equalpassword',
                                        className: 'validate[required,equals[password]]',
                                        placeholder: 'Confirm Pasword...',
                                        value: value.equalpassword
                                    }}
                                    state="normal"
                                    model="default"
                                    right={
                                        <ButtonLink id="openEqualPwd" type="button" {...toogler}>
                                            <Icon
                                                name={isToogle.openEqualPwd ? 'visible' : 'invisible'}
                                                size={16}
                                                fillColor="#70727D"
                                            />
                                        </ButtonLink>
                                    }
                                />
                            </FormControl>
                        </Col>
                    </Row>
                </Segment>
                <Segment className="u-tx-right">
                    <Button variant="primary-alt">Submit</Button>
                </Segment>
            </form>
        </Segment>
    )
}

export default FirstLayout