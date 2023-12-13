import '@/app/ui/global.css';
import { inter } from '@/app/ui/font';

// Amy UI added to root layout will be shared across all pages.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
