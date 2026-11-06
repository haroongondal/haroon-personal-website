import DetailShell from "@/components/DetailShell";

export default function AppsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <DetailShell backHref="/#apps" backLabel="All apps">
      {children}
    </DetailShell>
  );
}
