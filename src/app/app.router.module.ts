import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { GiftComponent } from './pages/gift/gift.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // 첫 화면
  { path: 'main', component: MainComponent, }, // url 경로가 /login 일때 LoginComponent를 보여준다.
  { path: 'gift', component: GiftComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});