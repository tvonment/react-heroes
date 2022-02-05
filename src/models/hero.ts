class Hero {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = new Date().toISOString();
        this.name = name;
    }
}
export default Hero;