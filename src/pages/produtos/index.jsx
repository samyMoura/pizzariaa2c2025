const Produtos = () => {

 // Objeto da lista de pizzas
const pizzas = [
    'Pizza Muçarela',
    'Pizza Calabresa',
    'Pizza Portuguesa', 'Pizza Baiana', 'Pizza Frita'

]
//Interação da lista de pizza - pizza a pizza (um a um)
const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}

              </ul>  
        </div>
    )
}

export default Produtos
