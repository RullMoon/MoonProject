let handler = async (m, { conn }) => {
  try {
    const sentMsg = await conn.sendContactArrayS(m.chat, [
      [`${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 😡`, `rullmoonmc@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://nekopoi.care`, `👤 Kang Sed`],
      [`${owner[1]}`, `${await conn.getName(owner[1] + '@s.whatsapp.net')}`, `👑 Developer Bot `, `🌙 Don't spam/call me 😡`, `rullmoonmc@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://instagram.com`, `👤 Sed Boy`],
    ], m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, { mentions: [m.sender] })
  } catch {
    const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0] + '@s.whatsapp.net')}`, m)
    await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, { mentions: [m.sender] })
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
