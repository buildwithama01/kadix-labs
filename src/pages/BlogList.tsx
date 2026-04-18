import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogList = () => (
  <PageLayout>
    <div className="bg-[#f9f9ff] min-h-screen pt-32 pb-24">

      {/* Hero Header */}
      <div className="max-w-[800px] mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
          <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase mt-0.5">
            Blog Page
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
          Insights That Help You Build, Grow, and Scale Smarter
        </h1>
        <p className="text-[#666666] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Explore expert strategies, product deep-dives, SaaS trends, and practical advice to help teams move faster with clarity and confidence.
        </p>

        {/* Email Subscribe */}
        <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666] w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-12 pl-12 pr-4 rounded-full bg-[#ffffff] border border-border/50 text-[#1a1a1a] text-sm placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#2b2dff]/20 focus:border-[#2b2dff]/40 transition-all"
            />
          </div>
          <button className="h-12 px-6 rounded-full bg-[#1a1a1a] text-white font-semibold text-sm flex items-center gap-2 hover:bg-[#333] transition-colors shrink-0">
            Subscribe <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-transparent hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-5 relative bg-[#f1f3ff]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[8%]"
                />
                {/* Category Pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#1a1a1a] tracking-wide shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-[17px] md:text-lg font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#2b2dff] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover:text-[#2b2dff] transition-colors mt-auto">
                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  </PageLayout>
);

export default BlogList;
