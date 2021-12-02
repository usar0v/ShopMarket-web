import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {MDBRow, MDBCol, MDBTypography, MDBIcon, MDBBtn, MDBContainer} from "mdbreact";
import CardInBascketComponent from "../components/CardInBascketComponent";
import FormComponent from "../components/FormComponent";
import numberSeparator from "number-separator";

function BascketContainer(props) {
  const bascket = useSelector(state => state.orderReducer.bascket)
  const price_all_products = bascket.reduce((sum, {price}) => sum + price, 0)
  const dicount_price = bascket.reduce((sum, {discount}) => sum + discount, 0)
  useEffect(() => {
    localStorage.setItem('bascket', JSON.stringify(bascket));
  }, [bascket])
  return (
    <>
      {bascket.length == 0 ? (
          <div className={'bascket_empty pb-5'}>
            <MDBIcon style={{fontSize: 100, color: '#e85b03', marginBottom: 25}} icon="cart-plus"/>
            <MDBTypography variant={'h2-responsive'}>В корзине пока ничего нет</MDBTypography>
            <p style={{marginTop: -14}} className={'text-muted'}>Перейдите на страницы и выберите себе товара</p>
            <MDBBtn onClick={() => props.history.push('/')} outline color="warning">Перейти на главную страницу</MDBBtn>
          </div>
        )
        : (
          <MDBContainer>
            <MDBRow className={'py-4'}>
              <MDBCol className={'bascket_card px-5 px-md-4 mb-3'} md={5}>
                <MDBRow>
                  <MDBCol size={6}>
                    <MDBTypography variant={'h4'}>
                      Корзина
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol size={6} className={'text-right'}>
                    <MDBTypography variant={'h5'}>{numberSeparator(price_all_products)} c</MDBTypography>
                  </MDBCol>
                  <br/> <br/>
                  <MDBCol className={'text-muted'} size={6}>
                    Скидка:
                  </MDBCol>
                  <MDBCol className={'text-right text-muted'} size={6}>
                    <MDBTypography variant={'h5'}>{numberSeparator(dicount_price)} c</MDBTypography>
                  </MDBCol>
                </MDBRow>
                <div style={{borderBottom: '1px solid #7c623c'}}/>
                {bascket.map(item => (
                  <CardInBascketComponent item={item}/>
                ))}
              </MDBCol>
              <MDBCol className={'ml-auto'} md={7}>
                <FormComponent/>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        )}

    </>

  );
}

export default withRouter(BascketContainer);