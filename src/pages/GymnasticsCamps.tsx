import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const GymnasticsCamps = () => {
  const trainingPrograms = [
    {
      age: "4-6 лет",
      level: "Начинающие",
      title: "Детская акробатика",
      description: "Базовые навыки координации, гибкости и силы через игровые упражнения",
      skills: ["Кувырки", "Стойка на руках", "Мостик", "Растяжка"],
      duration: "45 мин",
      price: "3,500₽"
    },
    {
      age: "7-10 лет",
      level: "Продвинутые",
      title: "Спортивная гимнастика",
      description: "Изучение элементов на снарядах: брусья, бревно, вольные упражнения",
      skills: ["Элементы на брусьях", "Упражнения на бревне", "Акробатические связки", "Хореография"],
      duration: "60 мин",
      price: "4,200₽"
    },
    {
      age: "11-16 лет",
      level: "Профессионалы",
      title: "Мастерство гимнастики",
      description: "Сложные элементы, подготовка к соревнованиям, индивидуальный подход",
      skills: ["Сальто", "Винты", "Соединения элементов", "Композиция программ"],
      duration: "90 мин",
      price: "5,800₽"
    }
  ];

  const coaches = [
    {
      name: "Анна Петрова",
      experience: "12 лет",
      specialty: "Женская спортивная гимнастика",
      achievements: "КМС, тренер сборной области"
    },
    {
      name: "Михаил Волков",
      experience: "8 лет",
      specialty: "Мужская спортивная гимнастика",
      achievements: "Мастер спорта, призёр чемпионата России"
    },
    {
      name: "Елена Сидорова",
      experience: "15 лет",
      specialty: "Детская акробатика",
      achievements: "Заслуженный тренер, методист"
    }
  ];

  const reviews = [
    {
      name: "Мария Иванова",
      text: "Дочка занимается уже год, прогресс невероятный! Тренеры профессиональные, подход индивидуальный.",
      rating: 5
    },
    {
      name: "Алексей Козлов",
      text: "Сын начал с нуля, теперь участвует в соревнованиях. Спасибо команде за терпение и мастерство!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Trophy" className="text-primary" size={28} />
            <span className="text-xl font-heading font-bold text-gray-900">ГимнастикаКамп</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#programs" className="text-gray-700 hover:text-primary transition-colors">Программы</a>
            <a href="#coaches" className="text-gray-700 hover:text-primary transition-colors">Тренеры</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Записаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/img/4ea8127d-90bd-4a9e-8ea7-97c1b9e92f49.jpg)` }}
        ></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Спортивные сборы по <span className="text-highlight">гимнастике</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-body">
            Профессиональные тренировки для детей всех возрастов и уровней подготовки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на пробное занятие
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Программы тренировок
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Индивидуальный подход к каждому возрасту и уровню подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center space-x-2 mb-3">
                    <Badge variant="secondary" className="bg-secondary text-white">
                      {program.age}
                    </Badge>
                    <Badge variant="outline" className="border-accent text-accent">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 font-body">{program.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Изучаемые навыки:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center text-gray-600">
                        <Icon name="Clock" size={16} className="mr-1" />
                        <span className="text-sm">{program.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {program.price}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Наши тренеры
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Профессиональные спортсмены с большим опытом работы с детьми
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{coach.name}</CardTitle>
                  <p className="text-gray-600">Опыт: {coach.experience}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-accent mb-2">{coach.specialty}</p>
                  <p className="text-sm text-gray-600">{coach.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Отзывы родителей
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-highlight fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 font-body italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">
            Начните путь к успеху уже сегодня!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Запишитесь на бесплатное пробное занятие и оцените качество наших тренировок
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="MapPin" className="mr-2" size={20} />
              Москва, ул. Спортивная, 15
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2" size={20} />
              <span>Пн-Вс: 9:00-21:00</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={20} />
              <span>info@gymnasticscamp.ru</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Trophy" className="text-primary" size={24} />
            <span className="text-lg font-heading font-bold">ГимнастикаКамп</span>
          </div>
          <p className="text-sm">© 2024 ГимнастикаКамп. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default GymnasticsCamps;