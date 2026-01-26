import Link from "next/link";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/dashboard" className="font-bold">
          Dashboard
        </Link>
      </div>
    </header>
  );
}
