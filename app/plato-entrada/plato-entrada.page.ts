import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-plato-entrada',
  templateUrl: './plato-entrada.page.html',
  styleUrls: ['./plato-entrada.page.scss'],
})
export class PlatoEntradaPage implements OnInit {

  constructor(public AsheetCtrl: ActionSheetController,
    public NavCtrl: NavController) { }

  ngOnInit() {
  }

  sopasycremas; ensaladas; soupsandcreams; salads: boolean = false;
  sopadepapas; papas; cremadechoclo; dechoclo: boolean = false;
  ensaladacaprese; caprese; ensaladadepalta; palta; ensaladacesar; cesar: boolean = false;

  verSopasYCremas() {
    if (this.sopasycremas != false) {
      this.soupsandcreams = true;
    } else {
      this.soupsandcreams = false;
    }
  }

  verEnsaladas() {
    if (this.ensaladas != false) {
      this.salads = true;
    } else {
      this.salads = false;
    }
  }

  verSopaDePapas() {
    if (this.sopadepapas != false) {
      this.papas = true;
    } else {
      this.papas = false;
    }
  }

  verCremaDeChoclo() {
    if (this.cremadechoclo != false) {
      this.dechoclo = true;
    } else {
      this.dechoclo = false;
    }
  }

  verEnsaladaCaprese() {
    if (this.ensaladacaprese != false) {
      this.caprese = true;
    } else {
      this.caprese = false;
    }
  }

  verEnsaladaDePalta() {
    if (this.ensaladadepalta != false) {
      this.palta = true;
    } else {
      this.palta = false;
    }
  }

  verEnsaladaCesar() {
    if (this.ensaladacesar != false) {
      this.cesar = true;
    } else {
      this.cesar = false;
    }
  }



  async verActionSheet() {
    const hojaDeAccion = await this.AsheetCtrl.create({
      header: 'Opciones',
      buttons:
        [
          {
            text: 'Ir a Plato Principal',
            icon: 'redo',
            handler: () => {
              this.NavCtrl.navigateForward('plato-principal');
            }
          },
          {
            text: 'Ir a Postre',
            icon: 'redo',
            handler: () => {
              this.NavCtrl.navigateForward('postre');
            }
          },
          {
            text: 'Volver a Inicio',
            icon: 'undo',
            handler: () => {
              this.NavCtrl.navigateForward('tabs/tab1');
            }
          },
          {
            text: 'Cancelar',
            icon: 'close',
            handler: () => {
              console.log('Cancelar');
            }
          },
        ]
    });
    hojaDeAccion.present();
  }
}

