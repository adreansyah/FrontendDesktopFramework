import React from "react";
import { Segment, Text, Row, Col, Button, Icon } from "@elevenia/master-ui/components/Atom";
import SecondLayout from "./Listing";
import ModalLarge from "component/ModalCustom/modalLarge";
import { useMultiToogle, useAlertToast } from "hooks";
import FirstLayout from "./Layout";

const CrudLayout = (props) => {
    document.title = props.title
    const { ToastComponent } = useAlertToast({
        timeout: 5000,
        placement: 'top',
        space: 10,
        animate: 'slide',
        m: 20,
    });

    const { isToogle, toogler, onClose } = useMultiToogle({
        AddModalEmployee: false
    });

    return (
        <Segment mb={20}>
            {ToastComponent}
            <Segment py={21}>
                <Text H28>{document.title}</Text>
            </Segment>
            <Row>
                <Button {...toogler} id="AddModalEmployee" variant="primary-alt">
                    <Icon
                        name="plus"
                        size={16}
                        fillColor="white"
                        mr={8}
                    />
                    Add Sample Employees
                </Button>
            </Row>
            <Row>
                <Col wide={12} pt={14}>
                    <SecondLayout {...props} />
                </Col>
            </Row>
            <ModalLarge
                target="AddModalEmployee"
                isOpen={isToogle.AddModalEmployee}
                onClose={onClose}
                title={'EXAMPLE INPUT CRUD'}
                content={<FirstLayout onClose={() => onClose("AddModalEmployee")} />}
            />
        </Segment>
    )
}

export default CrudLayout