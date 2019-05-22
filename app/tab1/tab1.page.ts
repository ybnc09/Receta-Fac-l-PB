import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  categorias: string;

  constructor(public navCtrl: NavController) { }

  async categoria() {

    let categorias = this.categorias;

    switch (categorias) {

      case "entrada":
        this.navCtrl.navigateForward('plato-entrada');
        break;

      case "principal":
        this.navCtrl.navigateForward('plato-principal');
        break;

      case "postre":
        this.navCtrl.navigateForward('postre');
        break;
    }
  }
}