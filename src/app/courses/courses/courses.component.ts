import { Courses } from './../models/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  curso: Courses[] = [];
  displayedColumns = ['name', 'categoria'];


  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
  }

}
