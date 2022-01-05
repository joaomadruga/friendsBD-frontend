import { useState } from 'react'
import styled from 'styled-components'
import ContentRegisterModal from '../pages/register/components/ContentRegisterModal'
import 'animate.css';
import ContentHomeModal from '../pages/home/components/ContentHomeModal';
import Image from 'next/image';

const BackgroundModal = styled.div`
    width: 800px;
    height: 500px;
    background-color: #127475;
    border-radius: 33px;
    position: absolute;
    display: ${props => props.Display};
    transition: all 2s;
    z-index: 999;
`

const GrayBackground = styled.div`
    background-color: #303030;
    width: 100vw;
    height: 100vh;
    opacity: 0.6;
    position: absolute;
    display: ${props => props.Display};
    transition: all 2s linear;
    z-index: 999;
`

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`

export default function Modal({ route, setIsModal, setInputImage }) {
    const [displayModal, setDisplayModal] = useState('block')

    function closeModal(){
        setDisplayModal('none'), setIsModal(false)
    }
    return (
        <>
            
            <GrayBackground onClick={() => closeModal()} Display={displayModal}/>
            <BackgroundModal className="animate__animated animate__zoomIn animate__fast" Display={displayModal}>
                <CloseButton onClick={() => closeModal()}>
                    <Image src={'/closeButton.svg'} width={35} height={35} />
                </CloseButton>
                {
                route == 'register' 
                ? <ContentRegisterModal setInputImage={setInputImage} /> 
                : <ContentHomeModal/>
                }
                
            </BackgroundModal>
        </>
    )
}
