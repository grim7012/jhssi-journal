// src/app/register/page.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Briefcase, GraduationCap, Building } from "lucide-react";

export default function RegisterPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    institution: "",
    role: "",
    acceptTerms: false,
    newsletter: true
  });
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle registration logic here
    console.log("Registration submitted:", formData);
    // For demo purposes, redirect to verification
    router.push("/verify-email");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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

  const roles = [
    "Researcher",
    "Professor",
    "PhD Student",
    "Master's Student",
    "Academic Administrator",
    "Librarian",
    "Journal Editor",
    "Peer Reviewer",
    "Other Academic Professional"
  ];

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
              Join Our Academic Community
            </h2>
            <p className="text-white/90 max-w-md">
              Register to submit manuscripts, access premium content, and connect with researchers worldwide.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Registration Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
          <motion.div 
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Logo/Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F6F1E8] rounded-full border-4 border-[#E6DDCF] shadow-lg mb-6">
                <span className="text-2xl text-[#6B4A2E] font-bold">J</span>
              </div>
              
              <h1 className="font-serif text-3xl lg:text-4xl text-[#3F2A1D] mb-4">
                Create Account
              </h1>
              
              <motion.div 
                className="h-px w-20 bg-[#C8A45D] mx-auto mb-6"
                initial={{ width: 0 }}
                animate={isLoaded ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <p className="text-[#4A4036] mb-2">
                Join the Journal of Humanities and Social Sciences Invention
              </p>
              <p className="text-sm text-[#6B4A2E]/60">
                All fields are required unless marked optional
              </p>
            </motion.div>

            {/* Registration Form */}
            <motion.form 
              className="space-y-6"
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              {/* Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D] placeholder:text-[#6B4A2E]/40"
                      placeholder="John"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D] placeholder:text-[#6B4A2E]/40"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              {/* Email */}
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

              {/* Password Row */}
              <div className="grid md:grid-cols-2 gap-6">
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
                      minLength={8}
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
                  <p className="mt-2 text-xs text-[#6B4A2E]/60">
                    Minimum 8 characters with letters and numbers
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D]"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-[#6B4A2E]/60" />
                      ) : (
                        <Eye className="h-5 w-5 text-[#6B4A2E]/60" />
                      )}
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Institution & Role Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                    Institution
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D] placeholder:text-[#6B4A2E]/40"
                      placeholder="University or Organization"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-[#3F2A1D] mb-2">
                    Primary Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E6DDCF] rounded-lg focus:ring-2 focus:ring-[#C8A45D] focus:border-[#C8A45D] outline-none transition-colors text-[#3F2A1D] appearance-none"
                      required
                    >
                      <option value="">Select your role</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <GraduationCap className="h-5 w-5 text-[#6B4A2E]/60" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Checkboxes */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-[#C8A45D] focus:ring-[#C8A45D] border-[#E6DDCF] rounded"
                    required
                  />
                  <label htmlFor="acceptTerms" className="ml-2 text-sm text-[#4A4036]">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#C8A45D] hover:text-[#6B4A2E]">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#C8A45D] hover:text-[#6B4A2E]">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 mt-1 text-[#C8A45D] focus:ring-[#C8A45D] border-[#E6DDCF] rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-[#4A4036]">
                    Subscribe to our academic newsletter for updates on publications, calls for papers, and events (optional)
                  </label>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#6B4A2E] to-[#3F2A1D] text-white font-semibold rounded-lg hover:from-[#5A3D26] hover:to-[#2E1F15] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Create Account
                </button>
              </motion.div>
            </motion.form>

            {/* Already have account */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
            >
              <p className="text-[#4A4036]">
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  className="text-[#C8A45D] font-semibold hover:text-[#6B4A2E] transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </motion.div>

            {/* Benefits Section */}
            <motion.div 
              className="mt-12 pt-8 border-t border-[#E6DDCF]"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.6 }}
            >
              <h3 className="font-serif text-xl text-[#3F2A1D] mb-6 text-center">
                Benefits of Joining
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "📝", title: "Submit Manuscripts", desc: "Submit and track your research papers" },
                  { icon: "👥", title: "Peer Network", desc: "Connect with researchers in your field" },
                  { icon: "🔔", title: "Stay Updated", desc: "Get notifications for new publications" }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-4 bg-[#F6F1E8]/50 rounded-lg">
                    <div className="text-2xl mb-3">{benefit.icon}</div>
                    <h4 className="font-semibold text-[#3F2A1D] mb-2">{benefit.title}</h4>
                    <p className="text-sm text-[#4A4036]">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}