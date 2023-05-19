import styled from 'styled-components';

export type FlexContainerProps = {
  flexDirection?:
    | 'align-content'
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? 'initial'};
  flex-wrap: ${(props) => props.flexWrap ?? 'initial'};
  gap: ${(props) => props.gap ?? 'initial'};
  align-items: ${(props) => props.alignItems ?? 'initial'};
  justify-content: ${(props) => props.justifyContent ?? 'initial'};
`;
