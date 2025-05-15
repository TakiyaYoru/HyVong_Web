"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { School, Users, GraduationCap, Heart } from "lucide-react"

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
  }
]

const staffMembers = [
  {
    name: "NGUYỄN THỊ THÂN",
    role: "Hiệu trưởng",
    quote: "Sống trong đời sống cần có một tấm lòng.",
    image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg"
  },
  {
    name: "NGUYỄN THỊ NGỌC ĐIỆP",
    role: "Phó hiệu trưởng - Phụ trách Chuyên môn",
    quote: "Cám ơn đời mỗi sớm mai thức dậy, cho ta thêm sức khoẻ, nghị lực và niềm tin để yêu thương và làm việc.",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
  },
  {
    name: "LÊ THỊ THÚY NGA",
    role: "Phó hiệu trưởng - Phụ trách Bán trú",
    quote: "Rất hạnh phúc khi cơ duyên đã đưa tôi đến với những vầng trăng khuyết.",
    image: "https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg"
  }
]

const teachers = [
  { name: "Trần Thị Thu Thủy", role: "Giáo viên", quote: "\"Cho đi\" hạnh phúc hơn được nhận. Tôi hạnh phúc khi đồng hành cùng các em học sinh khuyết tật của tôi." },
  { name: "Nguyễn Thị Ngọc Ánh", role: "Giáo viên", quote: "Bên cạnh việc chia sẻ kiến thức, kĩ năng sống, tôi vẫn mong mỏi khơi dậy ngọn lửa cho tâm hồn các em" },
  { name: "Hồ Ngọc Huyền", role: "Giáo viên", quote: "Hãy như ngọn nến nhỏ, dâng nguồn sáng cho đời, sống là như vậy đó, cháy hết mình nghe hông!" },
  { name: "Lê Thị Nhung", role: "Giáo viên", quote: "" },
  { name: "Trương Thúy Ngọc Lan", role: "Giáo viên", quote: "Bắt đầu từ nơi bạn đứng. Sử dụng những gì bạn có. Làm những gì bạn có thể." },
  { name: "Võ Thị Hồng Hạnh", role: "Giáo viên", quote: "Tôi, bạn và chúng ta hạnh phúc là bình an. Chia sẻ yêu thương là bền vững!" }
]

const staff = [
  { name: "Triệu Thị Đào", role: "Kế toán", quote: "Ánh mắt bừng sáng, nụ cười bừng nở trên môi của các em, đó là niềm vui & hạnh phúc của tôi." },
  { name: "Huỳnh Thị Dung", role: "Nhân viên", quote: "Cảm ơn các em đã trao ánh mắt, nụ cười & cả những giọt nước mắt cho trái tim tôi." },
  { name: "Trịnh Thị Hương", role: "Nhân viên", quote: "Niềm hạnh phúc của tôi khi các em ngon miệng & híp mắt cười." },
  { name: "Lý Văn Lâm", role: "Bảo vệ", quote: "Bình minh luôn đến với các em." }
]

export default function GioiThieu() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Giới thiệu
      </motion.h1>

      <Tabs defaultValue="history" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="history">Lịch sử phát triển</TabsTrigger>
          <TabsTrigger value="staff">Nhân sự</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">TRƯỜNG HY VỌNG BÌNH THẠNH</h2>
            <p className="text-lg text-muted-foreground mb-8">
              25 Nguyễn Văn Lạc, Phường 21, Bình Thạnh, Thành phố Hồ Chí Minh
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="text-center">
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

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Hoạt động</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Trường giáo dục trẻ khiếm thính giúp phục hồi khả năng nghe – nói cho học sinh.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Dạy nói – Luyện nghe, can thiệp sớm giúp các trẻ em khiếm thính cải thiện khả năng nghe nói</li>
                  <li>Dạy văn hóa, kỹ năng cho các khối Mầm Non, Tiểu Học và Trung học cơ sở</li>
                  <li>Giúp HS khiếm thính hòa nhập xã hội</li>
                  <li>Dạy nghề phù hợp với khả năng, năng khiếu của học sinh</li>
                  <li>Tìm việc làm cho HS ra trường có công việc phù hợp</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Mong muốn của Ban Giám Hiệu trường</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nâng cao chất lượng giảng dạy và học tập nhằm thu hẹp khoảng cách giữa trẻ khuyết tật và trẻ bình thường.
                  Đảm bảo đời sống cho giáo viên của trường theo mức quy định.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Ban Giám Hiệu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                      <p className="text-primary text-center mt-2">{member.role}</p>
                      <p className="mt-4 text-muted-foreground text-center italic">"{member.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Đội ngũ Giáo viên</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{teacher.name}</h3>
                    <p className="text-primary text-sm mt-1">{teacher.role}</p>
                    {teacher.quote && (
                      <p className="mt-4 text-muted-foreground italic text-sm">"{teacher.quote}"</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Nhân viên & Hỗ trợ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {staff.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm mt-1">{member.role}</p>
                    <p className="mt-4 text-muted-foreground italic text-sm">"{member.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </main>
  )
}