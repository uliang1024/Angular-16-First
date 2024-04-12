import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { CoursesComponent } from './courses.component';
import { SharedModule } from "../../services/shared.module";
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Lesson4Component } from './components/lesson4/lesson4.component';

@NgModule({
    declarations: [
        CoursesComponent,
        Lesson1Component,
        Lesson2Component,
        Lesson3Component,
        Lesson4Component
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        SharedModule,
        MatTableModule,
        MatTooltipModule,
        MatListModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class CoursesModule { }
