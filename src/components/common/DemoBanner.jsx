/**
 * Demo Banner Component
 * 
 * Displays a prominent warning banner at the top of the application
 * informing users that this is a student demo project and not affiliated with Coinbase.
 */

export default function DemoBanner() {
  return (
    <div className="w-full bg-amber-50 border-b-2 border-amber-300 px-4 sm:px-6 md:px-8 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-start gap-3">
        {/* Warning Icon */}
        <div className="flex-shrink-0 pt-0.5">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Warning Message */}
        <div className="flex-1">
          <p className="text-sm sm:text-base font-semibold text-amber-900">
            ⚠️ Student Demo Project
          </p>
          <p className="text-xs sm:text-sm text-amber-800 mt-1">
            This is a <strong>student educational project</strong> created for learning purposes only. 
            It is <strong>not affiliated with or endorsed by Coinbase</strong>. 
            Do not enter real personal or financial information.
          </p>
        </div>
      </div>
    </div>
  );
}
