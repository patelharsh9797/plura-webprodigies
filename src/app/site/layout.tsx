import Navigation from "@/components/site/Navigation";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Navigation />
      {children}
    </main>
  );
}

export default layout;
