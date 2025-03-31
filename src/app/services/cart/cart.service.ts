import { Injectable } from '@angular/core';
import { Course } from '../../types/courses';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private courses: Course[] = [];
  private cartVisible = false;

  constructor() { }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  removeCourse(course: Course) {
    const index = this.courses.findIndex(c => c.id === course.id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.courses.reduce((total, course) => total + course.price, 0);
  }

  getTotalLessons(course: Course): number {
    return course.modules.reduce((total, module) => total + module.lessons.length, 0);
  }
  
  getCourses(): Course[] {
    return this.courses;
  }
  
  isCartVisible() {
    return this.cartVisible;
  }

  showCart() {
    this.cartVisible = true;
  }

  hideCart() {
    this.cartVisible = false;
  }
}
