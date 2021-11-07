import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from '../../../service/prisma.service';
import { GamingLounge } from '@prisma/client';
import GamingLoungeCreateDto from "src/dto/gaming/lounge/gaming.lounge.create.dto";
import GamingLoungeUpdateDto from "src/dto/gaming/lounge/gaming.lounge.update.dto.ts";
import { GamingLoungeTypeEnum } from "src/dto/gaming/lounge/gaming.lounge.type.enum";
import {GamingLoungeType,GAMING_LOUNGE_TYPE_LIST} from '@wodo-platform/wg-shared-lib/dist/wodogaming/lounge/gaming.lounge.type'
import {GamingLoungeState,GAMING_LOUNGE_STATE_LIST} from '@wodo-platform/wg-shared-lib/dist/wodogaming/lounge/gaming.lounge.state'
import { WGError } from "@wodo-platform/wg-shared-lib/dist/wodogaming/error/wg.error";
import { WG_ERROR_GL_CREATE } from "@wodo-platform/wg-shared-lib/dist/wodogaming/error/error.codes";


@Injectable()
export class GamingLoungeService {

  private readonly logger = new Logger(GamingLoungeService.name);

  constructor(private prisma: PrismaService) {
    this.logger.debug("instantiated a new instance of test service");
  }

  /**
   * Creates entity in the datastore
   * 
   * @param gamingLoungeCreateDto 
   * @returns GamingLounge
   */
  async create(gamingLoungeCreateDto: GamingLoungeCreateDto): Promise<GamingLounge> {

    this.logger.debug("creating gaming lounge:" + JSON.stringify(gamingLoungeCreateDto));

    const data = {
      type: gamingLoungeCreateDto.type.valueOf(),
      state: gamingLoungeCreateDto.state.valueOf(),
      gameTypeId: gamingLoungeCreateDto.gameTypeId,
      assetId: gamingLoungeCreateDto.assetId,
      enterenceFee: gamingLoungeCreateDto.enterenceFee,
      prize: gamingLoungeCreateDto.prize,
      duration: gamingLoungeCreateDto.duration,
      deleted: false
    };

   // if(!data.deleted) {
   //   throw new WGError(WG_ERROR_GL_CREATE,"this is my test");
   //  }

    let gamingLounge: GamingLounge = await this.prisma.gamingLounge.create(
      {
        data
      }
    ) as GamingLounge;

    this.logger.debug("created gaming lounge:" + JSON.stringify(gamingLounge));

    return gamingLounge;
  }

  /**
   * Updates entity in the datastore
   * 
   * @param gamingLoungeUpdateDto 
   * @returns GamingLounge
   */
  async update(gamingLoungeUpdateDto: GamingLoungeUpdateDto): Promise<GamingLounge> {

    this.logger.debug("updating gaming lounge:" + JSON.stringify(gamingLoungeUpdateDto));

    const data = {
      type: gamingLoungeUpdateDto.type.valueOf(),
      state: gamingLoungeUpdateDto.state.valueOf(),
      gameTypeId: gamingLoungeUpdateDto.gameTypeId,
      assetId: gamingLoungeUpdateDto.assetId,
      enterenceFee: gamingLoungeUpdateDto.enterenceFee,
      prize: gamingLoungeUpdateDto.prize,
      duration: gamingLoungeUpdateDto.duration,
      deleted: false
    };
    let gamingLounge: GamingLounge = await this.prisma.gamingLounge.update(
      {
        where:
        {
          id: gamingLoungeUpdateDto.id
        },
        data:
        {
          ...data,
        }
      }
    ) as GamingLounge;

    this.logger.debug("updated gaming lounge:" + JSON.stringify(gamingLounge));

    return gamingLounge;
  }

  /**
   * Finds all entitis in the datastore
   * 
   * @param id 
   * @param name 
   * @returns array of GamingLounge entities
   */
  async findAll(id: number | null, name: string | null): Promise<GamingLounge[]> {
    let gamingLounges: GamingLounge[] = await this.prisma.gamingLounge.findMany(
      {
        orderBy: { createdAt: 'desc' },
      }
    ) as GamingLounge[];
    return gamingLounges;
  }

  /**
   * Finds entity by the given id
   * 
   * @param id 
   * @returns GamingLounge
   */
  async findById(id: number): Promise<GamingLounge> {
    // TODO: validate method params
    this.logger.debug(`finding demo in the datastore by demoId[${id}]`);
    let gamingLounge: GamingLounge = await this.prisma.gamingLounge.findUnique(
      {
        where: {
          id: id,
        }
      }
    ) as GamingLounge;

    if (gamingLounge) {
      this.logger.debug(`found demo[${JSON.stringify(gamingLounge)}] in the datastore by demoId[${id}]`);
    }
    else {
      this.logger.debug(`could not find any demo record in the datastore by demoId[${id}]`);
    }

    return gamingLounge;
  }

  /**
   * Sets deleted column to true (soft-delete) for entity by the given id
   * @param id 
   * @returns GamingLounge
   */
  async delete(id: number): Promise<GamingLounge> {
    const data = {
      deleted: true
    };
    let gamingLounge: GamingLounge = await this.prisma.gamingLounge.update(
      {
        where:
        {
          id: id
        },
        data:
        {
          ...data,
        }
      }
    ) as GamingLounge;

    return gamingLounge;
  }

/**
* Deletes entity by the given id
* 
* @param id 
* @returns GamingLounge
*/
  async purge(id: number): Promise<GamingLounge> {
    let gamingLounge: GamingLounge = await this.prisma.gamingLounge.delete(
      {
        where:
        {
          id
        }
      }
    ) as GamingLounge;
    return gamingLounge;
  }

  /**
   * 
   * @returns list of GamingLoungeType
   */
  async findTypes(): Promise<GamingLoungeType[]> {
    return GAMING_LOUNGE_TYPE_LIST;
  }

  /**
   * 
   * @returns list of GamingLoungeState
   */
   async findStates(): Promise<GamingLoungeState[]> {
    return GAMING_LOUNGE_STATE_LIST;
  }

}