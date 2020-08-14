import React from "react";
import { Segment, Row, Col, FormControl, Textfield, Button } from "@elevenia/master-ui/components/Atom";
import { useInput, useAction } from "hooks";
import { validateForm } from 'helper';
import { requestUpdateSampleLayout } from "store/actions/sampleform";
import { useSelector } from "react-redux";

const EditLayout = ({ onClose, id, ...props }) => {
    const { hasFetch } = useAction();

    const payload = useSelector(state => {
        return {
            data: state.simpleform.data.filter(v => v.id === id)
        }
    });

    const { value, bindChange } = useInput({
        initialObjects: {
            nik: payload.data[0].nik,
            email: payload.data[0].email,
            firstname: payload.data[0].firstName,
            lastname: payload.data[0].lastName
        },
        identity: "SampleFormEdit",
    });

    const isSubmited = (e) => {
        e.preventDefault();
        const valid = validateForm(e.target.id, true, false);
        valid && hasFetch(requestUpdateSampleLayout(value, id));
        valid && onClose();
    }

    return (
        <Segment bg="white">
            <form id="SampleFormEdit" onSubmit={isSubmited}>
                <Segment py={16}>
                    <Row>
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
                    </Row>
                </Segment>
                <Segment className="u-tx-right">
                    <Button variant="primary-alt">Submit</Button>
                </Segment>
            </form>
        </Segment>
    )
}

export default EditLayout