import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto{
    @IsNotEmpty({message:'The quiz should have a title.'})
    @Length(3, 255)
    title: string;

    @IsNotEmpty()
    @Length(3)
    description: string;
}


// https://www.youtube.com/watch?v=XpV4SSsqTdk&list=PLkZU2rKh1mT-3VvYvGCdRVCCJ5lCtOKED&index=5