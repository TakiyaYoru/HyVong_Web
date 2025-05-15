"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare, Clock, GraduationCap, School } from "lucide-react"

export default function TuyenSinh() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Tuyển sinh
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-6 w-6 text-primary" />
                Thông tin tuyển sinh
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Đối tượng tuyển sinh:</h3>
                <p className="text-muted-foreground">Các em khiếm thính (Điếc câm)</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Độ tuổi:</h3>
                <p className="text-muted-foreground">
                  - Từ 3 đến 12 tuổi<br />
                  - Trên 12 tuổi (từ các trường chuyển đến)
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Thời gian tuyển sinh:</h3>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p>Nhà trường luôn tuyển sinh trong giờ hành chánh bất kỳ thời gian nào trong năm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Liên hệ tư vấn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Điện thoại:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:02838995822" className="hover:text-primary">028.38.995.822</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:0907177182" className="hover:text-primary">0907.177.182</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:0907700258" className="hover:text-primary">0907.700.258</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:0932067118" className="hover:text-primary">0932.067.118</a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Zalo:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>0907.177.182</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>0907.700.258</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>0932.067.118</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-2">
                  Đăng ký tư vấn
                </h2>
                <p className="text-muted-foreground">
                  Để lại thông tin để được tư vấn chi tiết về chương trình học
                </p>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Đăng ký ngay
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}