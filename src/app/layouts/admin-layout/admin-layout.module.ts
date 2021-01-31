import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { BloodCountComponent } from "../../pages/blood-count/blood-count.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DonorComponent } from "src/app/pages/donor/donor.component";
import { IssueComponent } from "src/app/issue/issue.component";
import { HospitalComponent } from "src/app/pages/hospital/hospital.component";
import { HospitalListComponent } from "src/app/pages/hospital-list/hospital-list.component";
import { BloodComponent } from "src/app/pages/blood/blood.component";
import { BloodListComponent } from "src/app/pages/blood-list/blood-list.component";
import { VolumeReplacementComponent } from "src/app/pages/volume-replacement/volume-replacement.component";
import { VolumeReplacementListComponent } from "src/app/pages/volume-replacement-list/volume-replacement-list.component";
import { DonorListComponent } from "src/app/pages/donor-list/donor-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    BloodCountComponent,
    DonorComponent,
    IssueComponent, HospitalComponent, HospitalListComponent, BloodComponent, BloodListComponent, VolumeReplacementComponent, VolumeReplacementListComponent, DonorListComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
