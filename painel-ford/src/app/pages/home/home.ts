import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  nomeUsuario: string = '';
  veiculos: any[] = [];
  detalhesVeiculo: any = null;

  vins: any = {
    1: "2FRHDUYS2Y63NHD22454",
    2: "2RFAASDY54E4HDU34874",
    3: "2FRHDUYS2Y63NHD22455",
    4: "2RFAASDY54E4HDU34875"
  };

  constructor(private http: HttpClient, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const usuarioSalvo = localStorage.getItem('usuarioLogado');
    if (usuarioSalvo) {
      this.nomeUsuario = JSON.parse(usuarioSalvo).nome;
      this.buscarVeiculos();
    } else {
      this.router.navigate(['/login']);
    }
  }

  buscarVeiculos() {
    this.http.get('http://localhost:3001/vehicles').subscribe({
      next: (res: any) => {
        this.veiculos = res.vehicles;
        // O "despertador" também avisa o ecrã no carregamento inicial!
        this.cdr.detectChanges(); 
      },
      error: (erro) => console.error("Erro na API:", erro)
    });
  }

  verDetalhes(idVeiculo: number) {
    const vinSelecionado = this.vins[idVeiculo];
    
    this.http.post('http://localhost:3001/vehicleData', { vin: vinSelecionado }).subscribe({
      next: (dados: any) => {
        const infoBasica = this.veiculos.find(v => v.id === idVeiculo);
        this.detalhesVeiculo = { ...dados, nome: infoBasica.vehicle };
        
        // O "despertador" que atualiza o ecrã ao primeiro clique!
        this.cdr.detectChanges(); 
      },
      error: () => alert("Erro ao procurar dados de telemetria.")
    });
  }

  sair() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['/login']);
  }
}