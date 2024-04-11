import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { CoursesComponent } from './courses.component';

export const routes: Routes = [
  {
    path: '', 
    component: CoursesComponent,
    children: [
      { path: 'lesson1', component: Lesson1Component, title: '終端機指令' },
      { path: 'lesson2', component: Lesson2Component, title: '組件生命週期' },
      { path: 'lesson3', component: Lesson3Component, title: 'HTML Binding 與 Event 處理' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
