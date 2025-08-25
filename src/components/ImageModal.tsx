import { Modal, ModalContent } from "@/components/ui/modal";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: {
    title: string;
    image: string;
    description: string;
    category: string;
    projectLink?: string;
  };
}

const ImageModal = ({ isOpen, onClose, design }: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleProjectLinkClick = () => {
    if (design.projectLink) {
      window.open(design.projectLink, '_blank');
    }
  };
  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent size="xl" className="p-0 max-h-[90vh] overflow-hidden">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 min-h-[400px]">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">جاري تحميل التصميم...</p>
              </div>
            </div>
          )}
          
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-foreground mb-2">{design.title}</h3>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                {design.category}
              </span>
            </div>
            
            <div className="rounded-lg overflow-hidden bg-muted">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-auto max-h-[60vh] object-contain"
                onLoad={handleImageLoad}
              />
            </div>
            
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {design.description}
            </p>
            
            {design.projectLink && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleProjectLinkClick}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  عرض المشروع كاملاً
                </button>
              </div>
            )}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;