import styles from './style/ShoppingCount.module.css'

function ShoppingCount({count}) {
    return (
      <div className={styles.counter}>{count}</div>
    )
  }
  
  export default ShoppingCount