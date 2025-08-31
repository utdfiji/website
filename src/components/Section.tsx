import React from 'react';

interface Props {
  className?: string;
}

export default function Section(props: React.PropsWithChildren) {
  return (
    <section
      className={`w-full px-8 md:px-32 xl:px-64 my-16 ` + (props.className ? props.className : '')}
    >
      {props.children}
    </section>
  );
}
