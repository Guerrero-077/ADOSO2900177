import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { ListUserComponent } from './Components/User/list-user/list-user.component';
import { ListRolComponent } from './Components/Rol/list-rol/list-rol.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { authGuard } from './custom/auth.guard';
import { ListRolUserComponent } from './Components/RolUser/list-rol-user/list-rol-user.component';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: 'user', component: ListUserComponent, canActivate:[authGuard]},
    {path: 'rol', component: ListRolComponent, canActivate:[authGuard]},
    {path: 'rolUser', component: ListRolUserComponent, canActivate:[authGuard]}
];
