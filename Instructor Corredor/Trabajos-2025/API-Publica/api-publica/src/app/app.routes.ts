import { Routes } from '@angular/router';
import { UsersComponent } from './Components/User/users/users.component';
import { UserCreateComponent } from './Components/User/user-create/user-create.component';
import { UserEditComponent } from './Components/User/user-edit/user-edit.component';
import { CommetsComponent } from './Components/Comments/commets/commets.component';
import { CommetsCreateComponent } from './Components/Comments/commets-create/commets-create.component';
import { AlbumsComponent } from './Components/Albums/albums/albums.component';
import { CommetsFormComponent } from './Components/Comments/commets-form/commets-form.component';
import { CommetsEditComponent } from './Components/Comments/commets-edit/commets-edit.component';
import { AlbumsCreateComponent } from './Components/Albums/albums-create/albums-create.component';
import { AlbumsEditComponent } from './Components/Albums/albums-edit/albums-edit.component';
import { PostCreateComponent } from './Components/Posts/post-create/post-create.component';
import { PostEditComponent } from './Components/Posts/post-edit/post-edit.component';
import { PostComponent } from './Components/Posts/post/post.component';

export const routes: Routes = [
    { path: 'user', component: UsersComponent },
    { path: 'user/CreateUser', component: UserCreateComponent },
    { path: 'user/updateUser/:id', component: UserEditComponent },

    { path: 'commets', component: CommetsComponent },
    { path: 'commets/CreateCommets', component: CommetsFormComponent },
    { path: 'commets/updateComments/:id', component: CommetsEditComponent },

    { path: 'album', component: AlbumsComponent },
    { path: 'album/CreateAlbum', component: AlbumsCreateComponent },
    { path: 'album/updateAlbum/:id', component: AlbumsEditComponent },

    { path: 'post', component: PostComponent },
    { path: 'post/CreatePost', component: PostCreateComponent },
    { path: 'post/updatePost/:id', component: PostEditComponent },




];
