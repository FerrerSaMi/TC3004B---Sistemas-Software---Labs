import { bancos } from './assets/bancos.js'

function PruebaConIA() {
  const inicio = performance.now()
  const nombre = 'Santiago Ferrer'
  const bancoEncontrado = bancos.find((banco) => banco.country === 'Spain')
  const tiempo = (performance.now() - inicio).toFixed(3)

  console.log('Nombre:', nombre)
  console.log('Bancos:', bancos)
  console.log('Banco encontrado:', bancoEncontrado)
  console.log(`Tiempo de ejecucion: ${tiempo} ms`)

  return (
    <div>
      <h1>Hola Mundo</h1>
      <h2>Componente con variables</h2>
      <p>Nombre: {nombre}</p>

      <h2>Lista de bancos</h2>
      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            {banco.id}. {banco.name} - {banco.country}
          </li>
        ))}
      </ul>

      <h2>Banco encontrado</h2>
      <p>
        {bancoEncontrado
          ? `${bancoEncontrado.name} pertenece a ${bancoEncontrado.country}`
          : 'No se encontro el banco'}
      </p>

      <h2>Tiempo registrado</h2>
      <p>{tiempo} ms</p>
    </div>
  )
}

export default PruebaConIA
