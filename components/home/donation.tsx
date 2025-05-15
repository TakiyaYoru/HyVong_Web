"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Heart, School, GraduationCap, Users, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"


const campaigns = [
  {
    title: "Quỹ học bổng",
    description: "Hỗ trợ học sinh có hoàn cảnh khó khăn",
    target: "500.000.000 VNĐ",
    current: "350.000.000 VNĐ",
    progress: 70,
    icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    details: [
      "Hỗ trợ học phí cho học sinh khó khăn",
      "Trang bị đồng phục và dụng cụ học tập",
      "Hỗ trợ chi phí đi lại",
      "Tài trợ các hoạt động ngoại khóa"
    ]
  },
  {
    title: "Quỹ phát triển cơ sở vật chất",
    description: "Nâng cấp trang thiết bị dạy và học",
    target: "1.000.000.000 VNĐ",
    current: "600.000.000 VNĐ",
    progress: 60,
    icon: <School className="h-6 w-6 text-green-600" />,
    details: [
      "Nâng cấp phòng học đa năng",
      "Trang bị thiết bị hỗ trợ nghe",
      "Cải tạo khu vực thể thao",
      "Xây dựng thư viện điện tử"
    ]
  },
  {
    title: "Quỹ phát triển giáo viên",
    description: "Đào tạo và phát triển đội ngũ giảng dạy",
    target: "300.000.000 VNĐ",
    current: "150.000.000 VNĐ",
    progress: 50,
    icon: <Users className="h-6 w-6 text-yellow-600" />,
    details: [
      "Đào tạo chuyên môn nâng cao",
      "Tham gia hội thảo quốc tế",
      "Nghiên cứu phương pháp giảng dạy mới",
      "Trao đổi kinh nghiệm với các trường bạn"
    ]
  }
]

const donationMethods = [
  {
    title: "Chuyển khoản ngân hàng",
    details: [
      {
        bank: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)",
        account: "1234567890",
        name: "TRUONG HY VONG BINH THANH",
        branch: "Chi nhánh Bình Thạnh"
      }
    ]
  },
  {
    title: "Đóng góp trực tiếp",
    details: [
      "Địa chỉ: 25 Nguyễn Văn Lạc, Phường 21, Bình Thạnh, TP.HCM",
      "Thời gian: Từ thứ 2 đến thứ 6 (8:00 - 17:00)",
      "Liên hệ trước: 028.38.995.822"
    ]
  }
]

export default function QuyenGop() {
  return (
    <main className="container mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="text-5xl font-extrabold mb-4 text-primary">Đóng góp cho giáo dục</h1>
        <p className="text-xl text-muted-foreground">
          Mỗi sự đóng góp là một viên gạch xây dựng tương lai cho thế hệ trẻ
        </p>
      </motion.div>

      <Tabs defaultValue="campaigns" className="space-y-8">
        <TabsList className="flex justify-center p-1 bg-gray-100 rounded-full shadow-inner w-fit mx-auto">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Chiến dịch quyên góp
          </TabsTrigger>
          <TabsTrigger
            value="methods"
            className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Phương thức đóng góp
          </TabsTrigger>
        </TabsList>




        <TabsContent value="campaigns">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="text-primary">{campaign.icon}</div>
                    {campaign.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{campaign.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Đã quyên góp: {campaign.current}</span>
                      <span>Mục tiêu: {campaign.target}</span>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Mục đích sử dụng:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {campaign.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Thay thế nút ở đây */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 group">
                        Đóng góp ngay
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ủng hộ chiến dịch "{campaign.title}"</DialogTitle>
                        <DialogDescription>
                          Vui lòng chọn phương thức đóng góp bên dưới hoặc chuyển khoản theo thông tin được cung cấp.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-3 text-sm">
                        <p><b>Số tiền mong muốn:</b> {campaign.target}</p>
                        <p><b>Hiện đã có:</b> {campaign.current}</p>
                        <p className="text-muted-foreground text-sm">
                          Nội dung chuyển khoản: "Ủng hộ {campaign.title} - [Họ tên bạn]"
                        </p>
                      </div>

                      <Button className="w-full mt-4" variant="outline">Chuyển khoản ngân hàng</Button>
                      <Button className="w-full" variant="default">Tôi muốn đóng góp trực tiếp</Button>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}



          </div>
        </TabsContent>

        <TabsContent value="methods">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-pink-600" />
                  Thông tin đóng góp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {donationMethods.map((method, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold">{method.title}</h3>
                    {method.title === "Chuyển khoản ngân hàng" ? (
                      method.details.map((bank, idx) => (
                        <div key={idx} className="bg-muted p-4 rounded-lg space-y-2 border">
                          <p className="font-medium">{bank.bank}</p>
                          <p>Số tài khoản: <span className="font-mono">{bank.account}</span></p>
                          <p>Chủ tài khoản: {bank.name}</p>
                          <p>Chi nhánh: {bank.branch}</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Nội dung chuyển khoản: "Ủng hộ [Tên quỹ] - [Họ tên]"
                          </p>
                        </div>
                      ))
                    ) : (
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {method.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="bg-yellow-100 p-4 rounded-lg mt-6 border-l-4 border-yellow-400">
                  <h3 className="font-semibold mb-2 text-yellow-800">Lưu ý quan trọng:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-yellow-900">
                    <li>Mọi khoản đóng góp đều được cấp biên nhận</li>
                    <li>Thông tin sử dụng quỹ được cập nhật định kỳ</li>
                    <li>Liên hệ: 028.38.995.822 nếu có thắc mắc</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
