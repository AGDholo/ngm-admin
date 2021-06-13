import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layout/empty/empty.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotificationViewComponent } from './views/components/notification-view/notification-view.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
    data: {
      name: 'Dashboard',
      icon: 'dvr',
    },
  },
  {
    data: {
      subtitle: 'Components',
    },
    path: 'components',
    component: EmptyComponent,
    children: [
      {
        data: {
          name: 'Notification',
          icon: 'notifications_none',
        },
        path: 'notification',
        component: NotificationViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
