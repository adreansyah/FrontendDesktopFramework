import React, { useEffect, useState } from "react";
import { Text, ButtonGroup, Button } from "@elevenia/master-ui/components/Atom";
import Segment from "@elevenia/master-ui/components/Atom/Segment";
import { requestSampleList } from "store/actions/sampleform";
import { useAction } from "hooks";
import { useSelector } from "react-redux";
import DataTable from "component/DataTable";
import ModalLarge from "component/ModalCustom/modalLarge";
import EditLayout from "./EditLayout";
import ModalSmall from "component/ModalCustom/modalSmall";

const SecondLayout = (props) => {
    const { hasFetch } = useAction();
    const [isOpenEdit, setOpenEdit] = useState(false);
    const [isOpenDelete, setOpenDelete] = useState(false);
    const [getId, setGetId] = useState("");
    const [isObject, setObject] = useState({
        page: 0,
        size: 10,
        search: "",
        sort: ""
    });

    const payload = useSelector(state => {
        return {
            data: state.simpleform.data,
            isLoading: state.simpleform.isLoading,
            totalPages: state.simpleform.totalPages
        }
    });

    useEffect(() => {
        hasFetch(requestSampleList(isObject));
    }, [hasFetch, isObject]);

    return (
        <Segment bg="white">
            <Segment p={16} borderBottom="1px solid #dcdee3">
                <Text H16>Simple Table Crud</Text>
            </Segment>
            <Segment px={16}>
                <DataTable
                    tableConsume={[{
                        field: 'First Name',
                        sortField: 'firstName',
                        rowField: 'firstName'
                    }, {
                        field: 'Last Name',
                        sortField: 'lastName',
                        rowField: 'lastName'
                    }, {
                        field: 'NIK',
                        sortField: 'nik',
                        rowField: 'nik'
                    }, {
                        field: 'Email',
                        sortField: 'email',
                        rowField: 'email'
                    }, {
                        field: 'Edit/Delete',
                        isEdit: true,
                        isDelete:true,
                        entityFilters: "id" //example : [{id:1,name:"a"},{id:2,name:"b"}]; then you get property id by property {id}
                    }]} // Define table field ,table sorted, table rowfield
                    dataConsume={payload.data} // Consume data from redux or API in state.
                    isLoading={payload.isLoading} // Create isLoading from redux or API in state. Boolear Type
                    createCustomEdit={(entity) => {
                        setOpenEdit(!isOpenEdit);
                        setGetId(entity);
                    }}
                    createCustomDelete={(entity) => {
                        setOpenDelete(!isOpenDelete);
                        setGetId(entity);
                    }}
                    createShowPerSize={(size) => setObject(prev => {
                        return {
                            ...prev,
                            size: size.value
                        }
                    })}// Create Function show per size using redux or API in state. example: (foo) => console.log(foo,bar);
                    createPaginations={(page) => setObject(prev => {
                        return {
                            ...prev,
                            page
                        }
                    })}// Create Function pagination using redux or API in state. example: (foo) => console.log(foo,bar);
                    callSorted={(val, sort) => setObject(prev => {
                        return {
                            ...prev,
                            sort: `${val},${sort}`
                        }
                    })}// Create Function sorted using redux or API in state. example: (foo) => console.log(foo,bar);
                    createSearchAbles={(e) => console.log(e.target.value)}// Create Function searchable using redux or API in state. example: (foo) => console.log(foo,bar);                   
                    totalPages={payload.totalPages} //Add total page from service or your data retrive 
                />
            </Segment>
            <ModalLarge
                isOpen={isOpenEdit}
                onClose={() => setOpenEdit(!isOpenEdit)}
                title={'EXAMPLE EDIT INPUT CRUD'}
                content={<EditLayout onClose={() => setOpenEdit(!isOpenEdit)} id={getId} />}
            />
            <ModalSmall
                isOpen={isOpenDelete}
                onClose={() => setOpenDelete(!isOpenDelete)}
                title={'EXAMPLE DELETE INPUT CRUD'}
                content={"Are You Sure Want To Delete ?"}
                ButtonFooter={
                    <ButtonGroup reponsive>
                        <Button onClick={() => setOpenDelete(!isOpenDelete)}>
                            <Text>Cancel</Text>
                        </Button>
                        <Button style={{ backgroundColor: 'red' }}>
                            <Text>Delete</Text>
                        </Button>
                    </ButtonGroup>
                }
            />
        </Segment >
    )
}

export default SecondLayout