import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import CenteredDiv from '../../../components/CenteredDiv'
import SearchBar from './SearchBar'
import UsersList from './UsersList'


export default function ContentHomeModal() {
    const [filterName, setFilterName] = useState('')
    return (
        <CenteredDiv style={{flexDirection: 'column', justifyContent: 'space-evenly', width: '100%', height: '100%'}}>
            <SearchBar setFilterName={setFilterName}/>
            <UsersList />
        </CenteredDiv>
    )
}
