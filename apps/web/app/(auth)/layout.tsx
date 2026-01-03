import { MainNav } from "@/components/navigation/main-nav"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main>{children}</main>
    </div>
  )
}
