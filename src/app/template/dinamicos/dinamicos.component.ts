import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = ''

  persona: Persona = {
    nombre: 'Ángel',
    favoritos: [
      {id: 1, nombre: 'Xcom 2'},
      {id: 2, nombre: 'Terraria'},
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Formulario posteado');
  }

  eliminar(i:number){
    this.persona.favoritos.splice(i,1);
  }

  agregar(){
    const nuevo : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevo});
    this.nuevoJuego = '';
  }

}
