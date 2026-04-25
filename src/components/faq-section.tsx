import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Прокрастинация — это лень?",
      answer:
        "Нет. Лень — это нежелание делать что-либо вообще. Прокрастинация — это активное избегание конкретной задачи из-за тревоги, страха провала или перфекционизма. Прокрастинаторы часто очень заняты — просто не тем, чем надо.",
    },
    {
      question: "Почему соцсети так сильно засасывают?",
      answer:
        "Потому что они спроектированы именно для этого. Бесконечная лента, лайки и уведомления активируют дофаминовую систему мозга — тот же механизм, что и у азартных игр. Это не слабость характера, а продуманный дизайн.",
    },
    {
      question: "Можно ли победить прокрастинацию силой воли?",
      answer:
        "Краткосрочно — да, но это истощает. Долгосрочно — нет. Устойчивый результат даёт не «больше стараться», а изменение среды, привычек и отношения к задачам. Система надёжнее мотивации.",
    },
    {
      question: "С чего начать прямо сейчас?",
      answer:
        "Запустите таймер на 5 минут и сделайте самый маленький шаг по любой задаче, которую откладываете. Не планируйте — просто начните. Чаще всего это снимает блок.",
    },
    {
      question: "Информационная зависимость — это болезнь?",
      answer:
        "Это не медицинский диагноз, но реальная психологическая проблема. Постоянная проверка новостей и соцсетей создаёт хроническую рассеянность, тревогу и неспособность сосредоточиться на глубоких задачах.",
    },
    {
      question: "Как долго занимает избавление от прокрастинации?",
      answer:
        "Первые результаты — уже через несколько дней осознанной практики. Устойчивые изменения в привычках формируются за 4–8 недель. Главное — не ждать идеального момента для начала.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на главные вопросы о прокрастинации и информационной зависимости.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
