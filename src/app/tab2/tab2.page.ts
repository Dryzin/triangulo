import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab2Page {
  lado_B : number
  lado_A : number
  valor : string

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'A Area é:',
      subHeader: this.valor,
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }

  calcular(){

    var resu = (this.lado_B*this.lado_A)/2

    this.valor = resu.toString()

    this.presentAlert()
  }
}