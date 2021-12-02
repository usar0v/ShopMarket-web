import React from 'react';
import {MDBBadge, MDBCloseIcon, MDBListGroup, MDBListGroupItem} from "mdbreact";
import {withRouter} from "react-router-dom";

function PhoneMenuComponent(props) {
  return (
    <>
      <MDBCloseIcon onClick={() => props.setLeft_menu(false)} className={'close_menu'}/>
      <MDBListGroup className={'list_group'}>
        {props.categories.map(item => (
          <MDBListGroupItem color={props.category_id === item.id ? 'secondary' : 'null'}
                            onClick={() => {
                              props.history.push(`/category/${props.id}/${item.id}`);
                              props.setLeft_menu(false)
                            }}
                            className="d-flex justify-content-between align-items-center">{item.name}
            <MDBBadge
              color="amber"
              pill>{item.products.length}</MDBBadge>
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
    </>
  );
}

export default withRouter(PhoneMenuComponent);