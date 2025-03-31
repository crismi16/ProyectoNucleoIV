import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../types/courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private router: Router, private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
    this.coursesService.loadCoursesToFirebase();
  }

  goToCourse(id: string) {
    this.router.navigate(['/courses', id]);
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
