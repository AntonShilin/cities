export interface ICity {
    id: number | string;
    name: string;
}

export class Town {

    constructor(
        public id: number,
        public name: string,
        public population: string,
        public manager?: string,
    ) { }

}