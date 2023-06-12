import styled from 'styled-components';

export type LogoProps = {
  linkSrc: string;
  imageSrc: string;
  text: string;
  color?: string;
};

const StyledLogoLink = styled.a<Pick<LogoProps, 'color'>>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #888;
  text-decoration: inherit;

  &:hover {
    color: ${(props) => props.color ?? '#646cffaa'};
  }
`;

const StyledLogo = styled.img<Pick<LogoProps, 'color'>>`
  height: 4em;
  margin: 1em;

  &:hover {
    filter: drop-shadow(0 0 1em ${(props) => props.color ?? '#646cffaa'});
  }
`;

function LogoWithText({ linkSrc, imageSrc, text, color }: LogoProps) {
  return (
    <StyledLogoLink
      href={linkSrc}
      color={color}
      target="_blank"
      rel="noreferrer"
    >
      <StyledLogo src={imageSrc} color={color} alt={`${text} Logo`} />
      {text}
    </StyledLogoLink>
  );
}

export { StyledLogo, LogoWithText };
