import { Component } from '@angular/core';
import {style, trigger, state, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations:[
    trigger('animacao-banner',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(-200px,0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ]),trigger('animacao-forms',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(200px,0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent {

  public estadoBanner: string = 'criado'
  public cadastro: boolean = false
  public estadoForms: string = 'criado'

  public exibirPainel(event:string): void{
    this.cadastro = event === 'cadastro' ? true : false
  }

}
