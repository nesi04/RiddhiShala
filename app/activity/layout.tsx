
import Navbar from "@/components/Activity/Navbar";

// app/activity/layout.tsx
export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <section>{children}</section>
      
    </>
  );
}
