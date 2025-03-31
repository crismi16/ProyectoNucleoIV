import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../types/courses';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  featuredCourses: Course[] = [];

  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(courses => {
      this.featuredCourses = courses.slice(0, 3);
    });
  }

  goToCourse(id: string) {
    this.router.navigate(['/courses', id]);
  }
}
