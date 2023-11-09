import {PropsWithChildren} from "react";

export default function Tab({children, buttons, buttonsContainer = 'menu'}: PropsWithChildren<{}>) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>
  );
}