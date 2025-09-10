import { useState } from "react";
import { Play, X } from "lucide-react";
import { Modal } from "./Modal";
import cn from "../utils/classNames";

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState("");

  const handleClick = (video: string) => {
    setVideo(video);
    setShowModal(true);
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Discover <span className="text-orange-500">Umami Lab</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about Japanese cuisine and get a preview of what awaits you at
            Umami Lab.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Educational Video */}
          <div
            className="group"
            onClick={() => {
              handleClick("/video1.mp4");
            }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                src="/video1_poster.png"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="text-white" size={32} />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Educational
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Introduction to Modern Japanese Cuisine
              </h3>
              <p className="text-gray-600">
                Discover the art and science behind Japanese culinary traditions
                and modern innovations that make each dish a masterpiece.
              </p>
            </div>
          </div>

          {/* Promotional Video */}
          <div
            className="group"
            onClick={() => {
              handleClick("/video2.mp4");
            }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-orange-100 to-purple-100 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img
                src="/video2_poster.png"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Play className="text-white" size={32} />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Promotional
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Umami Lab Experience
              </h3>
              <p className="text-gray-600">
                Take a virtual tour of our restaurant and get an exclusive
                preview of our atmosphere, ambiance, and culinary presentations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        size="md"
        className="p-4 lg:py-20 lg:px-40"
        containerClassName="!h-full !w-full !max-w-full"
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <video
            src={video}
            controls
            autoPlay
            loop
            className="w-full h-full rounded-lg"
          />
          <div
            onClick={() => setShowModal(false)}
            className={cn(
              "fixed top-4 right-4 size-10 aspect-square flex justify-center items-center cursor-pointer",
              "bg-black/40 rounded-full text-white"
            )}
          >
            <X size={20} />
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default VideoSection;
