import { Routes } from '@angular/router';
import { UltimoPassoComponent } from './pages/ultimo-passo/ultimo-passo.component';
import { PrimeiroPassoComponent } from './pages/primeiro-passo/primeiro-passo.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    
    {path: "ultimo-passo", component: UltimoPassoComponent},
    { path: 'primeiro-passo', component: PrimeiroPassoComponent }
   
];
