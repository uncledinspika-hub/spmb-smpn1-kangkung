export default function SPMBSite() {
  const statistik = [
    { label: 'Total Pendaftar', value: '248' },
    { label: 'Kuota Siswa', value: '256' },
    { label: 'Jalur Dibuka', value: '3' },
    { label: 'Layanan Online', value: '24/7' }
  ];

  const jalur = [
    {
      title: 'Zonasi',
      kuota: '50%',
      desc: 'Seleksi berdasarkan domisili calon peserta didik sesuai ketentuan pemerintah daerah.'
    },
    {
      title: 'Prestasi',
      kuota: '30%',
      desc: 'Seleksi berdasarkan prestasi akademik maupun non akademik siswa.'
    },
    {
      title: 'Afirmasi',
      kuota: '20%',
      desc: 'Seleksi untuk keluarga kurang mampu dan berkebutuhan khusus.'
    }
  ];

  const tahapan = [
    'Isi formulir pendaftaran online',
    'Upload dokumen persyaratan',
    'Verifikasi data oleh panitia',
    'Pantau hasil seleksi online',
    'Daftar ulang sesuai jadwal'
  ];

  const jadwal = [
    {
      tahap: 'Pendaftaran Online',
      tanggal: '1 Juni 2026 - 10 Juni 2026'
    },
    {
      tahap: 'Verifikasi Berkas',
      tanggal: '11 Juni 2026 - 13 Juni 2026'
    },
    {
      tahap: 'Pengumuman Hasil Seleksi',
      tanggal: '15 Juni 2026'
    },
    {
      tahap: 'Daftar Ulang',
      tanggal: '16 Juni 2026 - 18 Juni 2026'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-3xl border border-white/30 flex items-center justify-center text-xs text-center p-2 backdrop-blur-md">
              Logo
              <br />
              Sekolah
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-black">
                SPMB SMP Negeri 1 Kangkung
              </h1>
              <p className="text-white/80 mt-1">
                Sistem Penerimaan Murid Baru Tahun Ajaran 2026/2027
              </p>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <a href="#informasi" className="hover:text-cyan-100 transition">
              Informasi
            </a>
            <a href="#jadwal" className="hover:text-cyan-100 transition">
              Jadwal
            </a>
            <a href="#pendaftaran" className="hover:text-cyan-100 transition">
              Pendaftaran
            </a>
            <a
              href="https://wa.me/6281225339424"
              target="_blank"
              className="bg-white text-blue-700 px-5 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
            >
              WhatsApp Admin
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm border border-white/20">
              Website Resmi SPMB SMPN 1 Kangkung
            </div>

            <h2 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">
              Pendaftaran Siswa Baru Kini Lebih Mudah
            </h2>

            <p className="mt-8 text-lg text-white/90 leading-relaxed max-w-2xl">
              Platform digital resmi untuk Sistem Penerimaan Murid Baru SMP Negeri 1 Kangkung.
              Akses informasi lengkap, jadwal, jalur penerimaan, upload dokumen,
              hingga pengumuman hasil seleksi secara online.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-white text-blue-700 px-7 py-4 rounded-2xl font-black shadow-2xl hover:scale-105 transition">
                Daftar Sekarang
              </button>

              <button className="border border-white/40 bg-white/10 backdrop-blur-md px-7 py-4 rounded-2xl font-bold hover:bg-white/20 transition">
                Download Panduan
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-6 shadow-2xl">
            <div className="aspect-video rounded-3xl border-2 border-dashed border-white/30 flex items-center justify-center text-center text-white text-lg bg-white/5">
              Space Foto Sekolah
              <br />
              Bisa Diganti
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {statistik.map((item, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-3xl font-black">{item.value}</h3>
                  <p className="text-white/80 mt-2 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="informasi" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-black">Informasi SPMB</h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Sistem informasi SPMB SMP Negeri 1 Kangkung dibuat untuk memudahkan
            calon peserta didik dan orang tua dalam memperoleh informasi secara cepat,
            transparan, dan akurat.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {jalur.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100 hover:-translate-y-2 transition"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl font-black shadow-lg">
                {item.kuota}
              </div>

              <h3 className="text-3xl font-black mt-8">{item.title}</h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Alur Pendaftaran Online
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Seluruh proses dilakukan secara online sehingga lebih praktis,
              cepat, dan efisien.
            </p>

            <div className="mt-10 space-y-5">
              {tahapan.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-slate-50 rounded-2xl p-5 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-black">Persyaratan Dokumen</h3>

            <div className="grid gap-4 mt-8">
              {['Kartu Keluarga', 'Akta Kelahiran', 'Ijazah/SKL', 'Pas Foto', 'Rapor'].map((doc, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4"
                >
                  {doc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jadwal" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl font-black">Jadwal Pelaksanaan</h2>
          <p className="mt-5 text-slate-600 text-lg">
            Jadwal resmi pelaksanaan SPMB SMP Negeri 1 Kangkung.
          </p>
        </div>

        <div className="mt-14 bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-indigo-700 to-cyan-600 text-white">
              <tr>
                <th className="text-left p-6 text-lg">Tahapan</th>
                <th className="text-left p-6 text-lg">Tanggal</th>
              </tr>
            </thead>

            <tbody>
              {jadwal.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold">{item.tahap}</td>
                  <td className="p-6 text-slate-600">{item.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="pendaftaran" className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Formulir Pendaftaran Online
            </h2>

            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              Isi data diri calon peserta didik secara lengkap dan upload seluruh
              dokumen persyaratan sesuai ketentuan.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 text-slate-800 shadow-2xl">
            <div className="grid gap-5">
              <input className="border border-slate-200 rounded-2xl px-5 py-4" placeholder="Nama Lengkap" />
              <input className="border border-slate-200 rounded-2xl px-5 py-4" placeholder="NISN" />
              <input className="border border-slate-200 rounded-2xl px-5 py-4" placeholder="Asal Sekolah" />
              <input className="border border-slate-200 rounded-2xl px-5 py-4" placeholder="Nomor WhatsApp" />

              <select className="border border-slate-200 rounded-2xl px-5 py-4">
                <option>Pilih Jalur Pendaftaran</option>
                <option>Zonasi</option>
                <option>Prestasi</option>
                <option>Afirmasi</option>
              </select>

              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center text-slate-500">
                Upload Dokumen
              </div>

              <button className="bg-gradient-to-r from-indigo-700 to-cyan-600 text-white py-4 rounded-2xl font-black hover:scale-[1.02] transition">
                Kirim Pendaftaran
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">
            <h3 className="text-3xl font-black">Cek Pengumuman</h3>
            <p className="mt-4 text-slate-600">
              Masukkan NISN untuk melihat hasil seleksi.
            </p>

            <div className="mt-8 flex gap-4">
              <input
                className="flex-1 border border-slate-200 rounded-2xl px-5 py-4"
                placeholder="Masukkan NISN"
              />

              <button className="bg-blue-600 text-white px-6 rounded-2xl font-bold">
                Cek
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-black">Kontak Panitia</h3>

            <div className="mt-8 space-y-5 text-white/90">
              <p>📍 Jl. Raden Patah Tanjungmojo Kangkung Kendal</p>
              <p>📱 WhatsApp: 081225339424</p>
              <p>🕒 Layanan Online 24 Jam</p>
            </div>

            <a
              href="https://wa.me/6281225339424"
              target="_blank"
              className="inline-block mt-8 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <h3 className="text-3xl font-black">SMP Negeri 1 Kangkung</h3>
            <p className="text-white/70 mt-5 max-w-lg leading-relaxed">
              Website resmi Sistem Penerimaan Murid Baru (SPMB)
              SMP Negeri 1 Kangkung Kabupaten Kendal.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Informasi</h4>
            <div className="space-y-3 mt-5 text-white/70">
              <p>Jalur Zonasi</p>
              <p>Jalur Prestasi</p>
              <p>Jalur Afirmasi</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold">Kontak</h4>
            <div className="space-y-3 mt-5 text-white/70">
              <p>Jl. Raden Patah Tanjungmojo Kangkung Kendal</p>
              <p>081225339424</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
