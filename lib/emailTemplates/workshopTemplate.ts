type WorkshopEmailParams = {
  name: string;
  workshopTitle: string;
  date: string;
  time: string;
  meetingLink: string;
  company?: "Aam pannaa Creations";
};

export const workshopEmailTemplate = (params: WorkshopEmailParams) => {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #eee;padding:24px">
    
    <h2 style="color:#111">Hi ${params.name} 👋</h2>

    <p>You're successfully registered for our workshop!</p>

    <div style="background:#f7f7f7;padding:16px;border-radius:8px;margin:16px 0">
      <h3>${params.workshopTitle}</h3>
      <p><strong>📅 Date:</strong> ${params.date}</p>
      <p><strong>⏰ Time:</strong> ${params.time}</p>
      <p><strong>🔗 Join link:</strong> <a href="${params.meetingLink}">${params.meetingLink}</a></p>
    </div>

    <p>Please join 10 minutes early.</p>

    <p>
      Regards,<br/>
      <strong>${params.company} Team</strong>
    </p>

    <hr/>
    <small>If you have any questions, reply to this email.</small>
  </div>
  `;
};
