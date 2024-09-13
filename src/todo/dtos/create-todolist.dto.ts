import { IsBoolean, IsString } from "class-validator";

export class CreateTodoListDto {
    @IsString()
    item: string;

    @IsString()
    ownerId: string;

    @IsBoolean()
    personalized: boolean;

    @IsString()
    assignedBy: string;
}
