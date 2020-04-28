import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import React, { useEffect } from 'react';

import { USER_STORE } from '../../../constants/constants';
import { IUser } from '../../../mobxmodels/user';
import { IUserListProps } from './UserListContainer';

export const UserList = ({ [USER_STORE]: { users, fetchUsers } }: IUserListProps) => {
    useEffect(() => {
        fetchUsers()
    }, [users]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Name </TableCell>
                            <TableCell align="center">Email </TableCell>
                            <TableCell align="center">About</TableCell>
                            <TableCell align="center">Created At</TableCell>
                            <TableCell align="center">Delete User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user: IUser, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="user">
                                    {user.name}
                                </TableCell>
                                <TableCell align="center">
                                    {user.email}
                                </TableCell>
                                <TableCell align="center">
                                    {user.about_me}
                                </TableCell>
                                <TableCell align="center">
                                    {user.created_at}
                                </TableCell>
                                <TableCell align="center">
                                   <Button onClick={user.deleteUser}>
                                       Delete
                                   </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
