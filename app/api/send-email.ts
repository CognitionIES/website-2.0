//import { toast } from "sonner";
//import nodemailer from "nodemailer";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  interestedIn: string;
  requirements: string;
  consent: boolean;
};

// This is a simulation of sending an email if nodemailer isn't configured
// Replace the existing sendEmail import and definition with this:
export const sendEmail = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send email");
    }

    return {
      success: true,
      message: result.message || "Email sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later.",
    };
  }
};
