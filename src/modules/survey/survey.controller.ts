import { Controller, Get } from "@nestjs/common";
import { SurveyService } from "./survey.service";
import { Survey } from "./models/survey.model";

@Controller('survey')
export class SurveyController{
    constructor(private readonly  surveyService: SurveyService){}
    @Get()
    async findAll(): Promise<Survey[]> {
        return this.surveyService.findAll();
    }
}