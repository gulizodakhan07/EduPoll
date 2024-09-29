import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Survey } from "./models/survey.model";

@Injectable()
export class SurveyService {
    constructor(@InjectModel(Survey) private surveyModel: typeof Survey){}
    async getAllCategories(): Promise<Survey[]>{
        return await this.surveyModel.findAll()
    }
}