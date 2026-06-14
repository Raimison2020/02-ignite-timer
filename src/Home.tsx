import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext)

  return (
    <h1>
      Componente NewCycleForm: {activeCycle}{' '}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar Ciclo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext)
  return <h1>Componente Countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <NewCycleForm />
      <Countdown />
    </CycleContext.Provider>
  )
}
