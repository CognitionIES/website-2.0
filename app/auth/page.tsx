"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>(null);
  const router = useRouter(); // Use Next.js router

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (session) {
        router.push("/dashboard"); // Use router.push for navigation
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) router.push("/dashboard");
    });

    return () => subscription?.unsubscribe();
  }, [router]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        });
        if (error) throw error;
        toast({
          title: "Sign up successful, check your inbox for confirmation email!",
        });
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({ variant: "destructive", title: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl">
            {isSignUp ? "Employer Sign Up" : "Employer Login"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleAuth}>
            {isSignUp && (
              <div>
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">
                {isSignUp ? "Already have an account?" : "No account?"}{" "}
                <button
                  type="button"
                  className="underline text-primary font-medium"
                  onClick={() => setIsSignUp((v) => !v)}
                >
                  {isSignUp ? "Login" : "Sign up"}
                </button>
              </span>
            </div>
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? "..." : isSignUp ? "Sign Up" : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
