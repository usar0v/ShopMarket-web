import React from 'react';
import {MDBBtn, MDBCol, MDBRow, MDBTypography} from "mdbreact";

function FormComponent(props) {
  return (
    <div className={'bascket_card px-4 pb-5'}>
      <MDBTypography className={'mb-4'} variant={'h3'}>Заказать</MDBTypography>
      <MDBRow >
        <MDBCol className={'mb-2'} size={10}>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text"
          >
            Имя
          </label>
          <input
            // value={this.state.fname}
            // onChange={this.changeHandler}
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            required
          />
        </MDBCol>

        <MDBCol className={'my-2'} size={12} md={6}>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text"
          >
            Email-адрес
          </label>
          <input
            // value={this.state.fname}
            // onChange={this.changeHandler}
            placeholder={'Необьязательно'}
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            required
          />
        </MDBCol>
        <MDBCol className={'my-2'} size={12} md={6}>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text"
          >
            Номер телефона
          </label>
          <input
            // value={this.state.fname}
            // onChange={this.changeHandler}
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            required
          />
        </MDBCol>

        <MDBCol className={'my-2'} size={12} md={6}>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text"
          >
            Адрес
          </label>
          <input
            // value={this.state.fname}
            // onChange={this.changeHandler}
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            placeholder={'Улица и т.д.'}
            required
          />
        </MDBCol>
        <MDBCol className={'mt-2'} size={12} md={6}>
          <label
            htmlFor="defaultFormRegisterNameEx"
            className="grey-text"
          >
            ИНН
          </label>
          <input
            // value={this.state.fname}
            // onChange={this.changeHandler}
            type="text"
            id="defaultFormRegisterNameEx"
            className="form-control"
            required
          />
        </MDBCol>

        <MDBCol className={'my-4'} size={12}>
          <select className="browser-default custom-select">
            {['Бишкек', 'Ош', 'Ыссык-Куль', 'Джалал-Абад', 'Баткен', 'Наарын', 'Чуй', 'Талас'].map(v => (
              <option>{v}</option>
            ))}
          </select>
        </MDBCol>
        <div className={'ml-auto mt-3 mb-2 mr-5'}>
          <MDBBtn disabled outline color="amber">Подтвердить заказ</MDBBtn>
        </div>
      </MDBRow>
    </div>
  );
}

export default FormComponent;