import { Modal, ModalContent, ModalHeader, ModalTitle } from "@/components/ui/modal";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  website: {
    title: string;
    link: string;
  };
}

const WebsiteModal = ({ isOpen, onClose, website }: WebsiteModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent size="full" className="p-0">
        <ModalHeader className="p-6 pb-0">
          <ModalTitle className="text-xl font-bold text-foreground">
            {website.title}
          </ModalTitle>
        </ModalHeader>
        
        <div className="relative flex-1 mx-6 mb-6 rounded-lg overflow-hidden bg-muted">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">جاري تحميل الموقع...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={website.link}
            className="w-full h-[calc(95vh-120px)] border-0 rounded-lg"
            title={website.title}
            onLoad={handleIframeLoad}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </ModalContent>
    </Modal>
  );
};

export default WebsiteModal;