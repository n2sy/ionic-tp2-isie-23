import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCourseService } from '../list-course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  constructor(private courseSer: ListCourseService, private router: Router) {}

  ngOnInit() {}

  submitHandler(newCourse) {
    console.log(newCourse);
    this.courseSer.addCourse(newCourse);
    this.router.navigateByUrl('/home');
  }
}
