import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../service/prisma.service';
import { mockDeep } from 'jest-mock-extended'
import { GamingLounge } from '.prisma/client';
import { GamingLoungeService } from './gaming.lounge.service';
import { GamingLoungeController } from './gaming.lounge.controller';
import GamingLoungeCreateDto from '../../../dto/gaming/lounge/gaming.lounge.create.dto';
import { GamingLoungeStateEnum } from '../../../dto/gaming/lounge/gaming.lounge.state.enum';
import { GamingLoungeTypeEnum } from '../../../dto/gaming/lounge/gaming.lounge.type.enum';
import {GAMES_SNAKE} from '@wodo-platform/wg-shared-lib/dist/wodogaming/game/game'
import GamingLoungeUpdateDto from 'src/dto/gaming/lounge/gaming.lounge.update.dto.ts';
import {GamingLoungeType,GAMING_LOUNGE_TYPE_LIST, GAMING_LOUNGE_TYPE_STANDARD} from '@wodo-platform/wg-shared-lib/dist/wodogaming/lounge/gaming.lounge.type'
import {GamingLoungeState,GAMING_LOUNGE_STATE_INITIALIZED,GAMING_LOUNGE_STATE_LIST} from '@wodo-platform/wg-shared-lib/dist/wodogaming/lounge/gaming.lounge.state'
import { ValidationPipe } from '../../../common/pipes/validation.pipe';
import * as val from '../../../common/pipes/validation';


describe("GamingLoungeController", () => {

    var gamingLounceModuleRef: TestingModule;
    let gamingLoungeController: GamingLoungeController;
    let gamingLoungeService: GamingLoungeService;
    let prismaService;

    beforeAll(async () => {
        prismaService = mockDeep<PrismaService>();

        let PrismaServiceProvider = {
            provide: PrismaService,
            useValue: prismaService
        };

        gamingLounceModuleRef = await Test.createTestingModule({
            imports: [],
            controllers: [GamingLoungeController],
            providers: [String,ValidationPipe,GamingLoungeService, PrismaServiceProvider],
        }).compile();
    });

    beforeEach(async () => {
        gamingLoungeService = gamingLounceModuleRef.get<GamingLoungeService>(GamingLoungeService);
        prismaService = gamingLounceModuleRef.get<PrismaService>(PrismaService);
        gamingLoungeController = gamingLounceModuleRef.get<GamingLoungeController>(GamingLoungeController)
    });

    describe('create', () => {
        it('should create a gaming lounge', async () => {
            prismaService.gamingLounge.create.mockResolvedValue(gl);

            let result:GamingLounge = await gamingLoungeController.create(glDto);

            expect(result);
            expect(result.id).toBe(gl.id);
            expect(result.deleted).toBe(gl.deleted);
            expect(result.duration).toBe(gl.duration);
            expect(result.enterenceFee).toBe(gl.enterenceFee);
            expect(result.gameTypeId).toBe(gl.gameTypeId);
            expect(result.prize).toBe(gl.prize);
            expect(result.state).toBe(gl.state);
            expect(result.type).toBe(gl.type);
            expect(result.updatedAt);
            expect(result.createdAt);
        });
    });

    describe('update', () => {
        it('should update a gaming lounge', async () => {

            prismaService.gamingLounge.update.mockResolvedValue(glUpdated);

            let result:GamingLounge = await gamingLoungeController.update(glUpdateDto);

            expect(result);
            expect(result.id).toBe(glUpdated.id);
            expect(result.deleted).toBe(glUpdated.deleted);
            expect(result.duration).toBe(glUpdated.duration);
            expect(result.enterenceFee).toBe(glUpdated.enterenceFee);
            expect(result.gameTypeId).toBe(glUpdated.gameTypeId);
            expect(result.prize).toBe(glUpdated.prize);
            expect(result.state).toBe(glUpdated.state);
            expect(result.type).toBe(glUpdated.type);
            expect(result.updatedAt);
            expect(result.createdAt);
        });
    });

    describe('findById', () => {
        it('should return a gaming lounge found by id', async () => {

            prismaService.gamingLounge.findUnique.mockResolvedValue(gl);

            let result:GamingLounge = await gamingLoungeController.findById(1);

            expect(result);
            expect(result.id).toBe(gl.id);
            expect(result.deleted).toBe(gl.deleted);
            expect(result.duration).toBe(gl.duration);
            expect(result.enterenceFee).toBe(gl.enterenceFee);
            expect(result.gameTypeId).toBe(gl.gameTypeId);
            expect(result.prize).toBe(gl.prize);
            expect(result.state).toBe(gl.state);
            expect(result.type).toBe(gl.type);
            expect(result.updatedAt);
            expect(result.createdAt);
        });
    });
});

// ---- mock objects

const glDto: GamingLoungeCreateDto = {
    type: GamingLoungeTypeEnum.STANDARD.valueOf(),
    state: GamingLoungeStateEnum.INITIALIZED.valueOf(),
    gameTypeId: GAMES_SNAKE.id,
    assetId: 1,
    enterenceFee: 2000,
    prize: 10000,
    duration: 3600,
};

const glUpdateDto: GamingLoungeUpdateDto = {
    id:1,
    type: GamingLoungeTypeEnum.STANDARD.valueOf(),
    state: GamingLoungeStateEnum.INITIALIZED.valueOf(),
    gameTypeId: GAMES_SNAKE.id,
    assetId: 1,
    enterenceFee: 2000,
    prize: 10000,
    duration: 3600,
    deleted:false
};

const glUpdated: GamingLounge = {
    id:1,
    type: GAMING_LOUNGE_TYPE_STANDARD.id,
    state: GAMING_LOUNGE_STATE_INITIALIZED.id,
    gameTypeId: GAMES_SNAKE.id,
    assetId: 1,
    enterenceFee: 4000,
    prize: 20000,
    duration: 4600,
    deleted:false,
    createdAt: new Date(),
    updatedAt: new Date()
};

const gl: GamingLounge = {
    id:1,
    type: GAMING_LOUNGE_TYPE_STANDARD.id,
    state: GAMING_LOUNGE_STATE_INITIALIZED.id,
    gameTypeId: GAMES_SNAKE.id,
    assetId: 1,
    enterenceFee: 2000,
    prize: 10000,
    duration: 3600,
    deleted:false,
    createdAt: new Date(),
    updatedAt: new Date
};