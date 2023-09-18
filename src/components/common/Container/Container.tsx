import styled from "styled-components";

import type { ContainerLayoutProps, ContainerProps } from "./type";

function Container({ minWidth, maxWidth, children, css }: ContainerProps) {
  return (
    <ContainerLayout $minWidth={minWidth} $maxWidth={maxWidth} css={css}>
      {children}
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div<ContainerLayoutProps>`
  ${({ css }) => css};

  margin: 0 auto;
  min-width: ${({ $minWidth }) => $minWidth}px;
  max-width: ${({ $maxWidth }) => $maxWidth}px;
`;

export default Container;