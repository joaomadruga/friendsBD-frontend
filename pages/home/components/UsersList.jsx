import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import UserCard from './UserCard'

const ListDiv = styled.div`
    width: 80%;
    height: 65%;
    background-color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 10px;
`

export default function UsersList() {
    const arrayTeste = ['joao', 'jose', 'maria', 'dale', 'dele', 'joao', 'jose', 'maria', 'dale', 'dele']
    return (
        <ListDiv>
            {arrayTeste.map(() => {
                return ( <UserCard/> )
            })}
        </ListDiv>
    )
}
