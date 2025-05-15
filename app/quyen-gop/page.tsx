"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Heart, School, GraduationCap, Users, ArrowRight } from "lucide-react"

const campaigns = [
  {
    title: "Quỹ học bổng",
    description: "Hỗ trợ học sinh có hoàn cảnh khó khăn",
    target: "500.000.000 VNĐ",
    current: "350.000.000 VNĐ",
    progress: 70,
    icon: <GraduationCap className="h-6 w-6" />,
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
    icon: <School className="h-6 w-6" />,
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
    icon: <Users className="h-6 w-6" />,
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
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Đóng góp cho giáo dục</h1>
        <p className="text-lg text-muted-foreground">
          Mỗi sự đóng góp của quý vị là một viên gạch xây dựng tương lai cho thế hệ trẻ
        </p>
      </motion.div>

      <Tabs defaultValue="campaigns" className="space-y-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="campaigns">Chiến dịch quyên góp</TabsTrigger>
          <TabsTrigger value="methods">Phương thức đóng góp</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <div className="grid gap-6">
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

                    <Button className="w-full mt-4">
                      Đóng góp ngay
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="methods">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Thông tin đóng góp
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {donationMethods.map((method, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold">{method.title}</h3>
                  {method.title === "Chuyển khoản ngân hàng" ? (
                    method.details.map((bank, idx) => (
                      <div key={idx} className="bg-muted p-4 rounded-lg space-y-2">
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

              <div className="bg-primary/5 p-4 rounded-lg mt-6">
                <h3 className="font-semibold mb-2">Lưu ý quan trọng:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mọi khoản đóng góp đều được cấp biên nhận</li>
                  <li>Thông tin chi tiết về việc sử dụng quỹ được cập nhật định kỳ</li>
                  <li>Mọi thắc mắc xin vui lòng liên hệ: 028.38.995.822</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}