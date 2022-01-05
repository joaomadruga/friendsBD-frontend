import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const SearchBarDiv = styled.div`
    width: 73.5%;
    height: 54px;
    background-color: white;
    border-radius: 12px;
    position: relative;
    margin-right: 50px;
`

const Text = styled.h3`
    
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 12px;
    border: none;
    z-index: 0;
    padding-left: 50px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #717171;
    :focus{
        outline: none;
        color: black;
    }
    ::-webkit-calendar-picker-indicator {
        display: none;
    }
`

export default function SearchBar({ setFilterName }) {
    
    return (
        <>
            <SearchBarDiv>
                <Input placeholder='digite aqui o nome de usuário'/>
                <SearchIcon>
                    <Image src={'/searchIcon.svg'} width={25} height={25} />
                </SearchIcon>
            </SearchBarDiv>
        </>
    )
}
