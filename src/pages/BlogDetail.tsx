import React from "react";
import PageLayout from "@/components/PageLayout";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="bg-[#f9f9ff] min-h-screen pt-32 pb-24 text-center px-6">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Post Not Found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 mt-4 text-[#2b2dff] font-medium">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Get related posts (same category or next 3)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageLayout>
      <div className="bg-[#f9f9ff] min-h-screen">

        {/* Article Hero */}
        <div className="bg-[#f9f9ff] pt-32 pb-12">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#dce2f7] rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff]" />
              <span className="text-[11px] font-bold text-[#2b2dff] tracking-widest uppercase mt-0.5">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#1a1a1a] leading-[1.12] tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-[#666666] text-lg leading-relaxed max-w-2xl mx-auto">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* Author Bar + Social Icons */}
        <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#666666]">By <strong className="text-[#1a1a1a]">{post.author.name}</strong></span>
            <span className="text-[#dce2f7]">|</span>
            <span className="text-sm text-[#666666]">{post.date}</span>
            <span className="text-[#dce2f7]">|</span>
            <span className="text-sm text-[#666666]">{post.readTime}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-[#ffffff] border border-border/50 flex items-center justify-center text-[#666666] hover:text-[#2b2dff] hover:border-[#2b2dff]/30 transition-all">
              <Share2 size={15} />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#ffffff] border border-border/50 flex items-center justify-center text-[#666666] hover:text-[#2b2dff] hover:border-[#2b2dff]/30 transition-all">
              <Bookmark size={15} />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-[900px] mx-auto px-6 mb-16">
          <div className="w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] bg-[#f1f3ff]">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-[900px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-[240px] shrink-0 lg:sticky lg:top-28 self-start">
            {/* Author Card */}
            <div className="mb-8">
              <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-[#dce2f7]">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-[15px] font-bold text-[#1a1a1a]">{post.author.name}</p>
              <p className="text-xs text-[#666666]">{post.author.role}</p>
            </div>

            {/* Table of Contents */}
            <div>
              <p className="text-xs font-bold text-[#1a1a1a] tracking-wider uppercase mb-4">Contents</p>
              <nav className="space-y-2.5">
                {post.content.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="block text-sm text-[#666666] hover:text-[#2b2dff] transition-colors leading-snug"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0 pb-24">
            {/* Intro */}
            <p className="text-[17px] text-[#666666] leading-[1.8] mb-12">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="mb-12">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-[16px] text-[#666666] leading-[1.8] mb-4">
                  {section.body}
                </p>
                {section.bullets && (
                  <ul className="space-y-3 mt-4 mb-6 ml-1">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 items-start text-[#666666]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2b2dff] mt-2 shrink-0" />
                        <span className="text-[15px] leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Insert first image after 2nd section */}
                {idx === 1 && post.content.images && post.content.images[0] && (
                  <div className="w-full aspect-video rounded-[20px] overflow-hidden my-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                    <img src={post.content.images[0].src} alt={post.content.images[0].alt} className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Insert quote after 4th section */}
                {idx === 3 && post.content.quote && (
                  <div className="bg-[#f1f3ff] rounded-[24px] p-8 md:p-12 my-12 border border-border/40">
                    <p className="text-xl md:text-[22px] font-medium text-[#1a1a1a] italic leading-relaxed text-center">
                      "{post.content.quote.text}"
                    </p>
                  </div>
                )}

                {/* Insert second image grid after 6th section */}
                {idx === 5 && post.content.images && post.content.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4 my-10">
                    {post.content.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="w-full aspect-[4/3] rounded-[16px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>
        </div>

        {/* Related Posts Section */}
        <div className="bg-[#f1f3ff] py-20 mt-8">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                News & Insights from Our Team
              </h2>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] transition-colors"
              >
                See All Blogs <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group flex flex-col"
                >
                  <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-5 relative bg-[#e8ebff]">
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[8%]"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#1a1a1a] tracking-wide shadow-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1a1a1a] leading-snug mb-2 group-hover:text-[#2b2dff] transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed line-clamp-2 mb-4">
                    {related.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover:text-[#2b2dff] transition-colors mt-auto">
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="sm:hidden mt-8 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] transition-colors"
              >
                See All Blogs <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default BlogDetail;
