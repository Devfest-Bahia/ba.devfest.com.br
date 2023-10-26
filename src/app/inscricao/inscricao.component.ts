import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})

export class InscricaoComponent {
  @Input()
  description= "DevFests são conferências de desenvolvedores de software patrocinadas pelo Google que permitem que a comunidade local de desenvolvimento de software se reúna para interagir e aprender sobre as novas tecnologias mais interessantes que existem.";
  moredevfest = "O Devfest Bahia é organizado por GDG Lauro de Freitas e Salvador, conta com conteúdos diversos para proporcionar maior oportunidade de aprendizado além de um ambiente repleto de oportunidades para troca de experiências e networking.";
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  subscribe() {
    const url = 'https://www.sympla.com.br/evento/devfest-bahia-2023/2197770?referrer=www.google.com';
    window.open(url, '_blank');
    }
}
