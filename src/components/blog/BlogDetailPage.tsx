import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getBlogBySlug, type BlogImage } from "../../data/blogData";
import ScrollLink from "../ScrollLink";

function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: {
  images: BlogImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0)
        onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1)
        onNavigate(currentIndex + 1);
    },
    [onClose, onNavigate, currentIndex, images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={22} />
      </button>

      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className={`relative z-20 max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl transition-all duration-300 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      />

      {/* Bottom bar: arrows + counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={() => currentIndex > 0 && onNavigate(currentIndex - 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentIndex > 0 ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white/5 text-white/20 cursor-default"}`}
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-white/60 text-sm font-medium min-w-[3rem] text-center">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={() => currentIndex < images.length - 1 && onNavigate(currentIndex + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${currentIndex < images.length - 1 ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white/5 text-white/20 cursor-default"}`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>,
    document.body
  );
}

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <ScrollLink
          to="blog"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-medium"
        >
          Back to Home
        </ScrollLink>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <ScrollLink
          to="blog"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </ScrollLink>
      </div>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src={post.images[0].src}
          alt={post.images[0].alt}
          className="w-full rounded-2xl shadow-lg aspect-[16/9] object-cover"
        />
      </div>

      {/* Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
          {post.title}
        </h1>
        <div className="w-20 h-1 bg-orange-500 rounded-full mt-4 mb-8" />
      </div>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {post.contentSections.map((section, idx) => (
          <div key={idx} className={idx > 0 ? "mt-10" : ""}>
            {section.heading && (
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-lg text-gray-600 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Image gallery */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {post.images.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="rounded-xl overflow-hidden shadow-md cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={post.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      {/* Video section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Watch the Experience
        </h2>
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900">
          <video
            controls
            preload="none"
            poster={post.videoPoster}
            className="w-full aspect-video"
          >
            <source src={post.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Craving these flavors?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the best of Delhi's street food culture at Umami Lab.
          </p>
          <ScrollLink
            to="blog"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 hover:shadow-xl transition-all duration-300 font-medium text-lg transform hover:scale-105"
          >
            Explore Umami Lab
          </ScrollLink>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailPage;
