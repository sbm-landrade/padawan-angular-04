import { Subscription } from 'rxjs';
import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  acoes$ = this.acoesInput.valueChanges.pipe(tap(console.log))

  constructor(private acoesService: AcoesService) {}

}
