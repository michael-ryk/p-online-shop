import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { singleProduct_url } from '../constants/urls';
import styled from 'styled-components';

const SingleProduct = () => {
  const {id} = useParams();
  const [singleProduct, setSingleProduct] = useState();
  
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const response = await fetch(singleProduct_url);
      const data = await response.json();

      if(!response.ok){
        throw new Error('Problem connect to DB!')
      }
      
      console.log(data[1])
      setSingleProduct(data[1]);
      console.log(singleProduct)
      const {name, price, category} = singleProduct;
    }

    fetchSingleProduct().catch(err => {
      console.log(err.message);
    })

  }, [id]);

  
  
  return (
    <SingleProductStyled>
      <h1>vsdf</h1>
      <p></p>
    </SingleProductStyled>
  );
}

const SingleProductStyled = styled.main`

`

export default SingleProduct;