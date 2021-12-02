import React, {useState} from 'react';
import {MDBBadge, MDBCol, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBRow} from "mdbreact";
import CardComponent from "../components/CardComponent";
import {useSelector} from "react-redux";
import {withRouter} from 'react-router-dom';
import PhoneMenuComponent from "../components/PhoneMenuComponent";

function CatalogsContainer(props) {
  const [left_menu, setLeft_menu] = useState(false);
  const mini_categories = useSelector(state => state.productReducer.mini_category);
  const products = useSelector(state => state.productReducer.products);
  const catalog = useSelector(state => state.productReducer.category);

  const id = +props.match.params.id;
  const category_id = +props.match.params.category_id;

  const categories = mini_categories.filter(v => v.category === id);
  const filter_products = category_id ? products.filter(v => v.mini_category === category_id) : products.filter(v => v.mini_category === categories.id);

  return (
    <MDBContainer>
      <div style={{left: left_menu ? 0 : -1200}} className={'phone_menu'}>
        <PhoneMenuComponent setLeft_menu={setLeft_menu} id={id} categori_id={category_id}
                            categories={categories}/>
      </div>
      <button onClick={() => setLeft_menu(true)}  className={'menu_icon d-fixed d-md-none'}>
        <MDBIcon className={'my-auto'} icon="chevron-right" />
      </button>
      <div style={{fontSize: 28, paddingTop: 20}} className={'mb-4 ml-4'}><b> Товары
        для {catalog.find(f => f.id === id)?.name.substr(0, 6)} </b></div>
      <MDBRow>
        <MDBCol md={4} lg={3}>
          <MDBListGroup className={'list_group d-none d-md-block mb-3'}>
            {categories.map(item => (
              <MDBListGroupItem color={category_id === item.id ? 'secondary' : 'null'}
                                onClick={() => props.history.push(`/category/${id}/${item.id}`)}
                                className="d-flex justify-content-between align-items-center">{item.name}
                <MDBBadge
                  color="amber"
                  pill>{item.products.length}</MDBBadge>
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </MDBCol>
        <MDBCol md={8} lg={9}>
          <MDBContainer>
            <MDBRow>
              {filter_products.map(item => (
                <MDBCol size={12} sm={6} md={6} lg={4}>
                  <CardComponent item={item}/>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default withRouter(CatalogsContainer);

