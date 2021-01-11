import { BaseService } from '../common/base-service';
import { HttpWrapper } from './http-wrapper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ComputerListService extends BaseService {
    constructor(http: HttpWrapper) {
        super('computerList', http);
    }

    getComputerList(orderBy: string = "", orderDirection: string = "", pageNumber: number = 1,
    sizeOfPage: number = 1, filterParams: string = "", returnType: string = "") {
        let url = `${this.debugURL}/api/${this.controllerName}/GetComputerList`;
        return this.http.get(url, {
            params: {
              orderBy: orderBy,
              orderDirection: orderDirection,
              pageNumber: pageNumber,
              sizeOfPage: sizeOfPage,
              filterParams: filterParams,
              returnType: returnType
            },
          });
    }

}