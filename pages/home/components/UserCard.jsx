import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 85%;
    height: 50px;
    background-color: #127475;
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 15px;
    margin-bottom: 0;
    ::before{
        content: '';
        width: 8px;
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        background-color: #F5DFBB;
        position: absolute;
        left: 0;
    }
`

const ProfileDiv = styled.div`
    display: flex;
`

const ProfileName = styled.h1`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: white;
    margin-left: 10px;
`

export default function UserCard() {
    
    return (
        <>
            <Card>
                <ProfileDiv>
                    <Image src={'/defaultProfilePicture.svg'} width={40} height={40} />
                    <ProfileName>joaozinho123</ProfileName>
                </ProfileDiv>
                <div style={{cursor: 'pointer', display: 'flex'}}>
                    <Image src={'/addFriendIcon.svg'} width={40} height={40} />
                </div>
            </Card>
        </>
    )
}
