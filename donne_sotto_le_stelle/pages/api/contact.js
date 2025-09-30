import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, phone, service, message } = req.body

  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = process.env.SMTP_PORT
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const EMAIL_TO = process.env.EMAIL_TO

  if(!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    return res.status(500).json({error:'Server email non configurato. Imposta le variabili d\'ambiente.'})
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  })

  const html = `
    <h2>Nuova richiesta di prenotazione</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${phone || '—'}</p>
    <p><strong>Servizio:</strong> ${service}</p>
    <p><strong>Messaggio:</strong> ${message || '—'}</p>
  `

  try{
    await transporter.sendMail({
      from: SMTP_USER,
      to: EMAIL_TO,
      subject: `Prenotazione: ${service} — ${name}`,
      html
    })
    return res.status(200).json({ok:true})
  }catch(err){
    console.error(err)
    return res.status(500).json({error:'Errore invio email'})
  }
}
