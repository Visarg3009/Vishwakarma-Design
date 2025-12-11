import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FlipCardProps {
  title: string;
  category: string;
  frontImage: string;
  backImage: string;
  frontLabel: string;
  backLabel: string;
}

export function FlipCard({ 
  title, 
  category, 
  frontImage, 
  backImage, 
  frontLabel, 
  backLabel 
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative h-[400px] md:h-[500px] group">
      <div 
        className="relative w-full h-full cursor-none"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Custom Cursor that follows mouse */}
        {isHovering && (
          <div 
            className="absolute z-20 pointer-events-none"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-lg">
              <span className="text-gray-900 text-sm whitespace-nowrap">Tap to Flip</span>
            </div>
          </div>
        )}

        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <ImageWithFallback
              src={frontImage}
              alt={`${title} - ${frontLabel}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm text-[#C9B8A8] mb-2">{category}</div>
              <h3 className="text-2xl mb-2">{title}</h3>
              <span className="text-sm">{frontLabel}</span>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-xl"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <ImageWithFallback
              src={backImage}
              alt={`${title} - ${backLabel}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="text-sm text-[#C9B8A8] mb-2">{category}</div>
              <h3 className="text-2xl mb-2">{title}</h3>
              <span className="text-sm">{backLabel}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}