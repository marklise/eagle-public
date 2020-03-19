import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CookieService } from 'ngx-cookie-service';

// modules
import { SharedModule } from 'app/shared/shared.module';
import { ProjectModule } from 'app/project/project.module';
import { ProjectsModule } from 'app/projects/projects.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';

// components
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { ContactComponent } from 'app/contact/contact.component';
import { HeaderComponent } from 'app/header/header.component';
import { FooterComponent } from 'app/footer/footer.component';
import { NewsListTableRowsComponent } from 'app/news/news-list-table-rows/news-list-table-rows.component';
import { SearchHelpComponent } from './search-help/search-help.component';

// services
import { ApiService } from 'app/services/api';
import { CommentService } from 'app/services/comment.service';
import { CommentPeriodService } from 'app/services/commentperiod.service';
import { DecisionService } from 'app/services/decision.service';
import { DocumentService } from 'app/services/document.service';
import { SearchService } from 'app/services/search.service';
import { OrgService } from 'app/services/org.service';
import { FeatureService } from 'app/services/feature.service';
import { ProjectService } from 'app/services/project.service';
import { ConfigService } from 'app/services/config.service';
import { NewsListComponent } from 'app/news/news.component';
import { NewsTypeFilterPipe } from 'app/shared/pipes/news-type-filter.pipe';
import { NewsMultifieldFilterPipe } from 'app/shared/pipes/news-multifield-filter.pipe';
import { LegislationComponent } from 'app/legislation/legislation.component';
import { ProcessComponent } from 'app/process/process.component';
import { ComplianceOversightComponent } from 'app/compliance-oversight/compliance-oversight.component';
import { ActivitiesListTableRowsComponent } from './project/project-activites/activities-list-table-rows/activities-list-table-rows.component';
import { NotificationProjectsListComponent } from './notification-projects/notification-projects.component';
import { NotificationProjectsListTableRowsComponent } from './notification-projects/notification-projects-list-table-rows/notification-projects-list-table-rows.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BootstrapModalModule,
    SharedModule,
    ProjectModule,
    ProjectsModule,
    AppRoutingModule, // <-- module import order matters - https://angular.io/guide/router#module-import-order-matters
    NgSelectModule,
    NgxPageScrollCoreModule.forRoot({
      defaultScrollOffset: 50, easingLogic: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) {
          return b;
        }
        if (t === d) {
          return b + c;
        }
        if ((t /= d / 2) < 1) {
          return c / 2 * Math.pow(2, 8 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -8 * --t) + 2) + b;
      }
    }),
    NgxPageScrollModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    NewsTypeFilterPipe,
    NewsMultifieldFilterPipe,
    NewsListTableRowsComponent,
    NotificationProjectsListComponent,
    NotificationProjectsListTableRowsComponent,
    ActivitiesListTableRowsComponent,
    LegislationComponent,
    ProcessComponent,
    ComplianceOversightComponent,
    SearchHelpComponent,
  ],
  entryComponents: [
    NewsListTableRowsComponent,
    NotificationProjectsListTableRowsComponent,
    ActivitiesListTableRowsComponent,
  ],
  providers: [
    ConfigService,
    CookieService,
    ApiService,
    ProjectService,
    CommentService,
    CommentPeriodService,
    DecisionService,
    DocumentService,
    SearchService,
    OrgService,
    FeatureService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    Object.defineProperty(applicationRef, '_rootComponents', {get: () => applicationRef['components']});
  }
}
