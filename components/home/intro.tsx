"use client"

import { motion } from 'framer-motion'
import { Users, School, Heart, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    icon: <School className="h-8 w-8" />,
    title: '1986',
    description: 'Năm thành lập',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: '28',
    description: 'CB-GV-NV',
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: '159',
    description: 'Học sinh',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: '37+',
    description: 'Năm kinh nghiệm',
  },
]

const features = [
  {
    icon: <School className="h-8 w-8" />,
    title: 'Sứ mệnh',
    description: 'Giáo dục và hỗ trợ phục hồi khả năng nghe – nói, giúp học sinh hòa nhập cộng đồng.',
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Chương trình đào tạo',
    description: 'Dạy văn hóa, kỹ năng sống cho các khối Mầm Non, Tiểu Học và Trung học cơ sở.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Đội ngũ giảng viên',
    description: 'Giáo viên giàu kinh nghiệm, tận tâm với sự nghiệp giáo dục trẻ khiếm thính.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Giá trị cốt lõi',
    description: 'Tình yêu thương, sự tận tâm và cam kết với sự phát triển toàn diện của học sinh.',
  },
]

export default function Intro() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Giới thiệu</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Trường Hy Vọng Bình Thạnh là nơi ươm mầm những tài năng đặc biệt, 
            nơi mỗi học sinh được quan tâm, yêu thương và phát triển toàn diện. 
            Chúng tôi tự hào là ngôi nhà thứ hai của các em học sinh khiếm thính.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 text-primary w-16 h-16 mx-auto flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.title}</div>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <div className="rounded-full bg-primary/10 p-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-4 text-muted-foreground flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}