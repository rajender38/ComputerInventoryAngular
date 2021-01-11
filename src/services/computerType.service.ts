import { BaseService } from '../common/base-service';
import { HttpWrapper } from './http-wrapper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ComputerTypeService extends BaseService {
    constructor(http: HttpWrapper) {
        super('computertypes', http);
    }

    getById(id: number) {
        debugger;
        return this.http.get(`${this.debugURL}/api/${this.controllerName}/getById`, {
            params: {
                id: id
            },
        });
    };
}