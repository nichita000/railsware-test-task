
type FlexDirection =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type FlexAlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center';

export type FlexboxContainerProps = {
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: FlexAlignItems;
};
