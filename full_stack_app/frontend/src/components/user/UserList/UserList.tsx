import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
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
                            <TableCell align="right">Email </TableCell>
                            <TableCell align="right">About</TableCell>
                            <TableCell align="right">Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user: IUser) => (
                            <TableRow key={user.name}>
                                <TableCell component="th" scope="user">
                                    {user.name}
                                </TableCell>
                                <TableCell align="right">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right">
                                    {user.about_me}
                                </TableCell>
                                <TableCell align="right">
                                    {user.created_at}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
