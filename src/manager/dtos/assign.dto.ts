import { IsString, IsBoolean, IsNumber } from "class-validator";

export class AssignDto {
    @IsBoolean()
    personalized: boolean;

    @IsNumber()
    ownerId: number;

    @IsString()
    item: string;

    @IsString()
    assignedBy: string;
}
