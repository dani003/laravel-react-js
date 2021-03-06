import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Intent, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import { Alignment, Checkbox, H5, Label, Switch } from "@blueprintjs/core";
import { Classes, Code, H3, Overlay} from "@blueprintjs/core";
import BotonCrearLaboratorio from './BotonCrearLaboratorio.js';

class TablaTesistaLab extends Component {

  render() {
    return (
        <div class="container">
        <div >
            <BotonCrearLaboratorio></BotonCrearLaboratorio>
        </div>
          <div class="tablaEquipos">
              <table class="bp3-html-table bp3-html-table-bordered bp3-html-table-striped">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Laboratorio</th>
                      <th>Encargado</th>
                      <th>Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Static analysis linter for TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>TypeScript</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Composable charting library built on top of D3</td>
                      <td>TypeScript</td>
                      <td>Static analysis linter for TypeScript</td>
                    </tr>
                  </tbody>
                </table>
          </div>
      </div>
    );
  }
}

export default TablaTesistaLab;
