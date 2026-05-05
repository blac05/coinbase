import { useParams } from "react-router-dom";

export default function AssetDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Asset Detail</h1>
        <p className="text-gray-600 mb-8">Asset ID: {id}</p>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600">
            This page will display detailed information about the selected
            cryptocurrency asset.
          </p>
        </div>
      </div>
    </div>
  );
}
