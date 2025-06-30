
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const QuotationModal = ({ isOpen, onClose, productName }: QuotationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a Quotation</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <ContactForm productName={productName} />
        </div>
        <DialogFooter className="sm:justify-start">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
