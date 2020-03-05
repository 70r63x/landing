import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTopComponent } from './sections/scroll-top/scroll-top.component';
import { LoginComponent, OpenLogin } from './sections/login/login.component';
import { SafeInsertionPipe } from './pipes/safe-insertion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ScrollTopComponent,
    LoginComponent,
    OpenLogin,
    SafeInsertionPipe
  ],
  entryComponents: [OpenLogin],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatBadgeModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatBadgeModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
