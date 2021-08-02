import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from '@Features/security/guard/security.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'security',
    loadChildren: () => import('./features/security/security.module').then((m) => m.SecurityModule),
    canActivate: [IsSignedInGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [IsSignedInGuard],
  },
  {
    path: 'workout',
    loadChildren: () => import('./features/workout/workout.module').then((m) => m.WorkoutModule),
    canActivate: [IsSignedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
