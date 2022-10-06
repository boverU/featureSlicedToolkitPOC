import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { User } from './components/User';
import { getAllUsers, selectIds, removeAllUsers } from './usersSlice';

export const Users = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const ids = useAppSelector(selectIds)

    return (
        <div>
            {ids.map(id => {
                return <User id={id} key={id} />
            })}
            <button onClick={() => dispatch(removeAllUsers())}>Remove all</button>
        </div>
    )
}
