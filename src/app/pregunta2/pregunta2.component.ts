import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component {

    
    objeto={
      descuento : 0.20,
      cantidad : null,
      precio :null,
      resultado: 0  

    }

    monstraresultado = false;

    sumapregunta2(){
      this.objeto.resultado = Number(this.objeto.cantidad) * Number(this.objeto.precio)
      this.monstraresultado = true;
    }
      
    
  }

