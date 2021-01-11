export class BaseDashboardObject {

    get DisplayText(): string {
        return '';
    }

    get PrimaryIdentifier(): number {
        return -1;
    }
}

export class ComputerType extends BaseDashboardObject {
    public computerTypeId: number = 0;
    public name: string = "";
    public processor: boolean = false;
    public usbPorts: boolean = false;
    public ramSlots: boolean = false;
    public formFactor: boolean = false;
    public quantity: boolean = false;
    public screenSize: boolean = false;
    public isActive: boolean = true;
    constructor(item: any) {
        super();
        Object.assign(this, item);
    }
}

export class Computer extends BaseDashboardObject {
    public computerId: number = 0;
    public computerTypeId: number = 0;
    public processor: string = "";
    public brand: string = "";
    public usbPorts: number = 0;
    public ramSlots: number = 0;
    public formFactor: number = 1;
    public quantity: number = 0;
    public screenSizeId: number = 1;
    public isActive: boolean = true;
    //public FormFactorId:number=1;
    constructor(item: any) {
        super();
        Object.assign(this, item);
    }
}

