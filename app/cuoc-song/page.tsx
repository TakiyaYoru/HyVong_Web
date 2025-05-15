"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CuocSong() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8"
      >
        Cuộc sống học đường
      </motion.h1>

      <Tabs defaultValue="gallery" className="space-y-8">
        <TabsList>
          <TabsTrigger value="gallery">Thư viện ảnh</TabsTrigger>
          <TabsTrigger value="students">Học sinh tiêu biểu</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: item * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={`https://images.pexels.com/photos/861${item + 3000}/pexels-photo-861${item + 3000}.jpeg`}
                      alt={`Gallery image ${item}`}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Thêm danh sách học sinh tiêu biểu sau */}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}