type SubscribeEmailProps = {
  name: string;
  email: string;
};

export function subscribeEmailTemplate({ name, email }: SubscribeEmailProps) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Aam Pannaa Creations</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Welcome! 🎉</h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  <p style="font-size: 16px; line-height: 1.6; color: #333333; margin-bottom: 20px;">
                    Hi ${name},
                  </p>
                  
                  <p style="font-size: 16px; line-height: 1.6; color: #333333; margin-bottom: 20px;">
                    Thank you for subscribing to <strong>Aam Pannaa Creations</strong>! We're thrilled to have you in our community.
                  </p>

                  <p style="font-size: 16px; line-height: 1.6; color: #333333; margin-bottom: 30px;">
                    You'll now receive updates about:
                  </p>

                  <ul style="font-size: 16px; line-height: 1.8; color: #333333; margin-bottom: 30px;">
                    <li>Latest blog posts and articles</li>
                    <li>Upcoming workshops and events</li>
                    <li>Exclusive content and resources</li>
                    <li>Special announcements</li>
                  </ul>

                  <!-- CTA Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" style="padding: 20px 0;">
                        <a href="${process.env.NEXT_PUBLIC_URL}/blogT" style="display: inline-block; padding: 14px 40px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                          Explore Our Blog
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="font-size: 14px; line-height: 1.6; color: #666666; margin-top: 30px; text-align: center;">
                    Stay tuned for exciting updates! 🚀
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
                  <p style="font-size: 14px; color: #666666; margin: 0 0 10px 0;">
                    Aam Pannaa Creations
                  </p>
                  <p style="font-size: 12px; color: #999999; margin: 0;">
                    You received this email because you subscribed to our newsletter.
                    <br/>
                    <a href="${process.env.NEXT_PUBLIC_URL}/unsubscribe?email=${encodeURIComponent(email)}" style="color: #667eea; text-decoration: none;">Unsubscribe</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}