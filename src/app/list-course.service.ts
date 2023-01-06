import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCourseService {
  private tabCourses = [
    {
      id: 1,
      title: 'Android',
      author: 'Nidhal Jelassi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png',
      keywords: ['Activity', 'Intent', 'Recycler View'],
    },
    {
      id: 2,
      title: 'Angular',
      author: 'Homer Simpson',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
      keywords: ['Component', 'Module', 'Binding'],
    },
    {
      id: 3,
      title: 'Ionic',
      author: 'Oussama Salah',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
      keywords: ['Page', 'Routing', 'Mobile'],
    },
  ];
  constructor() {}

  getAllCourses() {
    return this.tabCourses;
  }

  addCourse(newC) {
    newC.keywords = newC.keywords.split(',');
    console.log(newC);

    newC.id = this.tabCourses[this.tabCourses.length - 1].id + 1;
    this.tabCourses.push(newC);
  }

  getCourseById(searchId) {
    return this.tabCourses.find((c) => c.id == searchId);
  }

  deleteCourse(deletedCourse) {
    let i = this.tabCourses.indexOf(deletedCourse);
    this.tabCourses.splice(i, 1);
  }
}
