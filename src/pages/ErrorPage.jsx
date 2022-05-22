import styles from './styles/ErrorPage.module.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function ErrorPage() {
  return (
   <>
      <div className={styles.align_center}>
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <Link to='/'><Button variant="primary" className='py-3 px-md-5 mt-3'>메인으로</Button></Link>
      </div>
   </>
  )
}

export default ErrorPage