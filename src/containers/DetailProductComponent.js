import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDetailProduct} from "../store/actions";
import {withRouter} from 'react-router-dom';
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography, MDBView} from "mdbreact";
import {IMAGE_API_URL} from "../utils/settings";
import ReactStars from "react-stars";
import numberSeparator from "number-separator";
import {addBascket} from "../store/orderReducer";
import {toast} from "react-toastify";

function DetailProductContainer(props) {
  const id = +props.match.params.id;
  const dispatch = useDispatch();
  const item = useSelector(state => state.productReducer.detail_product);
  const mini_categories = useSelector(state => state.productReducer.mini_category);
  const products = useSelector(state => state.productReducer.products);
  const bascket = useSelector(state => state.orderReducer.bascket);
  const [itemSizes, setItemSizes] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [count, setCount] = useState(1);
  const loading = useSelector(state => state.productReducer.loading);
  const ref = useRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, []);

  useEffect(() => {
    localStorage.setItem('bascket', JSON.stringify(bascket));
  }, [bascket])

  useEffect(() => {
    dispatch(getDetailProduct(id));
    window.scrollTo({top: 0});
  }, [id])

  const category_name = mini_categories.find(v => v.id === item.mini_category)?.name;
  const similar_products = products.filter(v => v.mini_category === item.mini_category);

  const addSizes = (v) => {
    itemSizes.includes(v) ?
      setItemSizes(prev => prev.filter(y => y !== v)) :
      setItemSizes(prev => [...prev, v])
  }
  const addColors = (v) => {
    itemColors.includes(v) ?
      setItemColors(prev => prev.filter(y => y !== v)) :
      setItemColors(prev => [...prev, v])
  }
  const item_price = item.discount ? (item.price - (item.price * item.discount / 100)) * count : item.price * count;


  const item_products = {
    brand: item.brand,
    colors: itemColors,
    discount: item.price - item_price,
    id: item.id,
    image: item.image,
    mini_category: item.mini_category,
    price: item_price,
    rating: item.rating,
    sizes: itemSizes,
    status: item.status,
    title: item.title,
    count: count,
  }

  const filterAddBascket = () => {
    if (itemSizes.length < 1 || itemColors.length < 1) {
      toast.error("Вы не выбрали себе размер или цвет")
    } else {
      dispatch(addBascket(item_products))
    }
  }
  console.log(bascket)
  return (
    <div style={{backgroundColor: 'white', minHeight: 500}}>
      {loading ? (
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <MDBContainer>
          <MDBRow className={'mt-4 mb-4'}>
            <MDBCol size={12} md={6}>
              <MDBView className={'d-flex justify-content-center mb-2'} waves>
                <img style={{maxHeight: 500}} src={`${IMAGE_API_URL}${item.image}`} className="img-fluid"
                     alt=""/>
              </MDBView>
            </MDBCol>
            <MDBCol size={12} md={6}>
              <div style={{fontSize: 25}} className={'text-monospace'}>{item.title}</div>
              <div className={'text-muted ml-3'}>{category_name}</div>
              <div className={'d-flex justify-content-between mt-4'}>
                <b>Бренд: </b> <span>{item.brand ? item.brand : 'не указано'}</span>
              </div>
              <div className={'d-flex justify-content-between mt-3'}>
                <b className={'my-auto'}>Цвета: </b>
                <div className={'text-right'}>
                  <div style={{fontSize: 10}}>выберите себе цвет</div>
                  {item.colors?.map(c =>
                    <button onClick={() => addColors(c)} style={{backgroundColor: c}} className={'color_button'}>
                      {itemColors.includes(c) ? <MDBIcon style={{color: '#ccfff1'}} icon="check"/> : <MDBIcon/>}
                    </button>)}
                </div>
              </div>
              <div className={'d-flex justify-content-between my-3'}>
                <b className={'my-auto'}>Размеры: </b>
                <div className={'text-right'}>
                  <div style={{fontSize: 10}}>выберите свой размер</div>
                  {item.sizes?.map(v => (
                    <button style={{backgroundColor: itemSizes.includes(v) ? '#fcce14' : null}}
                            onClick={() => addSizes(v)} className={'size_button'}>
                      <span>{v}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className={'d-flex justify-content-between mt-3'}>
                <b className={'my-auto'}>Популярность: </b>
                <ReactStars
                  count={5}
                  value={item.rating}
                  size={20}
                  edit={false}
                  color2={"#59ce96"}
                />
              </div>
              <div className={'d-flex justify-content-between my-3'}>
                <b className={'my-auto'}>Количество: </b>
                <div className={'d-flex justify-content-center'}>
                  <button onClick={() => setCount(prev => prev + 1)} className={'count_button'}>
                    <MDBIcon icon="plus"/>
                  </button>
                  <MDBTypography className={'my-auto mx-2'} variant={'h5'}>{count}</MDBTypography>
                  <button disabled={count <= 1} onClick={() => setCount(prev => prev - 1)} className={'count_button'}>
                    <MDBIcon icon="minus"/>
                  </button>
                </div>
              </div>
              {item.discount ?
                <MDBTypography className={'d-flex justify-content-between mt-4'} variant={'h4'}>
                  <div className={'red-text'}>
                    {item.discount} %
                  </div>
                  <div>
                    <div>
                      <del style={{fontSize: 19}} className={'text-muted ml-2'}>{numberSeparator(item.price * count)} c
                      </del>
                      <span> {numberSeparator((item.price - (item.price * item.discount / 100)) * count)}
                        <u>c</u></span>
                    </div>
                  </div>
                </MDBTypography>
                : <MDBTypography variant={'h4'}
                                 className={'text-right'}>{item.price ? numberSeparator(item.price * count) : item.price * count}
                  <u>c</u></MDBTypography>
              }
              <div className={'text-center mt-2'}>
                <MDBBtn onClick={() => filterAddBascket()}
                        color={bascket.find(f => f.id === item.id) ? 'danger' : 'yellow'}>Добавить в корзину</MDBBtn>
              </div>
            </MDBCol>
            <MDBTypography className={'mx-auto mt-5'} variant={'h4-responsive'}>Похожие товары</MDBTypography>
            <MDBCol className={'d-flex justify-content-center mx-auto'} size={11}>
              <MDBIcon className={'scroll_button'} onClick={() => scroll(-100)} icon="chevron-left"/>
              <div className="scroll_images" ref={ref}>
                {similar_products.map(v => (
                  <img onClick={() => props.history.push(`/product/${v.id}`)} src={`${IMAGE_API_URL}${v.image}`}
                       className="img-fluid " alt=""/>
                ))}
              </div>
              <MDBIcon className={'scroll_button'} onClick={() => scroll(100)} icon="chevron-right"/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    < /div>
  );
}

export default withRouter(DetailProductContainer);