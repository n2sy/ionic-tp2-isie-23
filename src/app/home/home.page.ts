import { Component, OnInit } from '@angular/core';
import { ListCourseService } from '../list-course.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  tab = [];
  constructor(private listCourse: ListCourseService) {}

  ngOnInit(): void {
    this.tab = this.listCourse.getAllCourses();
  }
}
