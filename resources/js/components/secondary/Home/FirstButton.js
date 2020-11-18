import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Elevation, Checkbox,Icon } from "@blueprintjs/core";
import { Alignment, ButtonGroup, IconName, Switch, AnchorButton } from "@blueprintjs/core";
import {
    Boundary,
    Breadcrumb,
    Classes,
    H5,
    IMenuItemProps,
    Label,
    Menu,
    MenuItem,
    OverflowList,
    Popover,
    Position,
    RadioGroup,
    Slider,
    FormGroup,
    InputGroup,
    FileInput,
} from "@blueprintjs/core";

class FirstButton extends Component {
  render() {
      return (
        <div className='grid-container container1'>
            <div className='triangulo2'>
            </div>
        <div className="CuadroSecondButton bp3-card bp3-interactive bp3-elevation-3 ">
          <div className="infodisp">
            <div className="NombredispFB" >
              Visualizar y Realizar Reservas
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FirstButton;
