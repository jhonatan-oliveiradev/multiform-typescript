import { ReactNode } from "react";
import * as C from "./styles";
import { Header } from "../Header";
import { SideBarItem } from "../SideBarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SideBarItem
              title="Contatos"
              description="Como te encontrar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
