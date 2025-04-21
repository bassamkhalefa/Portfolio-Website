import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { CaseStudiesComponent } from './Components/case-studies/case-studies.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';

export const routes: Routes = [

    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "Portfolio", component: PortfolioComponent },
    { path: "case-studies", component: CaseStudiesComponent },
    { path: "campaigns", component: CampaignsComponent },


];
