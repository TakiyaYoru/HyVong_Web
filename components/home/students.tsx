"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Medal } from 'lucide-react'

const students = [
  {
    name: "Nguyễn Văn A",
    achievement: "Giải Nhất HSG Quốc gia môn Toán",
    image: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg",
    quote: "Học tập là hành trình khám phá bản thân"
  },
  {
    name: "Trần Thị B",
    achievement: "Huy chương Vàng Olympic Tin học",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
    quote: "Đam mê và nỗ lực là chìa khóa thành công"
  },
  {
    name: "Lê Văn C",
    achievement: "Giải Nhì HSG Quốc gia môn Vật lý",
    image: "https://images.pexels.com/photos/1462631/pexels-photo-1462631.jpeg",
    quote: "Không có giới hạn cho những ước mơ"
  }
]

export default function Students() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Học sinh tiêu biểu</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tự hào về những tài năng trẻ của trường
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {students.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={student.image} alt={student.name} />
                      <AvatarFallback>{student.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <div className="flex items-center gap-1 text-primary mt-1">
                        <Medal className="h-4 w-4" />
                        <p className="text-sm">{student.achievement}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{student.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}