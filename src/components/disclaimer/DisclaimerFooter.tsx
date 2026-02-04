"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DisclaimerFooter() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Important Notice */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-[#C8A45D] rounded-full"></div>
              <h3 className="font-serif text-xl text-[#3F2A1D]">
                Important Notice
              </h3>
              <div className="w-3 h-3 bg-[#C8A45D] rounded-full"></div>
            </div>
            
            <div className="bg-[#F6F1E8] border border-[#E6DDCF] rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-[#4A4036] leading-relaxed mb-6">
                This disclaimer is subject to change without prior notice. Authors, reviewers, and readers are advised to regularly check this page for updates. By submitting to or reading JHSSI, you acknowledge and agree to these terms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/policies"
                  className="px-6 py-3 bg-[#6B4A2E] text-white font-medium rounded-full hover:bg-[#5A3D26] transition-colors"
                >
                  View All Policies
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-[#6B4A2E] text-[#6B4A2E] font-medium rounded-full hover:bg-[#F6F1E8] transition-colors"
                >
                  Contact Editorial Office
                </Link>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <motion.div 
            className="mt-8 pt-8 border-t border-[#E6DDCF]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#7A6F63] text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-[#7A6F63] text-xs mt-2">
              © {new Date().getFullYear()} Journal of Humanities & Social Sciences Invention
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}