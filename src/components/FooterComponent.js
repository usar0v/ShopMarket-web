import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon} from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="amber" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            <h4 className="title">ShopMarket</h4>
            <p style={{fontSize: 16}}>
              ShopMarket - rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h4 className="title">Полезные ссылки</h4>
            <ul style={{fontSize: 16, marginLeft: -38}}>
              <li className="list-unstyled">
                <a href="#!">О нас</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Пользовательское соглашение</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Политика конфиденциальности</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h4 className="title">Контакты</h4>
            <ul className={'d-flex'} style={{fontSize: 16, marginLeft: -52}}>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/usar0v/">
                  <MDBIcon size={'2x'} fab icon="instagram"/>
                </a>
              </li>
              <li className="list-unstyled mx-4">
                <a href="https://t.me/usar0vvv/">
                  <MDBIcon size={'2x'} fab icon="telegram-plane" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://vk.com/usar0v/">
                  <MDBIcon size={'2x'} fab icon="vk"/>
                </a>
              </li>
            </ul>
            <a style={{color: '#ccfff2'}} href={'tel:996222099152'}>+996222099152</a><br/>
            <a style={{color: '#ccfff2'}} href={'mailto:usarovuwww@gmail.com'}>usarovuwww@gmail.com</a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: ShopMarket by <a style={{color: '#b5ffee'}}
                                                                        href="https://github.com/usar0v">Usar0v</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;