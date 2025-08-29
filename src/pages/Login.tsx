import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - in real app, this would validate credentials
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to public site */}
        <div className="mb-6 sm:mb-8">
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground text-sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Knowledge Base
            </Link>
          </Button>
        </div>

        <Card className="shadow-elevated">
          <CardHeader className="text-center px-4 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold font-poppins text-primary mb-2">
              Knowledge Hub
            </div>
            <CardTitle className="text-xl sm:text-2xl">Employee Portal</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Sign in to access internal resources and documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="text-sm sm:text-base"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="text-sm sm:text-base pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full w-10 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full text-sm sm:text-base" size="lg">
                Sign In
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-xs sm:text-sm">
                  Forgot your password?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground px-4">
          For demo purposes, enter any email and password to continue
        </div>
      </div>
    </div>
  );
};

export default Login;