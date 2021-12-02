import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage} from 'mdbreact';
import ReactStars from "react-stars/dist/react-stars";
import {IMAGE_API_URL} from "../utils/settings";
import {Link} from "react-router-dom";
import numberSeparator from "number-separator";

const CardExample = ({item}) => {
  return (
    <MDBCard className={'product_card'}>
      <Link to={`/product/${item.id}`}>
        {item.discount ?
          <div className={'product_discount'}>
            <div>{item.discount}%</div>
          </div> : null
        }
        <MDBCardImage title={item.title} className="img-fluid"
                      top
                      style={{height: 260}}
                      overlay="white-slight"
                      src={`${IMAGE_API_URL}${item.image}`}/>
        <MDBCardBody>
          <div className={'text-truncate'} style={{color: '#5e5e5e'}}>
            {item.title}
          </div>
          <div className={'rating_stars'}>
            <ReactStars
              count={5}
              value={item.rating}
              size={20}
              edit={false}
              color2={"#59ce96"}
            />
          </div>
        </MDBCardBody>
        <div style={{fontWeight: 500, fontSize: 18, marginTop: '-15px'}}
             className={'text-dark d-flex justify-content-end mb-1'}>
          {item.status ? item.discount ?
              <div>
                {numberSeparator(item.price - (item.price * item.discount / 100))} <u>c</u>
                <del style={{fontSize: 16}} className={'text-muted ml-2'}>{numberSeparator(item.price)} c</del>
              </div> : <div>{item.price} <u>c</u></div> :
            <span className={'deactive'}>Товар неактивен</span>
          }
        </div>
      </Link>
    </MDBCard>
  )
}

export default CardExample;