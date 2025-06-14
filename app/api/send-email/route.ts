import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Using a simple email service (you can replace with your preferred service)
    const emailContent = {
      to: "your-email@gmail.com", // Replace with your actual email
      subject: `New Testimonial from ${data.from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            🎬 New Testimonial Submission - 45Clickers
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${data.from_name}</p>
            <p><strong>Role/Company:</strong> ${data.client_role || "Not provided"}</p>
            <p><strong>Email:</strong> ${data.from_email || "Not provided"}</p>
            <p><strong>Rating:</strong> ${"⭐".repeat(data.rating)} (${data.rating}/5)</p>
            <p><strong>Submitted:</strong> ${data.submission_date}</p>
          </div>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Testimonial Content</h3>
            <blockquote style="font-style: italic; color: #475569; border-left: 4px solid #7c3aed; padding-left: 16px; margin: 0;">
              "${data.testimonial_content}"
            </blockquote>
          </div>

          <div style="background: #ddd6fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #5b21b6;">
              <strong>Action Required:</strong> This testimonial is pending your review. 
              Log into your admin panel to approve or reject it.
            </p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://your-website.com/#testimonials" 
               style="background: linear-gradient(to right, #7c3aed, #3b82f6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Review in Admin Panel
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="color: #64748b; font-size: 14px; text-align: center;">
            This email was automatically generated from your 45Clickers portfolio website.
          </p>
        </div>
      `,
    }

    // Here you would integrate with your preferred email service
    // Examples: SendGrid, Mailgun, Resend, etc.

    // For demonstration, we'll use a simple fetch to a webhook service
    // Replace this with your actual email service integration

    console.log("Email would be sent:", emailContent)

    // Simulate successful email sending
    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending failed:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
