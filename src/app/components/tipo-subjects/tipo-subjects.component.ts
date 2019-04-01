import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tipo-subjects',
  templateUrl: './tipo-subjects.component.html',
  styleUrls: ['./tipo-subjects.component.css']
})
export class TipoSubjectsComponent implements OnInit, OnDestroy {

   // Creamos los distintos tipos de Subjects
   private subject = new Subject<number>();
   private behaviourSubject = new BehaviorSubject<number>(null);
   private replaySubject = new ReplaySubject<number>();

   // Creamos los Observables para cada uno de los Subjects
   private subject$ = this.subject.asObservable();
   private behaviourSubject$ = this.behaviourSubject.asObservable();
   private replaySubject$ = this.replaySubject.asObservable();

   // Creamos los subcriptores de cada subject
   private subjectSupcriptor: Subscription;
   private behaviourSupcriptor: Subscription;
   private replaySubjectSupcriptor: Subscription;

   private contador = 1;
   public resultadoSubject = '';
   public resultadoBehaviourSubject = '';
   public resultadoReplaySubject = '';

   ngOnInit() {
     // Emitiremos un valor cada segundo a través de cada Subject.
     // En la tercera iteración, nos suscribiremos a cada Subject.

     const interval = setInterval(() => {
       this.subject.next(this.contador);
       this.behaviourSubject.next(this.contador);
       this.replaySubject.next(this.contador);

       if (this.contador === 3) {
         this.subjectSupcriptor = this.subject$.subscribe(valor => {
           this.resultadoSubject += '<br />' + valor;
         });

         this.behaviourSupcriptor = this.behaviourSubject$.subscribe(valor => {
           this.resultadoBehaviourSubject += '<br />' + valor;
         });

         this.replaySubjectSupcriptor = this.replaySubject$.subscribe(valor => {
           this.resultadoReplaySubject += '<br />' + valor;
         });
       } else if (this.contador > 4) {
         clearInterval(interval);
       }

       this.contador++;
     }, 1000);
  }

  ngOnDestroy(): void {
    this.subjectSupcriptor.unsubscribe();
    this.behaviourSupcriptor.unsubscribe();
    this.replaySubjectSupcriptor.unsubscribe();
  }

}

/* Como vemos, para el Subject, el observable sólo recibe los valores emitidos a partir de la tercera iteración
(cuando se creó la suscripción).

En el caso del BehaviourSubject, además, se recibe el último valor emitido antes de la suscripción (“3”).

Por último, en el caso del ReplaySubject, se reciben todos los valores emitidos, 
tanto anteriores como posteriores a la suscripción.*/
