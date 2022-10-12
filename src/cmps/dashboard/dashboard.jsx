
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from "react"
import { useEffect } from "react"
import { orderService } from "../../services/order.service"
import { userService } from "../../services/user.service"


const columns = [
    { id: 'stayName', label: 'stay-name', minWidth: 170 },
    { id: 'startDate', label: 'arrive-at', minWidth: 100 },
    { id: 'endDate', label: 'leave-at', minWidth: 100 },
    {
        id: 'total',
        label: 'Total',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'status',
        minWidth: 100
    }

];

function createData(stayName, startDate, endDate, total, status) {

    return { stayName, startDate, endDate, total, status };
}




export function Dashboard() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [orders, setOrders] = useState([])
    const logInUser = userService.getLoggedinUser()
    console.log('logInUser:', logInUser)
    let rows = orders.filter(order => order.hostId === logInUser._id)
        .map(order => createData(order.stay.name, order.startDate, order.endDate, order.total, order.status))


    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {
        const orders = await orderService.query()
        console.log('orders:', orders)
        setOrders(orders)
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const checkStatus = (value) => {
        let color
        switch (value) {
            case 'pending':
                color = 'orange'
                break;
            case 'confirmed':
                color = 'green'
                break;
            case 'rejected':
                color = 'red';
                break;
            default:
                color = 'black';
                break;
        }
        return color
    }

    if (!rows) return <h1>Loading ..</h1>
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} style={column.id === 'status' ? {color: checkStatus(value)} : { color: 'black' }}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                           
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
