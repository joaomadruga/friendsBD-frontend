import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import ButtonText from '../../../components/ButtonText'
import CenteredDiv from '../../../components/CenteredDiv'
import Subtitle from '../../../components/Subtitle'
import Title from '../../../components/Title'
import CardHome from './CardHome'
import defaultProfilePicture from './defaultProfilePicture'

const List = styled.div`
    background-color: #127475;
    width: 370px;
    height: 61vh;
    border-radius: 15px;
    margin-top: 10vh;
    overflow: auto;
`

const ButtonBirthdayList = styled.button`
    cursor: pointer;
    background-color: #127475;
    border-radius: 46px;
    border: none;
    margin-top: 10px;
    padding: 7px 40px;
    font-size: 1.5rem;
    color: white;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
`

export default function BirthdayList({setIsModal}) {
    const arrayTeste = ['JOAOZINHO', 'JOSE', 'MARIA', 'JOSUE', 'MIGUEL', 'MIGUEL', 'MIGUEL', 'MIGUEL']
    return (
        <CenteredDiv style={{flexDirection: 'column', height: '100vh', justifyContent: 'center'}}>
            <List>
                <div>
                    <Title style={{fontSize: '1.5rem', textAlign: 'center', marginTop: 10}}>aniversários próximos</Title>
                </div>
                {arrayTeste.map(() => {return (
                    <CardHome>
                        <CenteredDiv style={{flexDirection: 'column'}}>
                            <Title style={{color: 'black', fontSize: '20px', textAlign: 'center', lineHeight: 1}}>
                                Aniversário de João
                            </Title>
                            <span style={{color: '#9590A0', textAlign: 'center', fontSize: '13px'}}>
                                08/05/2021
                            </span>
                        </CenteredDiv>
                        <Image src={'/defaultProfilePicture.svg'} width={55} height={55} />
                    </CardHome>
                )})}
            </List>
            <ButtonBirthdayList onClick={() => setIsModal(true)}>
                adicionar amigues
            </ButtonBirthdayList>
        </CenteredDiv>
  )
}
