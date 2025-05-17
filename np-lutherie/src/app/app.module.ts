import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TradeInstrumentsComponent } from './trade-instruments/trade-instruments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InstrumentsComponent,
    ServicesComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    ThankYouComponent,
    TestimonialComponent,
    TradeInstrumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, data: { state: 'home' } },
      { path: 'about', component: AboutComponent, data: { state: 'about' } },
      { path: 'instruments', component: InstrumentsComponent, data: { state: 'instruments' } },
      { path: 'services', component: ServicesComponent, data: { state: 'services' } },
      { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
      { path: 'thank-you', component: ThankYouComponent, data: { state: 'thank-you' } },
      { path: 'testimonials', component: TestimonialComponent, data: { state: 'testimonials' } },
      { path: 'trade-instruments', component: TradeInstrumentsComponent, data: { state: 'testimonials' } },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },

    ]),
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
