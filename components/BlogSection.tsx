"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogArticle {
  title: string;
  url: string;
  date_published: string;
  author?: { name: string };
  content_html?: string;
  image?: string;
}

export default function BlogSection() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/blog-feed")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setArticles(data.items);
        } else {
          setError("Failed to load articles. The feed may be temporarily unavailable.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles. The feed may be temporarily unavailable.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Stay updated with the latest credit card news, tips, and expert advice
          </p>
        </motion.div>

        {loading && (
          <div className="text-center text-secondary-500 py-12">Loading latest articles...</div>
        )}
        {error && (
          <div className="text-center text-red-500 py-12">{error}</div>
        )}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center text-secondary-500 py-12">No articles available at the moment. Please check back soon.</div>
        )}
        {!loading && !error && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((post, index) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer group block"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden flex items-center justify-center">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                  ) : (
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-secondary-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author?.name || "Unknown"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date_published ? new Date(post.date_published).toLocaleDateString() : ""}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content_html || "" }} />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500">
                      {post.date_published ? new Date(post.date_published).toLocaleDateString() : ""}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 