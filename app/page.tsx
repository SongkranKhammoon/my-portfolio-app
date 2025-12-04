"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  MapPin, Calendar, User,
  Code2, Database, Layout, Terminal, Cpu,
  FolderGit2, ExternalLink,
  Mail, Phone, Github, Linkedin,
  GraduationCap,
  Target,
  CheckCircle,
  Download,
  Sparkles
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative">
        {/* Background Elements */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Profile Card */}
          <div
            data-aos="fade-right"
            className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 mb-6 group-hover:scale-105 transition-transform duration-300">
              <div className="w-36 h-36 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden mx-auto ring-4 ring-blue-500/20">
                <Image
                  src="/profile1.jpg"
                  alt="Songkran Khammoon"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-[#0f172a] animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-kanit tracking-wide drop-shadow-lg">Songkran Khammoon</h1>
            <h2 className="text-2xl text-gradient font-medium mb-6 font-kanit">สงกรานต์ คำมูล</h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { icon: <User size={16} className="text-blue-400" />, text: "นักพัฒนา Full-stack" },
                { icon: <Calendar size={16} className="text-purple-400" />, text: "อายุ 23 ปี" },
                { icon: <MapPin size={16} className="text-red-400" />, text: "เชียงราย, ไทย" },
                { icon: <CheckCircle size={16} className="text-green-400" />, text: "ผ่านการเกณฑ์ทหารแล้ว" },
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 flex items-center gap-2 hover:bg-white/10 hover:scale-105 transition-all cursor-default"
                >
                  {item.icon} {item.text}
                </span>
              ))}
            </div>

            <p className="text-gray-400 max-w-lg mx-auto mb-8 text-base leading-relaxed font-light">
              นักพัฒนาที่มีความหลงใหลในการสร้างสรรค์เว็บแอปพลิเคชันที่ทันสมัยและตอบโจทย์ผู้ใช้งาน
              พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และแก้ปัญหาที่ซับซ้อนอยู่เสมอ
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-3 mt-auto">
              <div className="flex-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm hover:scale-102 transition-transform flex items-center justify-center">
                <p className="text-blue-300 font-medium text-sm">เงินเดือนที่คาดหวัง: 25,000 บาท</p>
              </div>
              <a
                href="/portfolio.pdf"
                download
                className="flex-1 bg-blue-600 hover:bg-blue-700 border border-blue-500 rounded-xl p-4 text-white flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-blue-600/20"
              >
                <Download size={18} />
                <span className="font-medium text-sm">ดาวน์โหลด Portfolio</span>
              </a>
            </div>
          </div>

          {/* Skills Card */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-3xl p-6 flex flex-col hover:scale-[1.01] transition-transform duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-6 font-kanit flex items-center gap-2">
              <Code2 className="text-blue-500" /> ทักษะทางเทคนิค
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { category: "Frontend", icon: <Layout size={16} />, items: ["JavaScript", "React", "Angular", "TailwindCSS"] },
                { category: "Backend", icon: <Terminal size={16} />, items: ["PHP", "C#", "Java", "Python"] },
                { category: "Database", icon: <Database size={16} />, items: ["SQL"] },
                { category: "Tools", icon: <Code2 size={16} />, items: ["Git", "Docker", "Figma"] },
                { category: "AI & Productivity", icon: <Sparkles size={16} />, items: ["Gemini", "ChatGPT", "Claude", "LLM-assisted Development"] },
                { category: "Other", icon: <Cpu size={16} />, items: ["IoT"] },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 hover:scale-102 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3 text-gray-200 font-medium text-sm">
                    {skill.icon} {skill.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="px-2 py-1 bg-black/20 rounded-md text-xs text-gray-400 border border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <h3 className="text-lg font-bold text-white mb-4 font-kanit">ทักษะเสริม (Soft Skills)</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "การแก้ปัญหา", "การทำงานเป็นทีม", "เรียนรู้เร็ว", "การสื่อสาร", "การบริหารเวลา"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-sm font-medium hover:scale-110 hover:bg-blue-500/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-3xl p-6 overflow-hidden flex flex-col hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white font-kanit flex items-center gap-2">
                <FolderGit2 className="text-purple-500" /> ผลงานและประสบการณ์
              </h3>
            </div>

            <div className="overflow-y-auto pr-2 space-y-3 custom-scrollbar flex-1 max-h-[400px]">
              {[
                {
                  title: "ระบบเฝ้าระวังอุบัติเหตุทางน้ำ (IoT)",
                  description: "ตรวจจับบุคคลเข้าใกล้พื้นที่เสี่ยง พร้อมปุ่มแจ้งขอความช่วยเหลือฉุกเฉิน",
                  tags: ["IoT", "Safety"]
                },
                {
                  title: "ระบบสแกนสลิปธนาคารอัตโนมัติ",
                  description: "ดึงข้อมูลจำนวนเงินและวันที่จากสลิปโอนเงิน สรุปยอดลง Excel ลดเวลาการทำงาน",
                  tags: ["Automation", "OCR"]
                },
                {
                  title: "ระบบกรอกชื่อตามเลขพัสดุ",
                  description: "แปลงข้อมูลจาก QR Code ภาพถ่าย และพิมพ์ลงฉลากเพื่อเตรียมจัดส่งสินค้า",
                  tags: ["Logistics", "QR Code"]
                },
                {
                  title: "ประสบการณ์ฝึกงาน (Frontend) - 6 เดือน",
                  description: "พัฒนา UI เชื่อมต่อ API และทำงานร่วมกับทีมผ่านระบบ Git Workflow",
                  tags: ["Frontend", "Teamwork"]
                },
                {
                  title: "ฟรีแลนซ์ (Fastwork) - 3 ผลงาน",
                  description: "พัฒนาเว็บไซต์ตามความต้องการลูกค้า พร้อมให้คำปรึกษาและแนะนำทางเทคนิค",
                  tags: ["Freelance", "Web Dev"]
                },
                {
                  title: "โครงการร่วมกับอาจารย์",
                  description: "พัฒนาแอปพลิเคชันจัดทำสื่อเรียนรู้ชุมชนและบุคคลต้นแบบตามพระราชดำริ",
                  tags: ["App Dev", "Education"]
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:translate-x-1 transition-all group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-200 group-hover:text-purple-400 transition-colors font-kanit text-lg">
                      {project.title}
                    </h4>
                    <ExternalLink size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-400 mb-3 font-light">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-black/20 px-2 py-1 rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Contact Card */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="col-span-1 row-span-1 bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-6 shadow-lg border border-blue-500/30 text-white flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

              <h3 className="text-xl font-bold font-kanit mb-4 relative z-10">ช่องทางการติดต่อ</h3>

              <div className="space-y-4 relative z-10">
                <a href="tel:0820549025" className="flex items-center gap-3 group/link">
                  <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm group-hover/link:bg-white/30 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium tracking-wide group-hover/link:translate-x-1 transition-transform">0820549025</span>
                </a>

                <a href="mailto:songkrankhammoon@gmail.com" className="flex items-center gap-3 group/link">
                  <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm group-hover/link:bg-white/30 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium text-sm break-all tracking-wide group-hover/link:translate-x-1 transition-transform">songkrankhammoon@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-3 mt-6 relative z-10">
                <a href="#" className="bg-white/20 p-2.5 rounded-full hover:bg-white/30 hover:scale-110 hover:rotate-12 transition-all backdrop-blur-sm">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-white/20 p-2.5 rounded-full hover:bg-white/30 hover:scale-110 hover:-rotate-12 transition-all backdrop-blur-sm">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Education Card */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="col-span-1 row-span-1 glass-card rounded-3xl p-6 flex flex-col justify-center hover:scale-[1.02] hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-kanit">การศึกษา</h3>
                  <p className="text-gray-400 text-xs">ปริญญาตรี</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border-l-4 border-orange-500">
                <p className="font-medium text-gray-200 text-sm mb-1">วิทยาการคอมพิวเตอร์</p>
                <p className="text-xs text-gray-500">คณะเทคโนโลยีดิจิทัล</p>
                <p className="text-xs text-gray-500 mt-1">มหาวิทยาลัยราชภัฏเชียงราย</p>
              </div>
            </div>

            {/* Goal Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="col-span-1 md:col-span-2 row-span-1 bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10 text-white flex flex-col justify-center relative overflow-hidden group hover:scale-[1.01] hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-5">
                <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-kanit mb-2 text-blue-400">เป้าหมายอาชีพ</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    มุ่งมั่นที่จะเป็น Full-stack / Frontend Developer ที่เรียนรู้เทคโนโลยีใหม่อย่างต่อเนื่อง
                    และมีส่วนร่วมในการสร้างสรรค์ผลงานที่มีคุณค่าและใช้งานได้จริง
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-gray-600 text-sm font-light">
          <p>© {new Date().getFullYear()} Songkran Khammoon. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
