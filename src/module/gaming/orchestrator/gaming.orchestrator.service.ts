
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from '../../../service/prisma.service';
import GamingOrchestratorCreateDto from '../../../dto/gaming/orchestrator/gaming.orchestrator.create.dto';
import GamingOrchestratorUpdateDto from '../../../dto/gaming/orchestrator/gaming.orchestrator.update.dto';

@Injectable()
export class GamingOrchestratorService {

    private readonly logger = new Logger(GamingOrchestratorService.name);

    constructor(private prismaService: PrismaService) {
        this.logger.debug("instantiated a new instance of test service");
    }

    /**
     *  Creates gaming orchestration data
     * 
     * @param camingOrchestratorCreateDto 
     * @returns 
     */
    async create(camingOrchestratorCreateDto:GamingOrchestratorCreateDto): Promise<String> {
        //this.prismaService.
        return "";
    }

    /**
     *  Updates gaming orchestration data
     * 
     * @param camingOrchestratorCreateDto 
     * @returns 
     */
     async update(gamingOrchestratorUpdateDto:GamingOrchestratorUpdateDto): Promise<String> {
        //this.prismaService.
        return "";
    }
}