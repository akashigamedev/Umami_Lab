import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blogData";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Explore Delhi's{" "}
            <span className="text-orange-500">Street Food</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into the flavors, chaos, and soul of Delhi's most iconic food
            destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
