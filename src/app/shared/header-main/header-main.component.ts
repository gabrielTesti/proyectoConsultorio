import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})

export class HeaderMainComponent {
/* authService: any; */
constructor(private router: Router) { }
nombreUsuario: string = "";
tipoUsuario: string = "Paciente";




cerrarSesion(){
 this.router.navigate(["/welcome"])
} 


}
