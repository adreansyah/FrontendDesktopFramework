import React from 'react'
import { Icon, ButtonLink, Popover, ButtonGroup, Segment, Button, Text } from '@elevenia/master-ui/components/Atom'
import { Header, HeaderRight } from '@elevenia/master-ui/components/Organisms'
import Box from '@elevenia/master-ui/components/Atom/Box'
import { logout } from 'helper'

const HeaderBlock = (props) => {
    return (
        <Header style={{ position: "relative", padding: 20, borderBottom: "1px solid #eaeaeae8" }}>
            <HeaderRight>
                <Popover popoverPosition="bottom-right">
                    <Popover.Trigger>
                        <ButtonLink>
                            <Text>Hi, anonymous</Text>
                            <Icon name="chevron-down" size="20px" mb={2} ml={8} />
                        </ButtonLink>
                    </Popover.Trigger>
                    <Popover.Content>
                        <Box py={12} style={{ width: "300px", background: "white", display: "block" }}>
                            <Segment borderBottom="1px solid #d4d4d4" className="u-tx-center" mb={12} pb={6}>
                                <Segment borderRadius={55} border="2px solid #d4d4d485" style={{ height: 110, width: 110, display: "inline-block" }}>
                                    <Icon name={"profile"} size={105} fillColor="black40" mb={2} mr={8} />
                                </Segment>
                            </Segment>
                            <Segment px={8}>
                                <ButtonGroup responsive>
                                    <Button variant="secondary-alt" onClick={() => alert("On Request")}>
                                        <Icon name={"setting"} size={16} fillColor="black40" mb={2} mr={8} />
                                        Settings
                                    </Button>
                                    <Button variant="secondary-alt" onClick={() => logout()}>
                                        <Icon name={"logout"} size={16} fillColor="black40" mb={2} mr={8} />
                                        Signout
                                    </Button>
                                </ButtonGroup>
                            </Segment>
                        </Box>
                    </Popover.Content>
                </Popover>
            </HeaderRight>
        </Header>
    )
}

export default HeaderBlock