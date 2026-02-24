import * as RN from 'react-native';

declare module 'react-native-size-matters' {
  interface StringifiedStyles {
    fontSize?: string | number;
    borderBottomLeftRadius?: string | number;
    borderBottomRightRadius?: string | number;
    borderTopLeftRadius?: string | number;
    borderTopRightRadius?: string | number;
    borderBottomWidth?: string | number;
    borderTopWidth?: string | number;
    borderRightWidth?: string | number;
    borderLeftWidth?: string | number;
    borderRadius?: string | number;
    borderWidth?: string | number;

    height?: string | number;
    width?: string | number;
    marginBottom?: string | number;
    padding?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    paddingHorizontal?: string | number;
    marginVertical?: string | number;
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
    paddingTop?: string | number;
    maxWidth?: string | number;
    marginHorizontal?: string | number;
    marginLeft?: string | number;
    margin?: string | number;
    gap?: string | number;
    paddingLeft?: string | number;
    paddingBottom?: string | number;
    rowGap?: string | number;
    columnGap?: string | number;
    flexGrow?: string | number;
    paddingVertical?: string | number;
    alignSelf?: string | number;
    minHeight?: string | number;
    fontWeight?: string | number;
    paddingRight?: string | number;
  }
  export function scale(size: number): number;
  export function verticalScale(size: number): number;
  export function moderateScale(size: number, factor?: number): number;
  export function moderateVerticalScale(size: number, factor?: number): number;
  export function s(size: number): number;
  export function vs(size: number): number;
  export function ms(size: number, factor?: number): number;
  export function mvs(size: number, factor?: number): number;

  type NamedStyles<T> = {
    [P in keyof T]:
      | RN.ViewStyle
      | RN.TextStyle
      | RN.ImageStyle
      | StringifiedStyles;
  };

  export namespace ScaledSheet {
    export function create<T extends NamedStyles<T> | NamedStyles<any>>(
      stylesObject: T,
    ): {
      [P in keyof T]: RN.RegisteredStyle<
        T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>
      >;
    };
  }
}
