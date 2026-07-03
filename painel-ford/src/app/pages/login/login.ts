import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  // Variáveis ligadas aos campos de entrada da tela (HTML)
  usuario: string = '';
  senha: string = '';
  erroLogin: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  acessarDashboard() {
    // Monta o pacote de dados exatamente como a API espera: "nome" e "senha"
    const credenciais = {
      nome: this.usuario,
      senha: this.senha
    };

    // Faz a requisição POST para a rota correta da API
    this.http.post('http://localhost:3001/login', credenciais).subscribe({
      next: (resposta: any) => {
        // Se a API responder com sucesso (Status 200)
        this.erroLogin = false;
        
        // Armazena temporariamente os dados do usuário logado no navegador
        localStorage.setItem('usuarioLogado', JSON.stringify(resposta));
        
        // Redireciona imediatamente para a rota /home (Ação 2)
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        // Se a API rejeitar os dados ou der erro (Status 401 ou 404)
        this.erroLogin = true;
        console.error('Erro ao conectar com a API na porta 3001:', erro);
      }
    });
  }
}