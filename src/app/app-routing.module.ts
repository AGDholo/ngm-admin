import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layout/empty/empty.component';
import { NotificationsComponent } from './views/components/notifications/notifications.component';

const routes: Routes = [
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
        component: NotificationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
