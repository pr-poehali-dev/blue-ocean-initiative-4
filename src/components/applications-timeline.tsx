import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1. Осознать",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Первый шаг — честно признать, что прокрастинация происходит. Не «я устал» или «нет вдохновения»,
            а «я избегаю дискомфорта». Это ключевой сдвиг в восприятии.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Ведите дневник откладываний — что именно вы избегаете?
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Отслеживайте триггеры: тревога, скука, страх провала
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Разделяйте усталость и избегание — это разные состояния
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2. Отключить источники зависимости",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Соцсети, новости и мессенджеры — главные конкуренты вашего внимания. Они созданы так,
            чтобы захватывать мозг и подкармливать прокрастинацию дофамином.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Установите временны́е лимиты на приложения
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выключайте уведомления во время работы
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Создайте «цифровые окна» для проверки новостей — 2 раза в день
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3. Действовать системно",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Победить прокрастинацию нельзя силой воли — только правильно выстроенной средой и привычками.
            Система важнее мотивации.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Правило «следующего шага»: всегда знайте одно конкретное действие
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Метод Помодоро: 25 минут работы — 5 минут отдыха
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Чистое рабочее место — чистое мышление
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Путь к изменениям</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три шага, которые помогут перестать откладывать и начать действовать —
            не когда-нибудь, а уже сегодня.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
