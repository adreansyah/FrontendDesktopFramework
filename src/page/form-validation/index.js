import React, { Fragment, useEffect } from 'react'
import {
    FormControl,
    Icon,
    ButtonLink,
    Textfield,
    Button,
    Segment,
    Row,
    Col,
    Text,
    RadioButton,
    ButtonGroup,
    OptionBox,
    CheckBox,
    Switch
} from '@elevenia/master-ui/components/Atom';
import {
    useInput,
    useMultiToogle,
    useAction,
    useAlertToast,
    useAlertBlock,
} from 'hooks';
import { validateForm } from 'helper';
import Cookies from 'js-cookie';
import ModalSmall from 'component/ModalCustom/modalSmall';
import ModalMedium from 'component/ModalCustom/modalMedium';
import ModalLarge from 'component/ModalCustom/modalLarge';
import ModalXlarge from 'component/ModalCustom/modalXlarge';

const language = [
    { label: "English", value: "en" },
    { label: "Indonesia", value: "id" }
];
const gender = [
    { label: "Male", value: "01" },
    { label: "Female", value: "02" }
];
const colourOptions = [
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
];

const Layout = props => {
    document.title = props.title
    const { hasFetch } = useAction();

    /*
        useMultiToogle : define multi toogling in same DOM by Id, 
    */

    const { isToogle, toogler, onClose } = useMultiToogle({
        password: false, //open password => id="password"
        equalspassword: false, //open confirm password => id="equalspassword"
        modalSmall: false,// open modal Small => id="modalSmall"
        modalMedium: false, // open modal medium => id="modalMedium"
        modalLarge: false, // open modal large => id="modalLarge"
        modalXlarge: false // open modal X large => id="modalXlarge"
    });

    /*
        useInput : define behavior action might you not need create handling change
    */

    const {
        value,
        bindChange,
        bindSelect,
        bindChecked,//checked Boolean true/false
        bindCheckedBatch, //checked ["foo","bar"]
        validateSingleInput,
        validateMultipleInput,
        resetByForm,
        resetByName,
        resetMultipleName
    } = useInput({
        initialObjects: {
            language: Cookies.get('error_lang'),
            username: "",
            email: "",
            password: "",
            equalspassword: "",
            hobby: "",
            gender: "",
            aggrement: false,
            checkedbatch: [],
            isSwitch: false
        },
        identity: "FirstForm", //is id=""
    });

    /*
       useAlertToast : define behavior Toast as globals alert action in custom hooks
   */

    const { ToastComponent } = useAlertToast({
        timeout: 3000,
        placement: 'top',
        space: 10,
        animate: 'slide',
        m: 20,
    });

    /*
       useAlertBlock : define behavior Block as globals Alert action in custom hooks
   */

    const { AlertBlockComponent } = useAlertBlock({ TimeOut: 3000 })

    useEffect(() => {
        Cookies.set('error_lang', value.language);
    }, [value.language]);

    const doSubmitted = (e) => {
        e.preventDefault();
        validateForm(e.target.id);
    }

    return (
        <Fragment>
            <Segment py={21}>
                <Text H28>{props.title}</Text>
            </Segment>
            {ToastComponent}
            {AlertBlockComponent}
            <Row>
                <Col wide={6} pr={8}>
                    <Text H16 py={8}>Radio Button</Text>
                    <Segment bg="white" className="box" p={20}>
                        <FormControl label="Error Lang">
                            <RadioButton
                                radioProps={{
                                    ...bindChange,
                                    name: "language",
                                    id: "language",
                                }}
                                radioItems={language}
                                selected={value.language}
                            />
                        </FormControl>
                    </Segment>
                </Col>
                <Col wide={6} pl={8}>
                    <Text H16 py={8}>Switch</Text>
                    <Segment bg="white" className="box" p={20} py={30}>
                        <FormControl>
                            <Switch labelPosition={"right"} name="isSwitch" {...bindChecked} checked={value.isSwitch} />
                        </FormControl>
                    </Segment>
                </Col>
            </Row>
            <Row>
                <Col wide={12}>
                    <Text H16 py={8}>Forms</Text>
                </Col>
                <Col wide={6} pr={8}>
                    <form id="FirstForm" onSubmit={doSubmitted}>
                        <Segment bg="white" className="box" p={20}>
                            <Segment style={{ width: "100%" }}>
                                <Col wide={12} className="u-pt-8">
                                    <label>Username</label>
                                    <FormControl className="u-pt-8">
                                        <Textfield
                                            status="normal"
                                            inputProps={{
                                                ...bindChange,
                                                type: "text",
                                                name: 'username',
                                                className: 'validate[required]',
                                                placeholder: 'Username...',
                                                value: value.username
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={12} className="u-pt-8">
                                    <label>Email</label>
                                    <FormControl className="u-pt-8">
                                        <Textfield
                                            status="normal"
                                            inputProps={{
                                                ...bindChange,
                                                type: "text",
                                                name: 'email',
                                                className: 'validate[required,email]',
                                                placeholder: 'Email...',
                                                value: value.email
                                            }}
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={12} className="u-pt-8">
                                    <label>Password</label>
                                    <FormControl className="u-pt-8">
                                        <Textfield
                                            status="normal"
                                            inputProps={{
                                                ...bindChange,
                                                type: isToogle ? "text" : "password",
                                                name: 'password',
                                                className: 'validate[required]',
                                                placeholder: 'Password...',
                                                value: value.password
                                            }}
                                            right={
                                                <ButtonLink id="password" type="button" {...toogler}>
                                                    <Icon
                                                        name={isToogle.password ? 'visible' : 'invisible'}
                                                        size={16}
                                                        fillColor="#70727D"
                                                    />
                                                </ButtonLink>
                                            }
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={12} className="u-pt-8">
                                    <label>Confirm Password</label>
                                    <FormControl className="u-pt-8">
                                        <Textfield
                                            status="normal"
                                            inputProps={{
                                                ...bindChange,
                                                type: isToogle ? "text" : "password",
                                                name: 'equalspassword',
                                                className: 'validate[required,equals[password]]',
                                                placeholder: 'Confirm Password...',
                                                value: value.equalspassword
                                            }}
                                            right={
                                                <ButtonLink id="equalspassword" type="button" {...toogler}>
                                                    <Icon
                                                        name={isToogle.equalspassword ? 'visible' : 'invisible'}
                                                        size={16}
                                                        fillColor="#70727D"
                                                    />
                                                </ButtonLink>
                                            }
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={12} className="u-pt-8">
                                    <label>Hobby</label>
                                    <FormControl className="u-pt-8">
                                        <OptionBox
                                            {...bindSelect}
                                            options={colourOptions}
                                            placeholder="Select Hobby"
                                            inputClassName="sample-class-in-input validate[required]"
                                            name="hobby"
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={3} className="u-pt-8">
                                    <label>Gender</label>
                                    <FormControl className="u-pt-8">
                                        <RadioButton
                                            radioProps={{
                                                ...bindChange,
                                                name: "gender",
                                                id: "gender",
                                                className: 'validate[required]',
                                            }}
                                            radioItems={gender}
                                            selected={value.gender}
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={6} className="u-pt-8">
                                    <label>Aggrement</label>
                                    <FormControl className="u-pt-8">
                                        <CheckBox
                                            checkProps={{
                                                ...bindChecked,
                                                name: "aggrement",
                                                id: "aggrement",
                                                className: 'validate[required]',
                                                checked: value.aggrement
                                            }}
                                            checkItems={[
                                                { label: "I agree to the Terms and Conditions", value: "agree" }
                                            ]}
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={6} className="u-pt-8">
                                    <label>Aggrement</label>
                                    <FormControl className="u-pt-8">
                                        <CheckBox
                                            checkProps={{
                                                ...bindCheckedBatch,
                                                name: "checkedbatch",
                                                id: "colorBlue",
                                                className: 'validate[required]'
                                            }}
                                            checkItems={[
                                                { label: "Blue", value: "blue" }
                                            ]}
                                            selected={value.checkedbatch}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <CheckBox
                                            checkProps={{
                                                ...bindCheckedBatch,
                                                name: "checkedbatch",
                                                id: "colorRed",
                                                className: 'validate[required]'
                                            }}
                                            checkItems={[
                                                { label: "Red", value: "red" }
                                            ]}
                                            selected={value.checkedbatch}
                                        />
                                    </FormControl>
                                </Col>
                                <Col wide={12} py={12} my={12} borderTop="1px solid #dcdee3">
                                    <ButtonGroup responsive>
                                        <Button
                                            type="submit"
                                            size="medium"
                                            variant="primary-alt">
                                            Validate All Form
                                        </Button>
                                        <Button
                                            onClick={() => validateSingleInput("hobby")}
                                            type="button"
                                            size="medium"
                                            variant="primary-alt">
                                            Validate Single Input
                                        </Button>
                                        <Button
                                            onClick={() => validateMultipleInput(['username', 'password', 'email'])}
                                            type="button"
                                            size="medium"
                                            variant="primary-alt">
                                            Validate Multiple input
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup responsive style={{ paddingTop: 10 }}>
                                        <Button
                                            onClick={() => resetByForm()}
                                            type="button"
                                            size="medium"
                                            style={{ color: "white", backgroundColor: "#ea4b2c" }}
                                        >
                                            Clear Validate All Form
                                        </Button>
                                        <Button
                                            onClick={() => resetByName("hobby")}
                                            type="button"
                                            size="medium"
                                            style={{ color: "white", backgroundColor: "#ea4b2c" }}
                                        >
                                            Clear Validate Single Input
                                        </Button>
                                        <Button
                                            onClick={() => resetMultipleName(['username', 'password', 'email'])}
                                            type="button"
                                            size="medium"
                                            style={{ color: "white", backgroundColor: "#ea4b2c" }}
                                        >
                                            Clear Validate Multiple input
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Segment>
                        </Segment>
                    </form>
                </Col>
                <Col wide={6} pl={8}>
                    <Segment bg="white" className="box" p={20}>
                        <Segment style={{ width: "100%" }}>
                            <Col wide={12} py={12}>
                                <Text H16 py={8}>Modal</Text>
                                <ButtonGroup responsive>
                                    <Button
                                        {...toogler}
                                        id="modalSmall"
                                        size="medium"
                                        variant="secondary-alt">
                                        Modal Small 400 px
                                    </Button>
                                    <Button
                                        {...toogler}
                                        id="modalMedium"
                                        size="medium"
                                        variant="secondary-alt">
                                        Modal Medium 600 px
                                    </Button>
                                    <Button
                                        {...toogler}
                                        id="modalLarge"
                                        size="medium"
                                        variant="secondary-alt">
                                        Modal large 800 px
                                    </Button>
                                    <Button
                                        {...toogler}
                                        id="modalXlarge"
                                        size="medium"
                                        variant="secondary-alt">
                                        Modal xlarge 1200 px
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col wide={12} py={12}>
                                <Text H16 py={8}>Alert Block</Text>
                                <ButtonGroup responsive>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_ERROR", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        style={{ backgroundColor: "#ea4b2c", color: "white" }}
                                    >
                                        Alert Danger
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_WARNING", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        style={{ backgroundColor: "#f4ae2b", color: "white" }}
                                    >
                                        Alert Warning
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_SUCCESS", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        variant="primary-alt"
                                    >
                                        Alert Success
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col wide={12} py={12}>
                                <Text H16 py={8}>Alert Toast</Text>
                                <ButtonGroup responsive>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_TOAST_ERROR", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        style={{ backgroundColor: "#ea4b2c", color: "white" }}
                                    >
                                        Alert Toast Danger
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_TOAST_WARNING", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        style={{ backgroundColor: "#f4ae2b", color: "white" }}
                                    >
                                        Alert Toast Warning
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            hasFetch({ type: "ALERT_TOAST_SUCCESS", payload: { message: "HeyMan" } });
                                        }}
                                        size="medium"
                                        variant="primary-alt"
                                    >
                                        Alert Toast Success
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Segment>
                    </Segment>
                </Col>
            </Row>
            <ModalSmall
                target="modalSmall"
                isOpen={isToogle.modalSmall}
                onClose={onClose}
                title={"Modal Small"}
                content={"Small"}
                position={"top"}
                ButtonFooter={
                    <ButtonGroup space={8}>
                        <Button size="medium" variant="secondary-alt">YA</Button>
                        <Button size="medium" variant="primary-alt" onClick={() => onClose("modalSmall")}>TIDAK</Button>
                    </ButtonGroup>
                }
            />
            <ModalMedium
                target="modalMedium"
                isOpen={isToogle.modalMedium}
                onClose={onClose}
                title={'Modal Medium'}
                content={"Medium"}
                position={"top"}
                ButtonFooter={
                    <ButtonGroup space={8}>
                        <Button size="medium" variant="secondary-alt">YA</Button>
                        <Button size="medium" variant="primary-alt" onClick={() => onClose("modalMedium")}>TIDAK</Button>
                    </ButtonGroup>
                }
            />
            <ModalLarge
                target="modalLarge"
                isOpen={isToogle.modalLarge}
                onClose={onClose}
                title={'Modal Large'}
                content={"Large"}
                // position={"top"}
                ButtonFooter={
                    <ButtonGroup space={8}>
                        <Button size="medium" variant="secondary-alt">YA</Button>
                        <Button size="medium" variant="primary-alt" onClick={() => onClose("modalLarge")}>TIDAK</Button>
                    </ButtonGroup>
                }
            />
            <ModalXlarge
                target="modalXlarge"
                isOpen={isToogle.modalXlarge}
                onClose={onClose}
                title={'Modal Xlarge'}
                content={"XLarge"}
                position={"top"}
                ButtonFooter={
                    <ButtonGroup space={8}>
                        <Button size="medium" variant="secondary-alt">YA</Button>
                        <Button size="medium" variant="primary-alt" onClick={() => onClose("modalXlarge")}>TIDAK</Button>
                    </ButtonGroup>
                }
            />
        </Fragment>
    )
}


export default Layout