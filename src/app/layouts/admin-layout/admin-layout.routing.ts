import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { BloodCountComponent } from "src/app/pages/blood-count/blood-count.component";
import { DonorComponent } from "src/app/pages/donor/donor.component";
import { IssueComponent } from "src/app/issue/issue.component";
import { DonorListComponent } from "src/app/pages/donor-list/donor-list.component";
import { HospitalComponent } from "src/app/pages/hospital/hospital.component";
import { HospitalListComponent } from "src/app/pages/hospital-list/hospital-list.component";
import { VolumeReplacementListComponent } from "src/app/pages/volume-replacement-list/volume-replacement-list.component";
import { VolumeReplacementComponent } from "src/app/pages/volume-replacement/volume-replacement.component";
import { BloodComponent } from "src/app/pages/blood/blood.component";
import { BloodListComponent } from "src/app/pages/blood-list/blood-list.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "blood-count", component: BloodCountComponent },
  { path: "donor", component: DonorComponent },
  { path: "donor-list", component: DonorListComponent },
  { path: "hospital", component: HospitalComponent },
  { path: "hospital-list", component: HospitalListComponent },
  { path: "vr-list", component: VolumeReplacementListComponent },
  { path: "vr", component: VolumeReplacementComponent },
  { path: "issue", component: IssueComponent },
  { path: "blood-group", component: BloodComponent },
  { path: "blood-group-list", component: BloodListComponent },
  
  // { path: "rtl", component: RtlComponent }
];
