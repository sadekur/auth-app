import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-4xl font-bold">Welcome to Auth App</h1>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
}