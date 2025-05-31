import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

interface ContactFormProps {
  isFooterForm?: boolean;
  productName?: string;
}

const ContactForm = ({
  isFooterForm = false,
  productName = "",
}: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: productName ? `I'm interested in ${productName}` : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblokbjg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: productName ? `I'm interested in ${productName}` : "",
        });
      } else {
        throw new Error(result?.errors?.[0]?.message || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: (error as Error).message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-4 ${isFooterForm ? "text-sm" : ""}`}
    >
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`${
            isFooterForm
              ? "bg-solar-800 border-solar-700 placeholder-gray-400"
              : ""
          }`}
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`${
            isFooterForm
              ? "bg-solar-800 border-solar-700 placeholder-gray-400"
              : ""
          }`}
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className={`${
            isFooterForm
              ? "bg-solar-800 border-solar-700 placeholder-gray-400"
              : ""
          }`}
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={isFooterForm ? 3 : 5}
          className={`${
            isFooterForm
              ? "bg-solar-800 border-solar-700 placeholder-gray-400"
              : ""
          }`}
        />
      </div>
      <Button
        type="submit"
        className={`w-full ${
          isFooterForm
            ? "bg-sun-500 hover:bg-sun-600 text-white"
            : "bg-solar-600 hover:bg-solar-700 text-white"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
