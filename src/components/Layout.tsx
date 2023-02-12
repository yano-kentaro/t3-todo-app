import {FC, ReactNode} from 'react';
import HEAD from 'next/head';

type Props = {
  title: string;
  children: ReactNode;
}

export const Layout: FC<Props> = ({children, title = 'T3 Stack'}) => {
  return (
    <>
      <HEAD>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel='icon' href='/favicon.ico' />
      </HEAD>
      <main className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>
        {children}
      </main>
    </>
  )
}
