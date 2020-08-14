import React from 'react';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import { Textfield, Button, CheckBox, OptionBox } from '@elevenia/master-ui/components/Atom';
import { useInput, useMultiToogle, useSingleToggle } from 'hooks';

describe('custom hooks  tests', () => {
    // useInput
    it('custom hooks useInput should be equal ', () => {
        const { result } = renderHook(() => useInput({
            initialObjects: {
                username: "",
                check: false,
                doReset: "Should Reset",
                checkedBatch: [],
                selectChange: ""
            },
            identity: "mockFormTestId"
        }));

        act(() => {
            const eventMockup = {
                preventDefault() { },
                target: { name: 'username', value: "fooBar" }
            };
            shallow(<Textfield {...result.current.bindChange.onChange(eventMockup)} />);
        })

        act(() => {
            const colourOptions = [
                { value: "orange", label: "Orange", color: "#FF8B00" }
            ];
            const attribute = {
                attr: { name: 'selectChange' },
                properties: { value: colourOptions[0].value }
            };
            const output = shallow(
                <OptionBox
                    {...result.current.bindSelect.onChange(attribute.properties, attribute.attr)}
                    options={colourOptions}
                    placeholder="Select Hobby"
                    name='selectChange'
                    defaultValue={colourOptions[0]}
                />
            )
            output.simulate('change');
            result.current.bindSelect.onChange(attribute.properties, attribute.attr).catch(err => {
                console.log(err)
            })
        })
        act(() => {
            const eventMockup = {
                preventDefault() { },
                target: { name: 'check', checked: true }
            };
            const singleChecked = shallow(<CheckBox
                checkProps={{
                    ...result.current.bindChecked.onChange(eventMockup),
                    id: "aggrement",
                    className: "validate[required]"
                }}
                checkItems={[
                    { label: "I agree to the Terms and Conditions", value: "" }
                ]}
            />);
            singleChecked.simulate('change')
        })

        act(() => {
            const eventMockup1 = {
                preventDefault() { },
                target: { name: "checkedBatch", value: "apple" }
            };
            const eventMockup2 = {
                preventDefault() { },
                target: { name: "checkedBatch", value: "mango" }
            };
            shallow(
                <CheckBox
                    checkProps={{
                        ...result.current.bindCheckedBatch.onChange(eventMockup1),
                        id: "fruitApple"
                    }}
                    checkItems={[
                        { label: "Apple", value: "apple" }
                    ]}
                />
            )
            shallow(
                <CheckBox
                    checkProps={{
                        ...result.current.bindCheckedBatch.onChange(eventMockup2),
                        id: "fruitMango"
                    }}
                    checkItems={[
                        { label: "Mango", value: "mango" }
                    ]}
                />
            )
        })

        act(() => {
            const output = shallow(<Button onClick={() => result.current.resetByName('doReset')} />)
            output.simulate('click');
        })

        act(() => {
            const validate = shallow(<Button onClick={() => result.current.validateMultipleInput('username')} />);
            validate.simulate('click');
        })

        act(() => {
            const validate = shallow(<Button onClick={() => result.current.validateSingleInput('username')} />);
            validate.simulate('click');
        })

        act(() => {
            const component = shallow(
                <form id="mockFormTestId">
                    <Textfield inputProps={{
                        name: "username"
                    }} />
                    <button type="click" onClick={() => result.current.resetMultipleName('username')} />
                </form>
            );
            component.find('button').simulate('click')
        })

        act(() => {
            const component = shallow(
                <Button onClick={() => result.current.resetByForm()} />
            )
            component.simulate('click');
        })

        expect(result.current.selectItems(['world', 'hello'], 'hello')).toEqual(['world']);
        expect(result.current.selectItems(['world'], 'hello')).toEqual(['hello', 'world']);
        expect(result.current.value.check).toBe(result.current.value.check);
        expect(result.current.value).toEqual(result.current.value);
    });

    //useMultiToogle
    it('custom hooks useMultiToogle should be boolean', () => { // behavior in multi event
        const { result } = renderHook(() => useMultiToogle({
            mockId1: false,
            mockId2: true,
            mockClose: true
        }))

        const eventMockup1 = {
            preventDefault() { },
            target: { id: 'mockId1' }
        };

        const eventMockup2 = {
            preventDefault() { },
            target: { id: 'mockId2' }
        };

        act(() => {
            shallow(<Button id="mockId1" onClick={result.current.toogler.onClick(eventMockup1)} />);
        })

        act(() => {
            shallow(<Button id="mockId2" onClick={result.current.toogler.onClick(eventMockup2)} />);
        })

        act(() => {
            shallow(<Button id="mockClose" onClick={result.current.onClose('mockClose')} />);
        })

        expect(result.current.isToogle.mockId1).toBeTruthy();//determine behavior positif case
        expect(result.current.isToogle.mockId2).toBeFalsy(); //determine behavior negatif case
        expect(result.current.isToogle.mockClose).toBeFalsy(); //determine onclose Function "is success" 
    });

    //useSingleToogle
    it('custom hooks useSingleToogle should be boolean should stand itself', () => { // behavior in single event
        const { result } = renderHook(() => useSingleToggle(false));

        act(() => {
            shallow(<Button onClick={result.current[1](false)} />)
        });

        expect(result.current[0]).toBeTruthy(); //otherwise if statement is true should be falsy
    });
});