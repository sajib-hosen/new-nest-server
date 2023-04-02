import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuizDto } from './dto/CreateQuiz.dto';


@Controller('quiz')
export class QuizController{

    @Get('/')
    getAllQuiz():number[]{
        return [1, 2, 3, 4, 5, 6]
    }


    @Post('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz( @Body() quizData: CreateQuizDto ){
        return {data: quizData};
    }
}


// https://www.youtube.com/playlist?list=PLkZU2rKh1mT-3VvYvGCdRVCCJ5lCtOKED