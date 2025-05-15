"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TinTuc() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Tin tức & Sự kiện
      </motion.h1>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Hoạt động chung</TabsTrigger>
          <TabsTrigger value="primary">Khối tiểu học</TabsTrigger>
          <TabsTrigger value="secondary">Khối THCS</TabsTrigger>
          <TabsTrigger value="high">Khối phổ thông</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                    alt="Hoạt động ngoại khóa"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Hoạt động ngoại khóa tháng 3/2024</CardTitle>
                  <CardDescription>15/03/2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Các hoạt động ngoại khóa phong phú giúp học sinh phát triển toàn diện...
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Các tab khác sẽ có cấu trúc tương tự */}
      </Tabs>
    </main>
  )
}