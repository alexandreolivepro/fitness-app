import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutCalendarComponent } from './workout-calendar.component';

const routes: Routes = [{
  path: '',
  component: WorkoutCalendarComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutCalendarRoutingModule { }
