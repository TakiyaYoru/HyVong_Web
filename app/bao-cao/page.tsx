"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const reports = [
  {
    title: "Báo cáo tài chính năm 2023",
    date: "31/12/2023",
    description: "Báo cáo tổng kết tình hình tài chính năm 2023",
    file: "/reports/financial-2023.pdf"
  },
  {
    title: "Báo cáo tài chính 6 tháng đầu năm 2023",
    date: "30/06/2023",
    description: "Báo cáo tài chính giữa năm 2023",
    file: "/reports/financial-2023-h1.pdf"
  },
  {
    title: "Báo cáo tài chính năm 2022",
    date: "31/12/2022",
    description: "Báo cáo tổng kết tình hình tài chính năm 2022",
    file: "/reports/financial-2022.pdf"
  }
]

export default function BaoCao() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Báo cáo tài chính
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {report.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ngày phát hành: {report.date}
                </p>
                <p className="text-muted-foreground mb-4">
                  {report.description}
                </p>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Tải xuống
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  )
}