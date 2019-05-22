import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-plato-principal',
  templateUrl: './plato-principal.page.html',
  styleUrls: ['./plato-principal.page.scss'],
})
export class PlatoPrincipalPage implements OnInit {

  constructor(public AsheetCtrl: ActionSheetController,
    public NavCtrl: NavController) { }

  ngOnInit() {
  }

  carnesr; carnesb; verduras; redmeats; whitemeats; vegetables: boolean = false;
  carnemechada; mechada; asadoalaparrilla; alaparrilla: boolean = false;
  pescadofrito; frito; polloalaturca; alaturca: boolean = false;
  zapalloitalianorelleno; relleno; fritodecoliflor; decoliflor: boolean = false;


  verCarnesr() {
    if (this.carnesr != false) {
      this.redmeats = true;
    } else {
      this.redmeats = false;
    }
  }

  verCarnesb() {
    if (this.carnesb != false) {
      this.whitemeats = true;
    } else {
      this.whitemeats = false;
    }
  }

  verVerduras() {
    if (this.verduras != false) {
      this.vegetables = true;
    } else {
      this.vegetables = false;
    }
  }

  verCarneMechada() {
    if (this.carnemechada != false) {
      this.mechada = true;
    } else {
      this.mechada = false;
    }
  }

  verAsadoALaParrilla() {
    if (this.asadoalaparrilla != false) {
      this.alaparrilla = true;
    } else {
      this.alaparrilla = false;
    }
  }

  verPescadoFrito() {
    if (this.pescadofrito != false) {
      this.frito = true;
    } else {
      this.frito = false;
    }
  }

  verPolloALaTurca() {
    if (this.polloalaturca != false) {
      this.alaturca = true;
    } else {
      this.alaturca = false;
    }
  }

  verZapalloItalianoRelleno() {
    if (this.zapalloitalianorelleno != false) {
      this.relleno = true;
    } else {
      this.relleno = false;
    }
  }

  verFritoDeColiflor() {
    if (this.fritodecoliflor != false) {
      this.decoliflor = true;
    } else {
      this.decoliflor = false;
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
