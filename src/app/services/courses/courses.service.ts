import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../../types/courses';
import { coursesData } from '../../types/coursesData';
import { collection, collectionData, deleteDoc, doc, docData, Firestore, getDocs, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private firestore: Firestore) {}

  getCourses(): Observable<Course[]> {
    //return of(coursesData);
    const coursesRef = collection(this.firestore, "courses");
    return collectionData(coursesRef) as Observable<Course[]>;
  }

  getCourse(id: string): Observable<Course> {
    const courseRef = doc(this.firestore, "courses", id);
    return docData(courseRef) as Observable<Course>;
  }

  async addCourse(course: Course) {
    const coursesRef = collection(this.firestore, "courses");
    const snapshot = await getDocs(coursesRef);

    const newId = (snapshot.size + 1).toString();
    course.id = newId;

    return this.updateCourse(course);
  }

  updateCourse(course: Course) {
    const courseRef = doc(this.firestore, "courses", course.id);
    return setDoc(courseRef, course, { merge: true });
  }

  deleteCourse(id: string) {
    const courseRef = doc(this.firestore, "courses", id);
    return deleteDoc(courseRef);
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
