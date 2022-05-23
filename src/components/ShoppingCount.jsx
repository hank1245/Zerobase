import styles from './style/ShoppingCount.module.css'
import {cartState} from '../atoms/cartItem'
import {useRecoilValue} from 'recoil'

function ShoppingCount() {
  const cartItems = useRecoilValue(cartState)
  const count = cartItems.length
    return (
      <div className={styles.counter}>{count}</div>
    )
  }
  
  export default ShoppingCount