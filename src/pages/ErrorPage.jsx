import styles from './styles/ErrorPage.module.css'
import {Button} from 'react-bootstrap'

function ErrorPage() {
  return (
   <>
      <div className={styles.align_center}>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <Button variant="primary" className='py-3 px-md-5 mt-3'>메인으로</Button>
      </div>
   </>
  )
}

export default ErrorPage