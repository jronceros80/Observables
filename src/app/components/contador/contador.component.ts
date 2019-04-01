import { ListadoService } from './../../services/listado.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy {

  public contador = 0;

  public subscription: Subscription;

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$.subscribe((items: Array<{ nombre: string }>) => {
      this.contador = items.length;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
