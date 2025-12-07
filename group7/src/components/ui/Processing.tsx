export default function Processing() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-lg">
        <h2 className="mb-2 text-2xl font-semibold">Processing Request</h2>
        <p className="mb-4 text-gray-600">Give us a moment...</p>

        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-green-500" />
      </div>
    </div>
  );
}
