import React, { useState } from "react";
import { Text, Textfield, Icon, OptionBox, Spinner, ButtonLink, ButtonGroup, Button } from "@elevenia/master-ui/components/Atom";
import Table from "@elevenia/master-ui/components/Atom/Table";
import Segment from "@elevenia/master-ui/components/Atom/Segment";
import { Pagination } from "@elevenia/master-ui/components/Molecules";

const DataTable = ({
    tableConsume = [],
    dataConsume = [],
    isLoading = false,
    createShowPerSize,
    callSorted,
    createSearchAbles,
    createPaginations,
    createCustomEdit,
    createCustomDelete,
    totalPages = 0,
    showSize = true,
    showPagination = true,
    showSearch = true
}) => {
    const hasOptions = [
        { value: 5, label: "5", color: "#253858" },
        { value: 10, label: "10", color: "#666666" },
        { value: 20, label: "20", color: "#253858" },
        { value: 50, label: "50", color: "#253858" },
        { value: 100, label: "100", color: "#666666" }
    ];
    const [isSort, setSort] = useState(false);
    const [initPage, setInitpage] = useState(1);

    const handleSorted = (value) => {
        setSort({
            ...isSort,
            [value]: !isSort[value]
        });
        callSorted(value, isSort[value] ? "desc" : 'asc');
    }

    const handleEdit = (id) => {
        createCustomEdit(id);
    }

    const handleDelete = (id) => {
        createCustomDelete(id);
    }


    return (
        <>
            {
                showSize && <Segment className="u-fl-left" py={8} width="95px">
                    <OptionBox
                        onChange={createShowPerSize}
                        inputClassName={"sample-class-in-input"}
                        options={hasOptions}
                        placeholder="show"
                    />
                </Segment>
            }
            {
                showSearch && <Segment className="u-fl-right" py={8}>
                    <Textfield
                        inputProps={{
                            onChange: createSearchAbles,
                            placeholder: "Search..."
                        }}
                        right={<Icon name={"search"} size={24} fillColor="black50" />}
                    />
                </Segment>
            }
            <Table responsive boxShadow round>
                <thead>
                    <tr>
                        <th width="5%">#</th>
                        {
                            tableConsume.map((item, index) => {
                                return (
                                    <th key={index} style={{ paddingRight: 20 }} width={item.isEdit || item.isDelete ? '5%' : 'auto'}>
                                        {
                                            item.isEdit || item.isDelete ?
                                                <Text className="u-tx-right">{item.field}</Text> :
                                                <ButtonGroup responsive>
                                                    <Text className="u-fl-left">{item.field}</Text>
                                                    {
                                                        item.sortField && (
                                                            <ButtonLink onClick={() => handleSorted(item.sortField)} className="u-tx-right">
                                                                <Text className="u-fl-right" style={{ display: "inline-table", width: "100%" }}>
                                                                    <Icon style={{ fontWeight: 600 }} fillColor="#70727d" name={
                                                                        isSort[item.sortField] ? "arrow-up" : "arrow-down"
                                                                    } />
                                                                </Text>
                                                            </ButtonLink>
                                                        )
                                                    }
                                                </ButtonGroup>
                                        }
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ?
                            <tr>
                                <td colSpan={tableConsume.length + 1}>
                                    <Segment className="u-tx-center" width="100%" height={30}>
                                        <Spinner />
                                    </Segment>
                                </td>
                            </tr>
                            :
                            dataConsume.length === 0 ?
                                <tr>
                                    <td colSpan={tableConsume.length + 1}>
                                        <Segment className="u-tx-center" width="100%" height={30}>
                                            Data Not Found
                                        </Segment>
                                    </td>
                                </tr> :
                                dataConsume.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{((initPage - 1) * dataConsume.length) + index + 1}</td>
                                            {
                                                tableConsume.map((child, indexChild) => {
                                                    return (
                                                        <td key={indexChild}>
                                                            {
                                                                child.isEdit || child.isDelete ?
                                                                    <Segment className="u-tx-right">
                                                                        <ButtonGroup>
                                                                            {
                                                                                child.isEdit &&
                                                                                <Button onClick={() => handleEdit(item[child.entityFilters], item)} size="small" variant="primary-alt">
                                                                                    Update
                                                                                </Button>
                                                                            }
                                                                            {
                                                                                child.isDelete &&
                                                                                <Button onClick={() => handleDelete(item[child.entityFilters], item)} size="small" style={{ backgroundColor: "#ea4b2c" }}>
                                                                                    Delete
                                                                                </Button>
                                                                            }
                                                                        </ButtonGroup>
                                                                    </Segment>
                                                                    :
                                                                    child.isCustomRow ? child.isCustomRow(item[child.entityFilters], item) : item[child.rowField]
                                                            }
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                    }
                </tbody>
            </Table>
            {
                showPagination &&
                <Segment py={8}>
                    <Pagination
                        className="u-mb-20"
                        innerRange={2}
                        outerRange={1}
                        total={totalPages}
                        initialPage={initPage}
                        onChange={page => {
                            setInitpage(page);
                            createPaginations(page - 1);
                        }}
                    />
                </Segment>
            }
        </>
    )
}

export default DataTable