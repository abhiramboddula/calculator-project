export class Portfolio {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public technologies: string[],
        public link: string,
        public imageUrl: string
    ) {}

    static fromJson(json: any): Portfolio {
        return new Portfolio(
            json.id,
            json.title,
            json.description,
            json.technologies,
            json.link,
            json.imageUrl
        );
    }

    toJson(): any {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            technologies: this.technologies,
            link: this.link,
            imageUrl: this.imageUrl
        };
    }
}