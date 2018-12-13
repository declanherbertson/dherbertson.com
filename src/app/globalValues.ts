export class GlobalValues {
  public static prod: boolean = true;
  public static assetPath(): string {
    return GlobalValues.prod ? "/me/assets" : "../../assets";
  }
}
