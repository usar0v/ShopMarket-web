import React, {useEffect} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink, MDBIcon
} from 'mdbreact';
import {getCategory, getMiniCategory, getProducts} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import HomeContainer from "./HomeContainer";
import FooterComponent from "../components/FooterComponent";
import CatalogsContainer from './CatalogsContainer'
import DetailProductComponent from "./DetailProductComponent";
import BascketContainer from "./BascketContainer";

export default withRouter(function App(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.productReducer.category);
    const mini_categories = useSelector(state => state.productReducer.mini_category);
    const products = useSelector(state => state.productReducer.products);
    const loading = useSelector(state => state.productReducer.loading);
    const bascket = useSelector(state => state.orderReducer.bascket);

    useEffect(() => {
      dispatch(getCategory());
      dispatch(getMiniCategory());
      dispatch(getProducts());
    }, []);

    return (
      <>
        <MDBNavbar expand='lg' light bgColor='light' className={'navbar'}>
          <MDBContainer fluid className={'d-flex '}>
            <MDBNavbarBrand className={'mx-auto'} style={{fontSize: 33, marginBottom: -15}}><b>Shop</b><span
              style={{color: '#efcc00', fontSize: 35}}>M</span>arket
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
        <div className={'nav_categories classic-tabs d-flex justify-content-center'}>
          <MDBNav className={'nav_scroll'} classicTabs>
            <MDBNavItem>
              <MDBNavLink
                className={'category_link'}
                style={{borderBottom: props.location.pathname === `/` ? '2px solid #efcc00' : '2px solid white'}}
                link to={`/`}>
                Главная
              </MDBNavLink>
            </MDBNavItem>
            {categories.map(v => (
              <MDBNavItem>
                <MDBNavLink
                  className={'category_link'}
                  style={{borderColor: props.location.pathname.startsWith(`/category/${v.id}`) ? '#efcc00' : 'white'}}
                  link to={`/category/${v.id}/${mini_categories.filter(y => y.category === v.id)[0]?.id}`}>
                  {v.name}
                </MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNav>
        </div>
        {loading && products.length == 0 ? (
          <div className="spinner-border text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className={'global_body'}>
              <Switch>
                <Route path={'/category/:id/:category_id'}>
                  <CatalogsContainer/>
                </Route>
                <Route path={'/product/:id'}>
                  <DetailProductComponent/>
                </Route>
                <Route path={'/bascket'}>
                  <BascketContainer/>
                </Route>
                <Route path={'/'}>
                  <HomeContainer/>
                </Route>
              </Switch>
            </div>
            <Link to={'/bascket'}>
              <div className={'bascket_icon'}>
                <span className="count_bascket">{bascket.length}</span>
                <MDBIcon icon="cart-arrow-down"/>
              </div>
            </Link>
            <FooterComponent/>
          </>
        )}
      </>
    )
  }
)