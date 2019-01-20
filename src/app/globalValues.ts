export enum Sections {
  ABOUT = "About",
  EXPERIENCE = "Experiences",
  PROJECTS = "Projects"
}
export class GlobalValues {
  public static prod: boolean = false;
  public static assetPath(): string {
    return GlobalValues.prod ? "/me/assets" : "../../assets";
  }
  public static hiddenNavSections(): string[] {
    return [
      Sections.EXPERIENCE,
      Sections.PROJECTS
    ];
}
}
