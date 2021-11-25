export type ResponsiveSizes<T> = {
  sm: T;
  md: T;
  lg: T;
};

export type ValueOf<T> = T[keyof T];