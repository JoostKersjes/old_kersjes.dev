import React, { HTMLAttributes, ReactElement } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  char: string;
  label: string;
}

function Emoji({ char, label, children, ...rest }: Props): ReactElement {
  return (
    <>
      <span role="img" title={label} aria-label={label} {...rest}>
        {char}
      </span>
      {children}
    </>
  );
}

export default Emoji;
