import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class StockForCustomerDto {
  @IsString()
  productCode: string;

  @IsString()
  reportProductName: string;

  @IsString()
  makerName: string;

  @IsNumber()
  stockQuantity: number;

  @IsNumber()
  salesRemaining: number;

  @IsNumber()
  effectiveStock: number;
}