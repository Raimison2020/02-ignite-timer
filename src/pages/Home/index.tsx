import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <input id="taks" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        {/* Estrutura do countdown */}
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}