import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GiftComponent } from './pages/gift/gift.component';
import { LetterComponent } from './pages/letter/letter.component';
import { CameraComponent } from './pages/camera/camera.component';
import { MainImgComponent } from './pages/main-img/main-img.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // 첫 화면
  { path: 'main', component: MainImgComponent, }, 
  { path: 'gift', component: GiftComponent, }, 
  { path: 'letter', component: LetterComponent, }, 
  { path: 'camera', component: CameraComponent, }, 
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});