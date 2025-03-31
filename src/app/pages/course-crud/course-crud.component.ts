import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses/courses.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-crud',
  imports: [ReactiveFormsModule],
  templateUrl: './course-crud.component.html',
  styleUrl: './course-crud.component.css'
})
export class CourseCrudComponent {
  form: FormGroup;
  id: string = '1';

  constructor(
      private coursesService: CoursesService,
      private formBuilder: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
      this.form = this.formBuilder.group({
          title: ["", [Validators.required]],
          description: [""],
          price: [0, [Validators.required]],
          subject: [""],
          category: [""],
          image: [""],
          level: [""],
          duration: [0],
          instructor: this.formBuilder.group({
              name: [""],
              image: [""],
              experience: [""]
          }),
          modules: this.formBuilder.array([]),
          enrolledStudents: [0],
          rating: [0]
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        if (!this.id) return;
        this.coursesService.getCourse(this.id).subscribe(course => {
            this.form.patchValue(course);
        });
    });
  }

  addCourse() {
    if (this.form.invalid) return;
    this.coursesService.addCourse(this.form.value)
        .then(() => this.router.navigate(["/courses"]))
        .catch(err => console.log(err));
  }

  updateCourse() {
    if (this.form.invalid) return;
    this.coursesService.updateCourse({ id: this.id, ...this.form.value })
        .then(() => this.router.navigate(["/courses"]))
        .catch(err => console.log(err));
  }
}
