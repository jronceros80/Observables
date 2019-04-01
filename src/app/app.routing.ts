import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { TipoSubjectsComponent } from './components/tipo-subjects/tipo-subjects.component';


const routes: Routes = [
    { path: 'tipo-subjects', component: TipoSubjectsComponent },
    { path: 'listado', component: ListadoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'listado' }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });
