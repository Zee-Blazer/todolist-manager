import { IsString, IsBoolean, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class AssignDto {
    @IsBoolean()
    personalized: boolean;

    @IsNumber()
    @Type(() => Number)
    ownerId: number;

    @IsString()
    item: string;

    @IsString()
    assignedBy: string;
}
