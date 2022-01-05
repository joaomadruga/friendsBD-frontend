import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Body from "../../components/Body";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import DivInputAndIcon from "../../components/DivInputAndIcon";
import IconInput from "../../components/IconInput";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import LogoTopLeft from "../login/components/LogoTopLeft";
import DivButtonAndSubtitle from "./components/DivButtonAndSubtitle";
import DivInputsRegistro from "./components/DivInputsRegistro";
import RegisterShape from "./components/RegisterShape";


export default function Register() {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputUsername, setInputUsername] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputBirthday, setInputBirthday] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputImage, setInputImage] = useState('')

  function goTo(href) {
    router.push(`/${href}`);
  }
  return (
    <Body style={{overflow: 'hidden'}} bgColor="#0E9594">
      <DivInputsRegistro>
        <div style={{gridArea: 'inputName'}}>
          <Title>como você deseja ser chamado?</Title>
          <DivInputAndIcon>
            <IconInput>
              <Image src="/usernameIcon.svg" width={25} height={25} />
            </IconInput>
            <Input type="text" placeholder="digite aqui seu nome" InputWidth={'100%'} onChange={(e) => setInputName(e.target.value)}/>
          </DivInputAndIcon>
        </div>
        <div style={{gridArea: 'inputNickname'}}>
          <Title>nome de usuário</Title>
          <DivInputAndIcon>
            <IconInput>
              <Image src="/usernameIcon.svg" width={25} height={25} />
            </IconInput>
            <Input type="text" placeholder="digite aqui seu nome de usuário" InputWidth={'100%'} onChange={(e) => setInputUsername(e.target.value)}/>
          </DivInputAndIcon>
          
        </div>
        <div style={{gridArea: 'inputEmail'}}>
          <Title>email</Title>
          <DivInputAndIcon>
            <IconInput>
              <Image src="/emailIcon.svg" width={25} height={25} />
            </IconInput>
            <Input type='email' placeholder="digite aqui seu email" InputWidth={'100%'} onChange={(e) => setInputEmail(e.target.value)}/>
          </DivInputAndIcon>
        </div>
        <div style={{gridArea: 'inputDate'}}>
          <Title>seu aniversário</Title>
          <DivInputAndIcon>
            <IconInput>
              <Image src="/dateIcon.svg" width={25} height={25} />
            </IconInput>
            <Input type="date" InputWidth={'100%'} onChange={(e) => setInputBirthday(e.target.value)}/>
          </DivInputAndIcon>
        </div>
        <div style={{gridArea: 'inputPassword'}}>
          <Title>senha</Title>
          <DivInputAndIcon>
            <IconInput>
              <Image src="/passwordIcon.svg" width={25} height={25} />
            </IconInput>
            <Input type='password' placeholder="digite aqui sua senha" InputWidth={'100%'} onChange={(e) => setInputPassword(e.target.value)}/>
          </DivInputAndIcon>
        </div>
      </DivInputsRegistro>
      <DivButtonAndSubtitle>
      <Button onClick={() => setIsModal(true)}>
        <ButtonText>registrar</ButtonText>
      </Button>
      <Subtitle style={{textAlign: 'center', margin: 0, marginTop: 5}}>
          já tem uma conta?{" "}
          <span
            onClick={() => goTo("login")}
            style={{ color: "#F2542D", cursor: "pointer" }}
          >
             entre!
          </span>
      </Subtitle>
      </DivButtonAndSubtitle>

      <RegisterShape>
        <Image src="/shapeRegister.svg" width={300} height={300} />
      </RegisterShape>
      <LogoTopLeft>
        <Image src="/logo.svg" width={80} height={80} />
      </LogoTopLeft>
      
      {isModal ? <Modal setIsModal={setIsModal} route={'register'} setInputImage={setInputImage}></Modal> : ''}
      
    </Body>
  )
}
