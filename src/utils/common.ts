import { Model } from "sequelize";
import { SequelizeModule } from "@nestjs/sequelize";

export const createModelRelevanceInstances = (model: any) => SequelizeModule.forFeature([...model])
