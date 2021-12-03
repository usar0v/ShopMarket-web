import React, {useEffect} from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import CardComponent from "../components/CardComponent";
import {getProducts} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";

function HomeContainer(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [])
  const popular_products = products.filter(v => v.rating > 4)
  const discount_products = products.filter(v => v.discount)

  return (
    <MDBContainer>
      <div style={{fontSize: 28, paddingTop: 20}} className={'ml-4 text-truncate'}><b> Популярные товары </b></div>
      <hr/>
      <MDBContainer>
        <MDBRow>
          {popular_products.map(item => (
            <MDBCol size={12} sm={6} md={4} lg={3}>
              <CardComponent item={item}/>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <div style={{fontSize: 30, paddingTop: 20}} className={'ml-4'}><b> Товары со скидками </b></div>
      <hr/>
      <MDBRow className={'container'}>
        {discount_products.map(item => (
          <MDBCol size={12} sm={6} md={4} lg={3}>
            <CardComponent item={item}/>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default HomeContainer;