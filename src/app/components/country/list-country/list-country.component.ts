

import { Component, ViewChild, inject } from '@angular/core';
// import { countries } from '../../../../assets/countries.json';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpService } from '../../../http.service';
import { ICountry } from '../../../interfaces';
import { Sort,MatSortModule } from '@angular/material/sort';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-country',
  standalone: true,
  imports: [MatPaginatorModule, MatPaginator,MatSortModule,RouterLink,FormsModule],
  templateUrl: './list-country.component.html',
  styleUrl: './list-country.component.scss',
})
export class ListCountryComponent {
  countries: any[] = [];
  // slicedCountries: ICountry[] = [];
  // sortedData: ICountry[];
  filteredData: ICountry[] = [];
  searchQuery: string = '';

  constructor() {
    this.filteredData = this.countries.slice();
  }

  httpService = inject(HttpService);
  ngOnInit() {
    this.httpService.getCountries().subscribe((result) => {
      console.log(result);
      this.countries = result.countries;
      //  this.sortedData = this.countries.slice();
      this.getSlicedCountries();
      // this.filteredData = this.filteredData.slice();
    });
  }

   

  sortData(sort: Sort) {
    
    if (!sort.active || sort.direction === '') {
      this.filteredData = this.filteredData.slice();
      return;
    }
    this.filteredData = this.filteredData.slice().sort((a, b) =>  {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
        case 'sortname':
          return this.compare(a.sortname, b.sortname, isAsc);
        case 'phoneCode':
          return this.compare(a.phoneCode, b.phoneCode, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.getSlicedCountries();
    });

    this.paginator.pageIndex = 1;
    this.getSlicedCountries();
  }

  getSlicedCountries() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.filteredData = this.countries.slice(startIndex, endIndex);
    this.filteredData = this.filteredData.slice(); 
  }


  applyFilter() {
    console.log("Search query:", this.searchQuery); // Debugging line
    if (!this.searchQuery) {
      this.getSlicedCountries(); // Reset filter if search query is empty
      return;
    }
    this.filteredData = this.countries.filter((country) => {
      // Filter based on country name, phone code, or country code
      return (
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        country.phoneCode.toString().includes(this.searchQuery) ||
        country.sortname.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }
}



