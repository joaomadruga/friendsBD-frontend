import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const TextModal = styled.div`
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 49px;
    text-align: center;
    color: white;
`

const ButtonModal = styled.button`
    background-color: white;
    border-radius: 7px;
    color: #127475;
    border: none;
    width: 27%;
    height: 8%;
    font-size: 1.7rem;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`

const Circle = styled.div`
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    background-color: white;
    margin: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivContentModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const InputImage = styled.input`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

export default function ContentRegisterModal({ setInputImage }) {
    const router = useRouter();
    function goTo(href) {
        router.push(`/${href}`);
    }
    return (
        <DivContentModal>
            <TextModal>Escolha sua foto de perfil</TextModal>
            <Circle>
                <Image src='/cameraIcon.svg' width={140} height={140} />
                <InputImage type="file" accept=".png, .jpg, .jpeg" onChange={(e) => {setInputImage(e.target.files)}}/>
            </Circle>
            <ButtonModal onClick={() => goTo('')}>continuar</ButtonModal>
        </DivContentModal>
    )
}
