import logos from 'pages/Home/data/logos.json';
import { FlexBox } from 'components/flex';
import { LogoWithText } from './LogoWithText';

function Logos() {
  return (
    <FlexBox gap="var(--space-sm)">
      {logos !== null &&
        logos.map((logo) => {
          return (
            <LogoWithText
              key={logo.name}
              linkSrc={logo.url}
              imageSrc={logo.image}
              text={logo.name}
              color={logo.color}
            />
          );
        })}
    </FlexBox>
  );
}

export default Logos;
