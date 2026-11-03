async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function HealthPage() {
  const data = await getData();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600">
        Health Check
      </h1>

      <p className="mt-4">
        API Status: ✅ Working
      </p>

      <pre className="mt-4 bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}