# 🚗 Painel de Gestão - Frota Conectada Ford

Este é um sistema de telemetria e gestão de frota desenvolvido com **Angular (Front-end)** e **Node.js (Back-end)**. O objetivo do projeto é consumir dados de uma API simulada para monitorar variáveis de veículos em tempo real.

## 🛠️ Tecnologias Utilizadas
* **Front-end:** Angular (TypeScript, HTML, SCSS)
* **Back-end:** Node.js (API REST)
* **Estilização:** Bootstrap + CSS Customizado
* **Versionamento:** Git & GitHub

## ⚙️ Funcionalidades
* Sistema de Autenticação (Login) seguro.
* Renderização dinâmica de veículos via consumo de API.
* Painel interativo de telemetria (Hodômetro, Nível de Combustível, Status do Motor).
* Atualização de dados assíncrona com `ChangeDetectorRef`.

## 🚀 Como rodar o projeto localmente

1. Abra um terminal na pasta da API e inicie o servidor:
`node api.js` (A API rodará na porta 3001).

2. Abra um terminal na pasta do Angular (`painel-ford`) e inicie o front-end:
`ng serve`

3. Acesse `http://localhost:4200/login`, faça o login e veja a mágica acontecer!