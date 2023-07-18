import * as S from "./StyledButtons";

export const Button = ({ variant = "standard", children }) => {
  return <S.Container variant={variant}>{children}</S.Container>;
};
