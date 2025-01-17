import { CallHandler, ExecutionContext, UseInterceptors, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

interface ClassConstructor {
    new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializerInterceptor(dto));
}

export class SerializerInterceptor implements NestInterceptor {
    constructor(private dto: any) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>{
        
        return handler.handle().pipe(
            map( (data: any) => {
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true
                })
            } )
        )
    }
}
