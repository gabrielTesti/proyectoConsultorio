import { Component, OnInit } from '@angular/core';
import { Turno } from 'src/app/interfaces/turno';
import { turnosSimulados } from 'src/app/interfaces/turnos-simulados';

@Component({
  selector: 'app-turnos-programados',
  templateUrl: './turnos-programados.component.html',
  styleUrls: ['./turnos-programados.component.css']
})
export class TurnosProgramadosComponent implements OnInit {

  turnos: Turno[] = []; // lista de turnos
  turnosFiltrados: Turno[] = [];
  fechaSeleccionada: Date = new Date(); // fecha actual
  mostrarNotas: boolean = false; 
  notasTurno: string | null = null; // notas del turno seleccionado


  constructor(){}

  ngOnInit(): void {
    this.cargarTurnos(); 
    this.filtrarTurnos(); 
  }

  cargarTurnos() {
    this.turnos = turnosSimulados;
  }

  filtrarTurnos() {
    const fechaSeleccionadaString = this.fechaSeleccionada.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.turnosFiltrados = this.turnos.filter(turno => {
      return turno.fecha === fechaSeleccionadaString; // Comparar como string
    });
  }

  seleccionarFecha(event: any) {
    this.fechaSeleccionada = new Date(event.value);
    this.filtrarTurnos();
  }

  mostrarNotasTurno(turno: Turno) {
    this.notasTurno = turno.notas || null; 
    this.mostrarNotas = true; 
  }
}
