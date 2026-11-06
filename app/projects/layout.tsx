import DetailShell from "@/components/DetailShell";

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <DetailShell backHref="/#projects" backLabel="All projects">
      {children}
    </DetailShell>
  );
}
