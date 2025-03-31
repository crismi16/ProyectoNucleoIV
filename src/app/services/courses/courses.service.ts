import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../../types/courses';
import { coursesData } from '../../types/coursesData';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private firestore: Firestore) {}

  getCourses(): Observable<Course[]> {
    return of(coursesData);
  }

  loadCoursesToFirebase() {
    this.getCourses().subscribe(courses => {
      courses.forEach(course => {
        const courseRef = doc(this.firestore, "courses", course.id.toString());
        setDoc(courseRef, course)
      });
    });
  }
}
