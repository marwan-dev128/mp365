"use client";

import { useState, useMemo } from "react";
import { BlogPostCard, type BlogCardPost } from "./BlogPostCard";
import { stripInlineMarkup } from "@/lib/richtext";

export function BlogCategoryFilter({
  posts,
  categories,
}: {
  posts: BlogCardPost[];
  categories: string[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.clusterLabel === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stripInlineMarkup(post.excerpt).toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.clusterLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Pills Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-mp-border pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {["All", ...categories].map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer text-[12px] font-mono font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-mp-ink text-white shadow-xs"
                    : "bg-white text-mp-secondary border border-mp-border hover:border-mp-ink hover:text-mp-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-[13px] bg-white border border-mp-border rounded-full px-4 py-2 text-mp-ink placeholder-mp-muted focus:outline-none focus:border-mp-ink transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mp-muted hover:text-mp-ink"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="flex">
              <BlogPostCard post={post} headingLevel={2} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-mp-parchment rounded-[24px] border border-mp-border p-8">
          <p className="font-display text-[18px] font-bold text-mp-ink">No articles found</p>
          <p className="text-[14px] text-mp-muted mt-1">
            Try adjusting your category filter or search query.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 text-[12px] font-mono font-bold uppercase tracking-wider bg-mp-ink text-white px-5 py-2.5 rounded-full hover:bg-black transition-colors"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Results counter */}
      <div className="text-center pt-8 border-t border-mp-border-subtle">
        <p className="text-[12px] font-mono text-mp-muted uppercase tracking-wider">
          Showing {filteredPosts.length} of {posts.length} articles
        </p>
      </div>
    </div>
  );
}
