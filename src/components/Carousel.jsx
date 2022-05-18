import {Carousel} from 'react-bootstrap'
import styles from './style/Carousel.module.css'
import { Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

function CarouselComponent() {
  return (
    <>
      <div className='carousel'>
        <Carousel interval ={null}>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/img_shop_fashion.jpeg"
            alt='introduction'
            />
            <div className={styles.caption}>
              <h3>물빠진 청바지!</h3>
              <p>이제 막 도착한 패션 청바지를 둘러보세요</p>
              <Link to='/fashion'>
                <Button variant='dark' size='lg'>바로가기 <BsArrowRight/></Button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/img_shop_digital.jpeg"
            alt="Second slide"
            />
            <div className={styles.caption}>
              <h3>신속한 업무처리!</h3>
              <p>다양한 디지털 상품을 둘러보세요</p>
              <Link to='/digital'>
                <Button variant='dark' size='lg'>바로가기 <BsArrowRight/></Button>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="/images/img_shop_grocery.jpeg"
            alt="Third slide"
            />
            <div className={styles.caption}>
              <h3>신선한 식품!</h3>
              <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요</p>
              <Link to='/grocery'>
                <Button variant='dark' size='lg'>바로가기 <BsArrowRight/></Button>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default CarouselComponent