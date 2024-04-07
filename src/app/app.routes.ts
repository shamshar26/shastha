import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AddCountryComponent } from './components/country/add-country/add-country.component';
import { ListCountryComponent } from './components/country/list-country/list-country.component';
import { CountryComponent } from './components/country/country.component';
import { UniversityComponent } from './components/university/university.component';
import { AddUniversityComponent } from './components/university/add-university/add-university.component';
import { ListUniversityComponent } from './components/university/list-university/list-university.component';





export const routes: Routes = [

     {
          path: '',
          redirectTo: '/country',
          pathMatch: 'full',
        },
        {
          path: 'country',
          component: CountryComponent,
          children: [
            {
              path: '',
              component: ListCountryComponent,
            },
            {
              path: 'add-country',
              component: AddCountryComponent,
            },
          ],
        },
        {
          path: 'university',
          component: UniversityComponent,
          children: [
            {
              path: '',
              component: ListUniversityComponent,
            },
            {
              path: 'add-university',
              component: AddUniversityComponent,
            },
          ],
        },
        {
          path: 'dash',
          component: DashboardComponent,
        },
//     { 
//          path: 'add-country',
//           component:AddCountryComponent
//          },
//     { 
//          path: 'list-country',
//            component:ListCountryComponent
//     },

//     { 
//          path: 'university',
//             component: UniversityComponent
//      },

//      { 
//          path: 'add-university',
//              component: AddUniversityComponent
//      },

//      { 
//           path: 'list-university',
//              component: ListUniversityComponent
//      },

        
                     
           
   
];
