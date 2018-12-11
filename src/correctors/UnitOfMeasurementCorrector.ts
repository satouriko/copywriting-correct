// 计量单位
export class UnitOfMeasurementCorrector {
  public static rules = ['unitOfMeasurement'];

  public static handle(text: string): string {

    // 数字+英文 中间加空格
    text = text.replace(
      /([0-9])([A-Za-z])/g,
      '$1 $2'
    );

    // 数字+%° 中间不加空格
    text = text.replace(
      /([0-9])([ ]*)([%°])/g,
      '$1$3'
    );

    return text;
  }
}

export default UnitOfMeasurementCorrector;
