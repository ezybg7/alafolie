import { motion } from "framer-motion";

export default function Hero() {
  // Pastry images for carousels
  const pastryImages = [
    { id: 1, src: '/hero/pg1.webp', alt: 'Delicious pastry' },
    { id: 2, src: '/hero/pg2.webp', alt: 'Fresh baked goods' },
    { id: 3, src: '/hero/pg3.webp', alt: 'Artisan pastry' },
    { id: 4, src: '/hero/pg4.webp', alt: 'Sweet treat' },
    { id: 5, src: '/hero/pg5.webp', alt: 'French pastry' },
    { id: 6, src: '/hero/pg6.webp', alt: 'Bakery delight' },
    { id: 7, src: '/hero/pg7.webp', alt: 'Cream pastry' },
    { id: 8, src: '/hero/pg8.webp', alt: 'Chocolate pastry' },
    { id: 9, src: '/hero/pg9.webp', alt: 'Fruit pastry' },
    { id: 10, src: '/hero/pg10.webp', alt: 'Traditional pastry' }
  ];

  // Split images for left and right carousels
  const leftCarouselImages = pastryImages.slice(0, 5);
  const rightCarouselImages = pastryImages.slice(5, 10);

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Indulge in Sweet Moments at À La Folie CrepEscape 
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Step into a world of delightful pastries and fresh crepes, where every bite is a celebration of flavor. Our cozy atmosphere invites you to relax and savor the sweetness of life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-transparent bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
              >
                Visit
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-black bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Content - Carousels */}
          <div className="grid grid-cols-[auto,auto] justify-center gap-4 h-[600px] overflow-hidden">
            {/* Left Carousel - Scrolling Up */}
            <div className="relative py-4 h-full">
              <div className="h-full overflow-y-hidden overflow-x-visible">
              <motion.div
                className="flex flex-col gap-4 will-change-transform"
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  duration: 300,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {/* Duplicate images for seamless loop */}
                {[...leftCarouselImages, ...leftCarouselImages].map((image, index) => (
                    <div
                      key={`left-${index}`}
                      className="w-[312px] h-[332px] bg-gray-100"
                    >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={310}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
              </div>
            </div>

            {/* Right Carousel - Scrolling Down */}
            <div className="relative py-4 h-full">
              <div className="h-full overflow-y-hidden overflow-x-visible">
              <motion.div
                className="flex flex-col gap-4 will-change-transform"
                animate={{ y: ['-50%', '0%'] }}
                transition={{
                  duration: 320,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {/* Duplicate images for seamless loop */}
                {[...rightCarouselImages, ...rightCarouselImages].map((image, index) => (
                    <div
                      key={`right-${index}`}
                      className="w-[312px] h-[332px] bg-gray-100"
                    >
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={310}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
