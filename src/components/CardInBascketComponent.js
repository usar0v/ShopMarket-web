import React from 'react';
import {
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography
} from "mdbreact";
import {IMAGE_API_URL} from "../utils/settings";
import numberSeparator from "number-separator";
import {useDispatch} from "react-redux";
import {addBascket} from "../store/orderReducer";
import {Link, withRouter} from "react-router-dom";

function CardInBascketComponent({item}) {
  const dispatch = useDispatch()
  return (
    <div style={{borderBottom: '1px solid #dedede'}} className={'py-2 px-2 mt-4'}>
      <MDBTypography className={'text-center'} variant={'h6'}>{item.title}</MDBTypography>
      <MDBRow>
        <MDBCol size={12} sm={4} className={'text-center'}>
          <Link to={`product/${item.id}`}>
            <MDBCardImage className="img-fluid mx-auto" src={`${IMAGE_API_URL}${item.image}`} waves/>
          </Link>
          <button className={'remove_button'} onClick={() => dispatch(addBascket(item))}>Удалить</button>
        </MDBCol>
        <MDBCol className={'mt-2'} size={12} sm={8}>
          <div className={'d-flex justify-content-between'}>
            <div className={'text-muted'}>
              Бренд:
            </div>
            <div>{item.brand}</div>
          </div>

          <div className={'d-flex justify-content-between mt-2'}>
            <div className={'text-muted my-auto'}>
              Цвета:
            </div>
            <div>
              {item.colors?.map(c =>
                <button style={{backgroundColor: c, height: 25, width: 35}} className={'color_button'}>
                </button>)}
            </div>
          </div>

          <div className={'d-flex justify-content-between mt-2'}>
            <div className={'text-muted my-auto'}>
              Размеры:
            </div>
            <div>
              {item.sizes?.map(v => (
                <button style={{height: 25, width: 35}} className={'size_button'}>
                  <span>{v}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={'d-flex justify-content-between mt-2'}>
            <div className={'text-muted my-auto'}>
              Количество:
            </div>
            <div>
              {item.count}шт
            </div>
          </div>

          <div className={'mt-2 text-right'}>
            <MDBTypography variant={'h5'}>{numberSeparator(item.price)} c</MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default withRouter(CardInBascketComponent);