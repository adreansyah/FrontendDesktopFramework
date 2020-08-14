import { useState } from 'react';
import { validateInput, validateFormClear, validateInputClear } from 'helper';

export const useInput = ({ initialObjects, identity }) => {
    const [hasValue, setValue] = useState(initialObjects);

    const selectItems = (items, value) => {
        const idx = items.indexOf(value);
        if (idx >= 0) {
            items.splice(idx, 1);
        }
        if (idx === -1) {
            items.splice(idx, 0, value);
        }
        return items;
    }

    const onChange = async (e) => {
        const { name, value } = e.target
        setValue(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        try {
            await validateInput(identity, name)
        }
        catch (e) {

        }
    }

    const onSelect = async (selectPropertiesValue, AttrTextName) => {
        const { name } = AttrTextName;
        const { value } = selectPropertiesValue;
        setValue(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
        try {
            await validateInputClear(identity, name);
        }
        catch (e) {

        }
    }

    const onChecked = async (e) => {
        const { name, checked } = e.target;
        setValue(prev => {
            return {
                ...prev,
                [name]: checked
            }
        });
        try {
            await validateInput(identity, name)
        }
        catch (e) {

        }
    }

    const onCheckedBatch = (e) => {
        const { name, value } = e.target
        const result = selectItems(hasValue[name], value);
        setValue(prev => {
            return {
                ...prev,
                [name]: result
            }
        })
    }

    const validateSingleInput = (name) => {
        validateInput(identity, name)
    }

    const validateMultipleInput = (properties) => {
        validateInput(identity, properties)
    }

    const resetByName = async (name) => {
        setValue({
            ...hasValue,
            [name]: ""
        });
        try {
            await validateInputClear(identity, name);
        }
        catch (e) {

        }
    }

    const resetMultipleName = (properties) => {
        validateInputClear(identity, properties);
    }

    const resetByForm = () => {
        setValue(initialObjects);
        validateFormClear(identity);
    }

    return {
        selectItems,
        setValue,
        value: hasValue,
        resetByForm,
        resetByName,
        resetMultipleName,
        validateSingleInput,
        validateMultipleInput,
        bindChange: {
            onChange: onChange
        },
        bindSelect: {
            onChange: onSelect
        },
        bindChecked: {
            onChange: onChecked
        },
        bindCheckedBatch: {
            onChange: onCheckedBatch
        }
    };
}