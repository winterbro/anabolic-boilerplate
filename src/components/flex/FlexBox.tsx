import styled from 'styled-components';
import { FlexContainerProps } from 'components/flex/FlexContainer';

export type FlexBoxProps = FlexContainerProps & {
  order?: string;
  flex?: string;
  alignSelf?:
    | 'auto'
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
};

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex: ${(props) => props.flex ?? 'initial'};
  flex-direction: ${(props) => props.flexDirection ?? 'initial'};
  gap: ${(props) => props.gap ?? 'initial'};
  align-items: ${(props) => props.alignItems ?? 'initial'};
  align-self: ${(props) => props.alignSelf ?? 'initial'};
  justify-content: ${(props) => props.justifyContent ?? 'initial'};
  order: ${(props) => props.order ?? 'initial'};
`;
