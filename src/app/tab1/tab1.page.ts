import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss', '../explore-container/explore-container.component.scss']
})
export class Tab1Page {

  ld1: number
  ld2: number
  ld3: number
  inf: string
  imagem: any = "assets/icon/5.jpg"

  constructor() {}

  conta(){

      if (this.ld1 + this.ld2 > this.ld3 && this.ld1 + this.ld3 > this.ld2 && this.ld2 + this.ld3 > this.ld1) {
        
        if (this.ld1 == this.ld2 && this.ld2 == this.ld3) {
          this.imagem = "assets/icon/1.webp"
          this.inf = "Equilátero"
        }

        else if (this.ld1 != this.ld2 && this.ld2 != this.ld3 && this.ld1 != this.ld3) {
          this.imagem = "assets/icon/3.webp"
          this.inf = "Escaleno"
        }

        else {
          this.imagem = "assets/icon/2.webp"
          this.inf = "Isósceles"
        }
      }
      

      else{
        this.inf = "Triangulo inexistente"
        this.imagem = "assets/icon/favicon.png"
      }

  }
}
