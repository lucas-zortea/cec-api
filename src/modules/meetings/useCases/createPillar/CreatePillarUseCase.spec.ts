import { AppError } from "../../../../errors/AppError";
import { PillarsRepositoryInMemory } from "../../repositories/in-memory/PillarsRepositoryInMemory";
import { CreatePillarUseCase } from "./CreatePillarUseCase"


let createPillarUseCase: CreatePillarUseCase;
let pillarsRepositoryInMemory: PillarsRepositoryInMemory;

describe("Create pillar", () => {

    beforeEach(() => {
        pillarsRepositoryInMemory = new PillarsRepositoryInMemory();
        createPillarUseCase = new CreatePillarUseCase(pillarsRepositoryInMemory);
    })

    it("should be able to create a new pillar", async () => {
        const pillar = {
            name: "Pillar Test",
            description: "Pillar description test" 
        }
        await createPillarUseCase.execute({
            name: pillar.name,
            description: pillar.description
        });

        const pillarCreated = await pillarsRepositoryInMemory.findByName(pillar.name);

        console.log(pillarCreated);

        expect(pillarCreated).toHaveProperty("id");
    });

    it("should not be able to create a new pillar with same name", async () => {
        expect(async () => {
            const pillar = {
                name: "Pillar Test",
                description: "Pillar description test" 
            }
            await createPillarUseCase.execute({
                name: pillar.name,
                description: pillar.description
            });
    
            await createPillarUseCase.execute({
                name: pillar.name,
                description: pillar.description
            });
        }).rejects.toBeInstanceOf(AppError);
    });
})