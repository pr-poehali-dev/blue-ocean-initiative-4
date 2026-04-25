import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Что такое прокрастинация",
    description: "Прокрастинация — это не лень. Это механизм избегания дискомфорта. Мозг выбирает мгновенное удовольствие вместо важных, но сложных задач.",
    icon: "brain",
    badge: "Основы",
  },
  {
    title: "Информационная зависимость",
    description: "Бесконечный скроллинг, новости, уведомления — всё это создаёт иллюзию занятости и подпитывает прокрастинацию, истощая ресурсы внимания.",
    icon: "zap",
    badge: "Источники",
  },
  {
    title: "Цикл откладывания",
    description: "Задача → тревога → избегание → временное облегчение → вина → снова тревога. Разорвать этот цикл можно, только осознав его механику.",
    icon: "globe",
    badge: "Механизм",
  },
  {
    title: "Техники преодоления",
    description: "Метод Помодоро, правило двух минут, декомпозиция задач — рабочие инструменты, которые снижают внутренний барьер к старту.",
    icon: "target",
    badge: "Практика",
  },
  {
    title: "Цифровая детоксикация",
    description: "Осознанное ограничение потоков информации восстанавливает способность к глубокой концентрации и снижает уровень фоновой тревоги.",
    icon: "lock",
    badge: "Детокс",
  },
  {
    title: "Долгосрочные привычки",
    description: "Устойчивые изменения строятся не на силе воли, а на среде и системах. Правильная настройка окружения делает продуктивность автоматической.",
    icon: "link",
    badge: "Система",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Понять, чтобы изменить</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Прокрастинация поддаётся — если знать, как устроена её психология
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
