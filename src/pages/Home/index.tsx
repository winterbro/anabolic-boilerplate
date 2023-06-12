import styled from 'styled-components';
import { Counter } from 'features/counter';
import { FlexBox, FlexContainer } from 'components/flex';
import Heading from 'components/typography';
import Logos from './components/LogoList';

const Label = styled.p`
  color: #888;
`;

function Home() {
  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="var(--space-xl)"
    >
      <FlexBox flexDirection="column" alignItems="center" gap="var(--space-lg)">
        <Heading.H1>Anabolic Boilerplate</Heading.H1>
        <Logos />
      </FlexBox>

      <FlexBox flexDirection="column" alignItems="center" gap="var(--space-xs)">
        <Counter />
        <Label>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Label>
        <Label>Click on the Vite and React logos to learn more</Label>
      </FlexBox>
    </FlexContainer>
  );
}

export default Home;
