exports.wait = () => {
	return`*「❗」TUNGGU BOSS* \n*KALO KAGAK RESPON BERARTI ERROR*`
}

exports.succes = () => {
	return`*「 BERHASIL 」*`
}

exports.lvlon = () => {
	return`* 「LEVELING GRUP NYALA」 *`
}

exports.lvloff = () => {
	return`*「 LEVELING GRUP DIMATIKAN 」*`
}

exports.lvlnul = () => {
	return`*「 TIDAK BERLEVEL:v 」*`
}

exports.lvlnoon = () => {
	return`*「 LEVEL DI GRUP TIDAK AKTIF 」*`
}

exports.noregis = () => {
	return`*「ANDA BELUM TERDAFTAR」*\n\nKetik : @verify \n Silakan Mencoba`
}

exports.baned = () => {
	return`*「 ASIK DI BANNED NIH:v 」*`
}

exports.premium = (prefix) => {
	return`Khusus User PREMIUM`
}

exports.rediregis = () => {
	return`*「 KAMU SUDAH TERDAFTAR 」*`
}

exports.stikga = () => {
	return`*「 GAGAL COBA TAG ULANG 」*`
}

exports.linkga = () => {
	return`*「 LINKNYA GABENER INI 」*`
}

exports.groupo = () => {
	return`*「 HANYA UNTUK GRUP 」*`
}

exports.ownerb = () => {
	return`*「 HANYA SANG PENGUASA:v 」*`
}

exports.ownerg = () => {
	return`*「 HANA OWNER GRUP 」*`
}

exports.admin = () => {
	return`*「 HANYA ADMIN GRUP 」*`
}

exports.badmin = () => {
	return`*「 JADIIN AKU ADMIN DULU :v 」*`
}

exports.bug = () => {
	return`*Masalah Telah Dilaporkan Ke Pemilik BOT, Laporan PALSU Tidak Akan Ditanggapi*`
}

exports.wrongf = () => {
	return`*「 TEXTNYA MANA BRO? 」*`
}

exports.clears = () => {
	return`*「 SELESAI BERSIH-BERSIH:v 」*`
}

exports.error = () => {
	return`*「 ERROR BOY!! 」*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT MASBRO 」*
\`\`\`➸ *Nama* : ${pushname}\`\`\`
\`\`\`➸ *Nomor* : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ *Xp* : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Maaf Nih ${pushname} Limitmu Hariini Susah Habis*
*Limit Di reset Setiap Pukul 24:00*`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT 」*
sisa limit anda : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade Ke Premium Biar Bebas Gunain BOT`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 0895-2720-6500
Gopay : 0895-2720-6500
Dana  : 0895-2720-6500`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*

◯ *PEMBAYARAN BISA MELALUI :*
◯ *OVO, GOPAY, DANA, PULSA*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}