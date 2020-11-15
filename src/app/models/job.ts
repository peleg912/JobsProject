export class Job {
    constructor(public q: string, public size: number, public r: number, public geo: string, 
        public lat: string, public long: string, public formatted_address: string,
        public botName: string, public page: number){}
}
