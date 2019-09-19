import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    CoreModule,
    SharedModule,
    LoginModule,
    ProductsModule,
    MobxAngularModule,
    MaterialModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
