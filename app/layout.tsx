import { CounterStoreProvider } from "./provider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resp = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await resp.json();
  console.log(json);

  return (
    <html lang="en">
      <body>
        {json.name} - {json.description} (SSR)

        <CounterStoreProvider initialData={{ count: json.stargazers_count }}>
          {children}
        </CounterStoreProvider>
      </body>
    </html>
  );
}
