import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const SummerGymnasticsCamp = () => {
  const [activeWeek, setActiveWeek] = useState("week1");

  const campSessions = [
    {
      id: "week1",
      dates: "3-7 июня",
      title: "Первые шаги",
      theme: "Знакомство с гимнастикой",
      ages: "5-8 лет",
      color: "from-green-400 to-blue-400",
      activities: ["Игровая гимнастика", "Акробатика для малышей", "Танцевальная разминка", "Творческие мастер-классы"]
    },
    {
      id: "week2", 
      dates: "10-14 июня",
      title: "Юные акробаты",
      theme: "Развитие координации",
      ages: "7-10 лет",
      color: "from-yellow-400 to-orange-400",
      activities: ["Базовая акробатика", "Упражнения на снарядах", "Групповые игры", "Подготовка к мини-соревнованиям"]
    },
    {
      id: "week3",
      dates: "17-21 июня", 
      title: "Мастера движения",
      theme: "Спортивное мастерство",
      ages: "9-14 лет",
      color: "from-purple-400 to-pink-400",
      activities: ["Сложные элементы", "Работа на всех снарядах", "Хореография", "Участие в соревнованиях"]
    }
  ];

  const dailySchedule = [
    { time: "9:00-9:30", activity: "Встреча детей, игры", icon: "Users" },
    { time: "9:30-10:00", activity: "Утренняя разминка", icon: "Zap" },
    { time: "10:00-11:30", activity: "Основная тренировка", icon: "Trophy" },
    { time: "11:30-12:00", activity: "Второй завтрак", icon: "Coffee" },
    { time: "12:00-13:00", activity: "Игры на свежем воздухе", icon: "Sun" },
    { time: "13:00-14:00", activity: "Обед", icon: "UtensilsCrossed" },
    { time: "14:00-15:00", activity: "Тихий час / творчество", icon: "Palette" },
    { time: "15:00-16:00", activity: "Акробатика и растяжка", icon: "Activity" },
    { time: "16:00-16:30", activity: "Полдник", icon: "Apple" },
    { time: "16:30-17:30", activity: "Свободные игры", icon: "GameController2" },
    { time: "17:30-18:00", activity: "Домашние задания", icon: "BookOpen" },
    { time: "18:00", activity: "Встреча с родителями", icon: "Heart" }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Профессиональные тренеры, медсестра, охрана"
    },
    {
      icon: "UtensilsCrossed", 
      title: "4-разовое питание",
      description: "Полноценное меню, учет аллергий"
    },
    {
      icon: "Users",
      title: "Малые группы",
      description: "До 12 детей в группе, индивидуальный подход"
    },
    {
      icon: "Car",
      title: "Трансфер",
      description: "Доставка от дома и обратно"
    },
    {
      icon: "Camera",
      title: "Фото-отчеты",
      description: "Ежедневные фото в родительском чате"
    },
    {
      icon: "Medal",
      title: "Соревнования",
      description: "Еженедельные мини-турниры с наградами"
    }
  ];

  const pricing = [
    {
      title: "Полный день",
      description: "9:00 - 18:00 с питанием",
      price: "4,500₽",
      period: "за день",
      features: ["4-разовое питание", "Все активности", "Трансфер", "Медсопровождение"]
    },
    {
      title: "До обеда",
      description: "9:00 - 14:00 с завтраком",
      price: "2,800₽", 
      period: "за день",
      features: ["2-разовое питание", "Основные тренировки", "Игры на воздухе"]
    },
    {
      title: "Полная смена",
      description: "5 дней подряд",
      price: "20,000₽",
      period: "за неделю",
      features: ["Скидка 15%", "Все включено", "Подарки", "Фотоальбом"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Sun" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900">Летние Сборы</h1>
                <p className="text-xs text-gray-500">Гимнастика • Дневное пребывание</p>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#programs" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Программы</a>
              <a href="#schedule" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Расписание</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Цены</a>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                Записаться в лагерь
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-blue-600/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/img/43881f9e-ef3b-4b2b-937e-d5029638726d.jpg)` }}
        ></div>
        
        <div className="relative container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <Icon name="Sun" size={40} className="text-yellow-300" />
              <Badge className="bg-yellow-400 text-yellow-900 px-4 py-1 text-lg">
                ЛЕТО 2024
              </Badge>
              <Icon name="Sun" size={40} className="text-yellow-300" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Летние сборы по <span className="text-yellow-300">гимнастике</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 font-body">
              Дневное пребывание для детей 5-14 лет с профессиональными тренировками, играми и полноценным питанием
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать смену
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать программу
              </Button>
            </div>
            
            {/* Summer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs text-gray-200">Недели смен</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">9-18</div>
                <div className="text-xs text-gray-200">Часов в день</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-gray-200">Детей в группе</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">4x</div>
                <div className="text-xs text-gray-200">Питание в день</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Полный комплекс услуг для активного и безопасного летнего отдыха
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={benefit.icon as any} className="text-green-600" size={28} />
                </div>
                <h3 className="text-sm font-heading font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 font-body text-xs">{benefit.description}</p>
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
              Программа смен
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Каждая неделя имеет свою тематику и возрастную группу
            </p>
          </div>

          <Tabs value={activeWeek} onValueChange={setActiveWeek} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="week1">1 смена</TabsTrigger>
              <TabsTrigger value="week2">2 смена</TabsTrigger>
              <TabsTrigger value="week3">3 смена</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-3 gap-8">
            {campSessions.map((session, index) => (
              <Card key={session.id} className={`hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${activeWeek === session.id ? 'ring-2 ring-green-500' : ''}`}>
                <div className={`h-3 bg-gradient-to-r ${session.color}`}></div>
                
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mx-auto mb-2 bg-green-100 text-green-800">
                    {session.dates}
                  </Badge>
                  <CardTitle className="text-2xl font-heading text-gray-900 mb-2">
                    {session.title}
                  </CardTitle>
                  <p className="text-green-600 font-semibold">{session.theme}</p>
                  <Badge variant="outline" className="mx-auto mt-2">
                    {session.ages}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Программа смены:</h4>
                      <ul className="space-y-2">
                        {session.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start text-sm text-gray-600">
                            <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button className={`w-full mt-6 bg-gradient-to-r ${session.color} hover:opacity-90 text-white border-0`}>
                    Записаться на смену
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Распорядок дня
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Насыщенная программа с тренировками, играми и отдыхом
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {dailySchedule.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-600">{item.time}</div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Стоимость пребывания
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Гибкие тарифы для разных потребностей семьи
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${index === 2 ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {index === 2 && (
                  <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heading text-gray-900">
                    {plan.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-green-600">
                    {plan.price}
                    <span className="text-sm text-gray-500 font-normal"> {plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full ${index === 2 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Sun" size={48} className="text-yellow-300 mx-auto mb-6" />
            <h2 className="text-4xl font-heading font-bold mb-8">
              Подарите ребенку незабываемое лето!
            </h2>
            <p className="text-xl mb-10 font-body opacity-90">
              Места ограничены! Успейте записаться на летние сборы 2024. Раннее бронирование - скидка 20%
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                WhatsApp консультация
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span>ул. Летняя, 42, спорткомплекс</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Clock" size={20} />
                <span>Запись: Пн-Вс 9:00-19:00</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Icon name="Sun" className="text-white" size={16} />
            </div>
            <span className="text-lg font-heading font-bold">Летние Сборы по Гимнастике</span>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm">© 2024 Летние Сборы. Лицензированный детский лагерь дневного пребывания.</p>
            <p className="text-xs text-gray-500">Лицензия на оздоровительную деятельность №54321</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SummerGymnasticsCamp;