export interface ITheme {
  colors: {
    primary: string,
    secundary: string,
    tertiary: string,
    textLink: string,
    textError: string,
    textSuccess: string,
    textWhite: string,
    textBack: string,
  };
  font: {
    itim: string,
    poppins: string,
  };
  size: {
    verySmall: string,
    small: string,
    regular: string,
    superRegular: string,
    big: string,
    veryBig: string,
  };
  gap: {
    small: string,
    regular: string,
    big: string,
    veryBig: string,
  };
}
