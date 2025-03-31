import { CanDeactivateFn } from '@angular/router';
import { CourseCrudComponent } from '../../pages/course-crud/course-crud.component';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as CourseCrudComponent;
  
  if(currentComponent.form.touched){
    return window.confirm("Estas seguro que deseas abandonar la pagina?");
  }
  return true;
};
