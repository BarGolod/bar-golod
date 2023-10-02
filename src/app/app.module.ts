import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { MouseTrackerComponent } from './components/mouse-tracker/mouse-tracker.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollToTopButtonComponent } from './components/scroll-to-top-button/scroll-to-top-button.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialLinksComponent,
    MouseTrackerComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    ScrollToTopButtonComponent,
    SkillsComponent,
    AboutMeComponent,
    ResumeComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
