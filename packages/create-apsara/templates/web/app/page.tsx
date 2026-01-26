import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Welcome to Apsara</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Your application is ready!
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
        <Link href="/dashboard/settings">
          <Button variant="outline">Settings</Button>
        </Link>
      </div>
    </div>
  );
}
