// src/app/login/page.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
    // For demo purposes, redirect to dashboard
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column - Image */}
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
          <Image
            src="/photos/img5.jpeg"
            alt="Academic Library Background"
            fill
            className="object-cover object-left"
            priority
            style={{ objectPosition: "70% center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3F2A1D]/80 to-transparent lg:bg-gradient-to-r lg:from-[#3F2A1D]/80 lg:to-transparent"></div>
          
          <motion.div 
            className="absolute bottom-8 left-8 lg:left-12 lg:bottom-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl mb-4">
              Journal of Humanities and<br />Social Sciences Invention
            </h2>
            <p className="text-white/90 max-w-md">
              Access scholarly resources, submit manuscripts, and connect with the academic community.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Login Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Logo/Header */}
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F6F1E8] rounded-full border-4 border-[#E6DDCF] shadow-lg mb-6">
                <span className="text-2xl text-[#6B4A2E] font-bold">J</span>
              </div>
              
              <h1 className="font-serif text-3xl lg:text-4xl text-[#3F2A1D] mb-4">
                Welcome Back
              </h1>
              
              <motion.div 
                className="h-px w-20 bg-[#C8A45D] mx-auto mb-6"
                initial={{ width: 0 }}
                animate={isLoaded ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <p className="text-[#4A4036]">
                Sign in to your account to continue
              </p>
            </motion.div>

            {/* Login Form */}
            <motion.form 
              className="space-y-6"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#6B4A2E]/60" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D] placeholder:text-[#6B4A2E]/40"
                    placeholder="researcher@university.edu"
                    required
                  />
                </div>
              </motion.div>

              {/* Password Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#6B4A2E]/60" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D]"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-[#6B4A2E]/60" />
                    ) : (
                      <Eye className="h-5 w-5 text-[#6B4A2E]/60" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div 
                className="flex items-center justify-between"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#C8A45D] focus:ring-[#C8A45D] border-[#E6DDCF] rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-[#4A4036]">
                    Remember me
                  </label>
                </div>
                <Link 
                  href="/forgot-password"
                  className="text-sm text-[#C8A45D] hover:text-[#6B4A2E] transition-colors"
                >
                  Forgot password?
                </Link>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#6B4A2E] to-[#3F2A1D] text-white font-semibold rounded-lg hover:from-[#5A3D26] hover:to-[#2E1F15] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
              </motion.div>
            </motion.form>

            {/* Divider */}
            <motion.div 
              className="my-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex-1 h-px bg-[#E6DDCF]"></div>
              <span className="px-4 text-sm text-[#4A4036]">Or continue with</span>
              <div className="flex-1 h-px bg-[#E6DDCF]"></div>
            </motion.div>

            {/* Social Login */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <motion.button
                type="button"
                className="flex items-center justify-center gap-2 py-3 border border-[#E6DDCF] rounded-lg hover:bg-[#F6F1E8] transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-[#3F2A1D] font-medium">Google</span>
              </motion.button>
              
              <motion.button
                type="button"
                className="flex items-center justify-center gap-2 py-3 border border-[#E6DDCF] rounded-lg hover:bg-[#F6F1E8] transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-[#3F2A1D] font-medium">Facebook</span>
              </motion.button>
            </motion.div>

            {/* Sign Up Link */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-[#4A4036]">
                Don't have an account?{" "}
                <Link 
                  href="/register" 
                  className="text-[#C8A45D] font-semibold hover:text-[#6B4A2E] transition-colors"
                >
                  Sign up now
                </Link>
              </p>
            </motion.div>

            {/* Footer Note */}
            <motion.p 
              className="mt-8 text-center text-xs text-[#6B4A2E]/60"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.6 }}
            >
              By signing in, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-[#C8A45D]">Terms of Service</Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-[#C8A45D]">Privacy Policy</Link>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}