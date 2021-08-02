import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutCalendarRoutingModule } from './workout-calendar-routing.module';
import { WorkoutCalendarComponent } from './workout-calendar.component';

@NgModule({
  declarations: [WorkoutCalendarComponent],
  imports: [
    CommonModule,
    WorkoutCalendarRoutingModule,
  ],
})
export class WorkoutCalendarModule { }
