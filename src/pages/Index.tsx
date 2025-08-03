import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Металлочерепица",
      price: "от 450 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Прочная металлочерепица с полимерным покрытием",
      category: "Кровля"
    },
    {
      id: 2,
      name: "Гибкая черепица",
      price: "от 320 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Битумная черепица премиум класса",
      category: "Кровля"
    },
    {
      id: 3,
      name: "Профнастил",
      price: "от 280 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Оцинкованный профнастил с покрытием",
      category: "Кровля"
    },
    {
      id: 4,
      name: "Сайдинг виниловый",
      price: "от 180 ₽/м²",
      image: "/img/cc65dda3-06b9-4979-8215-195bd5c2a2e2.jpg",
      description: "Долговечный виниловый сайдинг",
      category: "Фасад"
    }
  ];

  const services = [
    {
      title: "Консультация",
      description: "Помощь в выборе материалов",
      icon: "MessageCircle"
    },
    {
      title: "Расчет материалов",
      description: "Точный расчет количества",
      icon: "Calculator"
    },
    {
      title: "Монтаж",
      description: "Профессиональная установка",
      icon: "Wrench"
    }
  ];

  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Система менеджмента качества",
      number: "RU.3456.ИСО.2024"
    },
    {
      name: "ГОСТ 24045-2016",
      description: "Профили стальные листовые",
      number: "RU.СТ.7891.2024"
    },
    {
      name: "ТР ТС 014/2011",
      description: "Безопасность автомобильных дорог",
      number: "ТС.БД.1234.2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" size={32} />
              <h1 className="text-2xl font-bold">КровляСтрой</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="hover:text-gray-300 transition-colors">Каталог</a>
              <a href="#services" className="hover:text-gray-300 transition-colors">Услуги</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">О компании</a>
              <a href="#certificates" className="hover:text-gray-300 transition-colors">Сертификаты</a>
              <a href="#contacts" className="hover:text-gray-300 transition-colors">Контакты</a>
            </nav>
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Кровельные материалы и фасады</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Профессиональные решения для строительства и ремонта. 
            Качественные материалы с гарантией от производителя.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Перейти в каталог
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Каталог продукции</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент кровельных материалов и фасадных систем от ведущих производителей
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Все материалы</TabsTrigger>
              <TabsTrigger value="roof">Кровля</TabsTrigger>
              <TabsTrigger value="facade">Фасад</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                      <CardDescription className="mb-3">{product.description}</CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} className="mr-1" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="roof">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === "Кровля").map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                      <CardDescription className="mb-3">{product.description}</CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Button size="sm">В корзину</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="facade">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.category === "Фасад").map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                      <CardDescription className="mb-3">{product.description}</CardDescription>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Button size="sm">В корзину</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Наши услуги</h3>
            <p className="text-gray-600">Полный комплекс услуг от консультации до монтажа</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name={service.icon as any} size={48} className="mx-auto text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Сертификаты качества</h3>
            <p className="text-gray-600">Вся продукция сертифицирована и соответствует ГОСТ стандартам</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/img/ec048fce-c569-4969-b3e8-9e4b3bbe5eee.jpg" 
                alt="Сертификаты качества"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                        <CardDescription className="mb-2">{cert.description}</CardDescription>
                        <p className="text-sm text-gray-500">№ {cert.number}</p>
                      </div>
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">О компании КровляСтрой</h3>
              <p className="text-gray-600 mb-4">
                Более 15 лет мы занимаемся поставками качественных кровельных материалов 
                и фасадных систем. Работаем напрямую с производителями, что позволяет 
                предлагать лучшие цены на рынке.
              </p>
              <p className="text-gray-600 mb-6">
                Наша команда профессионалов поможет подобрать оптимальное решение 
                для вашего проекта и обеспечит качественный монтаж с гарантией.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Truck" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Доставка по региону</h4>
                      <p className="text-gray-600">Быстрая доставка в день заказа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Гарантия качества</h4>
                      <p className="text-gray-600">До 25 лет гарантии на материалы</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Users" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-semibold">Профессиональная команда</h4>
                      <p className="text-gray-600">Опытные мастера и консультанты</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Телефон</CardTitle>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (800) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Email</CardTitle>
                <p className="text-gray-600">info@krovlya-stroy.ru</p>
                <p className="text-gray-600">sales@krovlya-stroy.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="mb-2">Адрес</CardTitle>
                <p className="text-gray-600">г. Москва, ул. Строительная, 15</p>
                <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} />
                <h4 className="text-xl font-bold">КровляСтрой</h4>
              </div>
              <p className="text-gray-300">
                Надежные кровельные решения для вашего дома
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Металлочерепица</a></li>
                <li><a href="#" className="hover:text-white">Гибкая черепица</a></li>
                <li><a href="#" className="hover:text-white">Профнастил</a></li>
                <li><a href="#" className="hover:text-white">Сайдинг</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Консультация</a></li>
                <li><a href="#" className="hover:text-white">Расчет материалов</a></li>
                <li><a href="#" className="hover:text-white">Монтаж</a></li>
                <li><a href="#" className="hover:text-white">Доставка</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Гарантии</a></li>
                <li><a href="#" className="hover:text-white">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 КровляСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}