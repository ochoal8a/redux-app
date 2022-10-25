import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number= 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador=> {
      this.contador = contador;
    })
  }

  multiplicar() {
    const action = new MultiplicarAction(5);
    this.store.dispatch(action);
  }
  dividir() {
     const action = new DividirAction(5);
     this.store.dispatch(action);
  }

}
