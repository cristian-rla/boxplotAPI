export type DBService ={
    getAllData():Promise<number[]>,
    getFromRange(min:number, max: number):Promise<number[]>
}

export type Boxplot = {
    Q1:number,
    Q2:number,
    Q3:number,
    outliers:number[],
    min:number,
    max:number
}
