import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Company } from '../model/company';
import { of } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyUrl = "/tradeapi/company";
  constructor(private http: HttpClient) { }

  searchCompanyByName(name: string) {
    console.log("search compny by " + name);
    return this.http.get<Company[]>(this.companyUrl + "/searchname/" + name);
  }

  addCompany(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }

  getAllCompanies() {
    return this.http.get<Company[]>(this.companyUrl);
  }

  findCompanyByName(name: string) {

    return (!name) ? of([]):this.http.get(this.companyUrl + "?searchString=" + name);
       
  }
}
