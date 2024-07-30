import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports:[FormsModule , RouterModule,CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina ="Registro del Cliente";
  cliente ={ nombre:"", password:"", telefono:"",email:""};
  quiereContacto:boolean=false;


  constructor() { }

  ngOnInit():void {
  }

  goInicio():void{
    //this._router.navigate(['/inicio'])
  }

  registra():void{
    alert("En construccion")
  }
}
