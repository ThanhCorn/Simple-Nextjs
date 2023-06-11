import '@styles/globals.css';
import { ReactNode } from 'react';
import Provider, { ProviderProps } from '@components/Provider';
import Nav from '@components/Nav';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};
const RootLayout = ({ children, session }: ProviderProps) => {
  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
