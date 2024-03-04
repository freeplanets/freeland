import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const num = parseInt(value, 10);
    if (isNaN(num)) {
      throw new BadRequestException('無法解析為數字');
    }
    return num;
  }
}
