type WorkshopEmailParams = {
  name: string;
  workshopTitle: string;
  date: string;
  time: string;
  meetingLink: string;
  meetingPlatform: string;
  company?: string;
};

export const workshopEmailTemplate = (params: WorkshopEmailParams) => {
  const company = params.company || "Aam Pannaa Creations";

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>

<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">

<div style="max-width:620px;margin:40px auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.08);">

<!-- HERO -->
<div style="background:#0f766e;padding:48px 28px;text-align:center;">
  <h1 style="margin:0;color:#ffffff;font-size:30px;">Workshop Confirmed 🎯</h1>
  <p style="color:#d1fae5;margin-top:10px;font-size:16px;">
    You're officially registered!
  </p>
</div>

<!-- BODY -->
<div>

<p style="font-size:16px;color:#0f172a;">
Hi <strong>${params.name}</strong>,
</p>

<p style="font-size:15px;color:#475569;line-height:1.7;">
Thanks for registering! Your spot is secured for the upcoming live workshop.
Here are your session details:
</p>

<!-- DETAILS BOX -->
<div style="background:#f8fafc;border-radius:12px;padding:24px;margin:28px 0;border:1px solid #e2e8f0;">

<h2 style="margin:0 0 18px 0;color:#0f766e;font-size:20px;">
${params.workshopTitle}
</h2>

<table style="width:100%;font-size:15px;color:#334155;border-collapse:collapse;">

<tr>
<td style="padding:8px 0;">📅 <strong>Date</strong></td>
<td style="padding:8px 0;">${params.date}</td>
</tr>

<tr>
<td style="padding:8px 0;">⏰ <strong>Time</strong></td>
<td style="padding:8px 0;">${params.time}</td>
</tr>

<tr>
<td style="padding:8px 0;">💻 <strong>Platform</strong></td>
<td style="padding:8px 0;">${params.meetingPlatform}</td>
</tr>

<tr>
<td style="padding:8px 0;">🔗 <strong>Meeting Link</strong></td>
<td style="padding:8px 0;">
  <a href="${params.meetingLink}"
     style="color:#0f766e;text-decoration:none;font-weight:600;">
     ${params.meetingLink}
  </a>
</td>
</tr>

</table>

</div>

<!-- BUTTON -->
<div style="text-align:center;margin:36px 0;">
<a href="${params.meetingLink}"
style="background:#22c55e;color:#ffffff;text-decoration:none;padding:16px 36px;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
Join Live Workshop
</a>
</div>

<!-- REMINDER -->
<div style="background:#ecfeff;border-left:5px solid #0f766e;padding:16px;border-radius:8px;margin:24px 0;">
<p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;">
⏳ Please join 10 minutes early to avoid last-minute issues.
</p>
</div>

<!-- PREP LIST -->
<h3 style="margin-top:28px;color:#0f172a;">Get Ready:</h3>

<ul style="color:#475569;font-size:14px;line-height:1.8;padding-left:20px;">
<li>Stable internet connection</li>
<li>Notebook & pen</li>
<li>Quiet environment</li>
<li>Your questions prepared 😉</li>
</ul>

<p style="margin-top:28px;color:#475569;font-size:15px;">
See you soon! 🚀
</p>

<p style="margin-top:14px;color:#0f172a;font-size:15px;">
— <strong>${company}</strong>
</p>

</div>

<!-- FOOTER -->
<div style="background:#f8fafc;padding:22px;text-align:center;border-top:1px solid #e2e8f0;">

<p style="font-size:13px;color:#64748b;margin:0;">
Need help? Just reply to this email.
</p>

<p style="font-size:12px;color:#94a3b8;margin-top:8px;">
© ${new Date().getFullYear()} ${company}
</p>

</div>

</div>
</body>
</html>
`;
};
