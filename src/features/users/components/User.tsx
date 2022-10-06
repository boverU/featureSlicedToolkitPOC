import { EntityId } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectById, removeUser } from '../usersSlice'


type Props = {
    id: EntityId
}

export const User = ({ id }: Props) => {
    const dispatch = useAppDispatch()

    const user = useAppSelector(state => selectById(state, id))
    return (
        <div onClick={() => dispatch(removeUser(id))}>{`name ${user?.name}`}
        </div>
    )
}

type Props1 = {
    id: number
}

type PropsWithChild = Props1 & {
    children: React.ReactElement
}

