import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../types/courses';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-course',
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  course: Course | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private coursesService: CoursesService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.coursesService.getCourse(id).subscribe(course => {
        this.course = course;
      });
    });
  }

  getTotalLessons(course: Course): number {
    return this.cartService.getTotalLessons(course);
  }

}
