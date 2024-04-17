import { IProject } from "../interfaces/projects"
import * as projectLogos from "./projectLogos"

export const projectList: IProject[] = [
  {
    title: "Atomoon",
    description: {
      pt: "Projeto Finalista na 10º Mostra de Ciências e Tecnologia da 3M, aplicativo flutter com objetivo de dar visibilidade aos profissionais autônomos, devido à pandemia e redes elitizadas que dificultam encontrar seus serviços, facilitando a conexão com clientes.",
      en: "Finalist project at the 10th 3M Science and Technology Exhibition, a flutter application aimed at giving visibility to self-employed professionals, due to the pandemic and elite networks that make it difficult to find your services, facilitating the connection with customers.",
    },
    logoSrc: projectLogos.atomoonImg,
    projectLink: "https://github.com/AtomoonDev/TCC-Atomoon/tree/main/flutter/atomoon",
    repoLink: "https://github.com/AtomoonDev/TCC-Atomoon",
  },
  {
    title: "LabirintoSolver",
    description: {
      pt: "Terminal em Java que resolve labirintos criados em txt, utilizando leitura de arquivos e estrutura de dados (Fila, Pilha e Matrix).",
      en: "Terminal in Java that solves labyrinths created in txt, using data structure (Queue, Stack and Matrix).",
    },
    logoSrc: projectLogos.labSolverImg,
    projectLink: "https://github.com/oGaabs/LabirintoSolver_Java",
    repoLink: "https://github.com/oGaabs/LabirintoSolver_Java",
  },
  {
    title: "Dreams Come True",
    description: {
      pt: "Site em React/Axios para achar restaurantes inspirados em filmes, com API (DotNet C#), login com Token(JWT), sistema de cargos e permissões, e CRUD/Carometro com tabelas de restaurantes, usuarios e filmes.",
      en: "Website in React/Axios to find restaurants inspired by movies, with API (DotNet C#), login with Token(JWT), roles and permissions system, and CRUD/Carometer with tables of restaurants, users and movies.",
    },
    logoSrc: projectLogos.dreamsctImg,
    projectLink: "https://github.com/GiovannaBrilhante/Dreams-come-true",
    repoLink: "https://github.com/GiovannaBrilhante/Dreams-come-true",
  },
  {
    title: "ListaDeEsperaFlutter",
    description: {
      pt: "Aplicação Flutter que lê um qrcode de uma API feita pelo professor Sergio (COTUCA - Unicamp), responde a uma interface administrativa CRUD de uma lista de espera de pessoas, com nome, data de entrada e cargo.",
      en: "Flutter application that reads a qrcode from an API made by Professor Sergio (COTUCA - Unicamp), responds to a CRUD administrative interface of a waiting list of people, with name, entry date and position.",
    },
    logoSrc: projectLogos.listaEsperaImg,
    projectLink: "https://github.com/oGaabs/PFSergio-ListaDeEspera_Flutter",
    repoLink: "https://github.com/oGaabs/PFSergio-ListaDeEspera_Flutter",
  },
  {
    title: "Bootcamp Potencia Tech iFood Dio",
    description: {
      pt: "Desafio de projeto realizado em bootcamp para aprender sobre SpringBoot, Java, POO, Design Patterns e RESTful API.",
      en: "Project challenge held in bootcamp to learn about SpringBoot, Java, OOP, Design Patterns and RESTful API.",
    },
    logoSrc: projectLogos.bootcampiFoodImg,
    projectLink: "https://github.com/oGaabs/Dio-DesignPattern-Padroes_Java",
    repoLink: "https://github.com/oGaabs/Dio-DesignPattern-Padroes_Java",
  },
  {
    title: "PuniBot",
    description: {
      pt: "Bot para servidores Discord com comandos de moderação, entretenimento, dashboard, aviso de jogos grátis e música, baseado na Discord API, usando discord.js, node.js, api externas, entre outras bibliotecas.",
      en: "Bot for Discord servers with moderation commands, entertainment, dashboard, free game notice and music, based on the Discord API, using discord.js, node.js, external api, among other libraries.",
    },
    logoSrc: projectLogos.puniBotImg,
    projectLink: "https://github.com/oGaabs/PuniBot",
    repoLink: "https://github.com/oGaabs/PuniBot",
  },
  {
    title: "Sistema-ArtigosEletronicos",
    description: {
      pt: "Um pequeno site de vendas de artigos de esportes eletrônicos, como mouses e camisas de times do cenário. Feito com MongoDB,  Node.js, HTML, Materialize CSS.",
      en: "A small website selling e-sports items, such as mice and team jerseys. Made with MongoDB, Node.js, HTML, Materialize CSS.",
    },
    logoSrc: projectLogos.sistemasArtImg,
    projectLink: "https://github.com/oGaabs/Sistema-ArtigosEletronicos",
    repoLink: "https://github.com/oGaabs/Sistema-ArtigosEletronicos",
  },
  {
    title: "Jogo Da Forca",
    description: {
      pt: "Este é um simples Jogo da Forca com sistema cliente-servidor(Online) Java, servidor de até 3 pessoas por partida, baseado em pacotes, feito com sockets, thread, array e sincronismo.",
      en: "This is a simple game of Hangman with client-server system (Online) Java, server of up to 3 people per game, based on packages, made with sockets, thread, array and synchronization.",
    },
    logoSrc: projectLogos.jogoForcaImg,
    projectLink: "https://github.com/oGaabs/Cliente-Servidor-JogoDaForca_Java",
    repoLink: "https://github.com/oGaabs/Cliente-Servidor-JogoDaForca_Java",
  },
  {
    title: "Jogo da Memória",
    description: {
      pt: "Simples jogo da memória feito em C# com Windows Forms, com tema de linguagens da programação, pesquisa binária, imagens e randomização das cartas.",
      en: "Simple memory game made in C# with Windows Forms, with programming languages theme, binary search, images and card randomization.",
    },
    logoSrc: projectLogos.jogoMemoriaImg,
    projectLink: "https://github.com/oGaabs/JogoDaMemoria_CSharp",
    repoLink: "https://github.com/oGaabs/JogoDaMemoria_CSharp",
  },
]
