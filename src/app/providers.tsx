// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="relative flex flex-col px-5 py-10 lg:px-40 lg:py-20">
      {children}
    </NextUIProvider>
  );
}
