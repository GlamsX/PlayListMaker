import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'private',        
        loadChildren: () => import('./private/private.module').then(m => m.PrivateModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'public',
        loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
