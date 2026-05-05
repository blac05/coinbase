import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../lib/config";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_ENDPOINTS.USER_PROFILE, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            navigate("/signin", { replace: true });
            return;
          }

          const errorData = await response.json().catch(() => null);
          setError(errorData?.message || "Failed to load profile data.");
          return;
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err?.message || "Unable to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header>
        <NavBar />
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-gray-900">Your profile</h1>
          <p className="mt-2 text-sm text-gray-600">
            This page loads your protected profile data from the backend.
          </p>

          <div className="mt-8 space-y-6">
            {loading && (
              <div className="rounded-2xl bg-gray-50 p-6 text-gray-600">
                Loading profile...
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-red-50 p-6 text-red-700">
                {error}
              </div>
            )}

            {profile && (
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-100 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Name</h2>
                  <p className="mt-2 text-gray-700">{profile.name || "—"}</p>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Email</h2>
                  <p className="mt-2 text-gray-700">{profile.email || "—"}</p>
                </div>

                {Object.entries(profile)
                  .filter(([key]) => key !== "name" && key !== "email")
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-3xl border border-gray-100 bg-slate-50 p-6"
                    >
                      <h2 className="text-xl font-semibold text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </h2>
                      <p className="mt-2 text-gray-700">
                        {typeof value === "object"
                          ? JSON.stringify(value, null, 2)
                          : value ?? "—"}
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
