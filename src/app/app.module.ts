import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SearchPipe } from './pipe/search.pipe';
import { personRouting } from './routes/person-routes.routes';
import { Guard } from './routes/guard';
import { DeactivateGuard } from './routes/deactivate-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonDropdownService } from './service/person-dropdown.service';
import { PersonService } from './service/person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { LoginComponent } from './login/login.component';
import { ResolveGuard } from './routes/resolve-guard';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CapitalizeFirstPipe,
    SearchPipe,
    PageNotFoundComponent,
    AddPersonComponent,
    PersonDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, personRouting
  ],
  providers: [PersonService, PersonDropdownService, Guard, DeactivateGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
