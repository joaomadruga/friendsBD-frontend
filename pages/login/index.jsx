import Body from "../../components/Body";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";
import Input from "../../components/Input";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Image from "next/image";
import LoginShape from "./components/LoginShape";
import LogoTopLeft from "./components/LogoTopLeft";
import IconInput from "../../components/IconInput";
import DivInputAndIcon from "../../components/DivInputAndIcon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  function goTo(href) {
    router.push(`/${href}`);
  }

  return (
    <Body bgColor="#0E9594">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title>nome de usuário</Title>
        <DivInputAndIcon>
          <IconInput>
            <Image src="/usernameIcon.svg" width={25} height={25} />
          </IconInput>
          <Input type="text" placeholder="digite aqui seu nome" onChange={(e) => setInputName(e.target.value)}></Input>
        </DivInputAndIcon>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title>senha</Title>
        <DivInputAndIcon>
          <IconInput>
            <Image src="/passwordIcon.svg" width={25} height={25} />
          </IconInput>
          <Input type='password' placeholder="digite aqui sua senha" onChange={(e) => setInputPassword(e.target.value)}></Input>
        </DivInputAndIcon>
        <Subtitle>
          ainda não tem uma conta?{" "}
          <span
            onClick={() => goTo("register")}
            style={{ color: "#F2542D", cursor: "pointer" }}
          >
            registre-se!
          </span>
        </Subtitle>
      </div>
      <Button onClick={() => goTo("")}>
        <ButtonText>entrar</ButtonText>
      </Button>
      <LoginShape>
        <Image src="/shapeLogin.svg" width={300} height={300} />
      </LoginShape>
      <LogoTopLeft>
        <Image src="/logo.svg" width={80} height={80} />
      </LogoTopLeft>
    </Body>
  );
}
