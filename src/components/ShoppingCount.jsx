import styles from './style/ShoppingCount.module.css'
import {cartState} from '../atoms/cartItem'
import {useRecoilValue} from 'recoil'

function ShoppingCount() {
  const cartItems = useRecoilValue(cartState);
  const count = Object.keys(cartItems).reduce((prev,cur) => prev + cartItems[cur].count, 0)
    return (
      <div className={styles.counter}>{count}</div>
    )
  }
  
  export default ShoppingCount