import { ListadoService } from './../../services/listado.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  public items = [];

  public subscription: Subscription;

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$.subscribe((items: Array<{ nombre: string }>) => {
      this.items = items;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  crearItem() {
    this.listadoService.crearItem();
  }

  eliminarItem(index: number) {
    this.listadoService.eliminarItem(index);
  }
}
