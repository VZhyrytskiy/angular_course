export class GeneratorID {
    private id = 0;

    genID(): number {
        return this.id++;
    }
}
