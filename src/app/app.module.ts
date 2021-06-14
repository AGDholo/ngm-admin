import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './shared/nav/nav.component';
import { EmptyComponent } from './layout/empty/empty.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { NotificationViewComponent } from './views/components/notification-view/notification-view.component';
import { ExampleComponent } from './shared/example/example.component';
import { SafePipe } from './pipe/safe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmptyComponent,
    NotificationComponent,
    DashboardComponent,
    NotificationViewComponent,
    ExampleComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatRippleModule,
    MatChipsModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatIconModule,
    ScrollingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  exports: [NotificationComponent],
})
export class AppModule {}
