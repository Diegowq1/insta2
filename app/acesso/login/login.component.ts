import {Component, Output,EventEmitter, OnInit  } from '@angular/core';
import {style, trigger, state, transition, animate} from '@angular/animations';
import { Autenticacao } from 'src/app/autenticacao.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.modules';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
  animations:[
    trigger('animacao-banner',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(50px,0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ])
  ]
})
export class LoginComponent {

  constructor(
    private autenticacao: Autenticacao
  ){}

  public estadoLogin:string ='criado'
  
  @Output() public exibirPainel: EventEmitter <string> = new EventEmitter <string> ()

  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void{

     this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
     )

    
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  


}
