import fs from 'fs';
import { parse as csvParse } from "csv-parse";
import { IPillarRepository } from '../../repositories/IPillarsRepository';

interface IImportPillar {
    name: string,
    description: string
}

class ImportPillarUseCase{
    constructor(private pillarsRepository: IPillarRepository) {}

    loadPillars(file: Express.Multer.File): Promise<IImportPillar[]> { // : IImportPillar[]
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const pillars: IImportPillar[] = [];
    
            const parseFile = csvParse();
    
            stream.pipe(parseFile);
    
            parseFile.on("data", async (line) => {
                const [name, description] = line
                pillars.push({
                    name,
                    description
                });
            }).
            on("end", () => {
                fs.promises.unlink(file.path);
                resolve(pillars);
            }).
            on("error", (err) => {
                reject(err);
            });
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const pillars = await this.loadPillars(file);
        pillars.map(async (pillar) => {
            const { name, description } = pillar;

            const existsPillar = this.pillarsRepository.findByName(name);

            if(!existsPillar){
                this.pillarsRepository.create({
                    name,
                    description
                })
            }
        })
    }
};

export { ImportPillarUseCase };