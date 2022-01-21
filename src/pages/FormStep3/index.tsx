import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Themes";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGithub, payload: e.target.value });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal! {state.name}, onde te achamos?</h1>
        <p>Insira seu e-mail e user do Github para entrarmos em contato!</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          E o seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="step2" className="backButton">
          Anterior
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
