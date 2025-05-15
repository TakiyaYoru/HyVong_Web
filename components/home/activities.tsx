"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, Trophy, Music } from 'lucide-react'

const activities = [
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Lễ hội Xuân yêu thương",
    description: "Hoạt động văn nghệ và từ thiện chào đón năm mới",
    image: "https://images.pexels.com/photos/7944238/pexels-photo-7944238.jpeg"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Dự án Tô màu ước mơ",
    description: "Chương trình nghệ thuật phát triển tài năng học sinh",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Hội thao truyền thống",
    description: "Các hoạt động thể thao rèn luyện sức khỏe",
    image: "https://images.pexels.com/photos/8927007/pexels-photo-8927007.jpeg"
  },
  {
    icon: <Music className="h-6 w-6" />,
    title: "Đêm nhạc gây quỹ",
    description: "Chương trình âm nhạc gây quỹ học bổng",
    image: "https://images.pexels.com/photos/7944196/pexels-photo-7944196.jpeg"
  }
]

export default function Activities() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Hoạt động nổi bật</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Các hoạt động phong phú giúp học sinh phát triển toàn diện
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="text-primary">{activity.icon}</div>
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}