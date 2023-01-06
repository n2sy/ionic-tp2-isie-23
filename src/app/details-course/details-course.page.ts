import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListCourseService } from '../list-course.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
})
export class DetailsCoursePage implements OnInit {
  selectedCourse;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseSer: ListCourseService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedCourse = this.courseSer.getCourseById(p.get('id'));
      },
    });
  }

  async onDelete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sur de vouloir supprimer ce cours ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.courseSer.deleteCourse(this.selectedCourse);
            this.router.navigateByUrl('/home');
          },
        },
      ],
    });

    await alert.present();
  }
}
