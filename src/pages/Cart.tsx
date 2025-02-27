import { useCartStore } from '../store/cart.store'

const Cart = () => {
  const cart = useCartStore(store => store.cart)

  return (
    // TODO use the "product get by id" to get the items, well everything then figure out design 
    <div>
      <ul>
        {cart.map((item, index) => <li key={index}>{item.productId} - {item.ammount}</li>)}
      </ul>
    </div>
  )
}

export default Cart