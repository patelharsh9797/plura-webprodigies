import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <main className="h-full">{children}</main>;
}

export default layout;
