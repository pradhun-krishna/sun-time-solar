import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Starting admin login process for:", email);

      // First, try to authenticate with Supabase Auth
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (authError) {
        console.error("Auth error:", authError);
        throw new Error(authError.message);
      }

      if (!authData.user) {
        throw new Error("Login failed - no user data received");
      }

      console.log(
        "Authentication successful, checking admin privileges for:",
        email
      );

      // Then check if user exists in admin_users table
      const { data: adminData, error: adminError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      console.log("Admin check result:", { adminData, adminError });

      if (adminError) {
        console.error("Admin check error:", adminError);
        await supabase.auth.signOut();
        throw new Error("Error checking admin privileges. Please try again.");
      }

      if (!adminData) {
        console.log("No admin record found for:", email);
        await supabase.auth.signOut();
        throw new Error(
          "Access denied. Admin privileges required. Please ensure your email is added to the admin_users table."
        );
      }

      console.log("Admin access granted for:", email);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel!",
      });

      navigate("/admin");
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-solar-50 via-white to-sun-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-solar-600 dark:text-solar-400 hover:text-solar-700 dark:hover:text-solar-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="h-16 w-16 bg-gradient-to-br from-solar-500 to-sun-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Admin Portal
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            SunTime Solar Enterprises
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin panel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="admin@suntime.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-solar-600 to-sun-500 hover:from-solar-700 hover:to-sun-600 text-white font-medium"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                Setup Instructions:
              </h4>
              <ol className="text-xs text-blue-700 dark:text-blue-300 list-decimal list-inside space-y-1">
                <li>
                  Create an account in Supabase Auth (Authentication → Users)
                </li>
                <li>Add your email to the admin_users table in the database</li>
                <li>Use the same email and password to login here</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
