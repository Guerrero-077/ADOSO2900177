import { Routes } from '@angular/router';
import { PersonComponent } from './Components/person/person.component';
import { CrearPersonaComponent } from './Components/crear-persona/crear-persona.component';
import { UpdatePersonaComponent } from './Components/update-persona/update-persona.component';

export const routes: Routes = [
    {path: 'person', component: PersonComponent},
    {path: 'person/create', component: CrearPersonaComponent},
    {path: 'person/update/:id',component:UpdatePersonaComponent}


];
