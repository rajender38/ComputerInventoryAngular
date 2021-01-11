import { BaseService } from '../common/base-service';
import { HttpWrapper } from './http-wrapper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SecreenSizeService extends BaseService {
    constructor(http: HttpWrapper) {
        super('screenSize', http);
    }
}