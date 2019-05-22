import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-postre',
  templateUrl: './postre.page.html',
  styleUrls: ['./postre.page.scss'],
})
export class PostrePage implements OnInit {

  constructor(public AsheetCtrl: ActionSheetController,
    public NavCtrl: NavController) { }

  ngOnInit() {
  }

  dulces; sweets; agridulces; bittersweets: boolean = false;
  perasalvino; alvino; piedelimon; delimon: boolean = false;
  brownie; brown; paletasdebombon; debombon: boolean = false;

  verDulces() {
    if (this.dulces != false) {
      this.sweets = true;
    } else {
      this.sweets = false;
    }
  }

  verBrownie() {
    if (this.brownie != false) {
      this.brown = true;
    } else {
      this.brown = false;
    }
  }

  verPaletasDeBombon() {
    if (this.paletasdebombon != false) {
      this.debombon = true;
    } else {
      this.debombon = false;
    }
  }

  verAgridulces() {
    if (this.agridulces != false) {
      this.bittersweets = true;
    } else {
      this.bittersweets = false;
    }
  }

  verPerasAlVino() {
    if (this.perasalvino != false) {
      this.alvino = true;
    } else {
      this.alvino = false;
    }
  }

  verPieDeLimon() {
    if (this.piedelimon != false) {
      this.delimon = true;
    } else {
      this.delimon = false;
    }
  }

  async verActionSheet() {
    const hojaDeAccion = await this.AsheetCtrl.create({
      header: 'Opciones',
      buttons:
        [
          {
            text: 'Ir a Plato de Entrada',
            icon: 'redo',
            handler: () => {
              this.NavCtrl.navigateForward('plato-entrada');
            }
          },
          {
            text: 'Ir a Plato Principal',
            icon: 'redo',
            handler: () => {
              this.NavCtrl.navigateForward('plato-principal');
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
