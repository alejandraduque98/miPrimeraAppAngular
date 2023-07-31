import { Component } from '@angular/core';

@Component({
  //es el nombre del componente el cual es llamado en el html
  selector:'app-root',
  //especifica que tiene una contraparte en html

  //1.se puede especificar el path o archivo html a utilizar
 templateUrl:'app.component.html'

 //permite definir un template literal o string  coloca lo que esta dentro 
 //de la etiquetas html
 
 
 
})
export class AppComponent {
  //tipado a las propiedades
  public titulo: string = 'Contador App';

  //estado de la variable 0
  numero:number =10;
  
}

