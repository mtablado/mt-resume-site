import Link from "next/link";

interface Props {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: Props) {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
        Coming soon
      </p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500 max-w-md">
        {description ?? "This section is currently being built. Check back soon."}
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium hover:underline"
        style={{ color: "#1e3a5f" }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
