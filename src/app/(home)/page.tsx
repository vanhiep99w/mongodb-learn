import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="space-y-3">
        <p className="text-sm font-medium text-fd-muted-foreground">LỘ TRÌNH TỪ CƠ BẢN ĐẾN PRODUCTION</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Học MongoDB</h1>
        <p className="mx-auto max-w-2xl text-fd-muted-foreground">
          Tài liệu tiếng Việt giúp bạn học MongoDB có hệ thống: mô hình dữ liệu,
          truy vấn, aggregation, indexing, replication, sharding và vận hành.
        </p>
      </div>
      <Link
        href="/docs"
        className="rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
      >
        Bắt đầu học
      </Link>
    </main>
  );
}
