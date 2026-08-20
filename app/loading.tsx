export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-4">
      <div className="h-8 w-8 animate-pulse rounded-full bg-black/10 dark:bg-white/10" aria-hidden />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
