"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const donors = [
  {
    name: "Công ty TNHH ABC",
    type: "organization",
    amount: "500.000.000 VNĐ",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    date: "2024-03",
    message: "Chung tay vì sự nghiệp giáo dục"
  },
  {
    name: "Anh Nguyễn Văn A",
    type: "individual",
    amount: "100.000.000 VNĐ",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    date: "2024-03",
    message: "Hỗ trợ học bổng cho học sinh nghèo vượt khó"
  },
  {
    name: "Tập đoàn XYZ",
    type: "organization",
    amount: "1.000.000.000 VNĐ",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    date: "2024-02",
    message: "Đồng hành cùng phát triển giáo dục"
  }
]

export default function ManhThuongQuan() {
  const [filter, setFilter] = useState("all")

  const filteredDonors = donors.filter(donor => 
    filter === "all" || donor.type === filter
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Mạnh thường quân
      </motion.h1>

      <div className="mb-8 w-[200px]">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Lọc theo loại" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="individual">Cá nhân</SelectItem>
            <SelectItem value="organization">Tổ chức</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDonors.map((donor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <img
                    src={donor.image}
                    alt={donor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl">{donor.name}</h3>
                    <p className="text-sm text-muted-foreground">{donor.date}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary mb-2">
                  {donor.amount}
                </p>
                <p className="text-muted-foreground">{donor.message}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}