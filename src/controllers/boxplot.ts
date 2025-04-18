import { Boxplot, DBService } from "../schemas/boxplot";

class BoxplotController{
    bpService:DBService;
    constructor(service:DBService){
        this.bpService = service;
    };
    async getBoxplot():Promise<Boxplot>{
        const data = (await this.bpService.getAllData()).sort((a, b) => a - b);
        const Q2 = this.median(data);

        let firstHalf =  data.slice(0, Math.floor(data.length/2));
        const Q1 = this.median(firstHalf);
        
        let secondHalf = data.slice(Math.ceil(data.length/2));
        const Q3 = this.median(secondHalf);

        const RIC = Q3 - Q1;
        const outliers = data.filter(num => num < Q1 - 1.5*RIC || num > Q3 + 1.5*RIC);

        const filtered = data.filter(num => num >= Q1 - 1.5*RIC && num <= Q3 + 1.5*RIC);
        const min = Math.min(...filtered);
        const max = Math.max(...filtered);

        return {Q1, Q2, Q3, outliers, min, max};
    }
    private median(data:number[]):number{
        if(data.length % 2 == 0)
            return (data[data.length/2 - 1] + data[data.length/2]) / 2;
        return data[Math.floor(data.length/2)];
    }
}

export default BoxplotController;