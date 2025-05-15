"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    url: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
    caption: "Hoạt động ngoại khóa"
  },
  {
    url: "https://images.pexels.com/photos/8927007/pexels-photo-8927007.jpeg",
    caption: "Thể thao"
  },
  {
    url: "https://images.pexels.com/photos/7944196/pexels-photo-7944196.jpeg",
    caption: "Văn nghệ"
  },
  {
    url: "https://images.pexels.com/photos/7944238/pexels-photo-7944238.jpeg",
    caption: "Lễ hội"
  }
]

export default function Gallery() {
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
          <h2 className="text-3xl font-bold">Thư viện ảnh</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Những khoảnh khắc đáng nhớ tại trường
          </p>
        </motion.div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-lg">{image.caption}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}