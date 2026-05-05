import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../lib/config";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    if (!email) return "Email is required.";
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return "Please enter a valid email address.";
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    const payload = {
      email: email.trim(),
      password,
    };

    try {
      const response = await fetch(API_ENDPOINTS.AUTH_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data?.message || data?.error || "Login failed. Please try again.");
        return;
      }

      const token = data?.token || data?.accessToken || data?.jwt;
      if (!token) {
        setError("Login succeeded but no token was returned.");
        return;
      }

      localStorage.setItem("token", token);
      setSuccessMessage(data?.message || "Login successful. Redirecting...");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      setError(err?.message || "Unable to login. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header with logo */}
      <div className="flex items-center justify-start px-6 py-6 border-b border-gray-200">
        <svg
          aria-label="Coinbase logo"
          className="w-8 h-8"
          role="img"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Coinbase logo</title>
          <path
            d="M24,36c-6.63,0-12-5.37-12-12s5.37-12,12-12c5.94,0,10.87,4.33,11.82,10h12.09C46.89,9.68,36.58,0,24,0 C10.75,0,0,10.75,0,24s10.75,24,24,24c12.58,0,22.89-9.68,23.91-22H35.82C34.87,31.67,29.94,36,24,36z"
            fill="#0052FF"
          />
        </svg>
      </div>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900">
            Sign in to Coinbase
          </h1>

          {/* Demo Warning Banner */}
          <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
            <p className="text-sm font-semibold text-red-900 mb-1">
              ⚠️ Demo Application Warning
            </p>
            <p className="text-xs text-red-800">
              <strong>This is NOT a real service.</strong> Do not use your real email address, 
              real passwords, or any sensitive personal information. This is a student educational project 
              and no data is actually stored securely.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username webauthn"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Your email address"
                disabled={submitting}
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Your password"
                disabled={submitting}
              />
            </div>

            {error && (
              <div role="alert" className="text-sm text-red-600">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="text-sm text-green-600">
                {successMessage}
              </div>
            )}

            {/* Continue button */}
            <button
              type="submit"
              disabled={submitting || !email || !password}
              className="w-full py-3 px-4 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold transition-colors duration-200"
            >
              {submitting ? "Continuing..." : "Continue"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Social Buttons */}
            <div className="space-y-3">
              {/* Passkey Button */}
              <button
                type="button"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <title>Passkey</title>
                  <path
                    d="M5.37256 0.93801C4.02536 1.22585 2.8994 2.35696 2.55569 3.75968C2.43717 4.24618 2.43717 5.05701 2.55569 5.5435C2.90335 6.9665 4.02141 8.07328 5.40417 8.36518C5.62936 8.41383 5.8506 8.42599 6.30098 8.41383C6.80668 8.39356 6.941 8.37734 7.22941 8.28004C8.02746 8.01652 8.62007 7.59489 9.08625 6.95434C9.38256 6.55298 9.56429 6.18405 9.70652 5.71783C9.80529 5.38944 9.81319 5.30836 9.81319 4.65159C9.81319 3.99482 9.80529 3.91374 9.70652 3.58536C9.3312 2.33668 8.45809 1.43261 7.22941 1.02315C6.92915 0.921793 6.82643 0.909631 6.26148 0.897468C5.83875 0.88936 5.54639 0.901522 5.37256 0.93801Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12.5633 5.55967C11.9983 5.68129 11.5045 5.96508 11.0817 6.41509C10.2995 7.23808 10.0625 8.4908 10.4891 9.56515C10.7064 10.1165 11.1963 10.6922 11.6862 10.976L11.9272 11.1179L11.9312 13.3882V15.6585L12.5356 16.2747L13.1401 16.895L14.1633 15.8409L15.1905 14.7869L14.5781 14.1585L13.9658 13.5301L14.5702 12.9098C14.8982 12.5693 15.1708 12.2733 15.1708 12.253C15.1708 12.2328 14.9535 11.9895 14.6888 11.7179C14.4241 11.4463 14.2147 11.2152 14.2226 11.2071C14.2344 11.199 14.3846 11.1138 14.5584 11.0125C15.2142 10.6395 15.7397 9.94218 15.9214 9.20839C16.0162 8.8273 16.0281 8.11782 15.9411 7.75295C15.7081 6.73131 14.9021 5.884 13.8986 5.60021C13.5944 5.51507 12.8754 5.4948 12.5633 5.55967ZM13.6023 6.90564C13.7959 7.04348 13.9855 7.38808 13.9855 7.607C13.9855 7.81377 13.8196 8.15026 13.6576 8.27594C13.4759 8.41783 13.148 8.48675 12.9386 8.42999C12.5988 8.33269 12.3302 7.97593 12.3262 7.61917C12.3223 6.94618 13.069 6.52861 13.6023 6.90564Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.16802 9.78411C2.34279 10.0719 0.809901 11.4098 0.233093 13.218C0.0355566 13.8423 0 14.1585 0 15.3585V16.4491H5.33349H10.667V14.1382V11.8274L10.3509 11.5193C9.99536 11.1706 9.71486 10.7976 9.51337 10.4084L9.37904 10.1449L8.94446 9.99492C8.23728 9.75167 7.90147 9.71924 6.09993 9.72329C4.97397 9.72735 4.42087 9.74356 4.16802 9.78411Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Sign in with Passkey</span>
              </button>

              {/* Google Button */}
              <button
                type="button"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <title>Google</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.18 8.57691C16.18 8.00964 16.1291 7.46419 16.0345 6.94055H8.5V10.0351H12.8055C12.62 11.0351 12.0564 11.8824 11.2091 12.4496V14.4569H13.7945C15.3073 13.0642 16.18 11.0133 16.18 8.57691Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.50017 16.3949C10.6602 16.3949 12.4711 15.6786 13.7947 14.4567L11.2093 12.4495C10.4929 12.9295 9.57653 13.2131 8.50017 13.2131C6.41653 13.2131 4.65289 11.8058 4.0238 9.91492H1.35107V11.9876C2.66744 14.6022 5.37289 16.3949 8.50017 16.3949Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.02364 9.91497C3.86364 9.43497 3.77273 8.92225 3.77273 8.39497C3.77273 7.8677 3.86364 7.35497 4.02364 6.87497V4.80225H1.35091C0.809091 5.88225 0.5 7.10406 0.5 8.39497C0.5 9.68588 0.809091 10.9077 1.35091 11.9877L4.02364 9.91497Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.50017 5.38684C9.67471 5.38684 10.7293 5.79047 11.5583 6.5832L13.8529 4.28866C12.4674 2.99775 10.6565 2.20502 8.50017 2.20502C5.37289 2.20502 2.66744 3.99775 1.35107 6.61229L4.0238 8.68502C4.65289 6.79411 6.41653 5.38684 8.50017 5.38684Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>

              {/* Apple Button */}
              <button
                type="button"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors"
              >
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <title>Apple</title>
                  <g clipPath="url(#clip0_1022_155)">
                    <path
                      d="M14.1869 13.1777C13.955 13.7134 13.6805 14.2065 13.3625 14.6599C12.929 15.2779 12.5741 15.7057 12.3006 15.9433C11.8765 16.3332 11.4222 16.533 10.9357 16.5443C10.5865 16.5443 10.1653 16.4449 9.67504 16.2433C9.18315 16.0427 8.73112 15.9433 8.31779 15.9433C7.88431 15.9433 7.4194 16.0427 6.92212 16.2433C6.42409 16.4449 6.02288 16.55 5.71613 16.5604C5.24961 16.5803 4.78461 16.3749 4.32046 15.9433C4.02421 15.6849 3.65367 15.242 3.20977 14.6145C2.73351 13.9444 2.34195 13.1673 2.0352 12.2814C1.70668 11.3245 1.54199 10.3979 1.54199 9.50085C1.54199 8.47326 1.76403 7.58699 2.20878 6.84429C2.55832 6.24773 3.02332 5.77714 3.6053 5.43168C4.18729 5.08622 4.81613 4.91017 5.49333 4.89891C5.86387 4.89891 6.34979 5.01353 6.95364 5.23879C7.55579 5.46481 7.94242 5.57942 8.11194 5.57942C8.23867 5.57942 8.66818 5.4454 9.3963 5.17822C10.0849 4.93043 10.666 4.82783 11.1421 4.86825C12.4321 4.97236 13.4013 5.4809 14.0459 6.39708C12.8921 7.09615 12.3214 8.07527 12.3327 9.33134C12.3431 10.3097 12.6981 11.1239 13.3956 11.7703C13.7117 12.0703 14.0648 12.3022 14.4576 12.4669C14.3724 12.7139 14.2825 12.9506 14.1869 13.1777ZM11.2282 1.53515C11.2282 2.30199 10.948 3.01799 10.3896 3.68071C9.71574 4.46855 8.90063 4.9238 8.01672 4.85197C8.00546 4.75997 7.99893 4.66314 7.99893 4.5614C7.99893 3.82523 8.3194 3.03739 8.88852 2.39322C9.17265 2.06706 9.53401 1.79587 9.97223 1.57954C10.4095 1.36643 10.8231 1.24858 11.2121 1.22839C11.2235 1.33091 11.2282 1.43343 11.2282 1.53514V1.53515Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1022_155">
                      <rect
                        width="16"
                        height="16"
                        fill="currentColor"
                        transform="translate(0 0.89502)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>Sign in with Apple</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <span className="text-gray-600 text-sm">
                Don't have an account?{" "}
              </span>
              <Link
                to="/signup"
                className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </div>

            {/* Privacy Notice */}
            <div className="text-center text-xs text-gray-500 pt-4">
              <p>
                Not your device? Use a private window. See our{" "}
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-700 underline"
                >
                  Privacy Policy
                </a>{" "}
                for more info.
              </p>
            </div>
          </form>
        
        </div>
      </main>
    </div>
  );
};

export default SignIn;
