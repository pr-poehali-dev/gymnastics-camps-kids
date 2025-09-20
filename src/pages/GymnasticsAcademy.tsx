import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const GymnasticsAcademy = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const ageGroups = [
    {
      id: "kids",
      age: "4-7 лет",
      title: "Маленькие чемпионы",
      color: "from-purple-400 to-pink-400",
      icon: "Baby",
      description: "Игровая гимнастика для самых маленьких",
      skills: ["Координация", "Гибкость", "Базовые элементы"],
      duration: "45 мин",
      price: "2,800₽",
      level: 20
    },
    {
      id: "junior",
      age: "8-12 лет",
      title: "Юные гимнасты",
      color: "from-blue-400 to-cyan-400",
      icon: "Zap",
      description: "Основы спортивной гимнастики",
      skills: ["Акробатика", "Снаряды", "Хореография"],
      duration: "60 мин",
      price: "3,500₽",
      level: 60
    },
    {
      id: "teen",
      age: "13-17 лет", 
      title: "Продвинутый уровень",
      color: "from-orange-400 to-red-400",
      icon: "Target",
      description: "Профессиональная подготовка",
      skills: ["Сложные элементы", "Соревнования", "Мастерство"],
      duration: "90 мин",
      price: "4,200₽",
      level: 90
    }
  ];

  const features = [
    {
      icon: "Award",
      title: "Индивидуальный подход",
      description: "Персональная программа для каждого ребенка"
    },
    {
      icon: "Users",
      title: "Опытные тренеры",
      description: "Мастера спорта и заслуженные тренеры"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Современное оборудование и страховка"
    },
    {
      icon: "Trophy",
      title: "Результат",
      description: "Участие в соревнованиях и достижения"
    }
  ];

  const coaches = [
    {
      name: "Олимпия Золотова",
      title: "Главный тренер",
      experience: "15 лет",
      image: "👑",
      specialization: "Женская спортивная гимнастика",
      achievements: ["КМС России", "Тренер года 2023", "10+ призёров областных соревнований"]
    },
    {
      name: "Максим Силин",
      title: "Тренер по акробатике",
      experience: "8 лет",
      image: "🤸‍♂️",
      specialization: "Акробатика и прыжки",
      achievements: ["Мастер спорта", "Призёр чемпионата России", "Автор методики"]
    },
    {
      name: "София Грация",
      title: "Детский тренер",
      experience: "12 лет",
      image: "🌟",
      specialization: "Работа с детьми 4-8 лет",
      achievements: ["Педагог года", "Сертификат безопасности", "200+ выпускников"]
    }
  ];

  const filteredGroups = activeFilter === "all" 
    ? ageGroups 
    : ageGroups.filter(group => group.id === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900">Академия Гимнастики</h1>
                <p className="text-xs text-gray-500">Растим чемпионов с детства</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#programs" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Программы</a>
              <a href="#coaches" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Тренеры</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">О нас</a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Пробное занятие
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(/img/ba469460-b243-4eaf-a0c2-c54ec95d3056.jpg)` }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Твой путь к <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">олимпу</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 font-body">
              Современная академия гимнастики с персональным подходом к каждому ребенку
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть тренировки
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться сейчас
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-gray-300">Учеников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5</div>
                <div className="text-sm text-gray-300">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-gray-300">Наград</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-gray-300">Довольных</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} className="text-purple-600" size={28} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-body text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Программы обучения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Выберите программу, подходящую возрасту и уровню вашего ребенка
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="kids">4-7</TabsTrigger>
              <TabsTrigger value="junior">8-12</TabsTrigger>
              <TabsTrigger value="teen">13-17</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredGroups.map((group, index) => (
              <Card key={group.id} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${group.color}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={group.icon as any} className="text-white" size={28} />
                  </div>
                  
                  <Badge variant="secondary" className="mx-auto mb-2">
                    {group.age}
                  </Badge>
                  
                  <CardTitle className="text-2xl font-heading text-gray-900">
                    {group.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 font-body">{group.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Уровень сложности</span>
                      <span>{group.level}%</span>
                    </div>
                    <Progress value={group.level} className="h-2" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Что изучаем:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center text-gray-600">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span className="text-sm">{group.duration}</span>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {group.price}
                    </div>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${group.color} hover:opacity-90 text-white border-0`}>
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Команда профессионалов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Наши тренеры - это мастера своего дела с огромным опытом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-br from-gray-50 to-purple-50 pb-8">
                  <div className="text-6xl mb-4">{coach.image}</div>
                  <CardTitle className="text-xl font-heading">{coach.name}</CardTitle>
                  <p className="text-purple-600 font-semibold">{coach.title}</p>
                  <Badge variant="outline" className="mx-auto mt-2">
                    {coach.experience} опыта
                  </Badge>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Специализация:</h4>
                      <p className="text-gray-600 text-sm">{coach.specialization}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Достижения:</h4>
                      <ul className="space-y-1">
                        {coach.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start">
                            <Icon name="CheckCircle" size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">
            Начните путешествие уже сегодня!
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-body opacity-90">
            Запишитесь на бесплатное пробное занятие и оцените качество нашего подхода
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 flex-1">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 flex-1">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span>ул. Спортивная, 25</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>Пн-Вс: 8:00-21:00</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Phone" size={20} />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={16} />
            </div>
            <span className="text-lg font-heading font-bold">Академия Гимнастики</span>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm">© 2024 Академия Гимнастики. Все права защищены.</p>
            <p className="text-xs text-gray-500">Лицензия на образовательную деятельность №12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GymnasticsAcademy;