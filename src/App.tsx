import { useState } from 'react'

const Component1 = () => {
  return <div>Вормикс</div>

} 

const Component = () => {
  return <div>Rfkmrekzmjg22</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Калькулятор</h2>
      <Component />
      <Component1 />
    </div>

    )

}

export default App
