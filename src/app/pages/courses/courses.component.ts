import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { Course } from '../../types/courses';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses: Course[] = [];
  role: string = 'user';

  constructor(
    private router: Router, 
    private coursesService: CoursesService,
    private cartService: CartService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.getCourses();
    //this.coursesService.loadCoursesToFirebase();
    this.getRole();
  }

  goToCourse(id: string) {
    this.router.navigate(['/courses', id]);
  }

  getCourses() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  addToCart(event: Event, course: Course) {
    event.stopPropagation();
    this.cartService.addCourse(course);
  }

  deleteCourse(event: Event, id: string) {
    event.stopPropagation();
    this.coursesService.deleteCourse(id)
      .then(() => console.log("Curso eliminado con éxito"))
      .catch(err => console.log(err));
  }

  getRole() {
    this.usersService.getCurrentUser()!
      .then(user => {
        console.log(user);
        this.role = user?.["role"];
      })
      .catch(err => console.log("Error obteniendo el rol", err));
  }

}
