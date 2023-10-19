import { Model } from "sequelize";
import { SequelizeModule } from "@nestjs/sequelize";

/**
 * @Description:
 * @author xiaoZhang
 * @date 2023/10/19
 * @description 创建模型关联实例
*/
export const createModelForFeatureIns = (model: any) => SequelizeModule.forFeature([...model])

export const createModuleForRootIns = (model:any) => SequelizeModule.forRoot(model)
