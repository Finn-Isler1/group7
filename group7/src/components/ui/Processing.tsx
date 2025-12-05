import React from "react";

export default function Processing() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-2">Processing Request</h2>
        <p className="text-gray-600 mb-4">Give us a moment...</p>

        <div className="w-10 h-10 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin mx-auto" />
      </div>
    </div>
  );
}

