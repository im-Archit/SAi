export default function CancelPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">Payment Canceled</h1>
        <p className="text-lg mt-2 text-gray-700">
          Your payment was not completed. No charges were made.
        </p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go Back to Home Page (https://squeakyai.com/)
        </a>
      </div>
    );
  }
  