import {useSelector, useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import {useEffect} from 'react'

function Fashion() {
  const params = useParams();
  const category = params.category;
  console.log(category);
  
  const productsData = useSelector(state => state['products']);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: category})
  }, []);
  
  console.log(productsData);
  
  return (
    <>
      <h1 style={{color: 'white'}}>Fashion</h1>
    </>
  )
}

export default Fashion