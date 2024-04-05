import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CourseListComponent } from './Courses/course.list/course.list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, CourseListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent {
  title = 'course-manager';

  name: string = 'Thiago Henriques';
}
