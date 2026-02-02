import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft } from "lucide-react";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-vh-100 px-4 py-24 text-center">
      <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-8">
        <FileQuestion className="w-12 h-12 text-muted-foreground" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Dinosaur Extinct!</h1>
      <p className="text-xl text-muted-foreground max-w-md mx-auto mb-10">
        We couldn&apos;t find the specific specimen you were looking for. It might have been sold or never existed in our catalog.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" size="lg">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

