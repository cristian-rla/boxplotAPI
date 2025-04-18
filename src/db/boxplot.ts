class BoxplotService{
    async getAllData():Promise<number[]>{ // Simulando query select *
        const data = Array.from({length:10}, () => Math.random()*Math.pow(10,Math.random()*10));
        return data;
    }
    async getFromRange(min:number, max: number):Promise<number[]>{ // Simulando query where. NO es utilizado en el controller
        const data =  Array.from({length:100}, () => Math.random()*10);
        return data.filter(num => num > min && num < max)
    }
}

const bpService = new BoxplotService();
export {bpService}