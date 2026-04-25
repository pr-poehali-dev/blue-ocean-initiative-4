import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей М.",
    role: "Фрилансер, дизайнер",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Я понял, что листал соцсети по 4 часа в день. После того как разобрался в механике прокрастинации — сократил это время вдвое за неделю.",
  },
  {
    name: "Мария С.",
    role: "Студентка, 4 курс",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Думала, что у меня просто нет силы воли. Оказалось — я просто не умела управлять вниманием. Это совсем другая история.",
  },
  {
    name: "Ольга В.",
    role: "Менеджер проектов",
    avatar: "/professional-woman-scientist.png",
    content:
      "Метод «следующего шага» изменил мою работу. Больше не смотрю на огромный список задач — просто делаю одно конкретное действие прямо сейчас.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Это работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории людей, которые разобрались с прокрастинацией
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
