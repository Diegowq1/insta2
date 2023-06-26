import { Component, EventEmitter, Output } from '@angular/core';
import {style, trigger, state, transition, animate} from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.modules';
import { Autenticacao } from 'src/app/autenticacao.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  animations: [trigger('cadastro',[
    state('escondido', style({
      opacity: 0
    })),
    state('visivel', style({
      opacity:1
    })),
    transition('escondido<=>visivel',animate('1s ease-in'))
  ])
]
})
export class CadastroComponent {
  

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  })


  public exibirPainelLogin(): void{
  this.exibirPainel.emit('login')

  }

  public cadastrarUsuario(): void{

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha,
    )
    this.autenticacao.cadastrarUsuario(usuario).then(() =>{
      alert('Usuario cadastrado com sucesso!')
      this.exibirPainelLogin()
    })
  }

  constructor(
    private autenticacao: Autenticacao
  ){}

}
