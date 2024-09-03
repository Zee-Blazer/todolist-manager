import { IsString, IsOptional } from "class-validator";

export class UpdateManagerDto {
    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    password: string;
}
