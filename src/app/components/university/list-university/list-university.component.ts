import { Component, ViewChild, inject } from '@angular/core';
import { HttpService } from '../../../http.service';
import { RouterLink } from '@angular/router';
import { IUniversity } from '../../../interfaces';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-university',
  standalone: true,
  imports: [RouterLink,MatPaginatorModule, MatPaginator,MatSortModule,FormsModule],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.scss'
})
export class ListUniversityComponent {
    httpService=inject(HttpService);
    university: any[] = [];
    filteredData: IUniversity[] = [];
    searchQuery: string = '';
    loading: boolean = true;

    constructor() {
      this.filteredData = this.university.slice();
    }

    ngOnInit(){
        this.httpService.getUniversity().subscribe(result=>{
          this.loading = false;
          this.university = result;
          this.getSlicedUniversity();
        });
    }

    sortData(sort: Sort) {
      if (!sort.active || sort.direction === '') {
        // No sorting criteria or direction specified, so keep the data as it is
        this.filteredData = this.filteredData.slice();
        return;
      }
  
      this.filteredData = this.filteredData.slice().sort((a, b) =>  {
        const isAsc = sort.direction === 'asc';
  
        // Assuming 'name' is the property by which you want to sort
        switch (sort.active) {
          case 'university':
            return this.compare(a.name, b.name, isAsc);
          case 'country':
            return this.compare(a.country, b.country, isAsc);
          case 'code':
            return this.compare(a.alpha_two_code, b.alpha_two_code, isAsc);
          case 'domains':
            // Assuming you want to sort based on the length of the domains array
            return this.compare(a.domains.length, b.domains.length, isAsc);
          case 'web-pages':
            // Assuming you want to sort based on the length of the web_pages array
            return this.compare(a.web_pages.length, b.web_pages.length, isAsc);
          default:
            return 0; // Return 0 for no sorting effect if unknown sort criteria
        }
      });
    }
  
    compare(a: string | number, b: string | number, isAsc: boolean): number {
      // Simple comparison function to be used with Array.sort()
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
      this.paginator.page.subscribe(() => {
        this.getSlicedUniversity();
      });
  
      this.paginator.pageIndex = 1;
      this.getSlicedUniversity();
    }

    getSlicedUniversity() {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.filteredData = this.university.slice(startIndex, endIndex);
      this.filteredData = this.filteredData.slice(); 
    }

    applyFilter() {
      console.log("Search query:", this.searchQuery); // Debugging line
      if (!this.searchQuery) {
        this.getSlicedUniversity(); // Reset filter if search query is empty
        return;
      }
      this.filteredData = this.university.filter((university) => {
        // Filter based on country name, phone code, or country code
        return (
          university.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          university.alpha_two_code.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          university.domains.some((domain: string) => domain.toLowerCase().includes(this.searchQuery.toLowerCase())) ||
          university.web_pages.some((webPage: string) => webPage.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      });
    }

}
